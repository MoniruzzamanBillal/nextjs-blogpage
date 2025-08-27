"use client";
import Wrapper from "@/components/shared/Wrapper";
import { PostDetailSkeleton } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useGetSingleBlogs } from "@/hooks/blog.hooks";
import { format } from "date-fns";
import Link from "next/link";
import { use } from "react";

type PostDetailProps = {
  params: Promise<{ slug: string }>;
};

const PostDetail = ({ params }: PostDetailProps) => {
  const { slug } = use(params);

  const { data: blogData, isLoading } = useGetSingleBlogs(slug);

  if (isLoading) {
    return <PostDetailSkeleton />;
  }

  return (
    <div className="mainContainer min-h-screen py-3 bg-gray-100 ">
      <Wrapper>
        {/* top buttom  */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline">← Back to Blog</Button>
          </Link>
        </div>

        {/* blog detail section  */}
        <div className="blogDetail">
          <Card>
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>By {blogData?.data?.author} </span>
                <span>•</span>
                <span>
                  {blogData?.data?.createdAt &&
                    format(
                      new Date(blogData?.data?.createdAt as string),
                      "MMMM dd,yyyy"
                    )}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-foreground leading-tight">
                {blogData?.data?.title}
              </h1>
            </CardHeader>
            <CardContent>
              <div
                className=" blogContent  "
                dangerouslySetInnerHTML={{
                  __html: blogData?.data?.content,
                }}
              ></div>
            </CardContent>
          </Card>
        </div>

        {/* bottom button section  */}
        <div className="mt-12 text-center">
          <Link href="/">
            <Button>Read More Blogs</Button>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default PostDetail;
