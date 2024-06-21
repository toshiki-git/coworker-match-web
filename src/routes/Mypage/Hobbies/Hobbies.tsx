import useSWR from 'swr';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/layouts';
import { HobbyCheckbox } from '@/components/HobbyCheckbox';
import { Button } from '@/components/ui/button';

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Hobby {
  hobby_id: string;
  hobby_name: string;
}

interface HobbiesData {
  indoor: Hobby[];
  games: Hobby[];
  technicalHobbies: Hobby[];
  sports: Hobby[];
  outdoor: Hobby[];
  music: Hobby[];
}

export function HobbiesPage() {
  const router = useRouter();
  const { data, error } = useSWR<HobbiesData>('/hobbies', fetcher);
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);

  if (error) return <div>Failed to load hobbies</div>;
  if (!data) return <div>Loading...</div>;

  // Categorize hobbies
  const categories = {
    indoor: 'インドア',
    games: 'ゲーム',
    technicalHobbies: '技術的趣味',
    sports: 'スポーツ',
    outdoor: 'アウトドア',
    music: '音楽',
  };

  // Group hobbies by category
  const groupedHobbies = Object.keys(categories).reduce(
    (acc, key) => {
      acc[key] = data[key as keyof HobbiesData];
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

  const handleRegister = () => {
    //TODO: 趣味登録するAPIを呼び出す
    router.push('/mypage');
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
                />
              ))}
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-8 ">
          <Button onClick={() => handleRegister()} className="w-28">
            登録
          </Button>
        </div>
      </div>
    </Layout>
  );
}
