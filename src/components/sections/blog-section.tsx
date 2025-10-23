"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Machine Learning",
    excerpt: "A comprehensive guide to understanding ML fundamentals and building your first model",
    author: "Afaf Khadraoui",
    date: "Dec 15, 2024",
    category: "AI/ML",
    readTime: "8 min read",
    image: "🤖",
  },
  {
    id: 2,
    title: "Building Scalable Web Applications",
    excerpt: "Best practices for architecting web applications that can handle millions of users",
    author: "Amel",
    date: "Dec 10, 2024",
    category: "Web Dev",
    readTime: "10 min read",
    image: "🌐",
  },
  {
    id: 3,
    title: "DevOps Best Practices in 2024",
    excerpt: "Modern DevOps strategies including containerization, CI/CD, and infrastructure automation",
    author: "Raouf",
    date: "Dec 5, 2024",
    category: "DevOps",
    readTime: "12 min read",
    image: "🚀",
  },
  {
    id: 4,
    title: "UI/UX Design Principles",
    excerpt: "Creating beautiful and intuitive interfaces that users love",
    author: "Ilyas",
    date: "Nov 28, 2024",
    category: "Design",
    readTime: "7 min read",
    image: "🎨",
  },
  {
    id: 5,
    title: "Backend Architecture Patterns",
    excerpt: "Exploring microservices, monoliths, and choosing the right architecture for your project",
    author: "Belkeis",
    date: "Nov 20, 2024",
    category: "Backend",
    readTime: "11 min read",
    image: "⚙️",
  },
  {
    id: 6,
    title: "The Future of AI in Web Development",
    excerpt: "How AI is transforming web development and what developers need to know",
    author: "Afaf Khadraoui",
    date: "Nov 15, 2024",
    category: "AI/ML",
    readTime: "9 min read",
    image: "🔮",
  },
]

export function BlogSection() {
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
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d16aff] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Latest Articles</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on technology and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`glass-dark rounded-xl border border-[#d16aff]/20 overflow-hidden hover:border-[#d16aff]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#d16aff]/20 group transform hover:-translate-y-2 cursor-pointer flex flex-col ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 80}ms` : "0ms",
              }}
            >
              {/* Post Image */}
              <div className="h-40 bg-gradient-to-br from-[#d16aff]/20 to-[#bb44f0]/20 flex items-center justify-center overflow-hidden relative">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{post.image}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Post Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Category */}
                <div className="mb-3">
                  <span className="px-3 py-1 bg-[#310047] text-[#d16aff] text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 text-white line-clamp-2">{post.title}</h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-2">{post.excerpt}</p>

                {/* Meta */}
                <div className="space-y-3 mb-4 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="text-[#d16aff]">{post.readTime}</div>
                </div>

                {/* Read More */}
                <div className="flex items-center gap-2 text-[#d16aff] font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>Read Article</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-[#d16aff] to-[#bb44f0] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#d16aff]/50 transition-all duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}
