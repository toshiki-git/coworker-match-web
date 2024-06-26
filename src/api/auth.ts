import { setCookie, getCookie } from '@/utils/cookie';

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
  try {
    const token = getCookie(CWM_TOKEN_COOKIE_NAME);
    const response = await fetch(`${apiURL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: user_name,
        email,
        avatar_url,
      }),
    });

    if (!response.ok) {
      console.error('Failed to authenticate with backend');
      return false;
    }

    const data = await response.json();
    console.log(data);

    return true;
  } catch (error) {
    console.error('Error fetching token:', error);
    return false;
  }
};

export const updateUser = async (
  user_id: string,
  user_name: string,
  email: string,
  avatar_url: string
) => {
  try {
    const token = getCookie(CWM_TOKEN_COOKIE_NAME);
    const response = await fetch(`${apiURL}/users/${user_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user_name: user_name,
        email,
        avatar_url,
      }),
    });

    if (!response.ok) {
      console.error('Failed to authenticate with backend');
      return false;
    }

    const data = await response.json();
    console.log(data);

    return true;
  } catch (error) {
    console.error('Error fetching token:', error);
    return false;
  }
};

export const createEmptyUserHobby = async () => {
  try {
    const token = getCookie(CWM_TOKEN_COOKIE_NAME);
    const response = await fetch(`${apiURL}/user_hobbies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ hobby_ids: [] }),
    });

    if (!response.ok) {
      throw new Error('Failed to create user hobbies');
    }
  } catch (error) {
    console.error('Failed to create user hobbies', error);
  }
};
