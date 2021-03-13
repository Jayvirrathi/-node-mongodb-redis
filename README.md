# REST API with Node.js, MongoDB, JWT (token & refreshToken) & Redis

> Node.js project

## Build Setup

```bash
# install dependencies
npm install

# serve at http://localhost:4000/

npm run dev
```

## Prerequisites

- Nodejs
- MongoDB
- Redis

## view redis data

[redis-commander](https://www.npmjs.com/package/redis-commander)

```bash
npm i -g redis-commander
```

```bash

# refreshtoken is stored in redis
# serve at http://localhost:5000/ (Default port 8081)
redis-commander -p 5000
```
