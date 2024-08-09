import { fetcher } from '@/api/fetcher';
import { ApiError } from '@/components/ApiError';
import { Loading } from '@/components/Loading';
import { GetUserHobbyRes, GetUserRes } from '@/gen/typescript';
import { Layout } from '@/layouts';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useRouter } from 'next/router';
import { Badge } from '@/components/ui/badge';
import useSWR from 'swr';

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
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={userData.avatarUrl} alt="My Icon" />
          <AvatarFallback>my</AvatarFallback>
        </Avatar>
        <p className="font-bold text-lg">{userData.userName}</p>
      </div>
      <div>
        {userHobbies.hobbies.map((hobby) => (
          <Badge className="p-3 m-2" key={hobby.hobbyId}>
            {hobby.hobbyName}
          </Badge>
        ))}
      </div>
    </Layout>
  );
}
