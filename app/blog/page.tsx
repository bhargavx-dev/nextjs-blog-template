import { Suspense } from "react";
import { posts } from "../data/blog_post";
import PostsSkeleton from "../components/skeleton-loading/BlogsSkeleton";
import PaginatedPosts from "../components/PaginatedPosts";
import PostPagination from "../components/PostPagination";

const POST_PER_PAGE = 3

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const currentPage = parseInt((await searchParams).page?.toLowerCase() || "1");
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-8">
      <section className="text-center mb-12 flex flex-col gap-10">
        <div>
          <h1 className="text-5xl font-bold mb-2">All Blog Posts</h1>
          <p className="text-gray-600">
            Explore tips, insights, and guides for a healthier life.
          </p>
        </div>
      </section>
      <Suspense fallback={<PostsSkeleton />}>
        <PaginatedPosts page={currentPage} />
      </Suspense>

      {/* Pagination */}
      <div className="mt-10 flex">
        <PostPagination
          currentPage={currentPage}
          postPerPage={POST_PER_PAGE}
          posts={posts}
          baseUrl="/blog"
        />
      </div>
    </div>
  );
}
