import { createContext, useCallback } from "react";
import { baseUrl, getRequest, postRequest } from "../utils/services";
import { useState } from "react";
import { useEffect } from "react";
import { io } from "socket.io-client";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
    const [userChats, setUserChats] = useState(null);
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    const [userChatsError, setUserChatsError] = useState(null);
    const [potentialChats, setPotentialChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null)
    const [messages, setMessages] = useState(null)
    const [isMessagesLoading, setIsMessagesloading] = useState(false)
    const [messagesError, setMesssagesError] = useState(null)
    const [sendTextMessageError, setSendTextMessageError] = useState(null)
    const [newMessage, setNewMessage] = useState(null)
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        const newSocket = io("http://localhost:300");
        setSocket(newSocket);

        return () => {
            newSocket.disconnect()
        }
    }, [user])

    useEffect(() => {
        const getUsers = async () => {
            const response = await getRequest(`${baseUrl}/users`);
            if (response.error) {
                return console.error("Error fetching users:", response);
            }

            const pChats = response.filter((u) => {

                let isChatCreated = false;

                if (user._id === u._id) {
                    console.log("skippin current user:", u.name)
                    return false
                };

                if (userChats) {
                    isChatCreated = userChats?.some(chat => {
                        return chat.members.includes(u._id)
                    });
                }
                return !isChatCreated;
            });

            setPotentialChats(pChats);

        }
        getUsers();
    }, [user, userChats]);


    useEffect(() => {
        const getUserChats = async () => {
            if (user?._id) {
                setIsUserChatsLoading(true);
                setUserChatsError(null);

                const response = await getRequest(`${baseUrl}/chats/${user._id}`);
                if (response.error) {
                    return setUserChatsError(response.message);
                } else {
                    setUserChats(response);

                }
                setIsUserChatsLoading(false);
            }
        };
        getUserChats();
    }, [user]);

    useEffect(() => {
        const getMessages = async () => {

            setIsMessagesloading(true);
            setMesssagesError(null);

            const response = await getRequest(`${baseUrl}/messages/${currentChat?._id}`);

            if (response.error) {
                return setMesssagesError(response.message);
            } else {
                setMessages(response);

            }
            setIsMessagesloading(false);
        }

        getMessages();
    }, [currentChat]);

    const sendTextMessage = useCallback(
        async (textMessage, sender, currentChatId, setTextMessage) => {
            if (!textMessage) {
                return console.log("Your must type somethin")
            }
            const response = await postRequest(`${baseUrl}/messages`, JSON.stringify({
                chatId: currentChatId,
                senderId: sender._id,
                text: textMessage
            })
            );
            if (response.error) {
                return setSendTextMessageError(response);
            }
            setNewMessage(response)
            setMessages((prev) => [...prev, response])
            setTextMessage("")
        }, [])



    const updateCurrentChat = useCallback((chat) => {
        setCurrentChat(chat)
    })
    const createChat = useCallback(async (firstId, secondId) => {
        const response = await postRequest(`${baseUrl}/chats`, JSON.stringify({ firstId, secondId }));
        if (response.error) {
            return console.log("Error creating chat", response);
        }

        setUserChats((pre) => [...pre, response])
    }, []);
    return (
        <ChatContext.Provider value={{
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

        }}>
            {children}
        </ChatContext.Provider>
    );
}
