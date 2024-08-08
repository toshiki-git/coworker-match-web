import { fetcher } from '@/api/fetcher';
import { ApiError } from '@/components/ApiError';
import { Loading } from '@/components/Loading';
import { GetUserHobbyResponseInner, GetUserResponse } from '@/gen/typescript';
import { Layout } from '@/layouts';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useRouter } from 'next/router';
import { Badge } from '@/components/ui/badge';
import useSWR from 'swr';

export function ProfilePage() {
  const router = useRouter();
  const { userId } = router.query;
  const { data: userData, error: userDataError } = useSWR<GetUserResponse>(
    `/users/${userId}`,
    fetcher
  );
  const { data: userHobbies, error: userHobbiesError } = useSWR<
    GetUserHobbyResponseInner[]
  >(`/user-hobbies/${userId}`, fetcher);

  if (userDataError) return <ApiError error={userDataError} />;
  if (userHobbiesError) return <ApiError error={userHobbiesError} />;

  if (!userData || !userHobbies) return <Loading />;

  return (
    <Layout>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={userData.user.avatarUrl} alt="My Icon" />
          <AvatarFallback>my</AvatarFallback>
        </Avatar>
        <p className="font-bold text-lg">{userData.user.userName}</p>
      </div>
      <div>
        {userHobbies.map((hobby) => (
          <Badge className="p-3 m-2" key={hobby.hobbyId}>
            {hobby.hobbyName}
          </Badge>
        ))}
      </div>
    </Layout>
  );
}
