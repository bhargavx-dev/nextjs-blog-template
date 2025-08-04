"use client";

import { contactSubmission } from "@/lib/actions";
import { useActionState } from "react";
import FormSubmitButton from "../components/FormSubmitButton";
import { CheckCircleIcon } from "lucide-react";

const initialState = {
  success: false,
};

export default function ContactPage() {
  const [state, formAction] = useActionState(contactSubmission, initialState);

  if (state.success) {
    return (
      <main className="max-w-screen-xl mx-auto px-4 py-20 text-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <CheckCircleIcon className="w-16 h-16 text-green-500" />
          <h1 className="text-3xl font-bold text-gray-800">
            Thank you for getting in touch!
          </h1>
          <p className="text-gray-600 max-w-xl">
            We appreciate you contacting us
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-screen-md mx-auto px-4 py-8">
      <section className="text-center mb-12 flex flex-col gap-10">
        <div>
          <h1 className="text-5xl font-bold mb-2">Contact</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have questions, feedback, or collaboration ideas? We'd love to hear
            from you! Fill out the form below and we'll get back to you soon.
          </p>
        </div>
      </section>

      <form action={formAction} className="space-y-6">
        <div>
          <label
            className="block mb-1 font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            required
            id="name"
            name="name"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label
            className="block mb-1 font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            required
            id="email"
            name="email"
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label
            className="block mb-1 font-medium text-gray-700"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            required
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <FormSubmitButton size={"default"}>Send Message</FormSubmitButton>
      </form>
    </main>
  );
}
