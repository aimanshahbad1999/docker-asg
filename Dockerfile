FROM node:alpine3.10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g npm@7.5.2

RUN npm install mysql --save

COPY . .

EXPOSE 8087

CMD [ "npm", "start" ]