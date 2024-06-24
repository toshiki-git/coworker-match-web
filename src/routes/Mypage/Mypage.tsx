import { Layout } from '@/layouts';
import { Mail, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function MyPage() {
  return (
    <Layout>
      <div className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 flex flex-col gap-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Button
          asChild
          className="h-16 sm:h-20 md:h-24 px-6 sm:px-8 md:px-10 py-4 sm:py-6 md:py-7 text-sm sm:text-base md:text-lg w-full"
        >
          <Link href="/questions">新しいマッチングを開始する →</Link>
        </Button>
        <div className="space-x-2 sm:space-x-3 md:space-x-4 w-full flex">
          <Button
            asChild
            className="flex-1 px-6 sm:px-7 md:px-8 py-4 sm:py-6 md:py-7 text-sm sm:text-base md:text-lg bg-white border-2 border-orange-500 text-black hover:bg-orange-100"
          >
            <Link href="/matchings">
              <Mail className="mr-1 sm:mr-2 h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6" />
              Messages
            </Link>
          </Button>
          <Button
            asChild
            className="flex-1 px-6 sm:px-7 md:px-8 py-4 sm:py-6 md:py-7 text-sm sm:text-base md:text-lg bg-white border-2 border-green-700 text-black hover:bg-green-100"
          >
            <Link href="/mypage/hobbies">
              <Settings className="mr-1 sm:mr-2 h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6" />
              Hobbies
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
