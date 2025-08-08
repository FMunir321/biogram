import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { io, Socket } from 'socket.io-client';

interface SocketContextType {
    socket: Socket | null;
    onlineUsers: string[];
    isConnected: boolean;
    connectSocket: (userId: string) => void;
    disconnectSocket: () => void;
    joinRoom: (chatId: string) => void;
    leaveRoom: (chatId: string) => void;
    sendMessage: (messageData: MessageData) => void;
    sendTyping: (chatId: string, userId: string, isTyping: boolean) => void;
}

interface MessageData {
    _id?: string;
    chatId: string;
    senderId: string;
    text: string;
    createdAt?: string;
}

interface SocketProviderProps {
    children: ReactNode;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

// Get the base URL for socket connection
const getSocketURL = () => {
    if (typeof window !== 'undefined') {
        if (window.location.hostname === 'localhost') {
            return 'http://localhost:5000';
        }
        // Add your production URL here
        return 'http://3.111.146.115:5000';
    }
    return 'http://localhost:5000';
};

// Singleton socket instance to prevent multiple connections
let globalSocket: Socket | null = null;
let connectionInProgress = false;

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
    const [socket, setSocket] = useState<Socket | null>(globalSocket);
    const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
    const [isConnected, setIsConnected] = useState(false);

    const connectSocket = (userId: string) => {
        // Check singleton instance first
        if (globalSocket && globalSocket.connected) {
            console.log('🔄 Using existing global socket:', globalSocket.id);
            setSocket(globalSocket);
            setIsConnected(true);
            return;
        }

        if (connectionInProgress) {
            console.log('⏳ Connection already in progress, skipping...');
            return;
        }

        if (!userId || userId.trim() === '') {
            console.error('❌ Cannot connect socket: Invalid user ID');
            return;
        }

        connectionInProgress = true;
        const socketURL = getSocketURL();
        console.log('=== 🚀 SOCKET CONNECTION ATTEMPT ===');
        console.log('User ID:', userId);
        console.log('Socket URL:', socketURL);
        console.log('Global socket state:', globalSocket ? 'exists' : 'null');
        console.log('Connection in progress:', connectionInProgress);
        
        // Create new socket instance
        const newSocket = io(socketURL, {
            transports: ['polling', 'websocket'],
            reconnection: false,
            timeout: 20000,
            forceNew: false, // Don't force new connection if one exists
            autoConnect: true,
            upgrade: true,
            rememberUpgrade: false
        });

        // Set global reference immediately
        globalSocket = newSocket;

        newSocket.on('connect', () => {
            console.log('✅ Socket connected successfully!');
            console.log('Socket ID:', newSocket.id);
            console.log('Transport:', newSocket.io.engine.transport.name);
            console.log('Adding user to online list:', userId);
            
            connectionInProgress = false;
            setIsConnected(true);
            setSocket(newSocket);
            newSocket.emit('addNewUser', userId);
        });

        newSocket.on('disconnect', (reason) => {
            console.log('❌ Socket disconnected. Reason:', reason);
            console.log('Disconnect details:', {
                reason: reason,
                connected: newSocket.connected,
                id: newSocket.id
            });
            
            connectionInProgress = false;
            setIsConnected(false);
            
            // Clear global reference if this socket disconnects
            if (globalSocket === newSocket) {
                globalSocket = null;
            }
        });

        newSocket.on('connect_error', (error) => {
            console.error('❌ Socket connection error:', error);
            console.error('Error details:', {
                message: error.message
            });
            
            connectionInProgress = false;
            setIsConnected(false);
            
            // Clear global reference on error
            if (globalSocket === newSocket) {
                globalSocket = null;
            }
        });

        // Add more debugging events
        newSocket.on('reconnect', (attemptNumber) => {
            console.log('🔄 Socket reconnected after', attemptNumber, 'attempts');
        });

        newSocket.on('reconnect_attempt', (attemptNumber) => {
            console.log('🔄 Socket reconnection attempt:', attemptNumber);
        });

        newSocket.on('reconnect_error', (error) => {
            console.error('❌ Socket reconnection error:', error);
        });

        newSocket.on('reconnect_failed', () => {
            console.error('❌ Socket reconnection failed');
        });

        // Transport debugging
        newSocket.io.on('error', (error) => {
            console.error('❌ Socket.IO error:', error);
        });

        newSocket.io.engine.on('upgradeError', (error) => {
            console.error('❌ Socket upgrade error:', error);
        });

        newSocket.on('getOnlineUsers', (users: string[]) => {
            console.log('Online users updated:', users);
            setOnlineUsers(users);
        });

        // Socket will be set in the 'connect' event handler
    };

    const disconnectSocket = () => {
        if (globalSocket) {
            console.log('🔌 Manually disconnecting global socket:', globalSocket.id);
            globalSocket.removeAllListeners();
            globalSocket.disconnect();
            globalSocket = null;
            connectionInProgress = false;
        }
        
        if (socket) {
            console.log('🔌 Cleaning up local socket reference');
        }
        
        setSocket(null);
        setIsConnected(false);
        setOnlineUsers([]);
    };

    const joinRoom = (chatId: string) => {
        if (socket && isConnected) {
            console.log('Joining room:', chatId);
            socket.emit('joinRoom', chatId);
        } else {
            console.warn('Socket not connected, cannot join room');
        }
    };

    const leaveRoom = (chatId: string) => {
        if (socket && isConnected) {
            console.log('Leaving room:', chatId);
            socket.emit('leaveRoom', chatId);
        }
    };

    const sendMessage = (messageData: MessageData) => {
        if (socket && isConnected) {
            console.log('Sending message via socket:', messageData);
            socket.emit('sendMessage', messageData);
        } else {
            console.warn('Socket not connected, cannot send message');
        }
    };

    const sendTyping = (chatId: string, userId: string, isTyping: boolean) => {
        if (socket && isConnected) {
            socket.emit('typing', { chatId, userId, isTyping });
        }
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            disconnectSocket();
        };
    }, []);

    const contextValue: SocketContextType = {
        socket,
        onlineUsers,
        isConnected,
        connectSocket,
        disconnectSocket,
        joinRoom,
        leaveRoom,
        sendMessage,
        sendTyping,
    };

    return (
        <SocketContext.Provider value={contextValue}>
            {children}
        </SocketContext.Provider>
    );
};

// Custom hook to use socket context
export const useSocket = (): SocketContextType => {
    const context = useContext(SocketContext);
    if (context === undefined) {
        throw new Error('useSocket must be used within a SocketProvider');
    }
    return context;
};

export default SocketContext;