import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function RecommendedPostsSkeleton() {
  return (
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-x-7 gap-3 my-6">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={cn(
            "space-y-2 rounded-lg p-4"
          )}
        >
          <Skeleton className="aspect-[4/3] w-full rounded-md" />
            <Skeleton className="h-6 w-[80%]" />
            <Skeleton className="h-4 w-[60%]" />
        </div>
      ))}
    </div>
  );
}
