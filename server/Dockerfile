FROM node:22-alpine3.19

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm ci

COPY . /app

EXPOSE 3000

CMD [ "npm", "run", "start" ]