const express = require('express');
const authController = require('./../controller/user.auth');
const userController = require('./../controller/user.controller');

const router = express.Router();

router.patch(
  '/updateprofile',
  authController.authenticate,
  userController.updateMe
);
router.delete(
  '/deleteprofile',
  authController.authenticate,
  userController.deleteMe
);
router.patch(
  '/:tofollowId/follow',
  authController.authenticate,
  userController.follow
);
router.patch(
  '/:unfollowid/unfollow',
  authController.authenticate,
  userController.unfollow
);
router.get(
  '/followers',
  authController.authenticate,
  userController.getFollowers
);
router.get(
  '/followings',
  authController.authenticate,
  userController.getFollowings
);

module.exports = router;
