import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Post } from "../data/blog_post";


export default function PostPagination({
  currentPage,
  posts,
  postPerPage,
  baseUrl,
}: {
  currentPage: number;
  posts: Post[];
  postPerPage: number;
  baseUrl: string
}) {
  const totalPages = Math.ceil(posts.length / postPerPage);

  const getPageItems = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 4) {
        pages.push("dots-prev");
      }
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        if (i > 1 && i < totalPages) pages.push(i);
      }
      if (currentPage < totalPages - 3) {
        pages.push("dots-next");
      }
      pages.push(totalPages);
    }
    return pages;
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`${baseUrl}?page=${currentPage - 1}`}
            className={
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
        {getPageItems().map((item, idx) => (
          <PaginationItem key={idx}>
            {typeof item === "number" ? (
              <PaginationLink
                href={`${baseUrl}?page=${item}`}
                isActive={item === currentPage}
              >
                {item}
              </PaginationLink>
            ) : (
              <PaginationEllipsis />
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href={`${baseUrl}?page=${currentPage + 1}`}
            className={
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
