import React, { createContext, useCallback, useState, useEffect, ReactNode } from "react";
import { baseUrl, getRequest, postRequest } from "../service/api";
import { io, Socket } from "socket.io-client";

// =================== Interfaces ===================

interface User {
    _id: string;
    name: string;
    [key: string]: any;
}

interface Message {
    _id?: string;
    chatId: string;
    senderId: string;
    text: string;
    createdAt?: string;
    [key: string]: any;
}

interface Chat {
    _id: string;
    members: string[];
    [key: string]: any;
}

export interface ChatContextType {
    userChats: Chat[] | null;
    isUserChatsLoading: boolean;
    userChatsError: string | null;
    potentialChats: User[];
    createChat: (firstId: string, secondId: string) => Promise<void>;
    updateCurrentChat: (chat: Chat) => void;
    currentChat: Chat | null;
    messages: Message[] | null;
    isMessagesLoading: boolean;
    messagesError: string | null;
    sendTextMessage: (
        textMessage: string,
        sender: User,
        currentChatId: string,
        setTextMessage: (value: string) => void
    ) => void;
}

interface ChatContextProviderProps {
    children: ReactNode;
    user: User;
}

// =================== Context ===================

export const ChatContext = createContext<ChatContextType>({} as ChatContextType);

export const ChatContextProvider: React.FC<ChatContextProviderProps> = ({ children, user }) => {
    const [userChats, setUserChats] = useState<Chat[] | null>(null);
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    const [userChatsError, setUserChatsError] = useState<string | null>(null);
    const [potentialChats, setPotentialChats] = useState<User[]>([]);
    const [currentChat, setCurrentChat] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<Message[] | null>(null);
    const [isMessagesLoading, setIsMessagesloading] = useState(false);
    const [messagesError, setMesssagesError] = useState<string | null>(null);
    const [sendTextMessageError, setSendTextMessageError] = useState<string | null>(null);
    const [newMessage, setNewMessage] = useState<Message | null>(null);
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io("http://localhost:300");
        setSocket(newSocket);
        return () => {
            newSocket.disconnect();
        };
    }, [user]);

    useEffect(() => {
        const getUsers = async () => {
            const response = await getRequest(`${baseUrl}/users`);
            if ((response as any).error) {
                console.error("Error fetching users:", response);
                return;
            }
            const users = response as User[];

            const pChats = users.filter((u) => {
                if (user._id === u._id) return false;

                let isChatCreated = false;
                if (userChats) {
                    isChatCreated = userChats.some(chat => chat.members.includes(u._id));
                }

                return !isChatCreated;
            });

            setPotentialChats(pChats);
        };

        getUsers();
    }, [user, userChats]);

    useEffect(() => {
        const getUserChats = async () => {
            if (user?._id) {
                setIsUserChatsLoading(true);
                setUserChatsError(null);

                const response = await getRequest(`${baseUrl}/chats/${user._id}`);
                if ((response as any).error) {
                    setUserChatsError((response as any).message);
                } else {
                    setUserChats(response as Chat[]);
                }

                setIsUserChatsLoading(false);
            }
        };

        getUserChats();
    }, [user]);

    useEffect(() => {
        const getMessages = async () => {
            if (!currentChat?._id) return;
            setIsMessagesloading(true);
            setMesssagesError(null);

            const response = await getRequest(`${baseUrl}/messages/${currentChat._id}`);

            if ((response as any).error) {
                setMesssagesError((response as any).message);
            } else {
                setMessages(response as Message[]);
            }

            setIsMessagesloading(false);
        };

        getMessages();
    }, [currentChat]);

    const sendTextMessage = useCallback(
        async (
            textMessage: string,
            sender: User,
            currentChatId: string,
            setTextMessage: (value: string) => void
        ) => {
            if (!textMessage) return console.log("You must type something");

            const response = await postRequest(
                `${baseUrl}/messages`,
                JSON.stringify({
                    chatId: currentChatId,
                    senderId: sender._id,
                    text: textMessage,
                })
            );

            if ((response as any).error) {
                setSendTextMessageError((response as any).message);
                return;
            }

            const message = response as Message;
            setNewMessage(message);
            setMessages((prev) => (prev ? [...prev, message] : [message]));
            setTextMessage("");
        },
        []
    );

    const updateCurrentChat = useCallback((chat: Chat) => {
        setCurrentChat(chat);
    }, []);

    const createChat = useCallback(async (firstId: string, secondId: string) => {
        const response = await postRequest(
            `${baseUrl}/chats`,
            JSON.stringify({ firstId, secondId })
        );

        if ((response as any).error) {
            console.log("Error creating chat", response);
            return;
        }

        setUserChats((prev) => (prev ? [...prev, response as Chat] : [response as Chat]));
    }, []);

    return (
        <ChatContext.Provider
            value={{
                userChats,
                isUserChatsLoading,
                userChatsError,
                potentialChats,
                createChat,
                updateCurrentChat,
                currentChat,
                messages,
                isMessagesLoading,
                messagesError,
                sendTextMessage,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};
