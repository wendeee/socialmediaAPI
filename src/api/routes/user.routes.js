const express = require('express');
const authController = require('./../controller/user.auth')
const userController = require('./../controller/user.controller')

const router = express.Router();

router.post('/signup', authController.signup)
router.post('/login', authController.login)
router.post('/forgotpassword', authController.forgotPassword)
router.patch('/updateprofile', userController.updateMe)
router.delete('/deleteprofile', userController.deleteMe)
router.patch('/:tofollowId/follow', userController.follow)
router.patch('/:unfollowid/unfollow', userController.unfollow)
router.get('/followers', userController.getFollowers)
router.get('/followings', userController.getFollowings)

module.exports = router;