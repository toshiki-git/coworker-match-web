import { useRef } from 'react';
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
  const dialogCloseRef = useRef<HTMLButtonElement>(null);

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
          {questionCards.map((questionCard) => (
            <Button
              key={questionCard.question_card_id}
              onClick={() => {
                addQuestion(questionCard.question_card_id);
                dialogCloseRef.current?.click();
              }}
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
