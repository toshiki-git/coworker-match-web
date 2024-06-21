import { HobbiesPage } from '@/routes/Mypage/Hobbies';
import Head from 'next/head';

function Page() {
  return (
    <div>
      <Head>
        <title>Hobbies</title>
      </Head>
      <HobbiesPage />
    </div>
  );
}

export default Page;
