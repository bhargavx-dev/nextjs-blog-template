import { Skeleton } from "@/components/ui/skeleton";

export default function PostsSkeleton() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="h-48 w-full rounded-xl" />
          <Skeleton className="h-6 w-[80%]" />
          <Skeleton className="h-4 w-[60%]" />
        </div>
      ))}
    </section>
  );
}
