import useSWR, { mutate } from 'swr';
import { useSession } from 'next-auth/react';
import { Layout } from '@/layouts';
import { Button } from '@/components/ui/button';
import { Message } from '@/components/Message';
import { fetcher, post } from '@/api/fetcher';
import {
  GetQuestionCardRes,
  GetMessageRes,
  CreateMessageReq,
  GetMatchingUserRes,
} from '@/gen/typescript';
import { QuestionCardsDialog } from '@/components/QuestionCardsDialog';
import { useRouter } from 'next/router';
import { ChevronLeft } from 'lucide-react';
import { Confetti } from '@/components/Confetti';
import { ApiError } from '@/components/ApiError';
import Image from 'next/image';
import Link from 'next/link';
import { Loading } from '@/components/Loading';
import { toast } from '@/components/ui/use-toast';

export function MatchingPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const { matchingId } = router.query;
  const { data: messages, error: messagesError } = useSWR<GetMessageRes>(
    `/messages/${matchingId}`,
    fetcher
  );
  const { data: questionCardsData, error: questionCardsError } =
    useSWR<GetQuestionCardRes>(`/question-cards/${matchingId}`, fetcher);
  const { data: matchUserData, error: matchUserError } =
    useSWR<GetMatchingUserRes>(`/matchings/${matchingId}`, fetcher);

  const addQuestion = async (questionCardId: string) => {
    const requestBody: CreateMessageReq = {
      questionCardId,
    };
    try {
      await post(`/messages/${matchingId}`, requestBody);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: '質問の追加に失敗しました',
      });
    }

    // Mutate messages data to revalidate SWR
    mutate(`/messages/${matchingId}`);
    mutate(`/question_cards?matching_id=${matchingId}`);
  };

  if (messagesError) return <ApiError error={messagesError} />;
  if (questionCardsError) return <ApiError error={questionCardsError} />;
  if (matchUserError) return <ApiError error={matchUserError} />;

  if (!messages || !questionCardsData || !matchUserData) return <Loading />;

  const filteredQuestionCards = questionCardsData.questionCards.slice(0, -1);
  const lastQuestionCard = questionCardsData.questionCards.slice(-1)[0];

  return (
    <Layout>
      {messages && (
        <main className="flex flex-col items-center mt-10">
          <div className="relative">
            <Link
              className="absolute left-2 -top-7 sm:-left-20 sm:top-0"
              href="/matchings"
            >
              <ChevronLeft />
            </Link>
            <div className="mb-5 font-bold text-center">
              <p className="block sm:inline ">
                {matchUserData.userName}さんとマッチングしました。
              </p>
              <p className="block sm:inline">
                さっそく質問を追加してみましょう。
              </p>
            </div>
            {!messages?.messages && (
              <div className="mb-5 text-center text-gray-500">
                まだ質問がありません。「質問を追加する」ボタンをクリックして質問を追加してください。
              </div>
            )}
            {messages?.messages?.map((message, index) => (
              <div key={index} className="mb-6">
                <Message
                  messageId={message.messagePair.me.messageId}
                  questionText={message.questionCardText}
                  myIconUrl={session?.user?.image as string}
                  myAnswer={message.messagePair.me.messageText}
                  otherIconUrl={matchUserData.avatarUrl}
                  otherAnswer={message.messagePair.you.messageText}
                />
              </div>
            ))}
          </div>
          <div className="flex space-x-4 my-4">
            <QuestionCardsDialog
              questionCards={filteredQuestionCards}
              addQuestion={addQuestion}
            />
            <Confetti disable={lastQuestionCard.isUsed}>
              <Button
                onClick={() => addQuestion(lastQuestionCard.questionCardId)}
                className="flex bg-white border-2 border-green-500 hover:bg-slate-100"
                disabled={lastQuestionCard.isUsed}
              >
                <Image
                  src="/LINE_Brand_icon.png"
                  width={24}
                  height={24}
                  alt="line"
                />
                <p className="text-black ml-2">LINE友達登録する</p>
              </Button>
            </Confetti>
          </div>
        </main>
      )}
    </Layout>
  );
}
