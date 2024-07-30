import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

interface ChoiceCardProps {
  choiceText: string;
  choiceImageUrl: string;
  isSelected: boolean;
  onClick: () => void;
}

export function ChoiceCard({
  choiceText,
  choiceImageUrl,
  isSelected,
  onClick,
}: ChoiceCardProps) {
  return (
    <Card
      onClick={onClick}
      className={`w-[12rem] h-[15rem] cursor-pointer hover:bg-slate-100 ${isSelected ? 'border-4 border-green-500' : ''}`}
    >
      <CardHeader className="text-center">
        <CardTitle>{choiceText}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={choiceImageUrl}
          alt={choiceText}
          width={100}
          height={100}
          className="mx-auto mb-2 h-auto w-auto"
        />
      </CardContent>
    </Card>
  );
}
