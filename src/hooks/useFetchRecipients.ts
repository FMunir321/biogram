import { useEffect, useState } from 'react';
import api, { baseUrl, getRequest } from '../service/api';
import Cookies from 'js-cookie';

interface Chat {
    members: string[];
}

interface User {
    _id: string;
}

interface RecipientUser {
    _id: string;
    username: string;
    profileImage?: string;
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

        const fetchRecipientUser = async () => {
            if (!recipientId) {
                setRecipientUser(null);
                return;
            }

            setIsLoading(true);
            setError(null);

            try {
                const token = Cookies.get("token");

                const response = await api.get(`/api/user/${recipientId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const recipient = response.data as RecipientUser;
                setRecipientUser(recipient);
            } catch (error: any) {
                console.error("Error fetching recipient user:", error);
                setError(error.response?.data?.message || "Something went wrong");
            } finally {
                setIsLoading(false);
            }
        };

        fetchRecipientUser();
    }, [recipientId]);


    return { recipientUser, isLoading, error };
};
