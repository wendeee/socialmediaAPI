/**
 * create a new post ✔
 * Get all post ✔
 * Get all timeline post - get all shared post✔
 * get a single post  ✔
 * update a post  ✔
 * delete a post  ✔
 * like a shared post  ✔
 * comment on a shared post
 * like a comment - ✔
 * reshare a post  ✔
 * upload images - ✔
 * upload videos -backlog
 * when you create a post, it is initially in a default draft state and does not appear on the user's timeline
 * when you create a post and update its state to 'shared', it appears on the user and his followers timeline.
 */

const User = require('../model/User');
const Post = require('./../model/Post');
const LikePost = require('./../model/likePost');
const cloudinary = require('./../utils/cloudinary');
//moment - date and time formatter package
const moment = require('moment');

//create a post
exports.createNewPost = async (req, res, next) => {
  // let post;
  const newPost = req.body;

  try {
    let post;
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);

      //create an instance of the Post model object
      post = new Post({
        author: req.user._id,
        image: result.secure_url,
        timestamps: moment().toDate(),
        ...newPost,
      });
    } else {
      //create an instance of the Post model object
      post = new Post({
        author: req.user._id,
        timestamps: moment().toDate(),
        ...newPost,
      });
    }

    //save created post to DB
    post.save((err) => {
      if (err) return next(err.message);
    });

    //add new post to user's 'posts' array in user model
    const postByAuthor = await User.findById(req.user._id);
    postByAuthor.posts.push(post._id);
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

//get all post - fetches all timeline post
exports.getAllSharedPost = async (req, res, next) => {
  try {
    //find current user
    const currentUser = await User.findById({ _id: req.user._id });

    //get all post of current user
    const currentUserPosts = await Post.find({ author: req.user._id , state: 'shared'});

    //get posts of current user followings
    const followingsPosts = await Promise.all(currentUser.followings.map((followingId) =>
      Post.find({ author: followingId , state: 'shared'})
    ));
    const posts = currentUserPosts.concat(...followingsPosts)

    res.status(200).json({
      status: 'success',
      numberOfPosts: posts.length,
      posts,
    });
  } catch (err) {
    return next(err);
  }
};

//get all post in draft state
exports.getAllDraftPost = async (req, res, next) => {
  try {
    const posts = await Post.find({ state: 'draft' });

    if (!posts)
      return res.status(404).json({
        status: 'success',
        message: 'No post found',
      });

    res.status(200).json({
      status: 'success',
      data: {
        posts,
      },
    });
  } catch (err) {
    if (err) res.status(500);
    return next(err.message);
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
  try{
     //check if postid exist
  const postToLike = await Post.findOne({ _id: req.params.postId });

  if (postToLike.state === 'draft')
    return res.status(404).json('Post not found');

  //check the likepost collection to see if post has already been liked by the user
  let alreadyLikedPost = await LikePost.find();
  alreadyLikedPost = alreadyLikedPost.filter(
    (el) =>
      String(el._user) == String(req.user._id) &&
      String(el._post) === String(req.params.postId)
  );

  //if the alreadylikedpost array is not empty,
  //the post has already been liked,
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
  }catch(err){
    res.json(err)
  }
 
};

//edit post
exports.editPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post)
      return res.status(404).json({
        status: 'Fail',
        message: 'Post not found',
      });

    if (String(post.author) !== String(req.user._id)) {
      return res.status(401).json({
        status: 'Fail',
        message: 'You can only edit a post created by you',
      });
    }

    //edit only body of post and no other property
    if (!req.body.post)
      return res.status(400).json('You can only edit the post body');

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
    const post = await Post.findById(req.params.id);

    if (!post)
      return res.status(404).json({
        status: 'Fail',
        message: 'Post not found',
      });

    if (String(post.author) !== String(req.user._id)) {
      return res.status(401).json({
        status: 'Fail',
        message: 'You can only update a post created by you',
      });
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: 'success',
      data: updatedPost,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete post
exports.deletePost = async (req, res, next) => {
  try{
    const post = await Post.findById(req.params.id)
    //delete post from user's 'posts' array in user model
    const postByUser = await User.findById(req.user._id);
    postByUser.posts.pull(post._id);
    await postByUser.updateOne({ posts: postByUser.posts });
   // user.posts
   await Post.findByIdAndRemove(req.params.id);
 
   res.status(200).json({
     status: 'success',
     message: 'post deleted sucessfully',
   });
  }catch(err){
    return next(err)
  }
 
};
