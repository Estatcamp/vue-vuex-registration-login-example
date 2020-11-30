FROM estat/node
LABEL author="estat"
LABEL project="login"

WORKDIR /usr/src

COPY package.json .
COPY .babelrc .

RUN [ "npm", "install" ]

COPY . .

EXPOSE 8080
