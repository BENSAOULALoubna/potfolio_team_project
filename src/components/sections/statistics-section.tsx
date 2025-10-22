"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Code2, GitCommit, Zap, Users, Brain, Trophy } from "lucide-react"

interface StatItem {
  label: string
  value: number
  suffix: string
  icon: React.ReactNode
}

const stats: StatItem[] = [
  { label: "Lines of Code", value: 1000, suffix: "+", icon: <Code2 size={32} /> },
  { label: "Commits This Month", value: 50, suffix: "+", icon: <GitCommit size={32} /> },
  { label: "Technologies Used", value: 20, suffix: "+", icon: <Zap size={32} /> },
  { label: "Team Collaboration", value: 100, suffix: "%", icon: <Users size={32} /> },
  { label: "AI Models Trained", value: 15, suffix: "+", icon: <Brain size={32} /> },
  { label: "Certifications Earned", value: 5, suffix: "+", icon: <Trophy size={32} /> },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold gradient-text">
      {count}
      {suffix}
    </div>
  )
}

export function StatisticsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a0a2e] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#bb44f0] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d16aff] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">By The Numbers</span>
          </h2>
          <p className="text-xl text-gray-400">Our impact and achievements at a glance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-dark p-8 rounded-xl border border-[#d16aff]/20 hover:border-[#d16aff]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#d16aff]/20 group"
            >
              <div className="text-[#d16aff] mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-gray-400 mt-4">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
