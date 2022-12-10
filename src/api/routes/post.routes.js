const express = require('express');
const postController = require('../controller/post.controller');
const commentController = require('../controller/comment.controller');
const authController = require('./../controller/user.auth');
const uploads = require('./../utils/multer');
const router = express.Router();
router.use(authController.authenticate);

router.post('/', uploads.single('image'), postController.createNewPost);
router.get('/', postController.getAllSharedPost);
router.get('/draft', postController.getAllDraftPost);
router.get('/:id', postController.getPost);
router.patch('/:postId/like', postController.likePost);
router.post('/:postId/comment', commentController.createComment);
router.patch('/:postId/:commentId/like', commentController.likeComment);
router.patch('/:id', postController.editPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;
