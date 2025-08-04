import CategoryPosts from "@/app/components/CategoryPosts";
import FeaturedSidebar from "@/app/components/FeaturedSidebar";
import FilteredBlogCardSkeleton from "@/app/components/skeleton-loading/FilteredBlogCardSkeleton";
import { Suspense } from "react";

const POST_PER_PAGE = 3;

export default async function BlogPage({
  searchParams,
  params,
}: {
  searchParams: Promise<{ page: string }>;
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;

  const categoryTitle = category.replace(/(^\w|-\w)/g, (match) =>
    match.replace("-", " ").toUpperCase()
  );

  const currentPage = parseInt((await searchParams).page?.toLowerCase() || "1");

  return (
    <main className="max-w-screen-2xl mx-auto px-6 py-8">
      <h2 className="text-6xl text-center font-bold mb-10">{categoryTitle}</h2>
      <div className="w-full h-0.5 bg-gray-200" />
      <section className="w-full px-6 my-10">
        <div className="flex flex-col md:flex-row mt-10 justify-between">
          <div className="md:w-[60%]">
            <Suspense fallback={<FilteredBlogCardSkeleton />}>
              <CategoryPosts
                category={category}
                currentPage={currentPage}
                postPerPage={POST_PER_PAGE}
              />
            </Suspense>
          </div>
          <div className="w-0.5 bg-gray-200 hidden md:block" />
          <div className="w-full md:hidden h-0.5 bg-gray-200 my-6" />
          <div className="relative md:w-[30%]">
            <FeaturedSidebar activeCat={category} />
          </div>
        </div>
      </section>
    </main>
  );
}
