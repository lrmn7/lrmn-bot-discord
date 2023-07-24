FROM node:18-slim

USER root

RUN apt-get update && apt-get install -y python3 make g++ --fix-missing

USER node

WORKDIR /app/

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "src/index.js"]
