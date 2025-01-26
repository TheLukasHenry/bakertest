"use client"

import { useEffect } from "react"
import { RefinementList, RangeInput } from "react-instantsearch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SearchFilters() {
  useEffect(() => {
    // Babel-transpiled legacy browser support
    if (typeof window !== "undefined" && !("noModule" in HTMLScriptElement.prototype)) {
      console.warn("Legacy browser detected. Loading Babel polyfill...")
      const script = document.createElement("script")
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.12.1/polyfill.min.js"
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <RefinementList
            attribute="categories"
            limit={5}
            showMore={true}
            showMoreLimit={20}
            classNames={{
              list: "space-y-2",
              label: "flex items-center",
              checkbox: "mr-2 rounded",
              count: "ml-2 text-sm text-muted-foreground",
            }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <RangeInput
            attribute="price"
            classNames={{
              form: "space-y-4",
              input: "w-full border rounded px-2 py-1",
              submit: "w-full bg-primary text-white rounded px-4 py-2 mt-2 hover:bg-primary/90",
            }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Brands</CardTitle>
        </CardHeader>
        <CardContent>
          <RefinementList
            attribute="brand"
            limit={5}
            showMore={true}
            showMoreLimit={20}
            classNames={{
              list: "space-y-2",
              label: "flex items-center",
              checkbox: "mr-2 rounded",
              count: "ml-2 text-sm text-muted-foreground",
            }}
          />
        </CardContent>
      </Card>
    </div>
  )
}

