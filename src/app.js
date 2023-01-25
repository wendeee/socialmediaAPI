const express = require('express');
const helmet = require('helmet');
const { rateLimit } = require('express-rate-limit');
const cors = require('cors');
const logger = require('./api/logger/logger');
const httpLogger = require('./api/logger/httpLogger');
const userRouter = require('./api/routes/user.routes');
const userAuthRouter = require('./api/routes/user.auth.route');
const postRouter = require('./api/routes/post.routes');
const repostRouter = require('./api/routes/repost.routes');
const globalErrorCatch = require('./api/utils/globalErrorCatch');
const app = express();
require('dotenv').config();

if (process.env.NODE_ENV === 'development') {
  app.use(httpLogger);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configure rate limit obj
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

//security middleware
app.use(helmet());

//use rate limit
app.use(limiter);

app.use(cors());

app.use('/api/auth', userAuthRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/posts', repostRouter);

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message:
      'This is the home page of LinkUp API. You can test out endpoints listed in the documentation.',
    docUrl: 'https://github.com/wendeee/socialmediaAPI#readme',
  });
});

//Error handler to catch non-registered route
app.use('*', (req, res, next) => {
  const err = new Error(`${req.originalUrl} not found!`);
  err.status = 'Failed';
  err.statusCode = 404;
  next(err);
});

//global error handler
app.use(globalErrorCatch);
module.exports = app;
