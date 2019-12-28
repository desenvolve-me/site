FROM node:10.16.3

# Create app directory
RUN mkdir /app

# Go to app directory
WORKDIR /app

COPY . /app

RUN npm install

CMD npm start