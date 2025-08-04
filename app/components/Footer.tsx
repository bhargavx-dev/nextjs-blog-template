import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-gray-300 pt-8 bg-[#F8FAFC] mt-auto border-t">
      <div className="md:w-[400px] mx-auto px-4 grid gap-y-6 justify-center">
        {/* Brand Info */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-black mb-2">Health 24</h2>
          <p className="text-sm text-center text-muted-foreground">
            Your daily dose of health and wellness. Read. Learn. Live better.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            optio!
          </p>
        </div>
        {/* Navigation Links */}
        <div>
          <ul className="px-10 flex flex-wrap gap-6 justify-center gap-y-2 font-medium text-gray-600">
            <li>
              <Link
                href="/"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/license"
                aria-label="License"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Licenses
              </Link>
            </li>
            <li>
              <Link
                href="/changelog"
                aria-label="Changelog"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Changelog
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 mt-10 py-2 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Health 24. All rights reserved.
      </div>
    </footer>
  );
}
