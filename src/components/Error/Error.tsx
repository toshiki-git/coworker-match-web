import { Layout } from '@/layouts';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

interface ErrorProps {
  message?: string;
}

export function Error({
  message = 'エラーが発生しました。しばらくしてから再度お試しください。',
}: ErrorProps) {
  return (
    <Layout>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="mt-4 text-lg">{message}</p>
        <div className="flex justify-center mt-4">
          <Button className="text-center" onClick={() => signOut()}>
            ログアウト
          </Button>
        </div>
      </div>
    </Layout>
  );
}
