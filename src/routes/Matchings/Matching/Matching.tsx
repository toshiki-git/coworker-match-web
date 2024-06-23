import { useState, useRef } from 'react';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { Layout } from '@/layouts';
import { Button } from '@/components/ui/button';
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
import { Message } from '@/components/Message';
import { fetcher } from '@/api/fetcher';
import { MessageType } from '@/types/Message';
import { QuestionCardType } from '@/types/QuestionCard';

export function MatchingPage() {
  const { data: session } = useSession();
  const { data: messages, error } = useSWR<MessageType[]>(
    '/messages/matching_id', //TODO: matching_idを適切に設定する
    fetcher
  );
  const { data: questionCards } = useSWR<QuestionCardType[]>(
    '/question_cards/matching_id', //TODO: matching_idを適切に設定する
    fetcher
  );
  const [questions, setQuestions] = useState<string[]>([]);
  const dialogCloseRef = useRef<HTMLButtonElement>(null);

  const addQuestion = (question: string) => {
    setQuestions([...questions, question]);
    dialogCloseRef.current?.click();
  };

  return (
    <Layout>
      <main className="flex flex-col items-center mt-10">
        <div className="mb-5">
          Aさんとマッチングしました。さっそく質問を追加してみましょう。
        </div>
        {messages?.length === 0 && (
          <div className="mb-5 text-center text-gray-500">
            まだ質問がありません。「質問を追加する」ボタンをクリックして質問を追加してください。
          </div>
        )}
        <div>
          {messages?.map((message, index) => (
            <div key={index} className="mb-6">
              <Message
                question_text={message.question_text}
                my_icon_url={session?.user?.image as string}
                my_answer={message.my_answer}
                other_icon_url={message.other_icon_url}
                other_answer={message.other_answer}
              />
            </div>
          ))}
        </div>

        <div className="flex space-x-4 mt-10">
          <Dialog>
            <DialogTrigger asChild>
              <Button>質問を追加する</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>質問を追加する</DialogTitle>
                <DialogDescription>
                  追加したい質問を選んでください。
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 gap-4 mt-4">
                {questionCards?.map((questionCard) => (
                  <Button
                    key={questionCard.question_card_id}
                    onClick={() => addQuestion(questionCard.question_text)}
                    className="text-left p-4 rounded-lg shadow-md"
                  >
                    {questionCard.question_text}
                  </Button>
                ))}
              </div>
              <DialogFooter className="sm:justify-start mt-4">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="secondary"
                    ref={dialogCloseRef}
                  >
                    閉じる
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button>LINE友達登録する</Button>
        </div>
      </main>
    </Layout>
  );
}
