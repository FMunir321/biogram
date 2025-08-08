
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
    isActive?: boolean;
}

export const UserChat = ({ chat, user, isActive = false }: UserChatProps) => {
    const { recipientUser } = useFetchRecipientsUser(chat, user);

    return (
        <div
        className={`relative w-26 h-26 md:w-33 md:h-33 rounded-2xl overflow-hidden shadow-lg bg-white/40 transition-all duration-500 ease-in-out
            hover:scale-105 hover:shadow-xl 
            ${isActive ? 'p-1 bg-gradient-to-r from-orange-500 to-pink-500' : 'p-0 bg-transparent'}`}
           
        >
            <img
                src={recipientUser?.profileImage ? `${baseUrl}${recipientUser.profileImage}` : (avatar as unknown as string)}
                alt={recipientUser?.username || 'User'}
                className="w-full h-full object-cover rounded-2xl"
                onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = avatar as unknown as string;
                }}
            />
        </div>
    );
}
