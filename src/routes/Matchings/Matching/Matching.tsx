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
import { useState, useEffect } from 'react';
import Modal from '@/components/ui/modal';

export function MatchingPage() {
  const { data: session } = useSession();
  const router = useRouter();

  // 初めて訪れたかどうかのフラグを取得を追加
  const { matching_id, firstVisit } = router.query;

  const { data: messages, error } = useSWR<MainData>(
    `/messages?matching_id=${matching_id}`,
    fetcher
  );
  const { data: questionCardsData } = useSWR<{
    question_cards: QuestionCard[];
  }>(`/question_cards?matching_id=${matching_id}`, fetcher);

  // ====================================
  // マッチング成立モーダル: 処理
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // URLパラメータ firstVisit が 'true' の文字列と一致する場合のみモーダルを開く
    if (firstVisit === 'true') {
      setIsModalOpen(true);
    }
  }, [firstVisit]);
  // ====================================

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
      {/* マッチング成立モーダル */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <style>{`
    @keyframes floatUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .modal-container {
      animation: floatUp 0.8s ease-out forwards;
      text-align: center;
    }

    .user-name {
      font-size: 1.8rem;
      font-weight: 520;
      color: #333;
      margin-bottom: 20px;
    }

    .hobbies-list {
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 30px;
    }

    .hobby-item {
      background-color: #e0f7fa;
      margin: 5px 8px;
      padding: 3px 10px;
      border-radius: 20px;
      font-size: 0.8rem;
      color: #00796b;
      display: inline-block;
      white-space: nowrap;
    }

    .more-indicator {
      font-size: 0.8rem;
      color: #00796b;
      margin-left: 5px;
    }

    .button-style {
      background-color: #ff4081;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 24px;
      cursor: pointer;
      font-size: 1rem;
      margin: 5px auto 0;
      display: block;
    }

  `}</style>
        {messages && (
          <div className="modal-container">
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '15px 0',
              }}
            >
              マッチ相手が見つかりました!!
            </h2>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <img
                src={messages?.match_user.avatar_url as string}
                alt="My Avatar"
                style={{ borderRadius: '50%', width: '60px', height: '60px' }}
              />
            </div>
            <div className="user-name">
              {messages?.match_user.user_name}
              <span> さん</span>
            </div>
            {messages?.match_user.hobbies &&
              messages.match_user.hobbies.length > 0 && (
                <ul className="hobbies-list">
                  {messages.match_user.hobbies
                    .slice(0, 10)
                    .map((hobby, index) => (
                      <li key={index} className="hobby-item">
                        {hobby}
                      </li>
                    ))}
                  {messages.match_user.hobbies.length > 10 && (
                    <span className="more-indicator">...</span>
                  )}
                </ul>
              )}
            <button
              className="button-style"
              onClick={() => setIsModalOpen(false)}
            >
              さっそく質問スタート！
            </button>
          </div>
        )}
      </Modal>
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
