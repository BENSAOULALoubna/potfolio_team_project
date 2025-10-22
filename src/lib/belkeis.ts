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
  belkeis: {
  name: "Salhi Belkeis",
  role: "Designer & Full Stack Developer",
  bio: "Turning ideas into intelligent systems through data, design, and innovation.",
  fullBio:
    "I'm an AI engineering student who loves creating smart, well-designed systems that make ideas come to life. I enjoy mixing logic with creativity — designing, coding, and improving things until they feel simple, intuitive, and meaningful",
  image: "💡",
  email: "belkeis@ensia.ai",
  location: "Algiers, Algeria",
  skills: [
    "Python",
    "Machine Learning",
    "Data Analysis",
    "SQL (Oracle, PostgreSQL)",
    "HTML",
    "CSS",
    "JavaScript",
    "Flutter",
    "C++",
    "UI/UX Design",
  ],
  projects: [
    {
      title: "Crop Prediction & Classification System",
      description:
        "AI system that predicts the most suitable crops using soil and climate data, optimized with search algorithms and genetic techniques.",
      tech: ["Python", "Scikit-learn", "Pandas", "AI Search Algorithms"],
      status: "Completed",
    },
    {
      title: "Lemma — Event Management System",
      description:
        "Web-based event management platform allowing users to create, manage, and promote events easily and efficiently.",
      tech: ["HTML", "CSS", "JavaScript", "SQL", "PHP"],
      status: "Completed",
    },
    {
      title: "E-Baladya — Municipal Mobile App",
      description:
        "Mobile application prototype that digitizes local administrative services and citizen transactions for better accessibility and transparency.",
      tech: ["Flutter", "Dart", "Firebase"],
      status: "In Progress",
    },
  ],
  certifications: [
    { title: "Artificial Intelligence Fundamentals", issuer: "ENSIA", date: "2024" },
    { title: "SQL & Database Design", issuer: "Oracle Academy", date: "2024" },
  ],
  social: { github: "https://github.com/Belkeis", linkedin: "www.linkedin.com/in/belkeis-salhi-b70348326", email: "belkeis.salhi@ensia.edu.dz" },
},

}
export default teamData
