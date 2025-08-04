import { Post, posts } from "@/app/data/blog_post"; // Dummy data

export const getPost = async (slug: string) => {
  const res = posts.find((post) => post.slug === slug);
  await new Promise((res) => setTimeout(res, 1000)); //fake delay to show loading state

  return res;
};

export const getAllPosts = async () => {
  const res = posts;
  await new Promise((res) => setTimeout(res, 1000)); //fake delay to show loading state

  return res;
};

export async function getRecomPosts(blogPost: Post) {
  const res = posts
    .filter(
      (post) =>
        post.id !== blogPost.id &&
        post.tags?.some((tag) => blogPost.tags?.includes(tag))
    )
    .slice(0, 3);
  await new Promise((res) => setTimeout(res, 3000)); //fake delay to show loading state

  return res;
}

export async function getLatestPosts() {
  const res = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  return res;
}

export async function getFeaturedPosts() {
  const res = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  return res;
}

export async function getCategoryPosts(categoryValue: string) {
  const res = posts.filter(
    (post) => post.category.toLowerCase() == categoryValue
  );

  await new Promise((res) => setTimeout(res, 1000));

  return res;
}

export async function getTagPosts(tag: string) {
  const res = posts.filter((post) => post.tags?.includes(tag));

  await new Promise((res) => setTimeout(res, 1000));

  return res;
}
