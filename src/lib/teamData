// ========================================
// OPTION 1: Individual Member Files (Recommended for Teams)
// ========================================
// Uncomment these imports when each member has created their own file in src/lib/members/
// import { loubnaData } from "./members/loubna";
// import { afafData } from "./members/afaf";
// import { belkeisData } from "./members/belkeis";
// import { ilyasData } from "./members/ilyas";
// import { raoufData } from "./members/raouf";

// ========================================
// Type Definitions
// ========================================
export type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  link?: string;
  github?: string;
  status: "Completed" | "In Progress";
};

export type Certification = { title: string; issuer: string; date: string };

export type Social = {
  github?: string;
  linkedin?: string;
  email?: string;
  website?: string;
  phone?: string;
};

export type Member = {
  name: string;
  role: string;
  bio: string;
  fullBio: string;
  image: string;
  email: string;
  location: string;
  skills: string[];
  projects: Project[];
  certifications: Certification[];
  social: Social;
  cv?: string;
};

// ========================================
// OPTION 1: Using Individual Files
// ========================================
// Uncomment this when ready to use individual member files:
// const teamData: Record<string, Member> = {
//   loubna: loubnaData,
//   afaf: afafData,
//   belkeis: belkeisData,
//   ilyas: ilyasData,
//   raouf: raoufData,
// };

