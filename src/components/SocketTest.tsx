import React, { useState } from 'react';
import { useSocket } from '@/context/SocketContext';

/**
 * Socket.IO Test Component
 * Provides manual testing for socket functionality
 */
export const SocketTest: React.FC = () => {
    const { socket, isConnected, connectSocket, disconnectSocket } = useSocket();
    const [testMessage, setTestMessage] = useState('');
    const [testChatId, setTestChatId] = useState('test-chat-123');
    const [receivedMessages, setReceivedMessages] = useState<string[]>([]);

    const handleConnect = () => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            connectSocket(userId);
        } else {
            alert('No user ID found. Please login first.');
        }
    };

    const handleDisconnect = () => {
        disconnectSocket();
    };

    const handleJoinRoom = () => {
        if (socket && isConnected) {
            socket.emit('joinRoom', testChatId);
            console.log('Joined room:', testChatId);
        }
    };

    const handleSendMessage = () => {
        if (socket && isConnected && testMessage.trim()) {
            const messageData = {
                _id: `test-msg-${Date.now()}`,
                chatId: testChatId,
                senderId: localStorage.getItem('userId') || 'test-user',
                text: testMessage,
                createdAt: new Date().toISOString()
            };

            socket.emit('sendMessage', messageData);
            console.log('Sent message:', messageData);
            setTestMessage('');
        }
    };

    // Listen for incoming messages
    React.useEffect(() => {
        if (!socket) return;

        const handleMessage = (message: any) => {
            console.log('Received message via socket:', message);
            setReceivedMessages(prev => [...prev, `${message.senderId}: ${message.text}`]);
        };

        socket.on('getMessage', handleMessage);

        return () => {
            socket.off('getMessage', handleMessage);
        };
    }, [socket]);

    return (
        <div className="fixed top-20 right-4 bg-blue-50 border border-blue-300 rounded-lg p-4 shadow-lg z-50 max-w-xs">
            <h3 className="font-bold text-sm mb-2">🧪 Socket Test</h3>
            
            <div className="space-y-2 text-xs">
                {/* Connection Controls */}
                <div className="flex gap-1">
                    <button 
                        onClick={handleConnect}
                        disabled={isConnected}
                        className="px-2 py-1 bg-green-500 text-white rounded text-xs disabled:bg-gray-300"
                    >
                        Connect
                    </button>
                    <button 
                        onClick={handleDisconnect}
                        disabled={!isConnected}
                        className="px-2 py-1 bg-red-500 text-white rounded text-xs disabled:bg-gray-300"
                    >
                        Disconnect
                    </button>
                </div>

                {/* Room Controls */}
                <div>
                    <input 
                        type="text"
                        value={testChatId}
                        onChange={(e) => setTestChatId(e.target.value)}
                        placeholder="Chat ID"
                        className="w-full px-1 py-1 text-xs border rounded"
                    />
                    <button 
                        onClick={handleJoinRoom}
                        disabled={!isConnected}
                        className="w-full mt-1 px-2 py-1 bg-blue-500 text-white rounded text-xs disabled:bg-gray-300"
                    >
                        Join Room
                    </button>
                </div>

                {/* Message Controls */}
                <div>
                    <input 
                        type="text"
                        value={testMessage}
                        onChange={(e) => setTestMessage(e.target.value)}
                        placeholder="Test message"
                        className="w-full px-1 py-1 text-xs border rounded"
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button 
                        onClick={handleSendMessage}
                        disabled={!isConnected || !testMessage.trim()}
                        className="w-full mt-1 px-2 py-1 bg-purple-500 text-white rounded text-xs disabled:bg-gray-300"
                    >
                        Send Message
                    </button>
                </div>

                {/* Received Messages */}
                {receivedMessages.length > 0 && (
                    <div className="border-t pt-2">
                        <div className="text-xs font-semibold">Received:</div>
                        <div className="max-h-20 overflow-y-auto">
                            {receivedMessages.map((msg, index) => (
                                <div key={index} className="text-xs text-gray-700 truncate">
                                    {msg}
                                </div>
                            ))}
                        </div>
                        <button 
                            onClick={() => setReceivedMessages([])}
                            className="text-xs text-red-500 underline"
                        >
                            Clear
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};