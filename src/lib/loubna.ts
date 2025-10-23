import project from "../assets/portfolio-website.jpg";
import loubna from "../assets/loubna.jpg";

export type Project = {
  title: string
  description: string
  tech: string[]
  image?: string
  link?: string
  github?: string
  status: "Completed" | "In Progress"
}

export type Certification = { title: string; issuer: string; date: string }

export type Social = { github?: string; linkedin?: string; email?: string }

export type Member = {
  name: string
  role: string
  bio: string
  fullBio: string
  image: string
  email: string
  location: string
  skills: string[]
  projects: Project[]
  certifications: Certification[]
  social: Social
}

const teamData: Record<string, Member> = {
  loubna: {
    name: "Loubna",
    role: "Team Lead & Full-Stack Developer",
    bio: "Passionate about building scalable web applications",
    fullBio:
      "I’m a 3rd-year Artificial Intelligence student at ENSIA, Algiers, driven by curiosity and a desire to turn ideas into intelligent, practical solutions. My work bridges design and logic — from building modern full-stack web applications to exploring AI, machine learning, and search algorithms that make technology more adaptive and human-centered",
    image: loubna.src,
    email: "loubna.bensaoula@ensia.edu.dz",
    location: "Algiers, Annaba",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "c++",
      "Python",
    ],
    projects: [
      {
        title: "Team Portfolio Website",
        description:
          "Modern portfolio website showcasing team projects and expertise with interactive animations and smooth user experience.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        image: project.src,
        link: "https://github.com",
        github: "https://github.com",
        status: "Completed",
      }
    ],
    certifications: [
      { title: "Full-Stack Web Development", issuer: "Udemy", date: "2024" },
      { title: "Advanced React Patterns", issuer: "Frontend Masters", date: "2024" },
      { title: "AWS Solutions Architect Associate", issuer: "Amazon", date: "2023" },
    ],
    social: { github: "BENSAOULALoubna", linkedin: "Loubna (Student) Bensaoula", email: "loubna.bensaoula@ensia.edu.dz" },
  },
}

export default teamData
