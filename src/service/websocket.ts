import Cookies from 'js-cookie';

export interface WebSocketMessage {
  type: 'message' | 'typing' | 'read' | 'connect' | 'disconnect';
  data: {
    chatId?: string;
    senderId?: string;
    text?: string;
    message?: unknown;
    userId?: string;
  };
}

class WebSocketService {
  private socket: WebSocket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectInterval = 3000;
  private isConnecting = false;
  private messageHandlers: Map<string, (message: WebSocketMessage) => void> = new Map();
  private connectionHandlers: Map<string, (connected: boolean) => void> = new Map();

  constructor() {
    // Don't auto-connect in constructor, let components control when to connect
  }

  private getToken(): string | null {
    return Cookies.get('token') || null;
  }

  private getUserId(): string | null {
    return localStorage.getItem('userId') || null;
  }

  public connect(): void {
    if (this.isConnecting || this.socket?.readyState === WebSocket.OPEN) {
      console.log('WebSocket: Already connecting or connected');
      return;
    }

    this.isConnecting = true;
    const token = this.getToken();
    const userId = this.getUserId();

    if (!token || !userId) {
      console.error('WebSocket: No token or userId available');
      this.isConnecting = false;
      return;
    }

    const wsUrl = `ws://localhost:3001?token=${token}&userId=${userId}`;
    console.log('WebSocket: Attempting to connect to:', wsUrl);

    try {
      this.socket = new WebSocket(wsUrl);

      this.socket.onopen = () => {
        console.log('WebSocket: Connection established successfully');
        console.log('WebSocket: Ready state:', this.socket?.readyState);
        console.log('WebSocket: URL:', this.socket?.url);
        this.isConnecting = false;
        this.reconnectAttempts = 0;
        this.notifyConnectionHandlers(true);
      };

      this.socket.onmessage = (event) => {
        try {
          const message: WebSocketMessage = JSON.parse(event.data);
          this.handleMessage(message);
        } catch (error) {
          console.error('WebSocket: Error parsing message:', error);
        }
      };

      this.socket.onclose = (event) => {
        console.log('WebSocket disconnected:', event.code, event.reason);
        this.isConnecting = false;
        this.notifyConnectionHandlers(false);
        
        if (event.code !== 1000) { // Not a normal closure
          this.attemptReconnect();
        }
      };

      this.socket.onerror = (error) => {
        console.error('WebSocket error:', error);
        this.isConnecting = false;
      };
    } catch (error) {
      console.error('WebSocket: Connection error:', error);
      this.isConnecting = false;
      this.attemptReconnect();
    }
  }

  private attemptReconnect(): void {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('WebSocket: Max reconnection attempts reached');
      return;
    }

    this.reconnectAttempts++;
    console.log(`WebSocket: Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
    
    setTimeout(() => {
      this.connect();
    }, this.reconnectInterval * this.reconnectAttempts);
  }

  private handleMessage(message: WebSocketMessage): void {
    console.log('WebSocket received message:', message);
    
    // Notify all message handlers
    this.messageHandlers.forEach((handler) => {
      try {
        handler(message);
      } catch (error) {
        console.error('WebSocket: Error in message handler:', error);
      }
    });
  }

  private notifyConnectionHandlers(connected: boolean): void {
    this.connectionHandlers.forEach((handler) => {
      try {
        handler(connected);
      } catch (error) {
        console.error('WebSocket: Error in connection handler:', error);
      }
    });
  }

  public sendMessage(message: WebSocketMessage): void {
    const isConnected = this.socket?.readyState === WebSocket.OPEN;
    console.log('WebSocket sendMessage:', {
      messageType: message.type,
      isConnected,
      readyState: this.socket?.readyState
    });
    
    if (isConnected && this.socket) {
      this.socket.send(JSON.stringify(message));
    } else {
      console.error('WebSocket: Cannot send message, socket not connected');
    }
  }

  public sendChatMessage(chatId: string, senderId: string, text: string): void {
    this.sendMessage({
      type: 'message',
      data: {
        chatId,
        senderId,
        text
      }
    });
  }

  public sendTyping(chatId: string, senderId: string): void {
    this.sendMessage({
      type: 'typing',
      data: {
        chatId,
        senderId
      }
    });
  }

  public sendReadReceipt(chatId: string, userId: string): void {
    this.sendMessage({
      type: 'read',
      data: {
        chatId,
        userId
      }
    });
  }

  public onMessage(handler: (message: WebSocketMessage) => void): string {
    const id = Math.random().toString(36).substr(2, 9);
    this.messageHandlers.set(id, handler);
    return id;
  }

  public onConnectionChange(handler: (connected: boolean) => void): string {
    const id = Math.random().toString(36).substr(2, 9);
    this.connectionHandlers.set(id, handler);
    return id;
  }

  public removeMessageHandler(id: string): void {
    this.messageHandlers.delete(id);
  }

  public removeConnectionHandler(id: string): void {
    this.connectionHandlers.delete(id);
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.close(1000, 'Client disconnect');
      this.socket = null;
    }
    this.messageHandlers.clear();
    this.connectionHandlers.clear();
  }

  public isConnected(): boolean {
    const readyState = this.socket?.readyState;
    const connected = readyState === WebSocket.OPEN;
    console.log('WebSocket connection check:', {
      readyState,
      connected,
      socketExists: !!this.socket,
      url: this.socket?.url
    });
    return connected;
  }

  public getConnectionInfo(): { connected: boolean; readyState: number | undefined; url: string | undefined } {
    return {
      connected: this.isConnected(),
      readyState: this.socket?.readyState,
      url: this.socket?.url
    };
  }
}

// Create a singleton instance
const websocketService = new WebSocketService();

export default websocketService; 