import { TBlog } from "./blog.interface";
import { BlogModel } from "./blog.model";

// ! for create a blog
const createBlog = async (payload: TBlog) => {
  const result = await BlogModel.create(payload);

  return result;
};

// ! for getting all blogs
const getAllBlogs = async () => {
  const result = await BlogModel.find().sort({ createdAt: -1 });
  return result;
};

// ! for getting single blog by slug
const getSingleBlog = async (slug: string) => {
  const result = await BlogModel.findOne({ slug });

  return result;
};

//
export const blogServices = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
};
