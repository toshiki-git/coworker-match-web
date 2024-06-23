import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

interface ChoiceCardProps {
  choice_text: string;
  choice_image_url: string;
  isSelected: boolean;
  onClick: () => void;
}

export function ChoiceCard({
  choice_text,
  choice_image_url,
  isSelected,
  onClick,
}: ChoiceCardProps) {
  return (
    <Card
      onClick={onClick}
      className={`w-[12rem] h-[15rem] cursor-pointer hover:bg-slate-100 ${isSelected ? 'border-4 border-green-500' : ''}`}
    >
      <CardHeader className="text-center">
        <CardTitle>{choice_text}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={choice_image_url}
          alt={choice_text}
          width={100}
          height={100}
          className="mx-auto mb-2"
        />
      </CardContent>
    </Card>
  );
}
