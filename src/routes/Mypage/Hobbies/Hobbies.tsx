import { Layout } from '@/layouts';
import { HobbyCheckbox } from '@/components/HobbyCheckbox';

export function HobbiesPage() {
  return (
    <Layout>
      <h1>Hobbies</h1>
      <p>What are your hobbies?</p>
      <HobbyCheckbox id="terms" label="バックエンド開発" />
    </Layout>
  );
}
