"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Award, Trophy, Star, Zap } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "15+ Projects Completed",
    description: "Successfully delivered diverse projects across web, AI, and mobile platforms",
    date: "2024",
    color: "from-[#d16aff] to-[#bb44f0]",
  },
  {
    icon: Award,
    title: "5 Certifications Earned",
    description: "Team members certified in AWS, Deep Learning, and Full-Stack Development",
    date: "2024",
    color: "from-[#bb44f0] to-[#9614d0]",
  },
  {
    icon: Star,
    title: "10+ Technologies Mastered",
    description: "Expertise across frontend, backend, AI/ML, and DevOps technologies",
    date: "2024",
    color: "from-[#9614d0] to-[#660094]",
  },
  {
    icon: Zap,
    title: "100% Team Collaboration",
    description: "Perfect collaboration rate with seamless teamwork on all projects",
    date: "2024",
    color: "from-[#660094] to-[#d16aff]",
  },
  {
    icon: Trophy,
    title: "1000+ Lines of Code",
    description: "Production-ready code written with best practices and clean architecture",
    date: "2024",
    color: "from-[#d16aff] to-[#9614d0]",
  },
  {
    icon: Award,
    title: "50+ Commits Monthly",
    description: "Active development with consistent contributions and improvements",
    date: "2024",
    color: "from-[#bb44f0] to-[#660094]",
  },
]

export function AchievementsSection() {
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
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#bb44f0] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements & Milestones</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Celebrating our accomplishments and continuous growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className={`glass-dark p-8 rounded-xl border border-[#d16aff]/20 hover:border-[#d16aff]/50 hover:shadow-lg hover:shadow-[#d16aff]/20 group transform hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={
                  {
                    "--transition-delay": isVisible ? `${index * 80}ms` : "0ms",
                    transition:
                      "opacity 300ms ease-out, transform 300ms ease-out, border-color 300ms ease-out, box-shadow 300ms ease-out",
                    transitionDelay: "var(--transition-delay)",
                  } as React.CSSProperties
                }
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${achievement.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{achievement.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{achievement.description}</p>
                <span className="text-[#d16aff] font-semibold text-sm">{achievement.date}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
