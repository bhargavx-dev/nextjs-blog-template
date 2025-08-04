import Link from "next/link";

type Category = {
  name: string;
  slug: string;
  color: string;
  description: string;
  postCount: number;
};

const categories: Category[] = [
  {
    name: "Fitness",
    slug: "fitness",
    color: "bg-green-500",
    description: "Workouts, stretches & body movement.",
    postCount: 12,
  },
  {
    name: "Nutrition",
    slug: "nutrition",
    color: "bg-yellow-500",
    description: "Healthy recipes, food facts & diets.",
    postCount: 9,
  },
  {
    name: "Health",
    slug: "health",
    color: "bg-blue-500",
    description: "Mental health & lifestyle tips.",
    postCount: 6,
  },
  {
    name: "LifeStyle",
    slug: "life-style",
    color: "bg-purple-500",
    description: "Yoga flows & breathing techniques.",
    postCount: 4,
  },
];

export default function CategoriesPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8">
      <section className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-2 tracking-tight">Explore Categories</h1>
        <p className="text-muted-foreground text-base">
          Discover topics that interest and inspire you.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className="group p-6 rounded-2xl border hover:border-gray-300 bg-white shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-inner ${category.color}`}
              />
              <div>
                <h3 className="text-lg font-semibold group-hover:text-primary">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">{category.postCount} post{category.postCount !== 1 && "s"}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">{category.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
