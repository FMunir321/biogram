# WebSocket Setup for Biogram Messaging

This document explains how to set up and run the WebSocket server for real-time messaging in the Biogram application.

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## Setup Instructions

### 1. Install WebSocket Server Dependencies

```bash
# Navigate to your project directory
cd /path/to/biogram

# Install WebSocket server dependencies
npm install ws nodemon
```

### 2. Start the WebSocket Server

```bash
# Start the WebSocket server on port 3001
node websocket-server.js
```

Or for development with auto-restart:

```bash
# Install nodemon globally if you haven't already
npm install -g nodemon

# Start with nodemon for auto-restart on file changes
nodemon websocket-server.js
```

### 3. Verify Server is Running

You should see output like:
```
WebSocket server is running on port 3001
WebSocket URL: ws://localhost:3001
```

## Features Implemented

### Real-time Messaging
- Instant message delivery between users
- Message persistence in chat rooms
- Automatic reconnection on connection loss

### Typing Indicators
- Real-time typing indicators
- Automatic timeout after 3 seconds of inactivity

### Connection Status
- Visual connection status indicator in the UI
- Automatic reconnection attempts
- Connection error handling

### Message Types Supported
- `message`: Send and receive chat messages
- `typing`: Send typing indicators
- `read`: Send read receipts
- `connect`: Connection confirmation
- `disconnect`: Disconnection notification

## Integration with Frontend

The WebSocket functionality is integrated into the following components:

1. **MessagesPage.tsx**: Main messaging page with WebSocket connection
2. **ChatBox.tsx**: Chat interface with real-time message updates
3. **websocket.ts**: WebSocket service for connection management

## Configuration

### WebSocket Server Configuration

The server runs on `ws://localhost:3001` by default. To change the port, modify the `PORT` constant in `websocket-server.js`.

### Frontend Configuration

The frontend automatically connects to the WebSocket server when the Messages page is opened. The connection URL is configured in `src/service/websocket.ts`.

## Testing

1. Start the WebSocket server
2. Open the Biogram application
3. Navigate to the Messages page
4. You should see a green "Connected" indicator
5. Try sending messages between different users

## Troubleshooting

### Connection Issues
- Ensure the WebSocket server is running on port 3001
- Check that your firewall allows connections to port 3001
- Verify that the token and userId are available in localStorage

### Message Not Sending
- Check the browser console for WebSocket errors
- Verify that the user is authenticated
- Ensure the chatId and senderId are valid

### Performance Issues
- The server currently broadcasts to all connected clients
- In production, implement proper chat room membership checking
- Consider implementing message queuing for offline users

## Production Considerations

1. **Security**: Implement proper JWT token verification
2. **Scalability**: Use Redis for session management and message queuing
3. **Persistence**: Integrate with your database for message storage
4. **Load Balancing**: Use multiple WebSocket servers with sticky sessions
5. **Monitoring**: Add logging and monitoring for production deployment

## API Reference

### WebSocket Message Format

```typescript
interface WebSocketMessage {
  type: 'message' | 'typing' | 'read' | 'connect' | 'disconnect';
  data: {
    chatId?: string;
    senderId?: string;
    text?: string;
    message?: any;
    userId?: string;
  };
}
```

### Connection URL Format

```
ws://localhost:3001?token=<jwt_token>&userId=<user_id>
```

### Message Examples

**Send a message:**
```json
{
  "type": "message",
  "data": {
    "chatId": "chat123",
    "senderId": "user456",
    "text": "Hello, world!"
  }
}
```

**Send typing indicator:**
```json
{
  "type": "typing",
  "data": {
    "chatId": "chat123",
    "senderId": "user456"
  }
}
```

**Send read receipt:**
```json
{
  "type": "read",
  "data": {
    "chatId": "chat123",
    "userId": "user456"
  }
}
``` 