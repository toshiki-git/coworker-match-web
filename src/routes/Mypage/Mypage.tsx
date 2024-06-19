import { Layout } from '@/layouts';
import { LogOut, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

export function MyPage() {
  return (
    <Layout>
      <div className="w-1/3 flex flex-col gap-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Button asChild className=" h-24 px-10 py-7 text-lg w-full">
          <Link href="/questions"> 新しいマッチングを開始する →</Link>
        </Button>
        <div className="space-x-4 w-full flex">
          <Button
            asChild
            className="flex-1 px-8 py-7 text-lg bg-white border-2 border-orange-500 text-black hover:bg-orange-100"
          >
            <Link href="/####">
              <Mail className="mr-2 h-6 w-6" />
              Messages
            </Link>
          </Button>
          <Button
            onClick={() => signOut()}
            className="flex-1 px-8 py-7 text-lg bg-white border-2 border-green-700 text-black hover:bg-green-100"
          >
            <LogOut className="mr-2 h-6 w-6" />
            Log out
          </Button>
        </div>
      </div>
    </Layout>
  );
}
