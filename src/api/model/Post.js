const mongoose = require('mongoose');
// const User = require('../model/User')
// const { Schema } = mongoose

const postSchema = new mongoose.Schema(
  {
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      // required: [true, 'A post must belong to a user']
    },
    createdBy: {
      type: String,
    },
    post: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      enum: ['draft', 'shared'],
      default: 'draft',
    },
    image: {
      type: String,
      default: '',
    },
    likes: {
      type: Number,
      default: 0,
    },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
