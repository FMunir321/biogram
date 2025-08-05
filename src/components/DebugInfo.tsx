import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

/**
 * Debug component to check user authentication and backend connectivity
 */
export const DebugInfo: React.FC = () => {
    const [authStatus, setAuthStatus] = useState<{
        userId: string | null;
        token: string | null;
        backendReachable: boolean;
    }>({
        userId: null,
        token: null,
        backendReachable: false
    });

    const createTestUser = () => {
        const testUserId = 'test-user-' + Date.now();
        localStorage.setItem('userId', testUserId);
        localStorage.setItem('token', 'test-token-123');
        window.location.reload(); // Reload to trigger socket connection
    };

    useEffect(() => {
        // Check authentication status
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token') || Cookies.get('token');
        
        // Check backend connectivity
        const checkBackend = async () => {
            try {
                const response = await fetch('http://localhost:5000/api');
                const backendReachable = response.ok;
                setAuthStatus({ userId, token, backendReachable });
            } catch (error) {
                console.error('Backend connectivity check failed:', error);
                setAuthStatus({ userId, token, backendReachable: false });
            }
        };

        checkBackend();
    }, []);

    return (
        <div className="fixed bottom-4 right-4 bg-yellow-100 border border-yellow-300 rounded-lg p-4 shadow-lg z-50 max-w-sm">
            <h3 className="font-bold text-sm mb-2">🐛 Debug Info</h3>
            
            <div className="space-y-1 text-xs">
                <div className={`flex items-center gap-2 ${authStatus.userId ? 'text-green-600' : 'text-red-600'}`}>
                    <div className={`w-2 h-2 rounded-full ${authStatus.userId ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span>User ID: {authStatus.userId ? `${authStatus.userId.substring(0, 8)}...` : 'Not Found'}</span>
                </div>
                
                <div className={`flex items-center gap-2 ${authStatus.token ? 'text-green-600' : 'text-red-600'}`}>
                    <div className={`w-2 h-2 rounded-full ${authStatus.token ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span>Token: {authStatus.token ? 'Present' : 'Missing'}</span>
                </div>
                
                <div className={`flex items-center gap-2 ${authStatus.backendReachable ? 'text-green-600' : 'text-red-600'}`}>
                    <div className={`w-2 h-2 rounded-full ${authStatus.backendReachable ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span>Backend: {authStatus.backendReachable ? 'Reachable' : 'Unreachable'}</span>
                </div>
            </div>
            
            {!authStatus.userId && (
                <div className="mt-2 p-2 bg-red-50 rounded text-xs">
                    <div>⚠️ User not logged in! Please login first.</div>
                    <button 
                        onClick={createTestUser}
                        className="mt-1 px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600"
                    >
                        Create Test User
                    </button>
                </div>
            )}
            
            {!authStatus.backendReachable && (
                <div className="mt-2 p-2 bg-red-50 rounded text-xs">
                    ⚠️ Backend server not running on localhost:5000
                </div>
            )}
        </div>
    );
};