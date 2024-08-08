import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/layouts';
import { HobbyCheckbox } from '@/components/HobbyCheckbox';
import { Button } from '@/components/ui/button';
import {
  GetHobbyResponseInner,
  Hobby,
  UpdateUserHobbyRequest,
} from '@/gen/typescript';
import { Plus } from 'lucide-react';
import { fetcher, put } from '@/api/fetcher';
import { useSession } from 'next-auth/react';
import { UnimplementedDropdown } from '@/components/UnimplementedDropdown';
import { toast } from '@/components/ui/use-toast';
import { Loading } from '@/components/Loading';
import { ApiError } from '@/components/ApiError';

export function HobbiesPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const userId = session?.userId;
  const { data: allHobbies, error: hobbiesError } = useSWR<
    GetHobbyResponseInner[]
  >('/hobbies', fetcher);
  const { data: userHobbies, error: userHobbiesError } = useSWR<Hobby[]>(
    userId ? `/user-hobbies/${userId}` : null,
    fetcher
  );
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);

  useEffect(() => {
    if (userHobbies) {
      setSelectedHobbies(userHobbies.map((hobby) => hobby.hobbyId));
    }
  }, [userHobbies]);

  if (hobbiesError) return <ApiError error={hobbiesError} />;
  if (userHobbiesError) return <ApiError error={userHobbiesError} />;

  if (!allHobbies || !userHobbies) return <Loading />;

  const handleCheckboxChange = (id: string) => {
    setSelectedHobbies((prev) =>
      prev.includes(id)
        ? prev.filter((hobbyId) => hobbyId !== id)
        : [...prev, id]
    );
  };

  const handleRegister = async () => {
    try {
      const requestBody: UpdateUserHobbyRequest = {
        hobbyIds: selectedHobbies,
      };
      await put('/user-hobbies', requestBody);
      toast({
        title: '趣味の登録が完了しました！',
      });
      router.push('/mypage');
    } catch (error) {
      toast({
        variant: 'destructive',
        title: '趣味の登録に失敗しました',
      });
    }
  };

  return (
    <Layout>
      <div className="px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-4">
          あなたの趣味を教えてください
        </h1>
        <p className="text-center mb-8">Tell us about your hobbies</p>
        {allHobbies.map((hobbies) => (
          <div key={hobbies.categoryId} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              {hobbies.categoryName}
            </h2>
            <div className="flex flex-wrap gap-2">
              {hobbies.hobbies.map((hobby) => (
                <HobbyCheckbox
                  key={hobby.hobbyId}
                  id={hobby.hobbyId}
                  label={hobby.hobbyName}
                  onChange={() => handleCheckboxChange(hobby.hobbyId)}
                  initialChecked={selectedHobbies.includes(hobby.hobbyId)}
                />
              ))}
              <UnimplementedDropdown text="この機能は未実装です。">
                <Button size="icon">
                  <Plus />
                </Button>
              </UnimplementedDropdown>
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-8">
          <Button onClick={() => handleRegister()} className="w-28">
            登録
          </Button>
        </div>
      </div>
    </Layout>
  );
}
