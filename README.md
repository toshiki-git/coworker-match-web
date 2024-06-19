# CoWorkerMatch-web

## 概要

CoWorkerMatchは、内定者をマッチングさせるためのWebアプリケーションです。
フロントエンドのリポジトリです。

## セットアップ

### 前提条件

- Node.js >= v18.17.1
- pnpm >= v9.1.0

pnpmがインストールされていない場合は以下のコマンドでインストール：

```bash
npm install -g pnpm@9.1.0
```

### クローン

リポジトリをクローンする。

```bash
git clone https://github.com/HackU-2024-team3/CoWorkerMatch-web.git
cd CoWorkerMatch-web
```

### .env.localの作成

.env.local.exampleを参考にして, .env.localを作成してください。

### 開発サーバーの起動

```bash
pnpm install
pnpm dev
```

ローカルで開発サーバーが起動し、`http://localhost:3000`でアプリケーションにアクセスできます。

### Dockerを使った起動方法

Dockerを使って、起動することもできます。
プロジェクトのルートディレクトリで以下のコマンドを実行してください。

```bash
docker-compose build
docker-compose up
```

ローカルでサーバーが起動し、`http://localhost:3000`でアプリケーションにアクセスできます。

## 使用技術

- TypeScript 5
- Next.js 14.2.3 (Pages Router)
- React 18
- Tailwind CSS 3.4.1
