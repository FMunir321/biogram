import { useContext, useState } from 'react';
import moment from 'moment';

import { ChatContext, ChatContextType } from '@/context/chatContext';
import { useFetchRecipientsUser } from '@/hooks/useFetchRecipients';
import { Input } from '../ui/input';

interface Message {
    _id?: string;
    text: string;
    senderId: string;
    createdAt: string;
}

interface Chat {
    _id: string;
    members: string[];
}

interface user {
    _id: string;
}


export const ChatBox = () => {
    // Get user ID from localStorage and wrap it into a user object
    const userId = localStorage.getItem('userId') || '';
    const user: user = { _id: userId };

    const { currentChat, messages, isMessagesLoading, sendTextMessage } = useContext(ChatContext) as ChatContextType

    const { recipientUser, isLoading, error } = useFetchRecipientsUser(currentChat, user);
    const [textMessage, setTextMessage] = useState<string>('');

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

    return (
        <div className=''>
            <div className=''>
                <strong>{recipientUser?.username}</strong>
            </div>
            <div className="flex flex-col gap-2">
                {(messages || []).map((message, index) => {
                    const isOwnMessage = message?.senderId === user._id;
                    return (
                        <div
                            key={index}
                            className={`max-w-[100%] p-2 rounded-xl text-sm ${isOwnMessage
                                    ? 'bg-blue-500 text-white ml-auto'
                                    : 'bg-gray-200 text-black mr-auto'
                                }`}
                        >
                            <p className="break-words">{message.text}</p>
                            <span className="text-[10px] block mt-1 text-right text-gray-300">
                                {moment(message.createdAt).calendar()}
                            </span>
                        </div>
                    );
                })}
            </div>
            <div className="flex !border-[#6fb793] border-1 gap-2 w-full  rounded-full bg-white text-black text-[12px] ">
                <Input
                    type="text"
                    placeholder="Send Message"
                    className=" text-[12px]  border-0 focus:border-0 focus:ring-0 focus-visible:ring-0 outline-none shadow-none"
                    value={textMessage} onChange={(e) => setTextMessage(e.target.value)}
                />
                <button
                    className='send-btn'
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
    );
};
