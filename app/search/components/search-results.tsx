"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Hits, Pagination, useInstantSearch } from "react-instantsearch"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Initialize the Algolia client
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "placeholder",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || "placeholder",
)

export default function SearchResults({ query }: { query: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    // jQuery Migrate compatibility layer
    if (typeof window !== "undefined" && !window.jQuery) {
      console.warn("jQuery not found. Loading jQuery Migrate compatibility layer...")
      const script = document.createElement("script")
      script.src = "https://code.jquery.com/jquery-migrate-3.3.2.min.js"
      document.head.appendChild(script)
    }
  }, [])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", page.toString())
    router.push(`/search?${params.toString()}`)
  }

  return (
    <InstantSearch searchClient={searchClient} indexName="products">
      <NoResultsBoundary fallback={<NoResults />}>
        <Hits hitComponent={Hit} />
      </NoResultsBoundary>
      <div className="mt-8">
        <Pagination
          padding={2}
          totalPages={10} // Replace with actual total pages
          showFirst={false}
          showLast={false}
          classNames={{
            root: "flex justify-center",
            item: "mx-1",
            link: "px-3 py-2 bg-white border rounded hover:bg-gray-100",
            selectedItem: "font-bold bg-primary text-white",
          }}
        />
      </div>
    </InstantSearch>
  )
}

function Hit({ hit }: { hit: any }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="aspect-square relative mb-4">
          <Image
            src={hit.image || "/placeholder.svg"}
            alt={hit.name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <h2 className="text-lg font-semibold mb-2">{hit.name}</h2>
        <p className="text-sm text-muted-foreground mb-2">{hit.description}</p>
        <p className="text-lg font-bold">${hit.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}

function NoResults() {
  const { indexUiState } = useInstantSearch()
  return (
    <div className="text-center py-8">
      <p className="text-xl font-semibold mb-4">No results found for &ldquo;{indexUiState.query}&rdquo;</p>
      <p className="text-muted-foreground">Try checking your spelling or using more general terms.</p>
    </div>
  )
}

function NoResultsBoundary({ children, fallback }: { children: React.ReactNode; fallback: React.ReactNode }) {
  const { results } = useInstantSearch()

  if (!results.__isArtificial && results.nbHits === 0) {
    return <>{fallback}</>
  }

  return children
}

