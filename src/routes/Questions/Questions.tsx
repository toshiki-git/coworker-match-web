import { useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Layout } from '@/layouts';
import { fetcher } from '@/api/fetcher';
import { Button } from '@/components/ui/button';
import { ChoiceCard } from '@/components/ChoiceCard';
import { Loading } from '@/components/Loading';
import { Question } from '@/types/Question';

export function QuestionsPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { data, error } = useSWR<Question[]>('/questions', fetcher);

  if (error) return <div>Failed to load questions</div>;
  if (!data) return <div>Loading...</div>;

  const handleChoiceClick = (choiceIndex: number) => {
    const newSelectedChoices = [...selectedChoices];
    newSelectedChoices[currentQuestionIndex] = choiceIndex;
    setSelectedChoices(newSelectedChoices);

    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setLoading(true);
      // 2秒後に次のページに遷移
      setTimeout(() => {
        router.push('/matchings/matching_id'); //TODO: matching_idを指定して遷移
      }, 2000);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = data[currentQuestionIndex];
  const selectedChoice = selectedChoices[currentQuestionIndex];

  if (loading) {
    return <Loading loadingMessage="マッチング中です" />;
  }

  return (
    <Layout>
      <div className="w-full flex flex-col items-center gap-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex gap-9 items-center">
          <div>
            <span className="text-4xl font-bold">
              {currentQuestionIndex + 1}
            </span>
            <span className="text-xl">/{data.length}</span>
          </div>
          <div>
            <p className="text-xl">あなたが友達になりたいのは...</p>
            <p className="text-xl">You want to be friends...</p>
          </div>
        </div>
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">
            {currentQuestion.question_text}
          </h1>
        </div>
        <div className="flex space-x-4">
          <ChoiceCard
            choice_text={currentQuestion.choice1.choice_text}
            choice_image_url={currentQuestion.choice1.choice_image_url}
            isSelected={selectedChoice === 1}
            onClick={() => handleChoiceClick(1)}
          />
          <ChoiceCard
            choice_text={currentQuestion.choice2.choice_text}
            choice_image_url={currentQuestion.choice2.choice_image_url}
            isSelected={selectedChoice === 2}
            onClick={() => handleChoiceClick(2)}
          />
        </div>
        <div className="mt-6">
          {currentQuestionIndex > 0 && (
            <Button onClick={handlePreviousQuestion} className="px-4 py-2">
              ← 前の質問に戻る
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
}
