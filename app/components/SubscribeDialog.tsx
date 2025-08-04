"use client";

import React, { useActionState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { subscribeAction } from "@/lib/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormSubmitButton from "./FormSubmitButton";
import { cn } from "@/lib/utils";

const initialState = {
  success: false,
};

export default function SubscribeDialog({ className }: { className?: string }) {
  const [state, formAction] = useActionState(subscribeAction, initialState);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn("cursor-pointer", className)}>Subscribe</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogDescription>
            Subscribe to our newsletter to get notification of latest posts
          </DialogDescription>
        </DialogHeader>
        <form action={formAction}>
          {state.success ? (
            <div className="bg-gray-100 py-3 px-2 rounded-sm border-2 border-dashed">
              <p className="font-medium text-center">
                🎉 Thank you for subscribing!
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" placeholder="Email" required />
              </div>
            </div>
          )}
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline" className="cursor-pointer">
                Cancel
              </Button>
            </DialogClose>
            {!state.success && (
              <FormSubmitButton size={"default"}>Subscribe</FormSubmitButton>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
