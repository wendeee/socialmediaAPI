const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    _user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    comment: {
      type: String,
    },
    _post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
