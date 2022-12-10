const express = require('express');
const morgan = require('morgan');
const userRouter = require('./api/routes/user.routes');
const authController = require('./api/controller/user.auth');
const postRouter = require('./api/routes/post.routes');
const repostRouter = require('./api/routes/repost.routes');
const app = express();
require('dotenv').config();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRouter);
app.use('/api/v1/users', authController.authenticate, userRouter);
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
module.exports = app;
