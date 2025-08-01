// Simple test script to verify WebSocket functionality
import { WebSocket } from 'ws';

// Test WebSocket connection
const ws = new WebSocket('ws://localhost:3001?token=test-token&userId=test-user-1');

ws.on('open', () => {
  console.log('Connected to WebSocket server');
  
  // Test typing indicator
  const typingMessage = {
    type: 'typing',
    data: {
      chatId: 'test-chat-123',
      senderId: 'test-user-1'
    }
  };
  
  console.log('Sending typing indicator:', typingMessage);
  ws.send(JSON.stringify(typingMessage));
  
  // Test chat message
  setTimeout(() => {
    const chatMessage = {
      type: 'message',
      data: {
        chatId: 'test-chat-123',
        senderId: 'test-user-1',
        text: 'Hello, this is a test message!'
      }
    };
    
    console.log('Sending chat message:', chatMessage);
    ws.send(JSON.stringify(chatMessage));
  }, 2000);
});

ws.on('message', (data) => {
  const message = JSON.parse(data);
  console.log('Received message:', message);
});

ws.on('error', (error) => {
  console.error('WebSocket error:', error);
});

ws.on('close', () => {
  console.log('WebSocket connection closed');
});

// Close connection after 5 seconds
setTimeout(() => {
  ws.close();
  process.exit(0);
}, 5000); 