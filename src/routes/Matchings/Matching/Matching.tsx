import { useState, useRef } from 'react';
import { Layout } from '@/layouts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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

export function MatchingPage() {
  const [questions, setQuestions] = useState<string[]>([]);
  const dialogCloseRef = useRef<HTMLButtonElement>(null);

  const questionOptions = [
    '子供の頃の夢はなんですか？',
    'あなたの好きな食べ物は？',
    '旅行に行きたい場所は？',
    '最近読んだ本は？',
    '好きな映画は？',
    '趣味はなんですか？',
    '休日の過ごし方は？',
    '好きな音楽は？',
    'ペットを飼っていますか？',
    '将来の目標は？',
  ];

  const addQuestion = (question: string) => {
    setQuestions([...questions, question]);
    dialogCloseRef.current?.click();
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
        <main className="flex flex-col items-center mt-10">
          <div className="mb-5">
            AさんとBさんがマッチングしました。さっそく質問を追加してみましょう。
          </div>
          {questions.length === 0 && (
            <div className="mb-5 text-center text-gray-500">
              まだ質問がありません。「質問を追加する」ボタンをクリックして質問を追加してください。
            </div>
          )}
          <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
            {questions.map((question, index) => (
              <div key={index} className="mb-6">
                <p className="text-lg font-bold text-left mb-2">
                  質問: {question}
                </p>
                <div className="flex items-center mb-2">
                  <Label className="mr-2">Bさん:</Label>
                  <Input
                    className="flex-1"
                    type="text"
                    placeholder="Bさんの回答を入力"
                  />
                </div>
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
                  {questionOptions.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => addQuestion(option)}
                      className="text-left p-4 rounded-lg shadow-md"
                    >
                      {option}
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
      </div>
    </Layout>
  );
}
