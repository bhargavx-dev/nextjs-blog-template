import { Dela_Gothic_One, Geist, Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const delaGothic = Dela_Gothic_One({
  variable: '--font-dela-gothic',
  weight: "400",
  subsets: ["latin"]
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Health24 - Wellness Blogs & Tips",
    template: "%s | Health24",
  },
  description: "Stay updated with trusted health, fitness, and wellness blogs.",
  keywords: ["health", "wellness", "fitness", "nutrition", "mental health"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${inter.variable} ${delaGothic.variable} antialiased`}
      >
        <div className="font-[family-name:var(--font-geist-sans)] min-h-screen flex flex-col">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
