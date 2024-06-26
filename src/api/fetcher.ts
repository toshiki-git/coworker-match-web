import { getCookie } from '@/utils/cookie';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error(
    'API_URL is not defined. Please set NEXT_PUBLIC_API_URL in your environment variables.'
  );
}

const cwm_token = getCookie('cwm-token');

// 共通のAPIクライアント関数
const apiClient = async (url: string, options: RequestInit = {}) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${cwm_token}`,
  };

  const config = {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  };

  const response = await fetch(`${API_URL}${url}`, config);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API request failed');
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
