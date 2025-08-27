"use client";

import { useGetAllBlogs } from "@/hooks/blog.hooks";
import { TBlogpost } from "@/types/global.types";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardSkeleton";

const blogposts: TBlogpost[] = [
  {
    title: "The Rise of Artificial Intelligence",
    content:
      "Artificial intelligence (AI) is becoming a dominant force across various industries. In this post, we explore how AI is shaping the future.",
    brief: "An overview of how AI is transforming industries.",
    author: "Jane Doe",
    slug: "rise-of-artificial-intelligence",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    title: "Understanding TypeScript",
    content:
      "TypeScript is a superset of JavaScript that adds static types. It helps in writing cleaner, more maintainable code.",
    brief: "A beginner's guide to learning TypeScript.",
    author: "John Smith",
    slug: "understanding-typescript",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    title: "The Future of Web Development",
    content:
      "Web development is evolving rapidly. We take a look at what technologies are shaping the future of the web.",
    brief: "Exploring the technologies that will define the future of the web.",
    author: "Alex Johnson",
    slug: "future-of-web-development",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    title: "10 Tips for Remote Work Success",
    content:
      "Working remotely can be challenging. These 10 tips will help you maintain productivity and work-life balance.",
    brief: "Tips for staying productive while working remotely.",
    author: "Maria Lee",
    slug: "tips-for-remote-work-success",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    title: "The Evolution of JavaScript Frameworks",
    content:
      "From Angular to React and Vue, JavaScript frameworks have seen significant evolution. This post dives into their history and growth.",
    brief: "A history of JavaScript frameworks and their evolution.",
    author: "Michael Brown",
    slug: "evolution-of-javascript-frameworks",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    title: "Exploring the Metaverse",
    content:
      "The metaverse is becoming more than just a buzzword. This article explores its potential and what it could mean for the future.",
    brief: "What is the metaverse and how will it impact our lives?",
    author: "Sarah White",
    slug: "exploring-the-metaverse",
    createdAt: "2024-01-15T10:00:00Z",
  },
];

const HomeBlogs = () => {
  const { data: blogsData, isLoading } = useGetAllBlogs();

  console.log(blogsData);

  return (
    <div className="grid gap-6 md:gap-8">
      {isLoading &&
        Array.from({ length: 4 })?.map((_, ind) => (
          <BlogCardSkeleton key={ind} />
        ))}

      {blogsData &&
        blogsData?.map((post: TBlogpost) => (
          <BlogCard key={post?._id} post={post} />
        ))}
    </div>
  );
};

export default HomeBlogs;
