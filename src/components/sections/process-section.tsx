"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Target, Lightbulb, Cog, Rocket } from "lucide-react"

const processSteps = [
  {
    icon: Target,
    title: "Research & Planning",
    description: "We analyze requirements and plan solutions",
    number: "01",
  },
  {
    icon: Lightbulb,
    title: "Design & Prototype",
    description: "Creating intuitive designs and prototypes",
    number: "02",
  },
  {
    icon: Cog,
    title: "Development & Testing",
    description: "Building robust, scalable solutions",
    number: "03",
  },
  {
    icon: Rocket,
    title: "Deploy & Iterate",
    description: "Launching and continuously improving",
    number: "04",
  },
]

export function ProcessSection() {
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
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#bb44f0] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d16aff] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">How We Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our proven process for delivering exceptional results
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#d16aff] via-[#bb44f0] to-[#9614d0] opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className={`relative ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={
                    {
                      "--transition-delay": isVisible ? `${index * 100}ms` : "0ms",
                      transition: "opacity 600ms ease-out, transform 600ms ease-out",
                      transitionDelay: "var(--transition-delay)",
                    } as React.CSSProperties
                  }
                >
                  {/* Step number circle */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#d16aff] to-[#bb44f0] flex items-center justify-center font-bold text-lg z-10 border-4 border-[#0a0a0a]">
                    {step.number}
                  </div>

                  {/* Card */}
                  <div className="glass-dark p-8 rounded-xl border border-[#d16aff]/20 hover:border-[#d16aff]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#d16aff]/20 mt-8">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#d16aff] to-[#bb44f0] p-3 mb-4 mx-auto">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-400 text-center text-sm">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
