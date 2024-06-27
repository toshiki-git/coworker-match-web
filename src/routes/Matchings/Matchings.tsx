import { User } from '@/components/User';
import { Layout } from '@/layouts';
import { fetcher } from '@/api/fetcher';
import { Matchings } from '@/types/Matching';
import useSWR from 'swr';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Loading } from '@/components/Loading';
import { Error } from '@/components/Error';

export function MatchingsPage() {
  const { data, error } = useSWR<Matchings[]>('/matches', fetcher);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Layout>
      <div className="container mt-5">
        {data.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <p className="mb-4 text-lg">マッチングがまだありません。</p>
            <Button className=" w-72 h-16" asChild>
              <Link href="/questions">新しいマッチングを開始する →</Link>
            </Button>
          </div>
        ) : (
          data.map((matching) => (
            <User
              key={matching.matching_id}
              matching_id={matching.matching_id}
              image_url={matching.avatar_url}
              userName={matching.name}
              message={matching.last_message}
              unreadCount={matching.unread_count}
            />
          ))
        )}
      </div>
    </Layout>
  );
}
