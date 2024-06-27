import useSWR, { mutate } from 'swr';
import { useSession } from 'next-auth/react';
import { Layout } from '@/layouts';
import { Button } from '@/components/ui/button';
import { Message } from '@/components/Message';
import { fetcher, post } from '@/api/fetcher';
import { QuestionCard } from '@/types/QuestionCard';
import { QuestionCardsDialog } from '@/components/QuestionCardsDialog';
import { MainData } from '@/types/Message';
import { useRouter } from 'next/router';
import { ChevronLeft } from 'lucide-react';
import { Confetti } from '@/components/Confetti';
import { Error } from '@/components/Error';
import Image from 'next/image';
import Link from 'next/link';
import { Loading } from '@/components/Loading';

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

  const addQuestion = async (question_card_id: string) => {
    const requestBody = {
      matching_id,
      question_card_id,
    };
    await post('/messages', requestBody);

    // Mutate messages data to revalidate SWR
    mutate(`/messages?matching_id=${matching_id}`);
    mutate(`/question_cards?matching_id=${matching_id}`);
  };

  if (error) return <Error />;
  if (!questionCardsData) return <Loading />;

  const filteredQuestionCards =
    questionCardsData?.question_cards.slice(0, -1) ?? [];
  const lastQuestionCard = questionCardsData?.question_cards.slice(-1)[0];

  return (
    <Layout>
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
              {messages?.match_user.user_name} さんとマッチングしました。
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
            questionCards={filteredQuestionCards}
            addQuestion={addQuestion}
          />
          <Confetti disable={lastQuestionCard?.is_used}>
            <Button
              onClick={() =>
                addQuestion(lastQuestionCard?.question_card_id ?? '')
              }
              className="flex bg-white border-2 border-green-500 hover:bg-slate-100"
              disabled={lastQuestionCard?.is_used}
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
    </Layout>
  );
}
