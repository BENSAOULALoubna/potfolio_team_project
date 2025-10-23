"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";

const technologies = [
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "Next.js", category: "Frontend", icon: "▲" },
  { name: "TypeScript", category: "Language", icon: "TS" },
  { name: "Tailwind CSS", category: "Styling", icon: "🎨" },
  { name: "Node.js", category: "Backend", icon: "🟢" },
  { name: "Express", category: "Backend", icon: "⚡" },
  { name: "Python", category: "Language", icon: "🐍" },
  { name: "TensorFlow", category: "AI/ML", icon: "🤖" },
  { name: "PyTorch", category: "AI/ML", icon: "🔥" },
  { name: "MongoDB", category: "Database", icon: "🍃" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "Docker", category: "DevOps", icon: "🐳" },
  { name: "Git", category: "Tools", icon: "🔀" },
  { name: "Figma", category: "Design", icon: "🎭" },
  { name: "AWS", category: "Cloud", icon: "☁️" },
  { name: "Vercel", category: "Cloud", icon: "▲" },
];

export function TechStackSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tech-stack"
      className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a0a2e] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#bb44f0] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technologies We Master</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`glass-dark p-4 rounded-lg border border-[#d16aff]/20 hover:border-[#d16aff]/50 hover:shadow-lg hover:shadow-[#d16aff]/20 group cursor-pointer text-center transform hover:scale-110 hover:-translate-y-2 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              style={
                {
                  "--transition-delay": isVisible ? `${index * 30}ms` : "0ms",
                  transition:
                    "opacity 300ms ease-out, transform 300ms ease-out, border-color 300ms ease-out, box-shadow 300ms ease-out",
                  transitionDelay: "var(--transition-delay)",
                } as React.CSSProperties
              }
            >
              <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                {tech.icon}
              </div>
              <p className="font-semibold text-sm text-white">{tech.name}</p>
              <p className="text-xs text-gray-400 mt-1">{tech.category}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-dark p-6 rounded-xl border border-[#d16aff]/20">
            <h3 className="text-lg font-bold text-[#d16aff] mb-3">Frontend</h3>
            <p className="text-gray-400 text-sm">
              React, Next.js, TypeScript, Tailwind CSS, JavaScript
            </p>
          </div>
          <div className="glass-dark p-6 rounded-xl border border-[#bb44f0]/20">
            <h3 className="text-lg font-bold text-[#bb44f0] mb-3">Backend</h3>
            <p className="text-gray-400 text-sm">
              Node.js, Express, Python, Flask, Django
            </p>
          </div>
          <div className="glass-dark p-6 rounded-xl border border-[#9614d0]/20">
            <h3 className="text-lg font-bold text-[#9614d0] mb-3">AI/ML</h3>
            <p className="text-gray-400 text-sm">
              TensorFlow, PyTorch, Scikit-learn, Keras
            </p>
          </div>
          <div className="glass-dark p-6 rounded-xl border border-[#660094]/20">
            <h3 className="text-lg font-bold text-[#660094] mb-3">Database</h3>
            <p className="text-gray-400 text-sm">
              MongoDB, MySQL, PostgreSQL, Firebase
            </p>
          </div>
          <div className="glass-dark p-6 rounded-xl border border-[#d16aff]/20">
            <h3 className="text-lg font-bold text-[#d16aff] mb-3">
              Tools & DevOps
            </h3>
            <p className="text-gray-400 text-sm">
              Git, Docker, GitHub Actions, CI/CD
            </p>
          </div>
          <div className="glass-dark p-6 rounded-xl border border-[#bb44f0]/20">
            <h3 className="text-lg font-bold text-[#bb44f0] mb-3">
              Cloud & Deployment
            </h3>
            <p className="text-gray-400 text-sm">
              AWS, Vercel, Heroku, Google Cloud
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
