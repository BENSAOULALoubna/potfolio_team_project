"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "MSLA E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and payment integration",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "🛒",
    link: "#",
    github: "#",
  },
  {
    title: "Train & Gain Gym Website",
    description: "Modern gym management system with membership tracking and class scheduling",
    tech: ["React", "PHP", "MySQL", "Tailwind"],
    image: "💪",
    link: "#",
    github: "#",
  },
  {
    title: "AI Sentiment Analysis System",
    description: "NLP-powered sentiment analysis tool using BERT for social media monitoring",
    tech: ["Python", "TensorFlow", "Flask", "React"],
    image: "🤖",
    link: "#",
    github: "#",
  },
  {
    title: "Medical Image Classifier",
    description: "Deep learning model for medical image classification with 95% accuracy",
    tech: ["Python", "TensorFlow", "CNN", "Flask"],
    image: "🏥",
    link: "#",
    github: "#",
  },
]

export function FeaturedProjectsSection() {
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
    <section id="projects" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d16aff] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Showcasing our latest work and technical expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-dark rounded-xl border border-[#d16aff]/20 overflow-hidden hover:border-[#d16aff]/50 hover:shadow-lg hover:shadow-[#d16aff]/20 group transform hover:-translate-y-2 ${
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
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-[#d16aff]/20 to-[#bb44f0]/20 flex items-center justify-center overflow-hidden relative">
                <div className="text-7xl group-hover:scale-110 transition-transform duration-300">{project.image}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[#310047] text-[#d16aff] text-xs font-semibold rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-[#d16aff] to-[#bb44f0] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#d16aff]/50 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <ExternalLink size={16} />
                    <span>View Project</span>
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 px-4 py-2 border-2 border-[#d16aff] text-[#d16aff] font-semibold rounded-lg hover:bg-[#d16aff] hover:text-[#0a0a0a] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
