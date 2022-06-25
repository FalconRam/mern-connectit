import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// const url = "http://localhost:5000/posts";

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchPosts = () => API.get("/posts");

export const createPost = (newPost) => API.post("/posts/create", newPost);

export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/update/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/like/${id}`);

export const logIn = (formData) => API.post("/user/login-user", formData);

export const signUp = (formData) => API.post("/user/create-user", formData);
