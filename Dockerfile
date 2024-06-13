FROM node:18.17.1-alpine

WORKDIR /web

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm@9.1.0 && pnpm install

COPY . .

RUN pnpm run build