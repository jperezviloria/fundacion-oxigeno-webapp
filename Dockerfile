# paso 1 compilacion
FROM node:latest

WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package-lock.json ./

COPY . /usr/src/app

RUN npm install

RUN npm install --save moment

CMD ["npm", "start"]
