/**
 * //create a new post
 * Get all post
 * Get all timeline post
 * get a single post
 * update a post
 * delete a post
 * like a post
 * comment on a post
 * like a comment
 * reshare a post
 * upload images
 * upload videos
 * when you create a post without sharing, it is in draft state and does not appear on the user's timeline
 * when you create a post and share, it is in a published state and appears on the users timeline.
 */
const User = require('../model/User');
const Post = require('./../model/Post');

//create post
exports.createNewPost = async (req, res, next) => {
  try {
    // let creator = req.user._id
    let user = await User.findById(req.user._id);
    let firstname = user.firstname;
    let lastname = user.lastname;
    // console.log(firstname, lastname)
    // const createdBy = `${firstname} ${lastname}`

    const newPost = await Post.create(req.body);
    res.status(201).json({
      success: true,
      data: newPost,
    });
  } catch (err) {
    throw err;
  }
};

//get all post
exports.getAllPost = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    if (!posts) return res.status(200).json('No post has been shared yet');
    res.status(200).json({
      status: 'success',
      numberOfPosts: posts.length,
      data: posts,
    });
  } catch (err) {
    throw err;
  }
};

//like a post
exports.likePost = async (req, res, next) => {
  //check if post is valid
  const postToLike = await Post.findOne({ _id: req.params.postId });
  if (!postToLike) return res.status(404).json('Post not found');

  //check if the user has liked the post before now
  if (postToLike.likedBy.includes(req.user._id))
    return res
      .status(400)
      .json('You already liked this post. Do you want to unlike?');
  postToLike.likedBy.push(req.user._id);

   //update the number of likes
   postToLike.likes === 0 ? postToLike.likes++ : postToLike.likes++;
   postToLike.save();
   
  await postToLike.updateOne({
    likedBy: req.user._id,
  });
 
  //send a patch request
  res.status(200).json({
    status: 'success',
    post: postToLike,
  });
};
