"use client"

import { useEffect, useRef } from "react"
import Player from "@vimeo/player"

export default function VimeoPlayer({ videoId }: { videoId: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<Player | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    playerRef.current = new Player(containerRef.current, {
      id: videoId,
      width: "100%",
      height: "100%",
      responsive: true,
      controls: true,
      dnt: true,
    })

    return () => {
      playerRef.current?.destroy()
    }
  }, [videoId])

  return <div ref={containerRef} className="w-full h-full absolute inset-0" />
}

