const express = require('express');
const postController = require('../controller/post.controller');

const router = express.Router();

router.post('/', postController.createNewPost);
router.get('/', postController.getAllPost)
router.post('/:postId/like', postController.likePost)

module.exports = router;
