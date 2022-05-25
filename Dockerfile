FROM node:current-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install inquirer fs path

COPY .  .

ENV PORT=8080

CMD ["npm", "start"]