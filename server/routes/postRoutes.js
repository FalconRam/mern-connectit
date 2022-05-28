import express from "express";
import { getPosts, createPost, getPostsById, updatePost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);

router.get("/:id", getPostsById);

router.post("/create", createPost);

router.patch("/update/:id", updatePost);

export default router;
