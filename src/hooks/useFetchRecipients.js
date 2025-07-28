import React, { use, useEffect, useState } from 'react'
import { baseUrl, getRequest } from '../utils/services';

export const useFetchRecipientsUser = (chat, user) => {
    const [recipientUser, setRecipientUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const recipientId = chat?.members?.find(
        (id) => id.toString() !== user._id.toString()
    );


    useEffect(() => {
        if (!user || !user._id) return;

        const getUser = async () => {
            if (!recipientId) {
                setRecipientUser(null);
                return;
            }
            setIsLoading(true);
            try {
                const response = await getRequest(`${baseUrl}/users/${recipientId}`);
                if (response.error) {
                    return setError(response.message);
                } else {
                    setRecipientUser(response);
                    // console.log('recipientUserrrrrrrrrrrrrrrrr',response)
                }
            }
            catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        getUser();

    }, [recipientId])

    return { recipientUser, isLoading, error }
}
