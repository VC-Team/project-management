FROM node:12-alpine as builder

WORKDIR /app

RUN npm i -g pnpm

COPY package.json /app/package.json
COPY pnpm-lock.yaml /app/pnpm-lock.yaml

RUN pnpm install --silent

ENV NODE_ENV=production

COPY . .

RUN pnpm build

RUN pnpm prune --production

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY config/nginx.conf /etc/nginx/conf.d

ENTRYPOINT ["nginx", "-g", "daemon off;"]