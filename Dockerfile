FROM node:latest

WORKDIR /usr/src/app

COPY package.json .

RUN npm install -g pm2
RUN npm install

COPY . .

EXPOSE 80

CMD ["pm2-docker", "app.js"]
