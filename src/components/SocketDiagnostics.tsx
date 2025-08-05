import React from 'react';
import { useSocket } from '@/context/SocketContext';

/**
 * Socket.IO Diagnostics Component
 * Shows real-time connection status and online users
 * Remove this component after testing
 */
export const SocketDiagnostics: React.FC = () => {
    const { socket, onlineUsers, isConnected } = useSocket();

    return (
        <div className="fixed top-4 right-4 bg-white border border-gray-300 rounded-lg p-4 shadow-lg z-50 max-w-xs">
            <h3 className="font-bold text-sm mb-2">🔌 Socket Status</h3>
            
            <div className="space-y-1 text-xs">
                <div className={`flex items-center gap-2 ${isConnected ? 'text-green-600' : 'text-red-600'}`}>
                    <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span>{isConnected ? 'Connected' : 'Disconnected'}</span>
                </div>
                
                <div className="text-gray-600">
                    Socket ID: {socket?.id ? socket.id.substring(0, 8) + '...' : 'None'}
                </div>
                
                <div className="text-gray-600">
                    Online Users: {onlineUsers.length}
                </div>
                
                {onlineUsers.length > 0 && (
                    <div className="mt-2">
                        <div className="text-gray-500 text-xs">Users Online:</div>
                        <div className="max-h-20 overflow-y-auto">
                            {onlineUsers.map((userId, index) => (
                                <div key={index} className="text-xs text-gray-700">
                                    • {userId.substring(0, 8)}...
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};