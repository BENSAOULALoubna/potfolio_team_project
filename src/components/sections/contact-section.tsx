"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, MessageSquare, Send } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d16aff] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-xl text-gray-400">We'd love to hear from you. Send us a message!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-dark p-6 rounded-xl border border-[#d16aff]/20 text-center hover:border-[#d16aff]/50 transition-all duration-300">
              <Mail className="w-8 h-8 text-[#d16aff] mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Email</h3>
              <p className="text-gray-400 text-sm">team@ensia.ai</p>
            </div>
            <div className="glass-dark p-6 rounded-xl border border-[#bb44f0]/20 text-center hover:border-[#bb44f0]/50 transition-all duration-300">
              <MessageSquare className="w-8 h-8 text-[#bb44f0] mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Discord</h3>
              <p className="text-gray-400 text-sm">Join our community</p>
            </div>
            <div className="glass-dark p-6 rounded-xl border border-[#9614d0]/20 text-center hover:border-[#9614d0]/50 transition-all duration-300">
              <Send className="w-8 h-8 text-[#9614d0] mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Social</h3>
              <p className="text-gray-400 text-sm">Follow us online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
