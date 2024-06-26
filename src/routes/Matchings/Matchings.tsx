import { User } from '@/components/User';
import { Layout } from '@/layouts';
import { fetcher } from '@/api/fetcher';
import { Matchings } from '@/types/Matching';
import useSWR from 'swr';

export function MatchingsPage() {
  const { data, error } = useSWR<Matchings[]>('/matches', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Layout>
      <div className="container mt-5">
        {data.map((matching) => (
          <User
            key={matching.matching_id}
            matching_id={matching.matching_id}
            image_url={matching.image_url}
            userName={matching.user_name}
            message={matching.message}
            unreadCount={matching.unread_count}
          />
        ))}
      </div>
    </Layout>
  );
}
