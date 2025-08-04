import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function BlogPostSkleton() {
  return (
    <main className="px-6 py-8">
      {/* Page Title Section */}
      <section className="text-center mb-12 flex flex-col gap-6 items-center">
        {/* <Skeleton className="h-12 w-64" /> */}
        <Skeleton className="h-5 w-80" />
      </section>

      {/* Blog Cards Skeleton Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-zcols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-48 w-full rounded-xl" />
            <Skeleton className="h-6 w-[80%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        ))}
      </section>
    </main>
  )
}
