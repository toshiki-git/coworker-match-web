import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageInput } from '@/components/MessageInput';

interface MessageProps {
  message_id: string;
  question_text: string;
  my_icon_url: string;
  my_answer: string;
  other_icon_url: string;
  other_answer: string;
}

export function Message({
  message_id,
  question_text,
  my_icon_url,
  my_answer,
  other_icon_url,
  other_answer,
}: MessageProps) {
  const [answer, setAnswer] = useState<string>(my_answer);

  return (
    <div className="w-[25rem] sm:w-[40rem] flex flex-col space-y-4 p-4 pb-8 mb-2 border-b border-gray-300">
      <p className="font-bold text-center text-xl">{question_text}</p>
      <div className="flex items-center justify-end space-x-2">
        <div className="bg-green-200 p-4 rounded-lg shadow-md max-w-[13rem] sm:max-w-sm text-right">
          {answer === '' ? (
            <MessageInput message_id={message_id} setAnswer={setAnswer} />
          ) : (
            <p className="text-gray-700">{answer}</p>
          )}
        </div>
        <Avatar>
          <AvatarImage src={my_icon_url} alt="My Icon" />
          <AvatarFallback>my</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-center space-x-2">
        <Avatar className={`${other_answer === '' ? 'opacity-50' : ''}`}>
          <AvatarImage src={other_icon_url} alt="Other Icon" />
          <AvatarFallback>other</AvatarFallback>
        </Avatar>
        <div
          className={`bg-green-200 p-4 rounded-lg shadow-md max-w-[13rem] sm:max-w-sm ${other_answer === '' ? 'opacity-50' : ''}`}
        >
          <p className="text-gray-700">
            {other_answer === '' ? '相手は未回答です' : other_answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Message;
