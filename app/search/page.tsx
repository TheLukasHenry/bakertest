import { Suspense } from "react"
import SearchResults from "./components/search-results"
import SearchFilters from "./components/search-filters"
import { Skeleton } from "@/components/ui/skeleton"

export default function SearchPage({
  searchParams,
}: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const query = typeof searchParams.q === "string" ? searchParams.q : ""

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Results for "{query}"</h1>
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <Suspense fallback={<SearchFiltersSkeleton />}>
            <SearchFilters />
          </Suspense>
        </div>
        <div className="lg:col-span-3">
          <Suspense fallback={<SearchResultsSkeleton />}>
            <SearchResults query={query} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function SearchFiltersSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-40 w-full" />
    </div>
  )
}

function SearchResultsSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-full" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-60 w-full" />
        ))}
      </div>
    </div>
  )
}

