FROM node:10-slim

ENV NODE_ENV=production

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --production

COPY ./dist ./dist

RUN npm run build
CMD ["npm", "run", "start:prod"]
