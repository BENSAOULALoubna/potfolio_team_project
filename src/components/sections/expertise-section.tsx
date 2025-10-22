"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Brain, Code, Smartphone, Palette, BarChart3, Cloud } from "lucide-react"

const expertiseAreas = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Machine Learning, Deep Learning, NLP",
    color: "from-[#d16aff] to-[#bb44f0]",
    borderColor: "border-[#d16aff]/20",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack development, React, Node.js",
    color: "from-[#bb44f0] to-[#9614d0]",
    borderColor: "border-[#bb44f0]/20",
  },
  {
    icon: Smartphone,
    title: "Software Engineering",
    description: "Clean code, Design patterns, Agile",
    color: "from-[#9614d0] to-[#660094]",
    borderColor: "border-[#9614d0]/20",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Modern interfaces, User experience",
    color: "from-[#660094] to-[#d16aff]",
    borderColor: "border-[#660094]/20",
  },
  {
    icon: BarChart3,
    title: "Data Science",
    description: "Data analysis, Visualization",
    color: "from-[#d16aff] to-[#9614d0]",
    borderColor: "border-[#d16aff]/20",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deployment, CI/CD",
    color: "from-[#bb44f0] to-[#660094]",
    borderColor: "border-[#bb44f0]/20",
  },
]

export function ExpertiseSection() {
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
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d16aff] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We master a diverse range of technologies and methodologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={index}
                className={`glass-dark p-8 rounded-xl border ${area.borderColor} hover:border-[#d16aff]/50 hover:shadow-lg hover:shadow-[#d16aff]/20 group cursor-pointer transform hover:-translate-y-2 ${
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
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${area.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{area.title}</h3>
                <p className="text-gray-400">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
