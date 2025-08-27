import { Router } from "express";
import { blogController } from "./blog.controller";

const router = Router();

// ! for getting all blog
router.get("/all-blog", blogController.getAllBlogs);

// ! for adding blogs
router.post(
  "/add-blog",

  blogController.createBlog
);

// ! get single blog
router.get("/blog-detail/:slug", blogController.getSingleBlog);

//
export const blogRouter = router;
