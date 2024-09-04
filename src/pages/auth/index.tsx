import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { Loading } from '@/components/Loading';
import { fetcher, post } from '@/api/fetcher';
import { CreateUserReq } from '@/gen/typescript';

function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;

    const handleAuth = async () => {
      try {
        const response = await fetcher('/users/exists');
        const isExist: boolean = response.exists;
        if (isExist) {
          router.push('/mypage');
        } else {
          const requestBody: CreateUserReq = {
            userName: session?.user?.name ?? '',
            email: session?.user?.email ?? '',
            avatarUrl: session?.user?.image ?? '',
          };
          await post('/users', requestBody);
          router.push('/mypage/hobbies');
        }
      } catch (error) {
        console.error('Authentication error:', error);
      }
    };

    handleAuth();
  }, [router, session, status]);

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
