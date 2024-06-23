import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from '@/components/ui/use-toast';

const FormSchema = z.object({
  message: z.string().min(1, {
    message: '回答を入力してください。',
  }),
});

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
  const [answer, setAnswer] = useState(my_answer);

  const handleAnswerSubmit = async (answer: string) => {
    try {
      await fetch(`/messages/${message_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ my_answer: answer }),
      });
      setAnswer(answer);
    } catch (error) {
      console.error('Error updating answer:', error);
    }
  };

  function InputForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
    });

    const onSubmit = (data: z.infer<typeof FormSchema>) => {
      toast({
        title: 'メッセージが送信されました',
      });
      handleAnswerSubmit(data.message);
    };

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full max-w-sm items-center space-x-2"
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="回答を入力してください" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">送信</Button>
        </form>
      </Form>
    );
  }

  return (
    <div className="w-[40rem] flex flex-col space-y-4 p-4 mb-2">
      <p className="font-bold text-center text-xl">{question_text}</p>
      <div className="flex items-center justify-end space-x-2">
        <div className="bg-green-200 p-4 rounded-lg shadow-md max-w-sm text-right">
          {answer === '' ? (
            <InputForm />
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
        <Avatar>
          <AvatarImage src={other_icon_url} alt="Other Icon" />
          <AvatarFallback>other</AvatarFallback>
        </Avatar>
        <div className="bg-green-200 p-4 rounded-lg shadow-md max-w-sm">
          <p className="text-gray-700">
            {other_answer === '' ? '相手は未回答です' : other_answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Message;
