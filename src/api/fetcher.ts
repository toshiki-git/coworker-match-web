import { getCookie } from '@/utils/cookie';
const apiURL = process.env.NEXT_PUBLIC_API_URL ?? '';

const cwm_token = getCookie('cwm-token');

//Getのためのfetcher
export const fetcher = (url: string) => {
  return fetch(`${apiURL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cwm_token}`,
    },
  }).then((res) => res.json());
};
