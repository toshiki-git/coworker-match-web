import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const questions = [
  {
    question_id: '1',
    question_text: 'あなたの出身地はどこですか？',
    choice1: {
      choice_text: '東京',
      choice_image_url: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
    },
    choice2: {
      choice_text: '大阪',
      choice_image_url: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
    },
  },
  {
    question_id: '2',
    question_text: 'あなたの職種は？',
    choice1: {
      choice_text: 'エンジニア',
      choice_image_url: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
    },
    choice2: {
      choice_text: 'デザイナー',
      choice_image_url: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
    },
  },
  {
    question_id: '3',
    question_text: '好きな趣味は何ですか？',
    choice1: {
      choice_text: 'ゲーム',
      choice_image_url: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
    },
    choice2: {
      choice_text: 'ランニング',
      choice_image_url: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
    },
  },
  {
    question_id: '4',
    question_text: '好きな食べ物は？',
    choice1: {
      choice_text: '寿司',
      choice_image_url: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
    },
    choice2: {
      choice_text: 'ピザ',
      choice_image_url: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
    },
  },
  {
    question_id: '5',
    question_text: '週末に何をしますか？',
    choice1: {
      choice_text: '映画を見る',
      choice_image_url: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
    },
    choice2: {
      choice_text: '旅行する',
      choice_image_url: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
    },
  },
];

export function QuestionsPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const router = useRouter();

  const handleChoiceClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      router.push('/matching');
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">{currentQuestion.question_text}</h1>
        <p className="text-sm">{currentQuestionIndex + 1}/5</p>
      </div>
      <div className="flex space-x-4">
        <div
          className="border p-4 rounded-lg cursor-pointer"
          onClick={handleChoiceClick}
        >
          <Image
            src={currentQuestion.choice1.choice_image_url}
            alt={currentQuestion.choice1.choice_text}
            width={50}
            height={50}
          />
          <p>{currentQuestion.choice1.choice_text}</p>
        </div>
        <div
          className="border p-4 rounded-lg cursor-pointer"
          onClick={handleChoiceClick}
        >
          <Image
            src={currentQuestion.choice2.choice_image_url}
            alt={currentQuestion.choice2.choice_text}
            width={50}
            height={50}
          />
          <p>{currentQuestion.choice2.choice_text}</p>
        </div>
      </div>
      <div className="mt-6">
        {currentQuestionIndex > 0 && (
          <button
            onClick={handlePreviousQuestion}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            前の質問に戻る
          </button>
        )}
      </div>
    </div>
  );
}
