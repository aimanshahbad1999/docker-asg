FROM node:alpine3.10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000


# EXPOSE 3333


CMD [ "npm", "start" ]




