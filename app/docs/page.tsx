import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Separator from "../components/Seperator";

export const metadata = {
  title: "Documentation | Health24 Blog Template",
  description:
    "Complete guide to using and customizing the Health24 Blog Template.",
};

export default function DocumentationPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 prose prose-lg dark:prose-invert">
      <h1 className="text-4xl font-bold mb-4">Health24 Blog Template</h1>
      <p className="text-gray-600 mb-8">
        Thank you for purchasing <strong>Health24 Blog Template</strong>! This
        guide helps you install, customize, and deploy the template effectively.
      </p>

      <Separator className="my-6" />

      {/* Features */}
      <section>
        <h2 className="text-2xl font-semibold">1. Features</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Built with <strong>Next.js 15 (App Router)</strong>
          </li>
          <li>Tailwind CSS + Shadcn UI components</li>
          <li>
            SEO optimized with <code>generateMetadata</code>
          </li>
          <li>Pagination, Categories, Responsive</li>
          <li>Server actions for forms</li>
          <li>
            Ready for <strong>Vercel Deployment</strong>
          </li>
        </ul>
      </section>

      <Separator className="my-6" />

      {/* Getting Started */}
      <section>
        <h2 className="text-2xl font-semibold">2. Getting Started</h2>
        <p>
          Ensure you have <strong>Node.js 18+</strong> installed.
        </p>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md mt-4">
          <code>
            {`# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start`}
          </code>
        </pre>
      </section>

      <Separator className="my-6" />

      {/* Project Structure */}
      <section>
        <h2 className="text-2xl font-semibold">3. Project Structure</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md mt-4">
          <code>{`root/
├── app/
│   ├── page.tsx
│   ├── blog/
│   ├── category/
│   ├── search/
│   ├── about/
│   ├── contact/
│   ├── license/
│   ├── changelog/
│   └── components/
├── public/
├── LICENSE.md
├── CHANGELOG.md
└── package.json`}</code>
        </pre>
      </section>

      <Separator className="my-6" />

      {/* Customization */}
      <section>
        <h2 className="text-2xl font-semibold">4. Customization</h2>
        <h3 className="text-xl font-medium mt-4">Colors & Fonts</h3>
        <p>
          Modify <code>tailwind.config.ts</code> to change theme colors or add
          fonts:
        </p>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md mt-4">
          <code>{`theme: {
  extend: {
    colors: {
      primary: "#1e40af", // Your brand color
    },
  },
}`}</code>
        </pre>

        <h3 className="text-xl font-medium mt-4">Blog Posts</h3>
        <p>
          Blog data is located in <code>app/data/blog_post.ts</code>. Add posts
          like:
        </p>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md mt-4">
          <code>
            {`export const posts = [
  {
    title: "5 Superfoods to Boost Energy",
    slug: "superfoods-boost-energy",
    summary: "Learn about superfoods...",
    category: "Nutrition",
    image: "/images/superfood.jpg",
    content: "# Superfoods\\nThese foods are...",
  },
];`}
          </code>
        </pre>
      </section>

      <Separator className="my-6" />

      {/* Deployment */}
      <section>
        <h2 className="text-2xl font-semibold">5. Deployment</h2>
        <p>
          The template is optimized for <strong>Vercel</strong>:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Push your project to GitHub</li>
          <li>Connect the repo to Vercel</li>
          <li>Build & deploy automatically</li>
        </ul>
      </section>

      <Separator className="my-6" />

      {/* License */}
      <section>
        <h2 className="text-2xl font-semibold">6. License</h2>
        <p>
          This template is licensed for personal & commercial use. See{" "}
          <Link href="/license" className="text-blue-600">
            License Page
          </Link>{" "}
          for details. Fonts: <Badge variant="secondary">Inter</Badge> (Open
          Font License). Images:{" "}
          <Link
            href="https://unsplash.com"
            target="_blank"
            className="text-blue-600"
          >
            Unsplash
          </Link>
          .
        </p>
      </section>

      <Separator className="my-6" />

      {/* Changelog */}
      <section>
        <h2 className="text-2xl font-semibold">7. Changelog</h2>
        <p>
          For updates, visit the{" "}
          <Link href="/changelog" className="text-blue-600">
            Changelog page
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
