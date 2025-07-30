import { Button } from "@/components/ui/button";
import bground from "../../../public/assets/lightbg.png";
import { Input } from "@/components/ui/input";
import { ChatBox } from "@/components/chat/chatBox";
import { ChatContext } from "@/context/chatContext";
import { useContext, useEffect, useState } from "react";
import { UserChat } from "@/components/chat/UserChat";
import Cookies from "js-cookie";
import api from "@/service/api";

interface user {
  _id: string;
  name?: string;
  profileImage?: string;
  username?: string;
  fullName?: string;
  email?: string;
}
const Messages = () => {
  const userId = localStorage.getItem('userId') || '';
  const user: user = { _id: userId };
  const { userChats, isUserChatsLoading, updateCurrentChat, createChat } = useContext(ChatContext);

  const [users, setUsers] = useState<user[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUser()
  }, [])
  const fetchUser = async () => {
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
  // Only show users if search is not empty
  const filteredUsers = search.trim() === "" ? [] : users.filter(user => {
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
      <div className="w-full md:w-[37%] p-3 md:p-5 flex-shrink-0 bg-white/80 md:bg-transparent overflow-y-auto h-[50vh] md:h-auto">
        <h1 className="text-2xl md:text-[32px] font-semibold text-black mb-3 md:mb-0">Message</h1>
        {/* Searchbar */}
        <div className="flex border border-[#6fb793] mb-4 gap-2 w-full rounded-full bg-gradient-to-r from-[#dfece2] to-[#d5dad9] text-black text-lg md:text-[20px] font-medium">
          <Input
            type="text"
            placeholder="Search Person name here"
            className="py-4 md:py-7 m-1 text-lg md:text-[20px] font-medium border-0 focus:border-0 focus:ring-0 focus-visible:ring-0 outline-none shadow-none"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <Button className="py-5  md:py-7 px-4 md:px-5 m-1 bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white rounded-full text-xs  md:text-sm font-semibold whitespace-nowrap hover:opacity-90 transition-opacity">
            Search
          </Button>
        </div>

        {search.trim() !== "" && (
          <ul className="max-h-60 overflow-y-auto" style={{ listStyle: "none", padding: 0, marginTop: 16 }}>
            {filteredUsers.length === 0 ? (
              <li style={{ color: "#888", textAlign: "center" }}>No users found.</li>
            ) : (
              filteredUsers.map((user) => (
                <li
                  key={user._id}
                  onClick={() => {
                    createChat(userId, user._id)
                  }}
                  className="flex items-center mb-3 md:mb-4 bg-white rounded-lg shadow p-2 md:p-3 max-w-full md:max-w-xs cursor-pointer hover:bg-[#f0f7f3] transition"
                >
                  <img
                    src={user.profileImage || "/public/assets/avatar.png"}
                    alt={user.username || "avatar"}
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full mr-3 md:mr-4 object-cover border-2 border-gray-200 flex-shrink-0"
                    onError={e => { (e.currentTarget as HTMLImageElement).src = "/public/assets/avatar.png"; }}
                  />
                  <div className="flex flex-col min-w-0">
                    <div className="font-semibold text-sm md:text-base truncate max-w-[120px] md:max-w-[160px]">{user.fullName || user.name || "No Name"}</div>
                    <div className="text-xs md:text-sm text-gray-500 truncate max-w-[120px] md:max-w-[160px]">@{user.username || user.email || "user"}</div>
                  </div>
                </li>
              ))
            )}
          </ul>
        )}

        <div className="mt-6 md:mt-9">
          {(userChats?.length ?? 0) < 1 ? null : (
            <div>
              <div className="messsages-box flex-grow-0 pe-3 hover:cursor-pointer max-h-72 md:max-h-[60vh] overflow-y-auto">
                {isUserChatsLoading && <p>Loading chats...</p>}
                {Array.isArray(userChats) && userChats.map((chat, index) => (
                  <div key={index} onClick={() => { updateCurrentChat(chat) }}>
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
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default Messages;
