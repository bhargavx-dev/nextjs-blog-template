import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  tag: string;
};

export default async function FeaturedBlogCard({
  title,
  excerpt,
  slug,
  image,
  tag,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group">
      <div className="grid items-center gap-4">
        <div className="relative aspect-[4/2] perspective-[1000px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg hover-3d-card"
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-sm">
            <Badge className="text-sm">{tag}</Badge>
            <p>June 16, 2025</p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold group-hover:text-blue-500">
              {title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base line-clamp-2">
              {excerpt}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
