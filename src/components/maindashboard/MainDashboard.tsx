import { useEffect, useState } from "react";
import bground from "../../../public/assets/lightbg.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Cookies from "js-cookie";
import api from "@/service/api";

// Updated User type to include all used properties
type User = {
  _id: string;
  name?: string;
  profileImage?: string;
  username?: string;
  fullName?: string;
  email?: string;
};

const MainDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const token = Cookies.get("token");
      const response = await api.get(`/api/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data.users || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  // Only show users if search is not empty
  const filteredUsers = search.trim() === ""
    ? []
    : users.filter(user => {
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
      className="flex flex-col md:flex-row justify-center items-stretch min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bground})` }}
    >
      <div className="w-full md:w-[50%] p-5">
        {/* Searchbar */}
        <div className="flex !border-[#6fb793] border-1 mb-4 gap-2 w-full  rounded-full [background:linear-gradient(to_right,_#dfece2,_#d5dad9)] text-black text-[20px] font-medium">
          <Input
            type="text"
            placeholder="Search Platforms"
            className="py-7 m-1 text-[20px] font-medium border-0 focus:border-0 focus:ring-0 focus-visible:ring-0 outline-none shadow-none"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <Button className="py-7 px-9 m-1 bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white rounded-full text-sm font-semibold whitespace-nowrap hover:opacity-90 transition-opacity">
            Search
          </Button>
        </div>

        {/* User List: only show if search is not empty */}
        {search.trim() !== "" && (
          <ul style={{ listStyle: "none", padding: 0, marginTop: 16 }}>
            {filteredUsers.length === 0 ? (
              <li style={{ color: "#888", textAlign: "center" }}>No users found.</li>
            ) : (
              filteredUsers.map((user) => (
                <li
                  key={user._id}
                  onClick={() => setSelectedUser(user)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 16,
                    background: "#fff",
                    borderRadius: 8,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                    padding: "10px 16px",
                    maxWidth: 350,
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={user.profileImage || "/public/assets/avatar.png"}
                    alt={user.username || "avatar"}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      marginRight: 16,
                      objectFit: "cover",
                      border: "2px solid #e0e0e0",
                    }}
                    onError={e => { (e.currentTarget as HTMLImageElement).src = "/public/assets/avatar.png"; }}
                  />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 16 }}>{user.fullName || user.name || "No Name"}</div>
                    <div style={{ fontSize: 14, color: "#888" }}>@{user.username || user.email || "user"}</div>
                  </div>
                </li>
              ))
            )}
          </ul>
        )}
      </div>

      <div className="w-full md:w-[50%] md:border-l md:border-[#b6c1bc] md:pl-8 flex justify-center items-center">
        <div className="text-center px-4">
          {selectedUser ? (
            <div>
              <img
                src={selectedUser.profileImage || "/public/assets/avatar.png"}
                alt={selectedUser.username || "avatar"}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #e0e0e0",
                  margin: "0 auto 16px auto"
                }}
              />
              <div style={{ fontWeight: 600, fontSize: 22 }}>{selectedUser.fullName || selectedUser.name || "No Name"}</div>
              <div style={{ fontSize: 16, color: "#888" }}>@{selectedUser.username || selectedUser.email || "user"}</div>
            </div>
          ) : (
            <p className="text-black font-medium">
              Click on user to preview their profile
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;