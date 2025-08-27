import { TBlogpost } from "@/types/global.types";
import { format } from "date-fns";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "./button";

const BlogCard = ({ post }: { post: TBlogpost }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">
            By {post?.author}
          </span>
          <span className="text-sm text-muted-foreground">
            {format(new Date(post?.createdAt as string), "MMMM dd,yyyy")}
          </span>
        </div>
        <CardTitle className="text-2xl mb-2">
          <Link
            href={`/posts/${post?.slug}`}
            className="hover:text-primary transition-colors"
          >
            {post?.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {post?.brief}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={`/posts/${post?.slug}`}>
          <Button variant="outline">Read More</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
