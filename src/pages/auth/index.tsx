import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { fetchAndSetAuthToken, registerUser, updateUser } from '@/api/auth';
import { isFirstLogin } from '@/utils/auth';
import Head from 'next/head';
import { Loading } from '@/components/Loading';

function Page() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const idToken = session?.idToken ?? '';
      await fetchAndSetAuthToken(idToken);

      if (isFirstLogin()) {
        await registerUser(
          session?.user?.name ?? '',
          session?.user?.email ?? '',
          session?.user?.image ?? ''
        );
        router.push('/mypage/hobbies');
      } else {
        await updateUser(
          session?.userId ?? '',
          session?.user?.name ?? '',
          session?.user?.email ?? '',
          session?.user?.image ?? ''
        );
        router.push('/mypage');
      }
    };

    handleAuth();
  }, [session, router]);

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
