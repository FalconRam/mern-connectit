import express from "express";
import {
  getPosts,
  getPostsBySearch,
  createPost,
  getPostsById,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);

router.get("/search", getPostsBySearch);

router.get("/:id", getPostsById);

router.post("/create", auth, createPost);

router.patch("/update/:id", auth, updatePost);

router.delete("/:id", auth, deletePost);

router.patch("/like/:id", auth, likePost);

export default router;
