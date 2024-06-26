import { getCookie } from '@/utils/cookie';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const isUserExist = async (): Promise<boolean> => {
  const response = await fetch(`${apiUrl}/users/exists`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('cwm-token')}`,
    },
  });
  const data = await response.json();
  const isExist: boolean = data.exists;
  return isExist;
};
