import { QuestionsPage } from '@/routes/Questions';
import Head from 'next/head';

function Page() {
  return (
    <div>
      <Head>
        <title>questions</title>
      </Head>
      <QuestionsPage />
    </div>
  );
}

export default Page;
