import { getCategoryPosts } from "@/lib/data";
import FeaturedBlogCard from "./FeaturedBlogCard";
import PostPagination from "./PostPagination";
import { Post } from "../data/blog_post";

export default async function FilteredPosts({
  category,
  currentPage,
  postPerPage,
  paginatedPosts,
}: {
  category: string;
  currentPage: number;
  postPerPage: number;
  paginatedPosts: Post[];
}) {
  const categoryValue = category.replace(/-/g, "");
  const posts = await getCategoryPosts(categoryValue);

  return (
    <div className="flex flex-col gap-8">
      {paginatedPosts?.map((blog, _key) => (
        <FeaturedBlogCard
          key={_key}
          excerpt={blog.summary}
          image={blog.image}
          slug={blog.slug}
          tag={blog.category.toUpperCase()}
          title={blog.title}
        />
      ))}
      <div className="mt-4">
        <PostPagination
          baseUrl={`/category/${category}`}
          currentPage={currentPage}
          postPerPage={postPerPage}
          posts={posts}
        />
      </div>
    </div>
  );
}
