import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

export default function HeroBlog({
  src,
  hclass,
  heading,
  tag,
}: {
  src: string;

  hclass: string;
  heading: string;
  tag: string;
}) {
  return (
    <div
      className={`hover-3d-card h-full relative aspect-[4/3] rounded-md transition-all scale-100 duration-300`}
    >
      <Image
        src={src}
        alt="Top Right Image"
        fill
        className="object-cover w-full rounded-md brightness-80"
      />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/30 via-black/20 to-transparent z-0 rounded-md" />
      <div className="absolute bottom-0 py-3 left-0 px-5 z-10 text-white">
        <div className="flex items-center gap-2 text-sm">
          <Badge className="text-sm">{tag}</Badge>
          <p>June 16, 2025</p>
        </div>
        <h2 className={`mt-0.5 font-semibold ${hclass}`}>{heading}</h2>
      </div>
    </div>
  );
}
