FROM node:10-alpine

RUN apk --update add --no-cache dumb-init

WORKDIR /contentfulExample

COPY internals internals
COPY package.json .
COPY yarn.lock .
RUN yarn install --production=false

COPY app app
COPY babel.config.js .
COPY server server
RUN yarn build

EXPOSE 3000

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["yarn", "run", "start:prod"]
