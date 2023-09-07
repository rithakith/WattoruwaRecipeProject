FROM node:19-alpine3.15 AS node
WORKDIR /app
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/final /usr/share/nginx/html