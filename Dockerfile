FROM node:alpine3.10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8087
CMD [ "npm", "start" ]

