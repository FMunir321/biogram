import { useState, useEffect } from 'react';
import moment from 'moment';
import { Input } from '../ui/input';
import { baseUrl } from '@/service/api';
import avatar from '../../../public/avatar.svg';
import { useFetchRecipientsUser } from '@/hooks/useFetchRecipients';

interface Message {
    _id?: string;
    text: string;
    senderId: string;
    createdAt?: string;
}

interface Chat {
    _id: string;
    members: string[];
}

interface User {
    _id: string;
}

interface ChatBoxProps {
    currentChat: Chat | null;
    messages: Message[] | null;
    isMessagesLoading: boolean;
    messagesError: string | null;
    sendTextMessage: (
        textMessage: string,
        sender: User,
        currentChatId: string,
        setTextMessage: (value: string) => void
    ) => Promise<void>;
    user: User;
}

export const ChatBox = ({ 
    currentChat, 
    messages, 
    isMessagesLoading, 
    messagesError, 
    sendTextMessage, 
    user 
}: ChatBoxProps) => {
    const { recipientUser, isLoading, error } = useFetchRecipientsUser(currentChat, user);
    const [textMessage, setTextMessage] = useState<string>('');

    // Clear text input when current chat changes
    useEffect(() => {
        setTextMessage('');
    }, [currentChat?._id]);

    if (!currentChat) {
        return <p style={{ textAlign: 'center', width: '100%' }}>No conversation selected</p>;
    }

    if (isLoading) {
        return <p style={{ textAlign: 'center', width: '100%' }}>Loading recipient...</p>;
    }

    if (error) {
        return <p style={{ textAlign: 'center', width: '100%', color: 'red' }}>Error: {error}</p>;
    }

    if (!recipientUser) {
        return <p style={{ textAlign: 'center', width: '100%' }}>Recipient not found</p>;
    }

    if (isMessagesLoading) {
        return <p style={{ textAlign: 'center', width: '100%' }}>Loading Chat...</p>;
    }

    if (messagesError) {
        return <p style={{ textAlign: 'center', width: '100%', color: 'red' }}>Error: {messagesError}</p>;
    }

    return (
        <div className="flex flex-col h-full w-full rounded-lg shadow-md overflow-hidden">
            {/* Header */}
            <div className="px-4 py-3 border-b border-gray-200 bg-white flex items-center gap-2">
                <img 
                    src={recipientUser?.profileImage ? `${baseUrl}${recipientUser.profileImage}` : avatar} 
                    alt={recipientUser?.username || "User"}
                    className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0 border-2 border-gray-200"
                />
                <strong className="text-gray-800 text-base">{recipientUser?.username}</strong>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
                {(messages || []).map((message, index) => {
                    const isOwnMessage = message?.senderId === user._id;
                    return (
                        <div
                            key={index}
                            className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[60%] px-4 py-2 rounded-2xl shadow-sm break-words
                                    ${isOwnMessage
                                        ? 'bg-green-500 text-white rounded-br-md'
                                        : 'bg-white text-gray-900 border border-gray-200 rounded-bl-md'
                                    }`}
                            >
                                <p className="whitespace-pre-line">{message.text}</p>
                                <span className={`text-[10px] block mt-1 text-right ${isOwnMessage ? 'text-green-100' : 'text-gray-400'}`}> 
                                    {message.createdAt ? moment(message.createdAt).calendar() : ''}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            {/* Input */}
            <div className="px-3 py-2 border-t border-gray-400">
                <div className="flex items-center gap-2 rounded-full bg-gray-200 px-3 py-1">
                    <Input
                        type="text"
                        placeholder="Type a message"
                        className="flex-1 bg-transparent border-0 text-sm outline-none"
                        value={textMessage}
                        onChange={(e) => setTextMessage(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                sendTextMessage(textMessage, user, currentChat._id, setTextMessage);
                            }
                        }}
                    />
                    <button
                        className="p-2 rounded-full bg-green-500 hover:bg-green-600 text-white transition"
                        onClick={() => sendTextMessage(textMessage, user, currentChat._id, setTextMessage)}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            className='bi bi-send-fill'
                            viewBox='0 0 16 16'
                        >
                            <path d='M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z' />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
