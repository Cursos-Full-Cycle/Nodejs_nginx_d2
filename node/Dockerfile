FROM node:19 as builder

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

EXPOSE 3000

CMD [ "node", "index.js" ]


# FROM scratch

# WORKDIR /

# COPY --from=builder /hello /hello

# EXPOSE 8080

# ENTRYPOINT ["/hello"]