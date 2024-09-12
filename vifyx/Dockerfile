# Стадия сборки
FROM node:20.17.0-alpine as build

# RUN apt update -y && apt upgrade -y

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY ./package.json ./
RUN npm install --verbose

# Копируем остальные файлы и собираем приложение
COPY ./ .
RUN npm run build

# Стадия обслуживания
FROM nginx:stable-alpine

# Копируем собранные файлы в Nginx
COPY --from=build /app/build/ /usr/share/nginx/html

# Опционально, если у тебя есть кастомный конфиг для Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80 (стандартный порт для Nginx)
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
