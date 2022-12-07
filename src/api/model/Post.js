const mongoose = require('mongoose');
const User = require('../model/User')
// const { Schema } = mongoose

const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId, ref: 'User', 
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
    numOfReposts: {type: Number, default: 0},
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
