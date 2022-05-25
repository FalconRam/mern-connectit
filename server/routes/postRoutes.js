import express from "express";
import { getPosts, createPost, getPostsById } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);

router.get("/:id", getPostsById);

router.post("/create", createPost);

export default router;
