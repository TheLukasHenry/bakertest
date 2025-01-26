"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // TODO: Initialize New Relic error tracking
    console.log("Initializing New Relic error tracking")

    // Example of how to track errors with New Relic
    const trackError = (error: Error) => {
      console.error("Tracked error:", error)
      // In a real implementation, you would send this error to New Relic
    }

    // Set up global error handler
    window.addEventListener("error", (event) => {
      trackError(event.error)
    })

    // Set up unhandled promise rejection handler
    window.addEventListener("unhandledrejection", (event) => {
      trackError(event.reason)
    })

    return () => {
      // Clean up event listeners
      window.removeEventListener("error", trackError)
      window.removeEventListener("unhandledrejection", trackError)
    }
  }, [])

  useEffect(() => {
    // Track page views
    console.log("Page view:", pathname)
    // In a real implementation, you would send this to New Relic
  }, [pathname])

  return <>{children}</>
}

