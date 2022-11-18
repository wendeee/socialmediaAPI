const express = require('express');
const morgan = require('morgan');
const userRouter = require('./api/routes/user.routes');
const authController = require('./api/controller/user.auth');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRouter);
app.use('/api/v1/users', authController.authenticate, userRouter);

app.get('/', (req, res) => {
  res.json('Welcome to the Home Page');
});
module.exports = app;
