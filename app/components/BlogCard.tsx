// components/BlogCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

type BlogCardProps = {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  tag: string;
};

export default function BlogCard({
  title,
  excerpt,
  slug,
  image,
  tag,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group">
      <div className=" rounded-b-lg perspective-[1000px]">
        <div className="relative aspect-[4/3] hover-3d-card">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="px-2 py-2 lg:py-3 flex flex-col gap-1">
          <div className="flex items-center gap-2 text-sm">
            <Badge className="md:text-sm">{tag}</Badge>
            <p>June 16, 2025</p>
          </div>
          <div>
            <h3 className="text-xl leading-tight font-bold group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">{excerpt}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
