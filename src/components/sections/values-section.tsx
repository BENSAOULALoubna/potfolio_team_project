"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Target, Lock, Zap, BookOpen } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every project and continuously improve our skills",
  },
  {
    icon: Lock,
    title: "Integrity",
    description: "We maintain high ethical standards and deliver honest, reliable solutions",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We push boundaries and explore new technologies to create impact",
  },
  {
    icon: BookOpen,
    title: "Learning",
    description: "We embrace continuous learning and share knowledge with our team",
  },
]

export function ValuesSection() {
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
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a0a2e] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#bb44f0] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Values</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The principles that guide our work and define our culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className={`glass-dark p-8 rounded-xl border border-[#d16aff]/20 hover:border-[#d16aff]/50 hover:shadow-lg hover:shadow-[#d16aff]/20 group transform hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={
                  {
                    "--transition-delay": isVisible ? `${index * 100}ms` : "0ms",
                    transition:
                      "opacity 300ms ease-out, transform 300ms ease-out, border-color 300ms ease-out, box-shadow 300ms ease-out",
                    transitionDelay: "var(--transition-delay)",
                  } as React.CSSProperties
                }
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#d16aff] to-[#bb44f0] p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
