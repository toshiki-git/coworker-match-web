import { getSession } from 'next-auth/react';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const isUserExist = async (): Promise<boolean> => {
  const session = await getSession();
  const response = await fetch(`${apiUrl}/users/exists`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.idToken}`,
    },
  });
  const data = await response.json();
  const isExist: boolean = data.exists;
  return isExist;
};
