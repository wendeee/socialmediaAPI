const User = require('../model/User');
const Post = require('./../model/Post');
const RePost = require('./../model/RePost');

//repost a post
exports.rePostAPost = async (req, res, next) => {
  //1. Get user who is reposting
  const getUser = async () => {
    const user = await User.findById({ _id: req.user._id });
    return !user ? 'user not found' : user;
  };

  const user = await getUser();

  //2.Get post that is to be reposted
  const getPost = async () => {
    const post = await Post.findById(req.params.id);
    return !post ? 'post not found' : post;
  };

  const post = await getPost();
  if(post.state === 'draft'){
    return res.status(403).json({
      status: 'Fail',
      message: 'You cannot repost a post in draft state'
    })
  }

  //3. check if post has already been reposted
  const postInRepost = async () => {
    const repost = await RePost.find({ _post: post._id });
    return !repost ? 'Not found' : repost;
  };

  const repost = await postInRepost();

  //4. function to check for userid in _user array
  const userInArray = async () => {
    let isUser = await RePost.find()
    isUser = isUser.filter(doc => {return doc._user.includes(user._id)})
    return !isUser ? 'Not found' : isUser;
  };

 
  if (repost.length < 1) {
    //5. create new repost document
    const newRepost = new RePost({
      _user: user,
      _post: post,
    });
    await newRepost.save();

    //6. update repost count on post document
    post.numOfReposts === 0 ? post.numOfReposts++ : post.numOfReposts++;
    await post.save();
    res.status(200).json({
      status: 'success',
      message: 'You reposted this post',
      post
    })
  } else {
    //7. check for user in _user Array
    const isUser = await userInArray();
    if (isUser.length > 0) {
  
      res.status(403).json({
        status: 'Fail',
        message: 'You already reposted this post'
      });
    } else {
      //8. add userId to the _user array
      repost[0]._user.push(user);
      await repost[0].save();

      //9. update repost count on post document
      post.numOfReposts === 0 ? post.numOfReposts++ : post.numOfReposts++;
      await post.save();
      res.status(200).json({
        status: 'success',
        message: 'You reposted this post',
        post
      })
    }
  }
 
};

