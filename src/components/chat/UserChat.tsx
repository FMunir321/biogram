import React from 'react'
import { useFetchRecipientsUser } from '../../hooks/useFetchRecipients';
import { Stack } from 'react-bootstrap';
import avatar from '../../../public/avatar.svg';

export const UserChat = ({ chat, user }) => {
    const { recipientUser, error } = useFetchRecipientsUser(chat, user);

    return (
        <Stack direction='horizontal' style={{ gap: '90px' }}
            className='user-chat align-items-center p-2 justify-content-between'
            role='button'>
            <div className='d-flex'>
                <div className='me-2'>
                    <img src={avatar} height={'35px'} />
                </div>
                <div className='text-content'>
                    <div className='name'>{recipientUser?.name}</div>
                    <div className='text'>Text Message</div>
                </div>
            </div>
            <div className='d-flex flex-column align-items-end'>
                <div className='date'>12/12/2022</div>
                <div className='this-user-notifications'>3</div>
                <span className='user-online'></span>
            </div>
        </Stack>
    );
}
