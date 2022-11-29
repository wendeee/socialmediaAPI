//like a comment schema
const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
  {
    _user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    _comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  },
  { timestamps: true }
);
const LikeComment = mongoose.model('LikeComment', CommentSchema);

module.exports = LikeComment;
