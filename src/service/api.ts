import axios from "axios";
export const baseUrl = 'http://localhost:5000/api';
const api = axios.create({
  baseURL: "http://3.111.146.115:5000",
  // baseURL: "http://localhost:5000",
  withCredentials: true,
});

export default api;

export const postRequest = async <T>(
  url: string,
  body: any
): Promise<T | { error: true; message: string }> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    const message = data?.message || data || 'An error occurred';
    return { error: true, message };
  }

  return data;
};

export const getRequest = async <T>(
  url: string
): Promise<T | { error: true; message: string }> => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    const message = data?.message || data || 'An error occurred';
    return { error: true, message };
  }

  return data;
};
