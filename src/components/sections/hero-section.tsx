"use client";

import Link from "next/link";
import Image from "next/image";
import teamImg from "../../assets/image.jpg";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] via-[#0a0a0a] to-[#310047] opacity-50" />

      {/* Animated blob background */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#d16aff] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#bb44f0] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[#310047] border border-[#d16aff]">
              <span className="text-sm font-medium text-[#d16aff]">
                Welcome to ENSIA AI
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">AI Engineering</span>
              <br />
              <span className="text-white">Excellence</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We are a passionate team of AI engineering students from ENSIA
              building intelligent systems that solve real-world problems
              through machine learning, deep learning, and innovative software
              engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#team"
                className="px-8 py-4 bg-gradient-to-r from-[#d16aff] to-[#bb44f0] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#d16aff]/50 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Meet The Team
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/#contact"
                className="px-8 py-4 border-2 border-[#d16aff] text-[#d16aff] font-semibold rounded-lg hover:bg-[#d16aff] hover:text-[#0a0a0a] transition-all duration-300 flex items-center justify-center"
              >
                Contact us
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <p className="text-3xl font-bold gradient-text">5</p>
                <p className="text-gray-400 text-sm">Team Members</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">15+</p>
                <p className="text-gray-400 text-sm">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">10+</p>
                <p className="text-gray-400 text-sm">Technologies</p>
              </div>
            </div>
          </div>

          {/* Right Content - Blob with gradient */}
          <div className="relative h-96 lg:h-full min-h-96 animate-slide-in-right rounded-3xl overflow-hidden">
            {/* Full-bleed team image */}
            <Image
              src={teamImg}
              alt="Team background"
              fill
              className="object-cover"
            />
            {/* overlay removed to show photo clearly */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-[#d16aff]" />
      </div>
    </section>
  );
}
