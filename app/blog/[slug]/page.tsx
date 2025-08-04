import RecommendedPosts from "@/app/components/RecommendedPosts";
import RecommendedPostsSkeleton from "@/app/components/skeleton-loading/RecommendedPostsSkeleton";
import Subscrible from "@/app/components/SubscribleForm";
import { Badge } from "@/components/ui/badge";
import { getPost } from "@/lib/data";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  const post = await getPost(slug);

  return {
    title: post?.title,
    description: post?.summary,
    keywords: post?.tags,
  };
}

export default async function page({ params }: Props) {
  const slug = (await params).slug;
  const blogPost = await getPost(slug);

  if (!blogPost) {
    notFound();
  }

  return (
    <>
      <div className="relative aspect-[16/3]">
        <Image
          src={blogPost.image}
          alt={blogPost.title}
          fill
          className="object-cover"
        />
      </div>
      <main className="max-w-screen-xl mx-auto px-6 my-10">
        <article className="prose prose-h1:sm:text-5xl w-fit mx-auto max-w-none dark:prose-invert mt-4">
          <div className="mx-auto flex items-center space-x-2 text-sm">
            <Badge className="text-sm">{blogPost.category}</Badge>
            <p>June 16, 2025</p>
          </div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blogPost.content}
          </ReactMarkdown>
        </article>
        <div className="h-[1px] w-full bg-gray-300 my-10" />
        <Suspense fallback={<RecommendedPostsSkeleton />}>
          <h1 className="text-4xl font-bold">Realted Blogs</h1>
          <RecommendedPosts post={blogPost} />
        </Suspense>
        <div className="h-[1px] w-full bg-gray-300 my-10" />
        <Subscrible />
      </main>
    </>
  );
}
