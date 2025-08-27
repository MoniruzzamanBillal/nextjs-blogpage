import httpStatus from "http-status";
import catchAsync from "../../util/catchAsync";
import sendResponse from "../../util/sendResponse";
import { blogServices } from "./blog.service";

// ! for creating a blog
const createBlog = catchAsync(async (req, res) => {
  const result = await blogServices.createBlog(req?.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Blog added successfully !!!",
    data: result,
  });
});

// ! for getting all blogs
const getAllBlogs = catchAsync(async (req, res) => {
  const result = await blogServices.getAllBlogs();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog retrved successfully !!!",
    data: result,
  });
});

// ! for getting single blog by slug
const getSingleBlog = catchAsync(async (req, res) => {
  const result = await blogServices.getSingleBlog(req?.params?.slug);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog retrved successfully !!!",
    data: result,
  });
});

//
export const blogController = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
};
