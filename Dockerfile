FROM node:10.16.3

# Create app directory
RUN mkdir /app

# Go to app directory
WORKDIR /app

COPY . /app

RUN yarn 

RUN yarn build

CMD yarn start