const express = require('express');
const authController = require('./../controller/user.auth');
const router = express();
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword)
router.patch('/resetPassword/:token', authController.resetPassword)
module.exports = router;
