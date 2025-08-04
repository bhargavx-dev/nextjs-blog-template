import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function FeaturedSidebar({
  activeCat,
  activeTag,
}: {
  activeCat?: string;
  activeTag?: string;
}) {
  const categories = [
    { label: "Health", value: "health" },
    { label: "Fitness", value: "fitness" },
    { label: "Nutrition", value: "nutrition" },
    { label: "Life Style", value: "life-style" },
  ];
  const tags = [
    "Mental Health",
    "Self Care",
    "Superfoods",
    "Fitness Tips",
    "Hydration",
    "Yoga",
    "Healthy Eating",
    "Mindfulness",
    "Sleep Hygiene",
    "Workout Routine",
  ];
  return (
    <div className="sticky top-20 flex flex-col gap-8">
      <div>
        <h1 className="text-lg mb-4 font-medium">Categories</h1>

        {categories.map((category, index) => (
          <Link
            href={`/category/${category.value}`}
            className={cn(
              "group flex items-center space-x-3 cursor-pointer px-4 py-1",
              activeCat === category.value ? "outline-1 rounded-sm" : ""
            )}
            key={index}
          >
            <div className="h-4 w-4 relative rounded-full outline">
              <div
                className={cn(
                  "absolute h-4 w-4 inset-0 m-auto bg-black/85 rounded-full scale-0 transition-transform duration-400",
                  activeCat === category.value
                    ? "scale-100"
                    : "group-hover:scale-100"
                )}
              />
            </div>
            <p className="text-2xl font-medium ">{category.label}</p>
          </Link>
        ))}
      </div>
      <div>
        <h1 className="text-lg font-medium">Tags</h1>
        <div className="mt-4 ml-1 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Button
              asChild
              key={tag}
              variant={activeTag === tag ? "default" : "outline"}
              className="cursor-pointer w-fit text-base px-5 py-3"
            >
              <Link href={`/tags/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                {tag}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
