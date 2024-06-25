import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/layouts';
import { HobbyCheckbox } from '@/components/HobbyCheckbox';
import { Button } from '@/components/ui/button';
import { HobbiesWithCategory, Hobby } from '@/types/Hobby';
import { Plus } from 'lucide-react';
import { fetcher } from '@/api/fetcher';

export function HobbiesPage() {
  const router = useRouter();
  const userId = 'user-id-placeholder'; // ここを適切なユーザーIDに置き換える
  const { data: allHobbies, error: hobbiesError } = useSWR<HobbiesWithCategory>(
    '/hobbies',
    fetcher
  );
  const { data: userHobbies, error: userHobbiesError } = useSWR<Hobby[]>(
    `/user_hobbies/${userId}`,
    fetcher
  );
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);

  useEffect(() => {
    if (userHobbies) {
      setSelectedHobbies(userHobbies.map((hobby) => hobby.hobby_id));
    }
  }, [userHobbies]);

  if (hobbiesError || userHobbiesError)
    return <div>Failed to load hobbies</div>;
  if (!allHobbies || !userHobbies) return <div>Loading...</div>;

  const categories = {
    indoor: 'インドア',
    games: 'ゲーム',
    technicalHobbies: '技術的趣味',
    sports: 'スポーツ',
    outdoor: 'アウトドア',
    music: '音楽',
  };

  const groupedHobbies = Object.keys(categories).reduce(
    (acc, key) => {
      acc[key] = allHobbies ? allHobbies[key as keyof HobbiesWithCategory] : [];
      return acc;
    },
    {} as Record<string, Hobby[]>
  );

  const handleCheckboxChange = (id: string) => {
    setSelectedHobbies((prev) =>
      prev.includes(id)
        ? prev.filter((hobbyId) => hobbyId !== id)
        : [...prev, id]
    );
  };

  const handleRegister = async () => {
    try {
      const response = await fetch(`/user_hobbies/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ hobby_ids: selectedHobbies }),
      });

      /* if (!response.ok) {
        throw new Error('Failed to update hobbies');
      } */

      router.push('/mypage');
    } catch (error) {
      console.error('Failed to update hobbies', error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-4">
          あなたの趣味を教えてください
        </h1>
        <p className="text-center mb-8">Tell us about your hobbies</p>
        {Object.keys(groupedHobbies).map((category) => (
          <div key={category} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              {categories[category as keyof typeof categories]}
            </h2>
            <div className="flex flex-wrap gap-2">
              {groupedHobbies[category].map((hobby) => (
                <HobbyCheckbox
                  key={hobby.hobby_id}
                  id={hobby.hobby_id}
                  label={hobby.hobby_name}
                  onChange={() => handleCheckboxChange(hobby.hobby_id)}
                  initialChecked={selectedHobbies.includes(hobby.hobby_id)}
                />
              ))}
              <Button size="icon">
                <Plus />
              </Button>
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
