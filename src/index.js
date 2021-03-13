import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';

const createError = require('http-errors');
dotenv.config();
require('./helpers/init_mongodb');
const { verifyAccessToken } = require('./helpers/jwt_helper');
require('./helpers/init_redis');

const AuthRoute = require('./Routes/Auth.route');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.get('/', verifyAccessToken, async (req, res, next) => {
  res.send('Hello from express.');
});

app.use('/auth', AuthRoute);

app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
