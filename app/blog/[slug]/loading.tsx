import RecommendedPostsSkeleton from "@/app/components/skeleton-loading/RecommendedPostsSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPostSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-6 my-10">
      <div className="relative w-full aspect-[16/3]">
        <Skeleton className="absolute inset-0 w-full h-full" />
      </div>

      <div className="max-w-4xl mx-auto mt-10">
        <div className=" flex items-center space-x-2 text-sm mb-2">
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-6 w-20" />
        </div>

        <Skeleton className="h-10 w-[70%] mb-4" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-[90%] mb-2" />
        <Skeleton className="h-6 w-[80%] mb-2" />
        <Skeleton className="h-6 w-[85%] mb-2" />
        <Skeleton className="h-6 w-[75%] mb-6" />
      </div>

      <div className="h-[1px] w-full bg-gray-300 my-10" />

      <RecommendedPostsSkeleton/>

      <div className="h-[1px] w-full bg-gray-300 my-10" />
      <div className="max-w-5xl mx-auto">
        <Skeleton className="h-40 w-full mb-3" />
      </div>
    </div>
  );
}
