"use client";

import type React from "react";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import teamData, { type Member } from "../../lib/teamData";

// Color gradients for each member (can be moved to individual member files later)
const colorMap: Record<string, string> = {
  loubna: "from-[#d16aff] to-[#bb44f0]",
  afaf: "from-[#bb44f0] to-[#9614d0]",
  belkeis: "from-[#9614d0] to-[#660094]",
  ilyas: "from-[#660094] to-[#d16aff]",
  raouf: "from-[#d16aff] to-[#9614d0]",
};

// Transform teamData into the format needed for this component
type TeamMember = Member & { id: string; color: string };

const teamMembers: TeamMember[] = Object.entries(teamData).map(
  ([id, member]) => ({
    id,
    ...member,
    color: colorMap[id] ?? "from-[#d16aff] to-[#bb44f0]",
  })
);

function TeamModal({
  member,
  isOpen,
  onClose,
}: {
  member: (typeof teamMembers)[0];
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="glass-dark rounded-2xl border border-[#d16aff]/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: isOpen
            ? "slideUp 0.3s ease-out"
            : "slideDown 0.3s ease-in",
        }}
      >
        {/* Header */}
        <div className={`bg-gradient-to-r ${member.color} p-8 relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-all"
          >
            <X size={24} className="text-white" />
          </button>
          <div className="text-7xl mb-4">{member.image}</div>
          <h2 className="text-3xl font-bold text-white mb-2">{member.name}</h2>
          <p className="text-white/90 font-semibold">{member.role}</p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Bio */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">About</h3>
            <p className="text-gray-300 leading-relaxed">{member.fullBio}</p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              Skills & Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-[#310047] text-[#d16aff] text-sm font-semibold rounded-full border border-[#d16aff]/30 hover:border-[#d16aff] transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* View Full Profile Button */}
          <Link
            href={`/team/${member.id}`}
            onClick={onClose}
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#d16aff] to-[#bb44f0] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#d16aff]/50 transition-all duration-300"
          >
            View Full Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[0] | null
  >(null);
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

  const handleCardClick = (member: (typeof teamMembers)[0]) => {
    window.location.href = `/team/${member.id}`;
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <section id="team" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d16aff] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Meet The Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Talented individuals working together to create amazing solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <button
              key={member.id}
              onClick={() => handleCardClick(member)}
              className={`group cursor-pointer text-left ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={
                {
                  "--transition-delay": isVisible ? `${index * 80}ms` : "0ms",
                  transition:
                    "opacity 600ms ease-out, transform 600ms ease-out",
                  transitionDelay: "var(--transition-delay)",
                } as React.CSSProperties
              }
            >
              <div className="glass-dark rounded-xl border border-[#d16aff]/20 overflow-hidden hover:border-[#d16aff]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#d16aff]/20 transform hover:-translate-y-2 h-full flex flex-col">
                {/* Member Image */}
                <div
                  className={`h-40 bg-gradient-to-br ${member.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {member.image}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Member Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#d16aff] font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-400 mb-4 flex-1">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.slice(0, 2).map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-[#310047] text-[#d16aff] text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Profile Link */}
                  <div className="flex items-center gap-2 text-[#d16aff] font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>View Profile</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-dark p-8 rounded-xl border border-[#d16aff]/20 text-center">
            <p className="text-4xl font-bold gradient-text mb-2">5</p>
            <p className="text-gray-400">Dedicated Members</p>
          </div>
          <div className="glass-dark p-8 rounded-xl border border-[#bb44f0]/20 text-center">
            <p className="text-4xl font-bold gradient-text mb-2">15+</p>
            <p className="text-gray-400">Successful Projects</p>
          </div>
          <div className="glass-dark p-8 rounded-xl border border-[#9614d0]/20 text-center">
            <p className="text-4xl font-bold gradient-text mb-2">100%</p>
            <p className="text-gray-400">Collaboration Rate</p>
          </div>
        </div>
      </div>

      {/* Team Modal - Removed */}
    </section>
  );
}
