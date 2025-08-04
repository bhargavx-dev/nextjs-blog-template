import teamImage from "@/public/team.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8">
      <section className="text-center mb-12 flex flex-col gap-10">
        <div>
          <h1 className="text-5xl font-bold mb-2">About</h1>
          <p className="text-gray-600">Learn more about our mission</p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        {/* About Image */}
        <div>
          <Image
            src={teamImage}
            placeholder="blur"
            alt="Team or mission photo"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* About Content */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Health 24 was born out of the belief that wellness should be simple,
            honest, and accessible to everyone. Whether you’re looking for
            fitness tips, mindful habits, nutrition guides, or self-care
            routines — we’ve got you covered.
          </p>

          <h2 className="text-2xl font-semibold mb-3">What You'll Find</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Science-backed health advice</li>
            <li>Fitness routines & yoga guides</li>
            <li>Nutritional insights & recipes</li>
            <li>Mental health & mindfulness tips</li>
            <li>Real stories & expert interviews</li>
          </ul>
        </div>
      </section>

      {/* Team or Contact Callout */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-2">Want to reach out?</h2>
        <p className="text-gray-600 mb-4">
          We love hearing from readers, creators, and wellness seekers.
        </p>
        <Button asChild size={"lg"} className="text-base">
          <Link href="/contact">
            Contact Us
            <ArrowRight />
          </Link>
        </Button>
      </section>
    </main>
  );
}
