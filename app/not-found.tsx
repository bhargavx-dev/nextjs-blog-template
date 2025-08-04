import Link from "next/link";
import React from "react";

export default function PageNotFound() {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col gap-2 items-center my-32">
      <p className="text-6xl font-bold">404</p>
      <div className="inline-flex gap-0.5">
        <p>Page not found. Go</p>
        <Link href="/" className="underline text-black/80">back home</Link>
      </div>
    </div>
  );
}
