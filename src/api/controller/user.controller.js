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
      return res.status(400).json({
        status: 'Fail',
        message: 'This route is not for updating password,',
        passwordResetUrl: `${req.protocol}://${req.get('host')}/api/auth/forgotPassword`
      });
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
  try {
    //1.) get userid from token
    let userId = req.user._id;
    //2.) findbyid and delete
    let deletedUser = await User.findByIdAndDelete(userId);
    res.json({
      status: 'success',
      deletedUser,
    });
  } catch (err) {
    res.json(err);
  }
};

//follow a user on the platform
exports.follow = async (req, res, next) => {
  try{
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
  }catch(err){
    res.json(err)
  }
  
};

//unfollow a user on the platform
exports.unfollow = async (req, res, next) => {
  try {
    const currentUserId = req.user._id;
    const userToUnfollowId = req.params.unfollowid;
    const currentUser = await User.findById(currentUserId);
    const userToUnfollow = await User.findById(userToUnfollowId);
    if (userToUnfollowId !== currentUserId.toString()) {
      if (currentUser.followings.includes(userToUnfollowId)) {
        currentUser.followings.pull(userToUnfollowId);
        await currentUser.updateOne({
          followings: currentUser.followings,
        });
        userToUnfollow.followers.pull(currentUserId);
        await userToUnfollow.updateOne({
          followers: userToUnfollow.followers,
        });
        res.status(200).json({
          status: 'success',
          message: `${userToUnfollow.username} unfollowed successfully!`,
        });
      }
    } else {
      res.status(400).json('You cannot unfollow yourself');
    }
  } catch (err) {
    res.json(err);
  }
};

//get followers
exports.getFollowers = async (req, res, next) => {
  try{
    const currentUser = await User.findOne({ _id: req.user._id }).populate(
      'followers',
      'firstname lastname'
    );
    let followers = currentUser.followers;
    if (followers.length === 0) {
      followers = currentUser.followers;
    } else {
      followers = currentUser.followers;
    }
    res.json({
      followers: followers,
    });
  }catch(err){
    res.json(err)
  }
  
};

//get followings
exports.getFollowings = async (req, res, next) => {
  try{
    const currentUser = await User.findOne({ _id: req.user._id }).populate(
      'followings',
      '-_id firstname lastname'
    );
    let followings = currentUser.followings;
  
    res.json({
      numOfFollowings: followings.length,
      followings: followings,
    });
  }catch(err){
    res.json(err)
  }
}

