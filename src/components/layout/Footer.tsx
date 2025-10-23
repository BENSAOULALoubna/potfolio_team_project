import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a0a2e] border-t border-[#310047] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg gradient-text mb-4">
              Software engineering  Team
            </h3>
            <p className="text-gray-400 text-sm">
              Building intelligent systems that solve real-world problems
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#d16aff] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-[#d16aff] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-[#d16aff] transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="hover:text-[#d16aff] transition-colors"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#d16aff] transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#d16aff] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#d16aff] transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#d16aff] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <p className="text-gray-400 text-sm mb-4">
              Have a project in mind? Let's collaborate and build something
              amazing together!
            </p>
            
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#310047] pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 ENSIA AI Engineering Team. All rights reserved.</p>
          <p>
            Made with <span className="text-[#d16aff]">💜</span> and lots of{" "}
            <span className="text-[#d16aff]">☕</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
