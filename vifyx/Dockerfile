FROM node:22.2.0 AS builder
WORKDIR /app
COPY package*.json .
COPY yarn.lock .

RUN npm i -g yarn
RUN yarn
COPY . .

RUN yarn run build

FROM nginx:latest

COPY --from=builder /app/dist /usr/share/nginx/html
COPY .nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]