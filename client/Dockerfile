FROM node:22-alpine3.19

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm ci

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]