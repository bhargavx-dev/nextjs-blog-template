import { getCategoryPosts } from "@/lib/data";
import FilteredPosts from "./FilteredPosts";

type CategoryPostProps = {
  category: string;
  currentPage: number;
  postPerPage: number;
};

export default async function CategoryPosts({
  category,
  currentPage,
  postPerPage,
}: CategoryPostProps) {
  const categoryValue = category.replace(/-/g, "");
  const posts = await getCategoryPosts(categoryValue);
  const paginatedPosts = posts.slice(
    (currentPage - 1) * postPerPage,
    currentPage * postPerPage
  );
  if (posts.length == 0) {
    return <p className="text-center">No results found</p>;
  }
  return (
    <FilteredPosts
      category={category}
      currentPage={currentPage}
      postPerPage={postPerPage}
      paginatedPosts={paginatedPosts}
    />
  );
}
