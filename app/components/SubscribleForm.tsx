"use client";

import { subscribeAction } from "@/lib/actions";
import SubscribeButton from "./FormSubmitButton";
import { useActionState } from "react";
import Image from "next/image";
import subscriptionImage from "@/public/subscription.jpg"

const initialState = {
  success: false,
};

export default function SubscribleForm() {
  const [state, formAction] = useActionState(subscribeAction, initialState);
  return (
    <section className="relative w-full py-20 bg-gray-200 px-6 rounded-lg shadow-sm">
      <Image
        src={subscriptionImage}
        alt="Subscribe"
        fill
        className="object-cover rounded-lg"
        placeholder="blur"

      />
      <div className="relative max-w-2xl mx-auto text-center backdrop-blur-sm p-12 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Subscribe To Health24
        </h2>
        <p className="text-gray-800 md:px-10 mb-6">
          Subscribe to get the latest health and wellness blogs delivered to
          your inbox.
        </p>

        <form
          action={formAction}
          className="flex flex-col sm:flex-row gap-3 items-center justify-center"
        >
          {state.success ? (
            <div className="bg-white/50 p-3 rounded-sm border-2 border-dashed border-white/50">
              <p className="font-medium text-center">
                🎉 Thank you for subscribing!
              </p>
            </div>
          ) : (
            <>
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                className="w-full sm:w-1/2 px-4 py-2 rounded-sm bg-white/30 focus:outline-1 focus:outline-white/70"
                required
              />
              <SubscribeButton size="lg">Subscribe</SubscribeButton>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
