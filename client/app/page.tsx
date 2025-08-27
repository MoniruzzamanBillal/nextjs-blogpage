import Wrapper from "@/components/shared/Wrapper";
import { HomeBlogs } from "@/components/ui";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <div className="mainContainer py-3 bg-gray-100 ">
      <Wrapper>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Developer Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Insights, tutorials, and thoughts on modern web development
          </p>
          <Link href="/new-post">
            <Button size="lg">Write New Post</Button>
          </Link>
        </div>

        <HomeBlogs />

        {/*  */}
      </Wrapper>
    </div>
  );
}
