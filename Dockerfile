FROM node:alpine as builder

WORKDIR '/app'

COPY ./client/package.json  ./

RUN npm install

COPY ./client/. .

RUN npm run build


FROM nginx

EXPOSE 80

COPY ./client/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html