FROM node:current

WORKDIR /app

COPY package*.json ./

RUN npm install inquirer fs path

COPY .  .

ENV NODE_PATH=/usr/local/lib/node_modules

CMD ["npm", "start"]