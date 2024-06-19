import { MyPage } from '@/routes/Mypage';
import Head from 'next/head';

function Page() {
  return (
    <div>
      <Head>
        <title>Mypage</title>
      </Head>
      <MyPage />
    </div>
  );
}

export default Page;
