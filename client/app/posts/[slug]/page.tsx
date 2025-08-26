import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

type PostDetailProps = {
  params: {
    slug: string;
  };
};

const PostDetail = async ({ params }: PostDetailProps) => {
  const slug = params?.slug;
  console.log(slug);

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
                <span>By post.author </span>
                <span>•</span>
                <span> post.publishedAt </span>
              </div>
              <h1 className="text-4xl font-bold text-foreground leading-tight">
                {" "}
                post.title{" "}
              </h1>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none">
                <p>content </p>
                <p>content </p>
                <p>content </p>
                <p>content </p>
                <p>content </p>
                <p>content </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* bottom button section  */}
        <div className="mt-12 text-center">
          <Link href="/">
            <Button>Read More Posts</Button>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default PostDetail;
