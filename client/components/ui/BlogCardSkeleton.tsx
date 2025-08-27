import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const BlogCardSkeleton = () => {
  return (
    <Card className="transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
        <CardTitle className="text-2xl mb-2">
          <Skeleton className="h-6 w-full" />
        </CardTitle>
        <CardDescription className="text-base leading-relaxed space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-10 w-24" />
      </CardContent>
    </Card>
  );
};

export default BlogCardSkeleton;
