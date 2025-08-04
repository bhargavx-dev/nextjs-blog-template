import React from "react";
import BlogCard from "./BlogCard";
import { Post } from "../data/blog_post";
import { getRecomPosts } from "@/lib/data";

export default async function RecommendedPosts({ post }: { post: Post }) {
  const recomPosts = await getRecomPosts(post);
  return (
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-x-7 grid-cols-1 gap-3 my-6">
      {recomPosts?.map((blog, _key) => (
        <BlogCard
          key={_key}
          excerpt={blog.summary}
          image={blog.image}
          slug={blog.slug}
          tag={blog.category}
          title={blog.title}
        />
      ))}
    </div>
  );
}
