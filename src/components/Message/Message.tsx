import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface MessageProps {
  question_text: string;
  my_icon_url: string;
  my_answer: string;
  other_icon_url: string;
  other_answer: string;
}

export function Message({
  question_text,
  my_icon_url,
  my_answer,
  other_icon_url,
  other_answer,
}: MessageProps) {
  return (
    <div className="w-[40rem] flex flex-col space-y-4 p-4 mb-2">
      <p className="font-bold text-center text-xl">{question_text}</p>
      <div className="flex items-center justify-end space-x-2">
        <div className="bg-green-200 p-4 rounded-lg shadow-md max-w-sm text-right">
          <p className="text-gray-700">{my_answer}</p>
        </div>
        <Avatar>
          <AvatarImage src={my_icon_url} alt="My Icon" />
          <AvatarFallback>my</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src={other_icon_url} alt="Other Icon" />
          <AvatarFallback>other</AvatarFallback>
        </Avatar>
        <div className="bg-green-200 p-4 rounded-lg shadow-md max-w-sm">
          <p className="text-gray-700">{other_answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
