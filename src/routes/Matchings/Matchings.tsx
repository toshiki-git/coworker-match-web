import useSWR from 'swr';
import { User } from '@/components/User';
import { Layout } from '@/layouts';
import { fetcher } from '@/api/fetcher';
import { GetMatchingRes } from '@/gen/typescript';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/Loading';
import { ApiError } from '@/components/ApiError';
import Link from 'next/link';

export function MatchingsPage() {
  const { data, error, isLoading } = useSWR<GetMatchingRes>(
    '/matchings',
    fetcher
  );

  if (error) return <ApiError error={error} />;
  if (isLoading || !data) return <Loading />;

  return (
    <Layout>
      <div className="mt-5">
        {data.matchings.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <p className="mb-4 text-lg">マッチングがまだありません。</p>
            <Button className="w-72 h-16" asChild>
              <Link href="/questions">新しいマッチングを開始する →</Link>
            </Button>
          </div>
        ) : (
          data.matchings.map((matching) => (
            <User
              key={matching.matchingId}
              matchingId={matching.matchingId}
              imageUrl={matching.avatarUrl}
              userName={matching.matchUserName}
              message={matching.lastMessage}
              unreadCount={matching.unreadMessageCount}
            />
          ))
        )}
      </div>
    </Layout>
  );
}
