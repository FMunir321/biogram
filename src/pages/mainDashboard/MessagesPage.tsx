import { Button } from "@/components/ui/button";
import bground from "/assets/lightbg.png";
import { Input } from "@/components/ui/input";
import { ChatBox } from "@/components/chat/chatBox";
import { UserChat } from "@/components/chat/UserChat";
import Cookies from "js-cookie";
import api, { baseUrl, postRequest } from "@/service/api";
import { useCallback, useEffect, useState, useRef } from "react";
import { useSocket } from "@/context/SocketContext";



// =================== Interfaces ===================

interface User {
  _id: string;
  name?: string;
  profileImage?: string;
  username?: string;
  fullName?: string;
  email?: string;
}

interface Message {
  _id?: string;
  chatId: string;
  senderId: string;
  text: string;
  createdAt?: string;
}

interface Chat {
  _id: string;
  members: string[];
}

const Messages = () => {
  const userId = localStorage.getItem("userId") || "";
  const user: User = { _id: userId };

  // Socket context
  const { 
    socket, 
    connectSocket, 
    joinRoom, 
    leaveRoom, 
    sendMessage: sendSocketMessage,
    isConnected 
  } = useSocket();

  // State for users and search
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  // State for chats
  const [userChats, setUserChats] = useState<Chat[] | null>(null);
  const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
  const [userChatsError, setUserChatsError] = useState<string | null>(null);

  // State for current chat and messages
  const [currentChat, setCurrentChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [isMessagesLoading, setIsMessagesLoading] = useState(false);
  const [messagesError, setMessagesError] = useState<string | null>(null);

  // Previous chat reference for room management
  const prevChatRef = useRef<string | null>(null);



  // Fetch all users
  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch user chats
  useEffect(() => {
    if (user?._id) {
      fetchUserChats();
    }
  }, [user._id]);

  // Fetch messages when current chat changes
  useEffect(() => {
    if (currentChat?._id) {
      fetchMessages();
    }
  }, [currentChat]);

  // Initialize socket connection on component mount  
  useEffect(() => {
    console.log('=== SOCKET DEBUG ===');
    console.log('User ID from localStorage:', userId);
    console.log('User ID length:', userId.length);
    console.log('User ID truthy:', !!userId);
    console.log('Socket already connected:', !!socket);
    
    if (userId && userId.trim() !== '' && !socket) {
      console.log('Attempting to connect socket for user:', userId);
      connectSocket(userId);
    } else if (socket) {
      console.log('Socket already exists, skipping connection');
    } else {
      console.error('Cannot connect socket: User ID is empty. User might not be logged in.');
    }

    return () => {
      console.log('Component unmounting, but NOT disconnecting socket (will be handled by context)');
      // Don't disconnect here to prevent rapid cycles
    };
  }, [userId]); // Removed connectSocket and disconnectSocket from dependencies

  // Handle chat room joining/leaving
  useEffect(() => {
    if (!socket || !isConnected) return;

    // Leave previous room if exists
    if (prevChatRef.current) {
      leaveRoom(prevChatRef.current);
    }

    // Join new room if currentChat exists
    if (currentChat?._id) {
      console.log('Joining chat room:', currentChat._id);
      joinRoom(currentChat._id);
      prevChatRef.current = currentChat._id;
    }

    return () => {
      if (currentChat?._id) {
        leaveRoom(currentChat._id);
      }
    };
  }, [currentChat?._id, socket, isConnected, joinRoom, leaveRoom]);

  // Set up socket event listeners for real-time messages
  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (message: Message) => {
      console.log('Received new message via socket:', message);
      
      // Only add message if it's for the current chat
      if (currentChat && message.chatId === currentChat._id) {
        setMessages(prev => {
          // Avoid duplicates by checking if message already exists
          const exists = prev?.some(m => m._id === message._id);
          if (exists) return prev;
          return prev ? [...prev, message] : [message];
        });
      }
    };

    socket.on('getMessage', handleNewMessage);

    return () => {
      socket.off('getMessage', handleNewMessage);
    };
  }, [socket, currentChat]);

  // Optional: Listen for typing indicators
  useEffect(() => {
    if (!socket) return;

    const handleUserTyping = (data: { userId: string; isTyping: boolean }) => {
      console.log('User typing status:', data);
      // You can implement typing indicators UI here
    };

    socket.on('userTyping', handleUserTyping);

    return () => {
      socket.off('userTyping', handleUserTyping);
    };
  }, [socket]);





  const fetchUsers = async () => {
    try {
      const token = Cookies.get("token");
      const response = await api.get(`/api/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data.users || []);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchUserChats = async () => {
    if (!user?._id) return;

    setIsUserChatsLoading(true);
    setUserChatsError(null);

    try {
      const token = Cookies.get("token");
      const response = await api.get(`/api/chats/${user._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const chats = response.data as Chat[];
      setUserChats(chats);
    } catch (error: unknown) {
      console.error("Error fetching user chats:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Failed to fetch chats";
      setUserChatsError(errorMessage);
    } finally {
      setIsUserChatsLoading(false);
    }
  };

  const fetchMessages = async () => {
    if (!currentChat?._id) return;

    setIsMessagesLoading(true);
    setMessagesError(null);

    try {
      const token = Cookies.get("token");
      const response = await api.get(`/api/messages/${currentChat._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const messages = response.data as Message[];
      setMessages(messages);
    } catch (error: unknown) {
      console.error("Error fetching messages:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Failed to fetch messages";
      setMessagesError(errorMessage);
    } finally {
      setIsMessagesLoading(false);
    }
  };

  const createChat = useCallback(async (firstId: string, secondId: string) => {
    try {
      const response = await postRequest(`${baseUrl}/api/chats`, {
        firstId,
        secondId,
      });

      if ((response as { error?: boolean }).error) {
        console.log("Error creating chat", response);
        return;
      }

      const newChat = response as Chat;
      setUserChats((prev) => (prev ? [...prev, newChat] : [newChat]));
      setCurrentChat(newChat);
      setSearch(""); // Clear search after creating chat
    } catch (error) {
      console.error("Error creating chat:", error);
    }
  }, []);

  const updateCurrentChat = useCallback((chat: Chat) => {
    setCurrentChat(chat);
  }, []);

  const sendTextMessage = useCallback(
    async (
      textMessage: string,
      sender: User,
      currentChatId: string,
      setTextMessage: (value: string) => void
    ) => {
      if (!textMessage.trim()) return;

      try {
        // Send message via HTTP API (this will save to database and emit socket event)
        const response = await postRequest(`${baseUrl}/api/messages`, {
          chatId: currentChatId,
          senderId: sender._id,
          text: textMessage,
        });

        if ((response as { error?: boolean; message?: string }).error) {
          console.error(
            "Error sending message:",
            (response as { message?: string }).message
          );
          return;
        }

        const message = response as Message;
        
        // Add message to local state immediately for sender's UI
        setMessages((prev) => {
          // Avoid duplicates
          const exists = prev?.some(m => m._id === message._id);
          if (exists) return prev;
          return prev ? [...prev, message] : [message];
        });

        // Also send via socket for real-time delivery to other users
        if (socket && isConnected) {
          sendSocketMessage({
            _id: message._id,
            chatId: currentChatId,
            senderId: sender._id,
            text: textMessage,
            createdAt: message.createdAt
          });
        }

        setTextMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    },
    [socket, isConnected, sendSocketMessage]
  );

  // Filter users based on search
  const filteredUsers =
    search.trim() === ""
      ? []
      : users.filter((user) => {
          const value = search.toLowerCase();
          return (
            (user.fullName ?? "").toLowerCase().includes(value) ||
            (user.username ?? "").toLowerCase().includes(value) ||
            (user.email ?? "").toLowerCase().includes(value) ||
            (user.name ?? "").toLowerCase().includes(value)
          );
        });

  return (
    <>
      <div
        className="flex flex-col md:flex-row h-[calc(100vh-25px)] bg-cover bg-center"
        style={{ backgroundImage: `url(${bground})` }}
      >
        <div></div>
      {/* Sidebar */}
      <div className="w-full md:w-[37%] p-3 md:p-5 flex-shrink-0 h-[50vh] md:h-auto relative bg-white/30">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-2xl md:text-[32px] font-semibold text-black">
            Message
          </h1>

        </div>

        {/* Searchbar */}
        <div className="flex border border-[#6fb793] bg-white/30 gap-2 w-full rounded-full text-black text-lg md:text-[20px] font-medium relative z-20">
          <Input
            type="text"
            placeholder="Search Person name here"
            className="py-4 md:py-7 m-1 text-lg md:text-[20px] font-medium border-0 focus:border-0 focus:ring-0 focus-visible:ring-0 outline-none shadow-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button className="py-5 md:py-7 px-4 md:px-5 m-1 bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white rounded-full text-xs md:text-sm font-semibold whitespace-nowrap hover:opacity-90 transition-opacity">
            Search
          </Button>
        </div>

        {/* Search Results Overlay */}
        {search.trim() !== "" && (
          <ul
            className="absolute left-0 right-0 mt-2 top-[120px] md:top-[135px] mx-4 bg-white/30 rounded-xl shadow-lg z-30 max-h-60 overflow-y-auto"
            style={{ listStyle: "none", padding: 2 }}
          >
            {filteredUsers.length === 0 ? (
              <li style={{ color: "#888", textAlign: "center" }}>
                No users found.
              </li>
            ) : (
              filteredUsers.map((user) => (
                <>
                <li
                  key={user._id}
                  onClick={() => {
                    // Check if chat already exists with this user
                    const existingChat = userChats?.find(
                      chat => chat.members.includes(user._id)
                    );
                    if (existingChat) {
                      updateCurrentChat(existingChat);
                      setSearch(""); // Clear search after opening chat
                    } else {
                      createChat(userId, user._id);
                      setSearch(""); // Clear search after creating chat
                    }
                  }}
                  className="flex items-center mb-3 md:mb-4 bg-white rounded-lg  p-2 md:p-3 max-w-full md:max-w-xs cursor-pointer hover:bg-[#f0f7f3] transition"
                >
                                     
                    <img
                    src={user.profileImage ? `${baseUrl}${user.profileImage}` : "/assets/avatar.png"}
                    alt={user.username || "avatar"}
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full mr-3 md:mr-4 object-cover border-2 border-gray-200 flex-shrink-0"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/assets/avatar.png";
                    }}
                  />
                  <div className="flex flex-col min-w-0">
                    <div className="font-semibold text-sm md:text-base truncate max-w-[120px] md:max-w-[160px]">
                      {user.fullName || user.name || "No Name"}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500 truncate max-w-[120px] md:max-w-[160px]">
                      @{user.username || user.email || "user"}
                    </div>
                  </div>
                </li>
                <hr/>
                </>
              ))
            )}
          </ul>
        )}

        {/* Chat Grid */}
        <div className="mt-6 md:mt-9">
          {(userChats?.length ?? 0) < 1 ? null : (
            <div className="h-full overflow-x-auto p-2">
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-6">
                {isUserChatsLoading && <p>Loading chats...</p>}
                {userChatsError && (
                  <p className="text-red-500">{userChatsError}</p>
                )}
                {Array.isArray(userChats) &&
                  userChats.map((chat, index) => (
                    <button
                      key={index}
                      onClick={() => updateCurrentChat(chat)}
                      className="focus:outline-none"
                    >
                      <UserChat chat={chat} user={user} isActive={currentChat?._id === chat._id} />
                    </button>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Chat area */}
      <div className="w-full  md:w-[63%] border-t md:border-t-0 md:border-l border-[#b6c1bc] flex items-center min-h-[50vh] md:min-h-0">
        <div className="w-full h-full">
          <ChatBox
            currentChat={currentChat}
            messages={messages}
            isMessagesLoading={isMessagesLoading}
            messagesError={messagesError}
            sendTextMessage={sendTextMessage}
            user={user}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Messages;

