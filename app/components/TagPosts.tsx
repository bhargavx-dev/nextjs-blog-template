import { getTagPosts } from "@/lib/data";
import FilteredPosts from "./FilteredPosts";

type CategoryPostProps = {
  tag: string;
  currentPage: number;
  postPerPage: number;
};

export default async function CategoryPosts({
  tag,
  currentPage,
  postPerPage,
}: CategoryPostProps) {
  const posts = await getTagPosts(tag);
  const paginatedPosts = posts.slice(
    (currentPage - 1) * postPerPage,
    currentPage * postPerPage
  );
  if (posts.length == 0) {
    return <p className="text-center">No results found</p>;
  }
  return (
    <FilteredPosts
      category={tag}
      currentPage={currentPage}
      postPerPage={postPerPage}
      paginatedPosts={paginatedPosts}
    />
  );
}
