const express = require('express');

const router = express.Router();
const repostController = require('./../controller/repost.controller');
const authController = require('./../controller/user.auth');

router.post(
  '/:id/repost',
  authController.authenticate,
  repostController.rePostAPost
);
module.exports = router;
