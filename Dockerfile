# ビルド用のステージ
FROM node:18-alpine AS build

# 作業ディレクトリの設定
WORKDIR /usr/src/app

# pnpmをグローバルにインストールし、依存関係をインストール
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm@9.1.0 && pnpm install

# アプリケーション全体をコピーしてビルド
COPY . .
RUN pnpm build


# 実行用のステージ
FROM node:18-alpine

# 作業ディレクトリの設定
WORKDIR /usr/src/app

# グローバルにpnpmをインストール
RUN npm install -g pnpm@9.1.0

# ビルドステージからビルド済みの成果物と必要なファイルをコピー
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/package.json ./
COPY --from=build /usr/src/app/pnpm-lock.yaml ./
COPY --from=build /usr/src/app/public ./public

# プロダクション用の依存関係のみインストール
RUN pnpm install --prod --ignore-scripts

# ポートを公開
EXPOSE 3000

# アプリケーションをpnpmで実行
CMD ["pnpm", "start"]