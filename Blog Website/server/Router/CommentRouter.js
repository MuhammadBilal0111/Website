const express = require("express");
const commentController = require("./../Controllers/commentController");
const verifyUser = require("./../Utils/verifyUser");
const commentRouter = express.Router();

commentRouter
  .route("/create")
  .post(verifyUser, commentController.createComment);
commentRouter
  .route("/get-comments/:postId")
  .get(verifyUser, commentController.getComments);
commentRouter
  .route("/getAllComments")
  .get(verifyUser, commentController.getAllComments);
commentRouter
  .route("/likeComment/:commentId")
  .put(verifyUser, commentController.likeComment);
commentRouter
  .route("/editComment/:commentId")
  .put(verifyUser, commentController.editComment);
commentRouter
  .route("/deleteComment/:commentId")
  .delete(verifyUser, commentController.deleteComment);
module.exports = commentRouter;
