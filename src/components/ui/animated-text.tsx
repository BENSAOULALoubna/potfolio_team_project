"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
}

export function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={`inline-block ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          style={
            {
              "--transition-delay": isVisible ? `${i * 20}ms` : "0ms",
              transition: "opacity 500ms ease-out, transform 500ms ease-out",
              transitionDelay: "var(--transition-delay)",
            } as React.CSSProperties
          }
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  )
}
