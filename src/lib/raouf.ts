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
    raouf: {
    name: "Raouf",
    role: "full stack developer",
    bio: "Building intelligent systems through Machine Learning and Data Science.",
    fullBio:
    "Computer Science student passionate about building intelligent systems through Machine Learning and Data Science. I specialize in creating end-to-end solutions—from data preprocessing and model development to web deployment.",
    image: "👨‍💻",
    email: "raouf@ensia.ai",
    location: "Algiers, Algeria",
    skills: [
    "Machine Learning",
    "Data Science",
    "Feature Engineering",
    "Model Deployment",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "React",
    "FastAPI",
    "Git",
    "Python",
    "JavaScript",
    "C++",
    "SQL"
    ],
    projects: [],
    certifications: [],
    social: {
    github: "https://github.com/raouf529",
    linkedin: "#",
    email: "Abderraouf.louni@ensia.edu.dz"
    }
    },
}

export default teamData