"use client"

import { useEffect, useRef } from "react"
import { Loader } from "@googlemaps/js-api-loader"

export default function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        version: "weekly",
      })

      const { Map } = await loader.importLibrary("maps")

      const position = { lat: 33.749, lng: -84.388 } // Atlanta coordinates

      if (mapRef.current) {
        const map = new Map(mapRef.current, {
          center: position,
          zoom: 15,
          mapId: "DEMO_MAP_ID",
        })

        new google.maps.Marker({
          position,
          map,
          title: "Baker HVAC Supply",
        })
      }
    }

    initMap()
  }, [])

  return <div ref={mapRef} className="w-full h-[400px] rounded-lg overflow-hidden border" />
}

