const Comment = require('./../model/Comment');
const LikeComment = require('./../model/likeComment');
const Post = require('./../model/Post');
const User = require('./../model/User');

exports.createComment = async (req, res, next) => {
  const newComment = await Comment.create({
    _post: req.params.postId,
    _user: req.user._id,
    ...req.body,
  });

  res.status(201).json({
    status: 'success',
    message: 'You commented on this post',
    data: {
      comment: newComment,
    },
  });
};

exports.getComments = async (req, res, next) => {
  const comments = await Comment.find();

  res.status(200).json({
    status: 'success',
    data: {
      comments: comments,
    },
  });
};

exports.likeComment = async (req, res, next) => {
  const commentToLike = await Comment.findOne({ _id: req.params.commentId });
  // console.log(commentToLike)
  if (!commentToLike)
    return res.status(404).json({
      message: 'Comment with ID not found.',
    });

  //check if comment has already been liked by user
  let isLiked = await LikeComment.find();
  isLiked = isLiked.filter(
    (comment) =>
      String(comment._user) === String(req.user._id) &&
      String(comment._comment) === String(req.params.commentId)
  );

  //if already liked, unlike if like is clicked again
  if (isLiked.length !== 0) {
    isLiked = isLiked.splice(0, 1);

    await LikeComment.findByIdAndDelete(isLiked[0].id);

    commentToLike.likes = commentToLike.likes - 1;
    await commentToLike.save();

    return res.status(200).json({
      message: 'You unliked this comment',
      commentToLike,
    });
  } else {
    let likeComment = new LikeComment({
      _user: req.user._id,
      _comment: req.params.commentId,
    });

    likeComment.save((err) => {
      if (err) return next(err.message);
    });

    commentToLike.likes === 0 ? commentToLike.likes++ : commentToLike.likes++;
    commentToLike.save()
    console.log(commentToLike)
  }

  res.status(200).json({
    status: 'success',
    message: 'You liked this comment',
    data: {
        comment: commentToLike
    }
  });
};
