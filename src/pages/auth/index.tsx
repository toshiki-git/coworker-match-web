import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import {
  fetchAndSetAuthToken,
  registerUser,
  updateUser,
  createEmptyUserHobby,
} from '@/api/auth';
import { isUserExist } from '@/utils/auth';
import Head from 'next/head';
import { Loading } from '@/components/Loading';

function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;

    const handleAuth = async () => {
      try {
        const idToken = session?.idToken ?? 'unget';
        await fetchAndSetAuthToken(idToken);

        const isExist = await isUserExist();
        if (isExist) {
          await updateUser(
            session?.userId ?? '',
            session?.user?.name ?? '',
            session?.user?.email ?? '',
            session?.user?.image ?? ''
          );
          router.push('/mypage');
        } else {
          await registerUser(
            session?.user?.name ?? '',
            session?.user?.email ?? '',
            session?.user?.image ?? ''
          );
          await createEmptyUserHobby();
          router.push('/mypage/hobbies');
        }
      } catch (error) {
        console.error('Authentication error:', error);
        // エラーハンドリング
      }
    };

    handleAuth();
  }, [status]);

  return (
    <div>
      <Head>
        <title>Auth</title>
      </Head>
      <Loading loadingMessage="認証中です" />
    </div>
  );
}

export default Page;
