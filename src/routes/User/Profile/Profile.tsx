import { fetcher } from '@/api/fetcher';
import { ApiError } from '@/components/ApiError';
import { Loading } from '@/components/Loading';
import { GetUserHobbyRes, GetUserRes } from '@/gen/typescript';
import { Layout } from '@/layouts';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { useRouter } from 'next/router';
import { Badge } from '@/components/ui/badge';
import useSWR from 'swr';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

const categoryInterest = [
  { name: 'インドア', value: 80 },
  { name: 'アウトドア', value: 70 },
  { name: '技術', value: 90 },
  { name: 'スポーツ', value: 60 },
  { name: '音楽', value: 25 },
  { name: 'ゲーム', value: 10 },
];

export function ProfilePage() {
  const router = useRouter();
  const { userId } = router.query;
  const { data: userData, error: userDataError } = useSWR<GetUserRes>(
    `/users/${userId}`,
    fetcher
  );
  const { data: userHobbies, error: userHobbiesError } =
    useSWR<GetUserHobbyRes>(`/user-hobbies/${userId}`, fetcher);

  if (userDataError) return <ApiError error={userDataError} />;
  if (userHobbiesError) return <ApiError error={userHobbiesError} />;

  if (!userData || !userHobbies) return <Loading />;

  return (
    <Layout>
      <div className="flex gap-5 mt-4">
        <div className="w-1/3">
          <div className="flex justify-center mb-3">
            <Avatar className=" w-2/3 h-auto">
              <AvatarImage src={userData.avatarUrl} alt="My Icon" />
              <AvatarFallback>my</AvatarFallback>
            </Avatar>
          </div>
          <p className="font-bold text-lg mb-2">{userData.userName}</p>
          {userHobbies.hobbies.map((hobby) => (
            <Badge className="p-2 m-1" key={hobby.hobbyId}>
              {hobby.hobbyName}
            </Badge>
          ))}
        </div>
        <div className="w-full">
          <h3 className="font-bold mb-2">興味・趣味</h3>
          <div>
            {categoryInterest.map((category) => (
              <div key={category.name} className="mb-3">
                <div className="flex justify-between">
                  <p>{category.name}</p>
                  <p>{category.value}%</p>
                </div>
                <Progress value={category.value} />
              </div>
            ))}
          </div>
          <Button asChild variant="secondary">
            <Link href="/matchings">
              <MessageCircle className="mr-1 sm:mr-2 h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6" />
              メッセージを送る
            </Link>
          </Button>
          <div>
            <h3 className="font-bold my-2">共通の趣味</h3>
            <Badge variant="secondary" className="p-2 m-1">
              旅行
            </Badge>
            <Badge variant="secondary" className="p-2 m-1">
              料理
            </Badge>
            <Badge variant="secondary" className="p-2 m-1">
              映画鑑賞
            </Badge>
          </div>
        </div>
      </div>
    </Layout>
  );
}
