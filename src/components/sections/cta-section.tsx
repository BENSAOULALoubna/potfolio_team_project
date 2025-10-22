"use client"

import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a0a2e] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#bb44f0] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d16aff] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Let's Build Something Amazing Together</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Whether you have a project in mind or just want to collaborate, we'd love to hear from you. Let's create
          something extraordinary together.
        </p>


        
      </div>
    </section>
  )
}
