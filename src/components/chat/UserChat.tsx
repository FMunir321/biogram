
import { useFetchRecipientsUser } from '../../hooks/useFetchRecipients';
import avatar from '../../../public/avatar.svg';
import { baseUrl } from '@/service/api';
interface Chat {
    _id: string;
    members: string[];
}

interface User {
    _id: string;
    profileImage?: string;
}

interface UserChatProps {
    chat: Chat;
    user: User;
}

export const UserChat = ({ chat, user }: UserChatProps) => {
    const { recipientUser } = useFetchRecipientsUser(chat, user);

    return (
        <div className="flex items-center gap-3 md:gap-4 p-2 md:p-3 w-full max-w-full md:max-w-md bg-white rounded-xl shadow-md mb-2 hover:bg-gray-100 transition-colors">
            {/* Profile Picture */}
            <img 
                // src={recipientUser?.profileImage || avatar} 
                src={`${baseUrl+recipientUser?.profileImage}` } 
                alt={recipientUser?.username || "User"}
                className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0 border-2 border-gray-200"
                onError={e => { (e.currentTarget as HTMLImageElement).src = avatar; }}
            />

            {/* Name Text */}
            <div className="flex-1 min-w-0">
                <p className="text-sm md:text-lg font-semibold text-gray-900 truncate">
                    {recipientUser?.username || "Unknown User"}
                </p>
                <p className="text-xs md:text-sm text-gray-600 truncate">
                    User
                </p>
            </div>
        </div>
    );
}
