FROM node:16.13.0-alpine

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . ./

CMD npm start
