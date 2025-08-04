"use client";

import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import React, { ReactNode } from "react";
import { useFormStatus } from "react-dom";

type sizeType = "default" | "sm" | "lg" | "xl" | "icon" | null | undefined;

export default function FormSubmitButton({
  size,
  children,
}: {
  size: sizeType;
  children: ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      size={size}
      type="submit"
      className="cursor-pointer"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      ) : (
        children
      )}
    </Button>
  );
}
