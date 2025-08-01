import { WebSocketServer } from 'ws';
import http from 'http';
import { URL } from 'url';

// Create HTTP server
const server = http.createServer();

// Create WebSocket server
const wss = new WebSocketServer({ server });

// Store connected clients
const clients = new Map();
const chatRooms = new Map();

// Authentication middleware
const authenticateConnection = (info) => {
  const url = new URL(info.url, `http://localhost`);
  const token = url.searchParams.get('token');
  const userId = url.searchParams.get('userId');
  
  // In a real application, you would verify the token here
  // For now, we'll just check if token and userId exist
  if (!token || !userId) {
    return false;
  }
  
  return { token, userId };
};

// Handle WebSocket connections
wss.on('connection', (ws, req) => {
  const auth = authenticateConnection(req);
  if (!auth) {
    ws.close(1008, 'Authentication failed');
    return;
  }

  const { userId } = auth;
  
  console.log(`Client connected: ${userId}`);
  
  // Store client connection
  clients.set(userId, ws);
  
  // Send connection confirmation
  ws.send(JSON.stringify({
    type: 'connect',
    data: { userId, message: 'Connected successfully' }
  }));

  // Handle incoming messages
  ws.on('message', (data) => {
    try {
      const message = JSON.parse(data);
      console.log('Received message:', message);
      
      switch (message.type) {
        case 'message':
          handleChatMessage(ws, message.data);
          break;
        case 'typing':
          handleTypingIndicator(ws, message.data);
          break;
        case 'read':
          handleReadReceipt(ws, message.data);
          break;
        default:
          console.log('Unknown message type:', message.type);
      }
    } catch (error) {
      console.error('Error parsing message:', error);
    }
  });

  // Handle client disconnection
  ws.on('close', (code, reason) => {
    console.log(`Client disconnected: ${userId} (${code}: ${reason})`);
    clients.delete(userId);
  });

  ws.on('error', (error) => {
    console.error(`WebSocket error for ${userId}:`, error);
    clients.delete(userId);
  });
});

// Handle chat messages
const handleChatMessage = (ws, data) => {
  const { chatId, senderId, text } = data;
  
  if (!chatId || !senderId || !text) {
    console.error('Invalid message data:', data);
    return;
  }

  // Create message object
  const message = {
    _id: Date.now().toString(),
    chatId,
    senderId,
    text,
    createdAt: new Date().toISOString()
  };

  // Store message in chat room
  if (!chatRooms.has(chatId)) {
    chatRooms.set(chatId, []);
  }
  chatRooms.get(chatId).push(message);

  // Broadcast message to all clients in the chat
  broadcastToChat(chatId, {
    type: 'message',
    data: { message }
  });
};

// Handle typing indicators
const handleTypingIndicator = (ws, data) => {
  const { chatId, senderId } = data;
  
  if (!chatId || !senderId) {
    console.error('Invalid typing data:', data);
    return;
  }

  // Broadcast typing indicator to other users in the chat (exclude the sender)
  broadcastToChat(chatId, {
    type: 'typing',
    data: { chatId, senderId }
  }, senderId); // Exclude the sender from receiving their own typing indicator
};

// Handle read receipts
const handleReadReceipt = (ws, data) => {
  const { chatId, userId } = data;
  
  if (!chatId || !userId) {
    console.error('Invalid read receipt data:', data);
    return;
  }

  // Broadcast read receipt to other users in the chat
  broadcastToChat(chatId, {
    type: 'read',
    data: { chatId, userId }
  }, userId); // Exclude the user who read
};

// Broadcast message to all clients in a chat room
const broadcastToChat = (chatId, message, excludeUserId = null) => {
  clients.forEach((client, userId) => {
    if (client.readyState === 1 && userId !== excludeUserId) { // WebSocket.OPEN = 1
      // In a real application, you would check if the user is a member of the chat
      // For now, we'll broadcast to all connected clients
      client.send(JSON.stringify(message));
    }
  });
};

// Start server
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`WebSocket server is running on port ${PORT}`);
  console.log(`WebSocket URL: ws://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down WebSocket server...');
  wss.close(() => {
    server.close(() => {
      console.log('WebSocket server closed');
      process.exit(0);
    });
  });
});

export { wss, clients, chatRooms }; 