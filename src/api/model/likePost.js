//like post schema
const mongoose = require('mongoose');

const LikePostSchema = new mongoose.Schema(
  {
    _user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    _post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  },
  { timestamps: true }
);
const LikePost = mongoose.model('LikePost', LikePostSchema);
module.exports = LikePost;
