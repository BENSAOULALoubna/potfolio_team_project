"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Award,
  Briefcase,
} from "lucide-react";
import type { Member } from "@/lib/teamData";

export default function MemberPage({ member }: { member: Member }) {
  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, [member.name]);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero / Profile */}
      <section className="pt-28 pb-12 relative overflow-hidden border-b border-[#d16aff]/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d16aff] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Profile Card */}
            <aside className="w-full md:w-1/3 lg:w-96 flex-shrink-0">
              <div className="glass-dark rounded-2xl border border-[#d16aff]/20 overflow-hidden sticky top-24">
                <div className="h-48 md:h-56 bg-gradient-to-br from-[#d16aff] to-[#bb44f0] flex items-center justify-center">
                  {typeof member.image === "string" &&
                  member.image.startsWith("/") ? (
                    <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-[#d16aff]/20">
                      <Image
                        src={member.image}
                        alt={`${member.name} photo`}
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="text-7xl">{member.image}</div>
                  )}
                </div>

                <div className="p-5 md:p-6">
                  <h1 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h1>
                  <p className="text-[#d16aff] font-semibold mb-3 text-xs md:text-sm">
                    {member.role}
                  </p>

                  <div className="space-y-2 mb-4 pb-4 border-b border-[#d16aff]/10">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Mail size={16} className="text-[#d16aff]" />
                      <a
                        href={`mailto:${member.email}`}
                        className="hover:text-[#d16aff] transition-colors text-xs md:text-sm"
                      >
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-xs md:text-sm">
                      <span className="text-[#d16aff]">📍</span>
                      <span>{member.location}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="p-2 bg-[#310047] hover:bg-[#d16aff] text-[#d16aff] hover:text-[#0a0a0a] rounded-lg transition-all duration-300 flex items-center justify-center"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="p-2 bg-[#310047] hover:bg-[#d16aff] text-[#d16aff] hover:text-[#0a0a0a] rounded-lg transition-all duration-300 flex items-center justify-center"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-1 h-8 bg-gradient-to-b from-[#d16aff] to-[#bb44f0]" />
                  About
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {member.fullBio}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Code2 size={24} className="text-[#d16aff]" />
                  Skills & Expertise
                </h2>
                <div className="flex flex-wrap gap-3">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-[#d16aff]/20 to-[#bb44f0]/20 border border-[#d16aff]/30 text-[#d16aff] font-semibold rounded-full hover:border-[#d16aff] transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#bb44f0] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Briefcase size={32} className="text-[#d16aff]" />
            Featured Projects
          </h2>

          <div className="space-y-8">
            {member.projects.map((project, i) => (
              <article
                key={i}
                className="group glass-dark rounded-2xl border border-[#d16aff]/10 hover:border-[#d16aff]/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#d16aff]/10"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  {project.image && (
                    <div className="md:col-span-1 h-48 md:h-auto bg-gradient-to-br from-[#d16aff]/8 to-[#bb44f0]/8 overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div
                    className={`p-8 flex flex-col justify-between ${
                      project.image ? "md:col-span-2" : "md:col-span-3"
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">
                          {project.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            project.status === "Completed"
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, j) => (
                          <span
                            key={j}
                            className="px-3 py-1 bg-[#310047] text-[#d16aff] text-sm font-semibold rounded-full border border-[#d16aff]/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#d16aff] to-[#bb44f0] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#d16aff]/50 transition-all duration-300"
                        >
                          <span>View Project</span>
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-[#d16aff]/30 text-[#d16aff] font-semibold rounded-lg hover:bg-[#d16aff]/10 transition-all duration-300"
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 relative overflow-hidden border-t border-[#d16aff]/10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9614d0] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Award size={32} className="text-[#d16aff]" />
            Certifications & Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {member.certifications.map((cert, i) => (
              <div
                key={i}
                className="glass-dark p-8 rounded-xl border border-[#bb44f0]/20 hover:border-[#bb44f0]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#bb44f0]/10"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                  <span className="text-[#bb44f0] font-semibold text-sm whitespace-nowrap ml-4">
                    {cert.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
