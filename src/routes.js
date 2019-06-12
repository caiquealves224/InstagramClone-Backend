const express = require("express");
const multer = require("multer");

const PostController = require("./controllers/PostController");
const LikeController = require("./controllers/LikeController");

const uploadsConfig = require("./config/upload");

const routes = new express.Router();


routes.get("/posts", PostController.index);
routes.post("/posts", multer(uploadsConfig).single("image") ,PostController.store);

routes.post("/posts/:id/like", LikeController.store);

module.exports = routes;