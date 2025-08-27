import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import Wrapper from "../shared/Wrapper";

const PostDetailSkeleton = () => {
  return (
    <div className="mainContainer min-h-screen py-3 bg-gray-100">
      <Wrapper>
        {/* top button */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline">← Back to Blog</Button>
          </Link>
        </div>

        {/* blog detail section */}
        <div className="blogDetail">
          <Card>
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <Skeleton className="h-4 w-24" />
                <span>•</span>
                <Skeleton className="h-4 w-20" />
              </div>
              <Skeleton className="h-10 w-3/4 mb-2" />
            </CardHeader>
            <CardContent className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-10/12" />
              <Skeleton className="h-4 w-9/12" />
              <Skeleton className="h-4 w-8/12" />
              <Skeleton className="h-4 w-6/12" />
            </CardContent>
          </Card>
        </div>

        {/* bottom button */}
        <div className="mt-12 text-center">
          <Skeleton className="h-10 w-40 mx-auto" />
        </div>
      </Wrapper>
    </div>
  );
};

export default PostDetailSkeleton;
