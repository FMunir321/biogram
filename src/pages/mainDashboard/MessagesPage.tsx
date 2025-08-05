import { Button } from "@/components/ui/button";
import bground from "../../../public/assets/lightbg.png";
import { Input } from "@/components/ui/input";
import { ChatBox } from "@/components/chat/chatBox";
import { UserChat } from "@/components/chat/UserChat";
import Cookies from "js-cookie";
import api, { baseUrl, postRequest } from "@/service/api";
import { useCallback, useEffect, useState, useRef } from "react";


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
        // Send message via HTTP API
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
        setMessages((prev) => (prev ? [...prev, message] : [message]));
        setTextMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    },
    []
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
    <div
      className="flex flex-col md:flex-row h-[calc(100vh-25px)] bg-cover bg-center"
      style={{ backgroundImage: `url(${bground})` }}
    >
      {/* Sidebar */}
      <div className="w-full md:w-[37%] p-3 md:p-5 flex-shrink-0 bg-white/80 md:bg-transparent h-[50vh] md:h-auto relative">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-2xl md:text-[32px] font-semibold text-black">
            Message
          </h1>

        </div>

        {/* Searchbar */}
        <div className="flex border border-[#6fb793] gap-2 w-full rounded-full bg-gradient-to-r from-[#dfece2] to-[#d5dad9] text-black text-lg md:text-[20px] font-medium relative z-20">
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
            className="absolute left-0 right-0 mt-2 top-[120px] md:top-[135px] mx-4 bg-white rounded-xl shadow-lg z-30 max-h-60 overflow-y-auto"
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
                    src={user.profileImage || "/public/assets/avatar.png"}
                    alt={user.username || "avatar"}
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full mr-3 md:mr-4 object-cover border-2 border-gray-200 flex-shrink-0"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/public/assets/avatar.png";
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

        {/* Chat List */}
        <div className="mt-6 md:mt-9">
          {(userChats?.length ?? 0) < 1 ? null : (
            <div>
              <div className="messsages-box flex-grow-0 pe-3 hover:cursor-pointer  max-h-[77vh] overflow-y-auto">
                {isUserChatsLoading && <p>Loading chats...</p>}
                {userChatsError && (
                  <p className="text-red-500">{userChatsError}</p>
                )}
                {Array.isArray(userChats) &&
                  userChats.map((chat, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        updateCurrentChat(chat);
                      }}
                    >
                      <UserChat chat={chat} user={user} />
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Chat area */}
      <div className="w-full md:w-[63%] border-t md:border-t-0 md:border-l border-[#b6c1bc] flex items-center min-h-[50vh] md:min-h-0">
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
  );
};

export default Messages;

