
import { useFetchRecipientsUser } from '../../hooks/useFetchRecipients';
// import { Stack } from 'react-bootstrap';
import avatar from '../../../public/avatar.svg';
interface UserChatProps {
    chat: any;
    user: any;
}

export const UserChat = ({ chat, user }: UserChatProps) => {
    const { recipientUser, error } = useFetchRecipientsUser(chat, user);

    return (
        <div style={{ gap: '90px' }}
            className='align-items-center p-2 justify-content-between'
            role='button'>
            <div className='flex'>
                <div className='me-2'>
                    <img src={avatar} className='h-[35px]' />
                </div>
                <div className=''>
                    <div className='name'>{recipientUser?.username}</div>
                    <div className='text'>Text Message</div>
                </div>
            </div>
        </div>
    );
}
