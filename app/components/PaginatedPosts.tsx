import BlogCard from "@/app/components/BlogCard";
import { getAllPosts } from "@/lib/data";

const POST_PER_PAGE = 3;

export default async function PaginatedPosts({ page }: { page: number }) {
  const posts = await getAllPosts();
  const paginatedPosts = posts.slice(
    (page - 1) * POST_PER_PAGE,
    page * POST_PER_PAGE
  );

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {paginatedPosts?.map((blog, _key) => (
        <BlogCard
          key={_key}
          excerpt={blog.summary}
          image={blog.image}
          slug={blog.slug}
          tag={blog.category}
          title={blog.title}
        />
      ))}
    </section>
  );
}
