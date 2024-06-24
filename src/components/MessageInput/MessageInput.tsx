import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';

const FormSchema = z.object({
  message: z.string().trim().min(1, {
    message: '回答を入力してください。',
  }),
});

interface MessageInputProps {
  message_id: string;
  setAnswer: (answer: string) => void;
}

export function MessageInput({ message_id, setAnswer }: MessageInputProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

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
