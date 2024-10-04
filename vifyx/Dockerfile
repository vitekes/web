# FRONT
FROM node:22.2.0 AS builder
WORKDIR /app

COPY package*.json .

RUN npm install
COPY . .

EXPOSE 80

RUN npm run build

# NGINX
FROM nginx:latest

COPY --from=builder /app/dist /usr/share/nginx/html
COPY .nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]