import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import BlogCard from "./components/BlogCard";
import HeroBlog from "./components/HeroBlog";
import { getFeaturedPosts, getLatestPosts } from "@/lib/data";
import FeaturedBlogCard from "./components/FeaturedBlogCard";
import FeaturedSidebar from "./components/FeaturedSidebar";
import Subscrible from "./components/SubscribleForm";

export default async function Home() {
  const featuredPosts = await getFeaturedPosts();
  const latestPosts = await getLatestPosts();

  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-10 px-3 my-2 mb-8">
      <section className="w-full">
        <div className="grid md:justify-center md:grid-cols-[2fr_1fr] p-6 md:gap-6 gap-4">
          <Link
            href={`/blog/${featuredPosts[0].slug}`}
            className="perspective-[900px] row-span-2"
          >
            <HeroBlog
              src={featuredPosts[0].image}
              heading={featuredPosts[0].title}
              hclass="text-xl sm:text-3xl"
              tag={featuredPosts[0].category.toUpperCase()}
            />
          </Link>

          <Link
            href={`/blog/${featuredPosts[1].slug}`}
            className="perspective-[900px]"
          >
            <HeroBlog
              src={featuredPosts[1].image}
              heading={featuredPosts[1].title}
              hclass="text-xl sm:text-2xl md:text-lg md:leading-tight lg:text-2xl xl:text-3xl"
              tag={featuredPosts[1].category.toUpperCase()}
            />
          </Link>
          <Link
            href={`/blog/${featuredPosts[2].slug}`}
            className="perspective-[900px]"
          >
            <HeroBlog
              src={featuredPosts[2].image}
              heading={featuredPosts[2].title}
              hclass="text-xl sm:text-2xl md:text-lg md:leading-tight lg:text-2xl xl:text-3xl"
              tag={featuredPosts[2].category.toUpperCase()}
            />
          </Link>
        </div>
      </section>
      <div className="w-full h-0.5 bg-gray-300" />
      <section className="w-full px-6">
        <h2 className="text-4xl font-bold mb-6">Featured Blogs</h2>
        <div className="flex flex-col md:flex-row mt-10 justify-between gap-x-14">
          <div className="md:w-[60%] inline-flex flex-col gap-10">
            {featuredPosts?.map((blog, _key) => (
              <FeaturedBlogCard
                key={_key}
                excerpt={blog.summary}
                image={blog.image}
                slug={blog.slug}
                tag={blog.category.toUpperCase()}
                title={blog.title}
              />
            ))}
          </div>
          <div className="w-0.5 hidden md:block bg-gray-200" />
          <div className="md:hidden h-0.5 bg-gray-200 my-6" />
          <div className="relative md:w-[30%]">
            <FeaturedSidebar />
          </div>
        </div>
      </section>
      <div className="w-full mt-3 h-0.5 bg-gray-300" />
      <section className="w-full px-6">
        <h2 className="text-4xl font-bold mb-6">Latest Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts?.map((blog, _key) => (
            <BlogCard
              key={_key}
              excerpt={blog.summary}
              image={blog.image}
              slug={blog.slug}
              tag={blog.category.toUpperCase()}
              title={blog.title}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild size="xl" className="text-lg">
            <Link href="/blog">
              Read All Blogs <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
      <div className="w-full px-5 h-0.5 bg-gray-300" />
      <Subscrible />
    </div>
  );
}
