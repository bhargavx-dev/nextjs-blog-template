import { Skeleton } from "@/components/ui/skeleton";

export default function FilteredBlogCardSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row mt-10 justify-between gap-6">
        {/* Posts Section */}
        <div className="w-full space-y-6">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="aspect-[4/2] w-full rounded-xl" />
              <Skeleton className="h-6 w-1/2 rounded" />
              <Skeleton className="h-4 w-full rounded" />
            </div>
          ))}

          {/* Pagination skeleton */}
          <div className="flex gap-2 justify-center mt-6">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-8 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
