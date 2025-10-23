"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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
    <section id="about" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d16aff] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Who We Are</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A passionate team of AI engineering students from ENSIA dedicated to innovation and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <div className="glass-dark p-6 rounded-xl border border-[#d16aff]/20">
                <h3 className="text-2xl font-bold mb-3 text-[#d16aff]">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  We are committed to building intelligent systems that solve real-world problems through cutting-edge
                  machine learning, deep learning, and innovative software engineering practices.
                </p>
              </div>

              <div className="glass-dark p-6 rounded-xl border border-[#bb44f0]/20">
                <h3 className="text-2xl font-bold mb-3 text-[#bb44f0]">Our Passion</h3>
                <p className="text-gray-300 leading-relaxed">
                  We are passionate about AI, continuous learning, and pushing the boundaries of what's possible. Every
                  project is an opportunity to grow and make an impact.
                </p>
              </div>

              <div className="glass-dark p-6 rounded-xl border border-[#9614d0]/20">
                <h3 className="text-2xl font-bold mb-3 text-[#9614d0]">Our Focus</h3>
                <p className="text-gray-300 leading-relaxed">
                  Machine Learning, Deep Learning, Web Development, Software Engineering, and Data Science. We combine
                  theoretical knowledge with practical implementation.
                </p>
              </div>
            </div>

            {/* Right content - Stats */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-dark p-6 rounded-xl border border-[#d16aff]/20 text-center">
                  <p className="text-4xl font-bold gradient-text mb-2">5</p>
                  <p className="text-gray-400">Team Members</p>
                </div>
                <div className="glass-dark p-6 rounded-xl border border-[#bb44f0]/20 text-center">
                  <p className="text-4xl font-bold gradient-text mb-2">15+</p>
                  <p className="text-gray-400">Projects</p>
                </div>
                <div className="glass-dark p-6 rounded-xl border border-[#9614d0]/20 text-center">
                  <p className="text-4xl font-bold gradient-text mb-2">3+</p>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div className="glass-dark p-6 rounded-xl border border-[#660094]/20 text-center">
                  <p className="text-4xl font-bold gradient-text mb-2">10+</p>
                  <p className="text-gray-400">Technologies</p>
                </div>
              </div>

              <div className="glass-dark p-8 rounded-xl border border-[#d16aff]/20">
                <h3 className="text-xl font-bold mb-4 text-[#d16aff]">Why Choose Us?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#d16aff] font-bold">✓</span>
                    <span>Expert knowledge in AI and Machine Learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d16aff] font-bold">✓</span>
                    <span>Full-stack development capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d16aff] font-bold">✓</span>
                    <span>Proven track record with 15+ projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d16aff] font-bold">✓</span>
                    <span>Collaborative and innovative approach</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
