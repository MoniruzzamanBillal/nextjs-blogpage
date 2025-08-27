"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const express_1 = require("express");
const blog_controller_1 = require("./blog.controller");
const router = (0, express_1.Router)();
// ! for getting all blog
router.get("/all-blog", blog_controller_1.blogController.getAllBlogs);
// ! for adding blogs
router.post("/add-blog", blog_controller_1.blogController.createBlog);
// ! get single blog
router.get("/blog-detail/:slug", blog_controller_1.blogController.getSingleBlog);
//
exports.blogRouter = router;
