import { useContext, useState } from 'react';
import moment from 'moment';

import { ChatContext, ChatContextType } from '@/context/chatContext';
import { useFetchRecipientsUser } from '@/hooks/useFetchRecipients';

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

    const {
        currentChat,
        messages,
        isMessagesLoading,
        sendTextMessage,
    } = useContext(ChatContext) as ChatContextType

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
        <div className='chat-box'>
            <div className='chat-header'>
                <strong>{recipientUser?.name}</strong>
            </div>
            <div>
                {(messages || []).map((message, index) => (
                    <div
                        key={index}
                        className={`mr-1 ${message?.senderId === user._id
                            ? 'message self align-self-end flex-grow-0'
                            : 'message align-self-start flex-grow-0'
                            }`}
                        style={{
                            color: 'white',
                            marginLeft: '10px',
                            marginBottom: '10px',
                            maxWidth: '30%',
                        }}
                    >
                        <span>{message.text}</span>
                        <span className='message-footer'>
                            {moment(message.createdAt).calendar()}
                        </span>
                    </div>
                ))}
            </div>
            <div className='chat-input flex-grow-0'>
                
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
