const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const userRouter = require('./api/routes/user.routes');
const userAuthRouter = require('./api/routes/user.auth.route');
const postRouter = require('./api/routes/post.routes');
const repostRouter = require('./api/routes/repost.routes');
const globalErrorCatch = require('./api/utils/globalErrorCatch');
const app = express();
require('dotenv').config();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//security middleware
app.use(helmet());

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
