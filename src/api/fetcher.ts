import { getSession } from 'next-auth/react';
import { CustomApiError } from '@/types/ApiError';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error(
    'API_URL is not defined. Please set NEXT_PUBLIC_API_URL in your environment variables.'
  );
}

// 共通のAPIクライアント関数
const apiClient = async (url: string, options: RequestInit = {}) => {
  const session = await getSession();
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${session?.idToken}`,
  };

  const config = {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  };

  const response: Response = await fetch(`${API_URL}${url}`, config);

  if (!response.ok) {
    try {
      const error = await response.json();
      throw new CustomApiError(
        error.error,
        response.status,
        response.statusText
      );
    } catch (error: any) {
      throw new CustomApiError(
        error.message,
        response.status,
        response.statusText
      );
    }
  }

  return response.json();
};

// GETメソッド用のfetcher関数
export const fetcher = (url: string) => apiClient(url);

// POSTメソッド用の関数
export const post = (url: string, body: any) =>
  apiClient(url, {
    method: 'POST',
    body: JSON.stringify(body),
  });

// PUTメソッド用の関数
export const put = (url: string, body: any) =>
  apiClient(url, {
    method: 'PUT',
    body: JSON.stringify(body),
  });

// DELETEメソッド用の関数
export const del = (url: string) =>
  apiClient(url, {
    method: 'DELETE',
  });
