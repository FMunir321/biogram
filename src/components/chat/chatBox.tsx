import { useState, useEffect, useRef } from 'react';
import { Input } from '../ui/input';
import { baseUrl } from '@/service/api';
import avatar from '/avatar.svg';
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
    isRecipientOnline?: boolean;
}

export const ChatBox = ({ 
    currentChat, 
    messages, 
    isMessagesLoading, 
    messagesError, 
    sendTextMessage, 
    user,
    isRecipientOnline = false
}: ChatBoxProps) => {
    const { recipientUser, isLoading, error } = useFetchRecipientsUser(currentChat, user);
    const [textMessage, setTextMessage] = useState<string>('');
    const [showScrollButton, setShowScrollButton] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Clear text input when current chat changes
    useEffect(() => {
        setTextMessage('');
    }, [currentChat?._id]);



    // Auto-scroll to bottom when new messages arrive
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Check if user is near bottom of chat
    const isNearBottom = () => {
        const messagesContainer = messagesEndRef.current?.parentElement;
        if (!messagesContainer) return true;
        
        const { scrollTop, scrollHeight, clientHeight } = messagesContainer;
        const threshold = 100; // pixels from bottom
        return scrollHeight - scrollTop - clientHeight < threshold;
    };

    useEffect(() => {
        // Only auto-scroll if user is near bottom or if it's their own message
        if (isNearBottom() || (messages && messages.length > 0 && messages[messages.length - 1]?.senderId === user._id)) {
            scrollToBottom();
            setShowScrollButton(false);
        } else {
            setShowScrollButton(true);
        }
    }, [messages]);

    // Handle scroll events to show/hide scroll button
    useEffect(() => {
        const messagesContainer = messagesEndRef.current?.parentElement;
        if (!messagesContainer) return;

        const handleScroll = () => {
            if (!isNearBottom()) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        messagesContainer.addEventListener('scroll', handleScroll);
        return () => {
            messagesContainer.removeEventListener('scroll', handleScroll);
        };
    }, []);





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
            <div className="px-4 py-3 border-b border-gray-200 bg-white/30 flex items-center gap-2">
                <div className="relative">
                    <img 
                        src={recipientUser?.profileImage ? `${baseUrl}${recipientUser.profileImage}` : avatar} 
                        alt={recipientUser?.username || "User"}
                        className="w-14 h-14 md:w-17 md:h-17 rounded-full object-cover flex-shrink-0 border-2 border-gray-200"
                    />
                    {/* Online Status Indicator in Chat Header */}
                    {isRecipientOnline && (
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-sm"></div>
                    )}
                </div>
                <div className="flex flex-col ml-5">
                    <strong className="text-gray-800 text-lg">{recipientUser?.fullName || recipientUser?.name}</strong>
                    <div className="flex items-center gap-2">
                        <strong className="text-gray-500 text-xs">@{recipientUser?.username}</strong>
                        {isRecipientOnline && (
                            <span className="text-green-500 text-xs font-medium">• Online</span>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-4 space-y-2 relative bg-white/50">
                {/* Scroll to bottom button */}
                {showScrollButton && (
                    <button
                        onClick={scrollToBottom}
                        className="absolute bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                        title="Scroll to bottom"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                        </svg>
                    </button>
                )}
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
                                        ? 'bg-[#D0EBF3] text-black rounded-br-md'
                                        : 'bg-[#E8D5F3] text-black border border-gray-200 rounded-bl-md'
                                    }`}
                            >
                                <p className="whitespace-pre-line">{message.text}</p>
                                
                                                                  {/* shows the time of the message*/}

                                {/* <span className={`text-[10px] block mt-1 text-right ${isOwnMessage ? 'text-gray-500' : 'text-gray-500'}`}> 
                                    {message.createdAt ? new Date(message.createdAt).toLocaleString() : ''}
                                </span> */}
                            </div>
                        </div>
                    );
                })}

                
                {/* Auto-scroll anchor */}
                <div ref={messagesEndRef} />
            </div>
            
            {/* Input */}
            <div className="px-3 py-2 border-t border-gray-400">
                <div className="flex items-center gap-2 rounded-full bg-gray-200 px-3 py-1">
                    <Input
                        type="text"
                        placeholder="Type a message"
                        className="flex-1 bg-transparent border-0 text-sm outline-none"
                        value={textMessage}
                        onChange={(e) => {
                            setTextMessage(e.target.value);
                        }}
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
