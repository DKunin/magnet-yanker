FROM node:8-alpine

EXPOSE 3739

ENV NODE_ENV=production

WORKDIR /src

COPY package.json /src/package.json
COPY package-lock.json /src/package-lock.json

RUN npm install

COPY config /src/config
COPY index.js /src/index.js
COPY util /src/util

CMD ["node", "index.js"]