"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  offset?: number
}

export function ParallaxSection({ children, offset = 50 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const elementTop = ref.current.getBoundingClientRect().top
        const elementBottom = ref.current.getBoundingClientRect().bottom

        if (elementTop < window.innerHeight && elementBottom > 0) {
          setOffsetY((window.innerHeight - elementTop) * 0.1)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={ref} style={{ transform: `translateY(${offsetY}px)` }} className="transition-transform duration-100">
      {children}
    </div>
  )
}
