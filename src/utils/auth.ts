import { getCookie } from '@/utils/cookie';

//TODO: バックエンドのAPIを叩いて、初回ログインかどうかを判定するほうが確実
export const isFirstLogin = (): boolean => {
  return getCookie('cwm-token') === undefined;
};
