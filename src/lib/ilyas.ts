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

export type Social = { github?: string; linkedin?: string; email?: string };

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
};
const teamData: Record<string, Member> = {

    ilyas: {
        name: "Ilyas",
        role: "Frontend Developer",
        bio: "Creating beautiful and intuitive user interfaces",
        fullBio:
            "Creating beautiful and intuitive user interfaces with a passion for design and user experience. Ilyas transforms complex ideas into elegant, accessible interfaces.",
        image: "/assets/ilyas.jpg",
        email: "ilyas.aniour@ensia.edu.dz",
        location: "Algiers, Algeria",
        skills: ["React", "TypeScript", "Tailwind CSS", "Figma", "JavaScript", "CSS3", "Framer Motion", "Next.js"],
        projects: [
            {
                title: "Interactive Dashboard",
                description: "Modern data visualization dashboard with real-time updates and interactive charts.",
                tech: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
                image: "/assets/imageInteractiveDashboard.jpg",
                status: "In Progress",
            },
            {
                title: "Design System",
                description: "Comprehensive component library and design system for consistent UI across projects.",
                tech: ["React", "Storybook", "Tailwind CSS", "TypeScript"],
                image: "/assets/imageDesign.jpeg",
                status: "Completed",
            },
            {
                title: "AI Tour Recommendation System",
                description: "An intelligent recommendation system using machine learning to suggest personalized travel destinations and tours based on user preferences.",
                tech: ["Python", "Scikit-learn", "Pandas", "Flask", "HTML", "CSS"],
                image: "/assets/imageAI.png",
                status: "Completed",
            },
        ],
        certifications: [
            { title: "Machine Learning", issuer: "Coursera (Andrew Ng)", date: "2025" },
            { title: "UI/UX Design Fundamentals", issuer: "Interaction Design Foundation", date: "2024" },
            { title: "Advanced CSS & Animations", issuer: "Frontend Masters", date: "2024" },
        ],
        social: { github: "https://github.com/ilyas-git275", linkedin: "#", email: "ilyas.aniour@ensia.edu.dz" },
    },
};
export default teamData;  
