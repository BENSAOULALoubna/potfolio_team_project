"use client"

import type { ReactNode } from "react"

interface HoverCardProps {
  children: ReactNode
  className?: string
}

export function HoverCard({ children, className = "" }: HoverCardProps) {
  return (
    <div
      className={`glass-dark rounded-xl border border-[#d16aff]/20 hover:border-[#d16aff]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#d16aff]/20 transform hover:-translate-y-2 ${className}`}
    >
      {children}
    </div>
  )
}
