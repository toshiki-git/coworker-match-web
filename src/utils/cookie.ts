import Cookies from 'js-cookie';

interface CookieOptions {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
}

export const setCookie = (
  name: string,
  value: string,
  options?: CookieOptions
): void => {
  try {
    Cookies.set(name, value, { ...options });
  } catch (error) {
    console.error(`Failed to set cookie: ${error}`);
  }
};

export const getCookie = (name: string): string | undefined => {
  try {
    const value = Cookies.get(name);
    return value;
  } catch (error) {
    console.error(`Failed to get cookie: ${error}`);
    return undefined;
  }
};

export const removeCookie = (name: string, options?: CookieOptions): void => {
  try {
    Cookies.remove(name, { ...options });
  } catch (error) {
    console.error(`Failed to remove cookie: ${error}`);
  }
};
