import { model, Schema } from "mongoose";
import { TBlog } from "./blog.interface";

const BlogSchema = new Schema<TBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    brief: { type: String, required: true },
    author: { type: String, required: true },
    slug: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//
export const BlogModel = model<TBlog>("Blog", BlogSchema);
