import { TBlogpost } from "@/types/global.types";
import axios from "axios";
import { toast } from "sonner";

// const baseUrl = "http://localhost:5000/api/blog";
const baseUrl = "https://next-js-blog-eta-seven.vercel.app/api/blog";

// ! for getting all blogs
export const getAllBlogs = async () => {
  try {
    const result = await axios.get(`${baseUrl}/all-blog`);

    return result?.data?.data;
  } catch (error) {
    toast.error("Failed to get all blogs !!!");
    console.log(error);
  }
};

// ! for getting single blog
export const getSingleBlog = async (slug: string) => {
  try {
    const result = await axios.get(`${baseUrl}/blog-detail/${slug}`);

    return result?.data;
  } catch (error) {
    toast.error("Failed to get  blog !!!");
    console.log(error);
  }
};

// ! for getting single blog
export const createBlog = async (payload: TBlogpost) => {
  try {
    const result = await axios.post(`${baseUrl}/add-blog`, payload);

    return result?.data;
  } catch (error) {
    toast.error("Failed to create  blog !!!");
    console.log(error);
  }
};
