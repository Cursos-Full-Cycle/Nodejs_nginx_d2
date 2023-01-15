FROM node:19-alpine as builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./

RUN npm ci --only=production

RUN apk add --no-cache openssl


FROM node:19-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app ./

EXPOSE 3000

CMD [ "node", "index.js" ]