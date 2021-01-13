# Building app
FROM node:12-alpine as build

WORKDIR /usr/app

ENV API="development"
ENV NODE_ENV="production"
ENV PORT="80"

COPY package.json .
COPY tsconfig.json .
COPY tsconfig.server.json .

COPY . .

RUN npm cache clean --force
RUN npm install
RUN npm install pm2 -g
RUN npm run build


# Starting NGINX

FROM nginx

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/app/out /usr/share/nginx/html
