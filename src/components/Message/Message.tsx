import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageInput } from '@/components/MessageInput';

interface MessageProps {
  messageId: string;
  questionText: string;
  myIconUrl: string;
  myAnswer: string;
  otherIconUrl: string;
  otherAnswer: string;
}

export function Message({
  messageId,
  questionText,
  myIconUrl,
  myAnswer,
  otherIconUrl,
  otherAnswer,
}: MessageProps) {
  const [answer, setAnswer] = useState<string>(myAnswer);

  return (
    <div className="w-[25rem] sm:w-[40rem] flex flex-col space-y-4 p-4 pb-8 mb-2 border-b border-gray-300">
      <p className="font-bold text-center text-xl">{questionText}</p>
      <div className="flex items-center justify-end space-x-2">
        <div className="bg-green-200 p-4 rounded-lg shadow-md max-w-[13rem] sm:max-w-sm text-right">
          {answer === '' ? (
            <MessageInput messageId={messageId} setAnswer={setAnswer} />
          ) : (
            <p className="text-gray-700">{answer}</p>
          )}
        </div>
        <Avatar>
          <AvatarImage src={myIconUrl} alt="My Icon" />
          <AvatarFallback>my</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-center space-x-2">
        <Avatar className={`${otherAnswer === '' ? 'opacity-50' : ''}`}>
          <AvatarImage src={otherIconUrl} alt="Other Icon" />
          <AvatarFallback>other</AvatarFallback>
        </Avatar>
        <div
          className={`bg-green-200 p-4 rounded-lg shadow-md max-w-[13rem] sm:max-w-sm ${otherAnswer === '' ? 'opacity-50' : ''}`}
        >
          <p className="text-gray-700">
            {otherAnswer === '' ? '相手は未回答です' : otherAnswer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Message;