// ========================================
// OPTION 2: Centralized Data (Current)
// ========================================
// Comment this out when switching to individual files
const teamData: Record<string, Member> = {
  loubna: {
    name: "Loubna",
    role: "Team Lead & Full-Stack Developer",
    bio: "Passionate about building scalable web applications",
    fullBio:
      "Passionate about building scalable web applications and leading innovative projects. With expertise in modern web technologies, Loubna brings vision and technical excellence to every project.",
    image: "👩‍💼",
    email: "loubna@ensia.ai",
    location: "Algiers, Algeria",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Express",
      "Tailwind CSS",
      "Docker",
      "PostgreSQL",
      "GraphQL",
    ],
    projects: [
      {
        title: "MSLA E-commerce Platform",
        description:
          "Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard. Built with modern technologies for scalability and performance.",
        tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
        image: "/ecommerce-dashboard.png",
        link: "https://example.com",
        github: "https://github.com",
        status: "Completed",
      },
      {
        title: "Team Portfolio Website",
        description:
          "Modern portfolio website showcasing team projects and expertise with interactive animations and smooth user experience.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        image: "/portfolio-website-design.png",
        link: "https://example.com",
        github: "https://github.com",
        status: "Completed",
      },
      {
        title: "Real-time Collaboration Tool",
        description:
          "WebSocket-based collaboration platform for teams to work together in real-time with live updates and notifications.",
        tech: ["Next.js", "WebSocket", "PostgreSQL", "Redis"],
        status: "In Progress",
      },
    ],
    certifications: [
      { title: "Full-Stack Web Development", issuer: "Udemy", date: "2024" },
      {
        title: "Advanced React Patterns",
        issuer: "Frontend Masters",
        date: "2024",
      },
      {
        title: "AWS Solutions Architect Associate",
        issuer: "Amazon",
        date: "2023",
      },
    ],
    social: { github: "#", linkedin: "#", email: "loubna@ensia.ai" },
  },
  afaf: {
    name: "Afaf Khadraoui",
    role: "AI Research Specialist",
    bio: "Exploring the frontiers of artificial intelligence",
    fullBio:
      "Exploring the frontiers of artificial intelligence and machine learning. Afaf specializes in NLP and deep learning, with a focus on practical applications that solve real-world problems.",
    image: "👩‍🔬",
    email: "afaf@ensia.ai",
    location: "Algiers, Algeria",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "NLP",
      "Deep Learning",
      "Scikit-learn",
      "Keras",
      "BERT",
      "Computer Vision",
    ],
    projects: [
      {
        title: "Sentiment Analysis System",
        description:
          "NLP-powered sentiment analysis tool using BERT for social media monitoring with real-time processing and visualization.",
        tech: ["Python", "TensorFlow", "BERT", "Flask"],
        image: "/sentiment-analysis-dashboard.jpg",
        link: "https://example.com",
        github: "https://github.com",
        status: "Completed",
      },
      {
        title: "Medical Image Classifier",
        description:
          "Deep learning model for medical image classification achieving 95% accuracy using CNN architecture.",
        tech: ["Python", "TensorFlow", "CNN", "Flask"],
        image: "/medical-imaging-ai.png",
        status: "Completed",
      },
    ],
    certifications: [
      {
        title: "Deep Learning Specialization",
        issuer: "Coursera",
        date: "2024",
      },
      { title: "NLP with Transformers", issuer: "Hugging Face", date: "2024" },
    ],
    social: { github: "#", linkedin: "#", email: "afaf@ensia.ai" },
  },
  belkeis: {
    name: "Belkeis",
    role: "Backend Engineer",
    bio: "Building robust and scalable backend systems",
    fullBio:
      "Building robust and scalable backend systems with a focus on system architecture and performance optimization. Belkeis ensures our applications run smoothly at scale.",
    image: "👨‍💻",
    email: "belkeis@ensia.ai",
    location: "Algiers, Algeria",
    skills: [
      "Python",
      "Django",
      "PostgreSQL",
      "Docker",
      "Redis",
      "Celery",
      "AWS",
      "GraphQL",
      "Microservices",
    ],
    projects: [
      {
        title: "Scalable API Architecture",
        description:
          "High-performance REST API with caching, rate limiting, and optimization for handling millions of requests.",
        tech: ["Python", "Django", "PostgreSQL", "Redis"],
        status: "Completed",
      },
      {
        title: "Microservices Infrastructure",
        description:
          "Containerized microservices deployment with Docker and Kubernetes for distributed systems.",
        tech: ["Docker", "Kubernetes", "Python", "AWS"],
        status: "Completed",
      },
    ],
    certifications: [
      { title: "AWS Solutions Architect", issuer: "Amazon", date: "2024" },
      { title: "Docker & Kubernetes Mastery", issuer: "Udemy", date: "2024" },
    ],
    social: { github: "#", linkedin: "#", email: "belkeis@ensia.ai" },
  },
  ilyas: {
    name: "Ilyas",
    role: "Frontend Developer",
    bio: "Creating beautiful and intuitive user interfaces",
    fullBio:
      "Creating beautiful and intuitive user interfaces with a passion for design and user experience. Ilyas transforms complex ideas into elegant, accessible interfaces.",
    image: "👨‍🎨",
    email: "ilyas@ensia.ai",
    location: "Algiers, Algeria",
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
      "JavaScript",
      "CSS3",
      "Framer Motion",
      "Next.js",
    ],
    projects: [
      {
        title: "Interactive Dashboard",
        description:
          "Modern data visualization dashboard with real-time updates and interactive charts.",
        tech: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
        image: "/interactive-dashboard-ui.jpg",
        status: "Completed",
      },
      {
        title: "Design System",
        description:
          "Comprehensive component library and design system for consistent UI across projects.",
        tech: ["React", "Storybook", "Tailwind CSS", "TypeScript"],
        status: "Completed",
      },
    ],
    certifications: [
      {
        title: "UI/UX Design Fundamentals",
        issuer: "Interaction Design Foundation",
        date: "2024",
      },
      {
        title: "Advanced CSS & Animations",
        issuer: "Frontend Masters",
        date: "2024",
      },
    ],
    social: { github: "#", linkedin: "#", email: "ilyas@ensia.ai" },
  },
  raouf: {
    name: "Raouf",
    role: "DevOps & Cloud Engineer",
    bio: "Ensuring smooth deployment and scalability",
    fullBio:
      "Ensuring smooth deployment and scalability of our applications. Raouf specializes in infrastructure automation and cloud solutions that keep our systems running reliably.",
    image: "👨‍🔧",
    email: "raouf@ensia.ai",
    location: "Algiers, Algeria",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
      "GitHub Actions",
      "Terraform",
      "Linux",
      "Nginx",
    ],
    projects: [
      {
        title: "CI/CD Pipeline Automation",
        description:
          "Automated deployment pipeline with GitHub Actions and Docker for continuous integration and deployment.",
        tech: ["GitHub Actions", "Docker", "AWS", "Terraform"],
        status: "Completed",
      },
      {
        title: "Infrastructure as Code",
        description:
          "Complete infrastructure setup using Terraform and CloudFormation for reproducible deployments.",
        tech: ["Terraform", "AWS", "CloudFormation", "Ansible"],
        status: "Completed",
      },
    ],
    certifications: [
      {
        title: "AWS Certified DevOps Engineer",
        issuer: "Amazon",
        date: "2024",
      },
      {
        title: "Kubernetes Administrator",
        issuer: "Linux Foundation",
        date: "2024",
      },
    ],
    social: { github: "#", linkedin: "#", email: "raouf@ensia.ai" },
  },
};

export default teamData;
