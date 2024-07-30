import { setCookie } from '@/utils/cookie';
import { post, put } from '@/api/fetcher';

const CWM_TOKEN_COOKIE_NAME = 'cwm-token';
const apiURL = process.env.NEXT_PUBLIC_API_URL ?? '';

export const fetchAndSetAuthToken = async (
  idToken: string
): Promise<boolean> => {
  try {
    const response = await fetch(`${apiURL}/auth/google`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_token: idToken,
      }),
    });

    if (!response.ok) {
      console.error('Failed to authenticate with backend');
      return false;
    }

    const data = await response.json();
    const cwmToken = data.token;

    setCookie(CWM_TOKEN_COOKIE_NAME, cwmToken);

    return true;
  } catch (error) {
    console.error('Error fetching token:', error);
    return false;
  }
};

export const registerUser = async (
  user_name: string,
  email: string,
  avatar_url: string
) => {
  await post('/users', {
    userName: user_name,
    email,
    avatarUrl: avatar_url,
  });
};

export const updateUser = async (
  user_id: string,
  user_name: string,
  email: string,
  avatar_url: string
) => {
  await put('/users', {
    user_name,
    email,
    avatar_url,
  });
};

export const createEmptyUserHobby = async () => {
  await post('/user_hobbies', { hobby_ids: [] });
};
