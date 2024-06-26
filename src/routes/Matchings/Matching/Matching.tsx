import { useState } from 'react';
import useSWR, { mutate } from 'swr';
import { useSession } from 'next-auth/react';
import { Layout } from '@/layouts';
import { Button } from '@/components/ui/button';
import { Message } from '@/components/Message';
import { fetcher } from '@/api/fetcher';
import { QuestionCard } from '@/types/QuestionCard';
import { QuestionCardsDialog } from '@/components/QuestionCardsDialog';
import { MainData, Message as MessageType } from '@/types/Message';
import { useRouter } from 'next/router';
import { getCookie } from '@/utils/cookie';

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export function MatchingPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const { matching_id } = router.query;
  const { data: messages, error } = useSWR<MainData>(
    `/messages?matching_id=${matching_id}`,
    fetcher
  );
  const { data: questionCardsData } = useSWR<{
    question_cards: QuestionCard[];
  }>(`/question_cards?matching_id=${matching_id}`, fetcher);
  const [questions, setQuestions] = useState<MessageType[]>([]);

  const addQuestion = async (question_card_id: string) => {
    try {
      const requestBody = {
        matching_id: matching_id,
        question_card_id: question_card_id,
      };

      // API call to add question
      const response = await fetch(`${apiURL}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getCookie('cwm-token')}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Failed to add question');
      }

      const newQuestion = await response.json();

      // Update questions state
      setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);

      // Mutate messages data to revalidate SWR
      mutate(`/messages?matching_id=${matching_id}`);
    } catch (error) {
      console.error(error);
    }
  };

  if (error) {
    return (
      <Layout>
        <main className="flex flex-col items-center mt-10">
          <div className="mb-5 text-center text-red-500">
            エラーが発生しました。もう一度お試しください。
          </div>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="flex flex-col items-center mt-10">
        <div className="mb-5 font-bold">
          {messages?.messages ? (
            <>
              <p className="block sm:inline">
                {messages.match_user.user_name} さんとマッチングしました。
              </p>
              <p className="block sm:inline text-center">
                さっそく質問を追加してみましょう。
              </p>
            </>
          ) : (
            <p className="block sm:inline text-center">
              データが見つかりませんでした。もう一度お試しください。
            </p>
          )}
        </div>
        {!messages && questions.length === 0 && (
          <div className="mb-5 text-center text-gray-500">
            まだ質問がありません。「質問を追加する」ボタンをクリックして質問を追加してください。
          </div>
        )}
        <div>
          {messages?.messages?.map((message, index) => (
            <div key={index} className="mb-6">
              <Message
                message_id={message.message_pair.me.message_id}
                question_text={message.question_text}
                my_icon_url={session?.user?.image as string}
                my_answer={message.message_pair.me.message_text}
                other_icon_url={messages.match_user.avatar_url}
                other_answer={message.message_pair.you.message_text}
              />
            </div>
          ))}
        </div>
        <div className="flex space-x-4 my-4">
          <QuestionCardsDialog
            questionCards={questionCardsData?.question_cards ?? []}
            addQuestion={addQuestion}
          />
          <Button>LINE友達登録する</Button>
        </div>
      </main>
    </Layout>
  );
}
