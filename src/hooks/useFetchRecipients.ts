import { useEffect, useState } from 'react';
import { baseUrl, getRequest } from '../service/api';

interface Chat {
    members: string[];
}

interface User {
    _id: string;
}

interface RecipientUser {
    _id: string;
    name: string;
    // Add other fields if needed
}

interface UseFetchRecipientsUserResult {
    recipientUser: RecipientUser | null;
    isLoading: boolean;
    error: string | null;
}

export const useFetchRecipientsUser = (
    chat: Chat | null,
    user: User
): UseFetchRecipientsUserResult => {
    const [recipientUser, setRecipientUser] = useState<RecipientUser | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const recipientId = chat?.members?.find(
        (id) => id !== user._id
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
                const response = await getRequest<RecipientUser>(`${baseUrl}/users/${recipientId}`);
                if ('error' in response) {
                    setError(response.message);
                } else {
                    setRecipientUser(response);
                }
            } catch (err: any) {
                setError(err.message || 'Something went wrong');
            } finally {
                setIsLoading(false);
            }
        };

        getUser();
    }, [recipientId, user]);

    return { recipientUser, isLoading, error };
};
