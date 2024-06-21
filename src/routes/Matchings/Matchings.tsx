import { User } from '@/components/User';
import { Layout } from '@/layouts';
import { useSession } from 'next-auth/react';

export function MatchingsPage() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="container mt-5">
        <User
          image_url={session?.user?.image ?? ''}
          userName="User NameUser NameUser NameUser NameUser NameUser Name"
          message="Message here Message hereMessage here Message hereMessage here Message hereMessage here Message here"
          unreadCount={115}
        />
      </div>
    </Layout>
  );
}
