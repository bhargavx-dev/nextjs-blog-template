"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SubscribeDialog from "./SubscribeDialog";
import { PagesDropdown } from "./PagesDropDown";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (href: string) =>
    `block px-3 text-sm rounded-md focus:outline-none ${
      pathname === href
        ? "text-blue-700 dark:text-white"
        : "text-gray-700 dark:text-gray-300"
    }`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = (
    <>
      <Link
        href="/"
        className={linkClass("/")}
        onClick={() => setMenuOpen(false)}
      >
        Home
      </Link>
      <Link
        href="/blog"
        className={linkClass("/blog")}
        onClick={() => setMenuOpen(false)}
      >
        Blogs
      </Link>
      <Link
        href="/category"
        className={linkClass("/category")}
        onClick={() => setMenuOpen(false)}
      >
        Categories
      </Link>
      <Link
        href="/about"
        className={linkClass("/about")}
        onClick={() => setMenuOpen(false)}
      >
        About
      </Link>
      <Link
        href="/contact"
        className={linkClass("/contact")}
        onClick={() => setMenuOpen(false)}
      >
        Contact
      </Link>
      <PagesDropdown setMenuOpen={setMenuOpen} />
    </>
  );

  return (
    <nav
      className={cn(
        "md:sticky bg-[var(--background)] top-0 z-20 dark:bg-gray-900 transition-all",
        scrolled && "border-b border-b-gray-100"
      )}
    >
      <div
        className={cn("mx-auto px-4 sm:px-6 lg:px-8", menuOpen && "border-b")}
      >
        <div className="flex items-center justify-between h-16">
          {/* Desktop links */}
          <Link href="/">
            <h1 className="font-[family-name:var(--font-dela-gothic)] font-bold text-3xl sm:text-4xl">
              Health24
            </h1>
          </Link>
          <div className="hidden md:flex font-medium">{navLinks}</div>
          <div className="flex items-center gap-1">
            <SubscribeDialog className="hidden md:block" />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="p-2 rounded-md focus:outline-none"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute h-screen w-full backdrop-blur-sm" />
      )}
      <div
        className={cn(
          "md:hidden bg-[#fffffffd] absolute w-full px-4 flex flex-col space-y-2 items-center font-medium text-lg overflow-hidden transition-all duration-300 ease-in-out",
          menuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        )}
      >
        {navLinks}
        <SubscribeDialog />
      </div>
    </nav>
  );
}
