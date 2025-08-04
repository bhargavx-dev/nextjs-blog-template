import { cn } from "@/lib/utils";
import React from "react";

export default function Separator({className}: {className: string}) {
  return <div className={cn("h-0.5 w-full bg-gray-300", className)} />;
}
