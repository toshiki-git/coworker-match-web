import { Layout } from '@/layouts';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import { CustomApiError } from '@/types/ApiError';

interface ApiErrorProps {
  error: CustomApiError;
}

const getErrorMessage = (statusCode: number | undefined): string => {
  switch (statusCode) {
    case 400:
      return 'APIリクエストが無効です。必須のパラメータが欠如しているか、パラメータの形式が正しくない可能性があります。';
    case 401:
      return 'API認証に失敗しました。認証トークンが提供されていないか、トークンが無効である可能性があります。再度ログインしてください。';
    case 403:
      return 'APIアクセスが禁止されています。アクセス権がないため、このリソースにアクセスできません。';
    case 404:
      return '指定されたAPIエンドポイントが見つかりません。URLが間違っているか、リソースが存在しない可能性があります。';
    case 500:
      return 'APIサーバーエラーが発生しました。サーバー内部で予期しないエラーが発生しました。しばらくしてから再度お試しください。';
    case 503:
      return 'APIサービスが利用できません。サーバーが現在メンテナンス中であるか、過負荷状態にある可能性があります。しばらくしてから再度お試しください。';
    default:
      return 'APIエラーが発生しました。しばらくしてから再度お試しください。';
  }
};

export function ApiError({ error }: ApiErrorProps) {
  //TODO: production環境ではconsole.error()を削除する
  console.error(error);
  const message = getErrorMessage(error.status);
  return (
    <Layout>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-2xl font-bold">
          エラー {error.status}: {error.statusText}
        </h1>
        <p className="mt-4 text-lg">{message}</p>
        <div className="flex justify-center mt-4">
          <Button className="text-center" onClick={() => signOut()}>
            ログアウト
          </Button>
        </div>
      </div>
    </Layout>
  );
}
