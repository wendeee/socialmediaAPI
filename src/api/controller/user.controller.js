/**
 * Features to implement
 * - Update Profile =>A user can update his account details
 * - Delete Profile => A user can delete his account
 * - Get a User  By Id
 * - Follow a User => A user can follow another user on the platform
 * - Unfollow a User => A user can unfollow a user
 * - Get all followers
 * -  Get all followings
 */

const User = require('../model/User');
const { validationResult } = require('express-validator');
//filter body function
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((field) => {
    if (allowedFields.includes(field)) newObj[field] = obj[field];
  });
  return newObj;
};

//Update profile

exports.updateMe = async (req, res, next) => {
  let userId = req.user._id;
  try {
    if (req.body.password || req.body.passwordConfirm) {
      return next(res.json('This route is not for updating password,'));
    }
    const reqBody = filterObj(req.body, 'username', 'email');
    let updatedUser = await User.findByIdAndUpdate(userId, reqBody, {
      new: true,
      runValidators: true,
    });
    updatedUser.password = undefined;
    res.status(200).json({
      success: true,
      user: updatedUser,
    });
  } catch (err) {
    throw err;
  }
};

//delete profile
exports.deleteMe = async (req, res, next) => {
  //1.) get userid from token
  let userId = req.user._id;
  //2.) findbyid and delete
  let deletedUser = await User.findByIdAndDelete(userId);
  res.json({
    status: 'success',
    deletedUser,
  });
};

//get a user by id

exports.getUser = async (req, res, next) => {};

//follow a user on the platform
exports.follow = async (req, res, next) => {
  const currentUserId = req.user._id;
  const userToFollowId = req.params.tofollowId;
  const currentUser = await User.findById(currentUserId);

  const userToFollow = await User.findById(userToFollowId);

  if (userToFollowId !== currentUserId.toString()) {
    if (!currentUser.followings.includes(userToFollowId)) {
      currentUser.followings.push(userToFollowId);
      //update document in the db
      await currentUser.updateOne({
        followings: currentUser.followings,
      });
      userToFollow.followers.push(currentUserId);
      await userToFollow.updateOne({
        followers: userToFollow.followers,
      });

      res.status(200).json({
        status: 'success',
        response: `following ${userToFollow.username}!`,
      });
    } else {
      res.status(400).json('You already follow this user');
    }
  } else {
    return res.status(400).json('You cannot follow yourself');
  }
};

//unfollow a user on the platform
exports.unfollow = async (req, res, next) => {
  const currentUserId = req.user._id;
  const userToUnfollowId = req.params.unfollowid
  const currentUser = await User.findById(currentUserId)
  const userToUnfollow = await User.findById(userToUnfollowId)
  if(userToUnfollowId !== currentUserId.toString()){
    if(currentUser.followings.includes(userToUnfollowId)){
      currentUser.followings.pull(userToUnfollowId)
      await currentUser.updateOne({
        followings: currentUser.followings
      })
      userToUnfollow.followers.pull(currentUserId)
      await userToUnfollow.updateOne({
        followers: userToUnfollow.followers
      })
      res.status(200).json(`${userToUnfollow.username} unfollowed successfully!`)
    }
  }else{
    res.status(400).json('You cannot unfollow yourself')
  }

};

//get followers
exports.getFollowers = async (req, res, next) => {
  const currentUser = await User.findById(req.user._id).populate('followers')
  let followers = currentUser.followers
  if(followers.length === 0){
    followers = currentUser.followers
  }else{
    followers = currentUser.followers[0].username
  }
 res.json({
  followers: followers
 })
 
};

//get followings
exports.getFollowings = async (req, res, next) => {
  const currentUser = await User.findById(req.user._id).populate('followings', 'username')
  let followings = currentUser.followings
  // if(followings.length === 0){
  //   followings = currentUser.followings
  // }else{
  //   followings = currentUser.followings
  // }
  res.json({
    followings: followings
  })
  
};
