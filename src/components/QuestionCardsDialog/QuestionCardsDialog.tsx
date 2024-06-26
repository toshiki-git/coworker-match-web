import { useState, useRef, useEffect } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { QuestionCard } from '@/types/QuestionCard';

interface QuestionCardsDialogProps {
  questionCards: QuestionCard[];
  addQuestion: (question: string) => void;
}

export function QuestionCardsDialog({
  questionCards,
  addQuestion,
}: QuestionCardsDialogProps) {
  const [isDisabled, setIsDisabled] = useState<boolean[]>([]);
  const dialogCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsDisabled(questionCards.map((card) => card.is_used));
  }, [questionCards]);

  const handleAddQuestion = (index: number, questionCardId: string) => {
    addQuestion(questionCardId);
    setIsDisabled((prev) => {
      const newDisabled = [...prev];
      newDisabled[index] = true;
      return newDisabled;
    });
    dialogCloseRef.current?.click();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>+ 質問を追加する</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>質問を追加する</DialogTitle>
          <DialogDescription>
            追加したい質問を選んでください。
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-4 mt-4">
          {questionCards.map((questionCard, index) => (
            <Button
              key={questionCard.question_card_id}
              onClick={() =>
                handleAddQuestion(index, questionCard.question_card_id)
              }
              disabled={isDisabled[index]}
              className="text-left p-4 rounded-lg shadow-md"
            >
              {questionCard.question_card_text}
            </Button>
          ))}
        </div>
        <DialogFooter className="sm:justify-start mt-4">
          <DialogClose asChild>
            <Button type="button" variant="secondary" ref={dialogCloseRef}>
              閉じる
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
