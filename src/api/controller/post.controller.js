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
const mongoose = require('mongoose');
const User = require('../model/User');
const Post = require('./../model/Post');
const LikePost = require('./../model/likePost');

//moment - date and time formatter package
const moment = require('moment');
const { valid } = require('joi');

//create post
exports.createNewPost = async (req, res, next) => {
  try {
    const newPost = req.body;

    //create a new instance of the Post model
    const post = new Post({
      author: req.user._id,
      timestamps: moment().toDate(),
      ...newPost,
    });

    //save created post to DB
    post.save((err, savedpost) => {
      if (err) return next(err.message);
    });

    //add new post to user's 'posts' array property in user model
    const postByAuthor = await User.findById(req.user._id);
    console.log(postByAuthor);
    postByAuthor.posts.push(post._id);
    // await postByAuthor.save()
    await postByAuthor.updateOne({ posts: postByAuthor.posts });

    //send back response after all implementation
    res.status(201).json({
      success: true,
      data: post,
    });
  } catch (err) {
    return next(err);
  }
};

//get all post
exports.getAllPost = async (req, res, next) => {
  try {
    const posts = await Post.find().populate('author', 'firstname lastname');
    if (!posts) return res.status(200).json('No post has been shared yet');
    res.status(200).json({
      status: 'success',
      numberOfPosts: posts.length,
      posts,
    });
  } catch (err) {
    return next(err);
  }
};

//get a single post
exports.getPost = async (req, res, next) => {
  const post = await Post.find({ _id: req.params.id }).populate(
    'author',
    'firstname'
  );
  try {
    if (!post) return res.status(404).json('Post not found');
    res.status(200).json({
      status: 'success',
      post,
    });
  } catch (err) {
    return next(err);
  }
};

//like or unlike a post
exports.likePost = async (req, res, next) => {
  //check if postid exist
  const postToLike = await Post.findOne({ _id: req.params.postId });

  if (!postToLike) return res.status(404).json('Post not found');

  //check the likepost collection to see if post has already been liked by the user
  let alreadyLikedPost = await LikePost.find();
  alreadyLikedPost = alreadyLikedPost.filter(
    (el) =>
      String(el._user) == String(req.user._id) &&
      String(el._post) === String(req.params.postId)
  );

  //if the alreadylikedpost array is not empty
  //the post has already been liked
  //then unlike post
  if (alreadyLikedPost.length !== 0) {
    alreadyLikedPost = alreadyLikedPost.splice(0, 1);

    //delete obj from likepost collection
    await LikePost.findByIdAndDelete(alreadyLikedPost[0].id);

    //update likes count and save
    postToLike.likes = postToLike.likes - 1;
    postToLike.save();

    return res.status(200).json({
      message: 'You unliked this post',
      postToLike,
    });
  } else {
    //update likepost model
    let likepost = new LikePost({
      _user: req.user._id,
      _post: req.params.postId,
    });

    likepost.save((err) => {
      if (err) return next(err.message);
    });

    //update the number of likes
    postToLike.likes === 0 ? postToLike.likes++ : postToLike.likes++;
    postToLike.save();
  }

  //send back response
  res.status(200).json({
    status: 'success',
    message: 'You liked this post',
    post: postToLike,
  });
};

//edit post
exports.editPost = async (req, res, next) => {
  try {
    //edit only body of post and no other property
    if (!req.body.post) return res.status(400).json('You can only edit a post');
    const postToEdit = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: 'success',
      data: postToEdit,
    });
  } catch (err) {
    res.json(err);
  }
};

//update a post
exports.updatePost = async (req, res, next) => {
  try {
    //1). find the post using the id
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: 'success',
      data: post,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete post
exports.deletePost = async (req, res, next) => {
  const postToDelete = await Post.findByIdAndRemove(req.params.id);
  res.status(204).json({
    status: 'success',
    message: 'post deleted sucessfully',
  });
};

//share a post
exports.shareAPost = async (req, res, next) => {
  //1). only a post with state shared can be shared
  //2). get the post by id
  const postToShare = await Post.findById(req.params.id);
};
