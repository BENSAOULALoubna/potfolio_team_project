import mslaImg from "../assets/Msla Website 1.png";
import trainGainImg from "../assets/Train&Gain 1.png";
import fitgenieImg from "../assets/fitgenie.png";
import ebecImg from "../assets/ebec.png";
import boutiqueImg from "../assets/boutique_dj.jpg";
import mirasensImg from "../assets/mirasens.png";
import tejaratiImg from "../assets/tejarati2.png";
import amanarImg from "../assets/amanar.png";
import Afaf from "../assets/afaf.jpg";

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

const teamData: Record<string, Member> = {
  afaf: {
    name: "Afaf Khadraoui",
    role: "AI Enthusiast & Full Stack Web Developer",
    bio: "3rd-year AI student at ENSIA blending full-stack development with AI expertise to build impactful solutions.",
    fullBio:
      "I am a 3rd-year Artificial Intelligence student at ENSIA, Algiers, passionate about building meaningful tech-driven solutions. I thrive at the intersection of creativity, strategy, and development, combining full-stack web skills with growing expertise in AI, search algorithms, and machine learning.",
    image: Afaf.src,
    email: "Afaf.khadraoui@ensia.edu.dz",
    location: "Boumerdes, Algeria",
    skills: [
      "Python",
      "Deep Learning",
      "Machine Learning",
      "React",
      "Next.js",
      "JavaScript",
      "C++",
      "Java",
      "HTML/CSS",
      "expressjs",
      "Flutter",
      "RISC-V Assembly",
      "Operating Systems",
      "IoT",
      "ESP32",
      "Raspberry Pi",
      "sql & non sql databases",
    ],
    projects: [
      {
        title: "MSLA Website",
        description:
          "MSLA is a fully functional e-commerce website developed as the final project during my training at BrainerX School. The project was built in collaboration with a team, utilizing a full-stack JavaScript tech stack including React for the frontend, Node.js and Express.js for the backend, and MongoDB for the database",
        tech: ["React", "Express js", "Mongo db"],
        image: mslaImg.src,
        link: "https://drive.google.com/file/d/1YGo2gvo2SAMprDsrdHqz-GbzLsZpERt0/view",
        github: "https://github.com/AfafKhadraoui/MSLA_Website",
        status: "Completed",
      },
      {
        title: "Train & Gain",
        description:
          "This group project involved designing and developing a full-featured gym website. The frontend was built with React for a responsive user experience, while the backend logic was implemented in PHP, with MySQL used for database storage and management.",
        tech: ["React Js", "php", "phpMyAdmin"],
        image: trainGainImg.src,
        link: "https://drive.google.com/file/d/1YGo2gvo2SAMprDsrdHqz-GbzLsZpERt0/view",
        github: "https://github.com/ENSIA-AI/Train_Gain",
        status: "Completed",
      },
      {
        title: "FitGenie Website",
        description:
          "A smart workout planning system that leverages AI search algorithms (such as A* and Hill Climbing) and Constraint Satisfaction Problem (CSP) techniques to generate personalized weekly workout routines based on user-defined constraints. The website is built with React for the frontend, while the Flask-based backend is currently under development.",
        tech: [
          "React",
          "Flask",
          "AI Search algorithms",
          "Constraint Satisfaction Problem",
        ],
        image: fitgenieImg.src,
        github: "https://github.com/AfafKhadraoui/AI_Project",
        status: "Completed",
      },
      {
        title: "EBEC Club Website",
        description:
          "Contributed as a frontend developer to the official website of EBEC (ENSIA Business & Entrepreneurship Club), a student-led organization focused on promoting business innovation, entrepreneurship, and leadership. The website was initially developed using React, and later migrated to Next.js for improved performance and SEO.",
        tech: ["Next.js", "Tailwind CSS", "Supabase"],
        image: ebecImg.src,
        status: "Completed",
      },
      {
        title: "Djalil Boutique Website",
        description:
          "A real e-commerce website developed for Djali Boutique, a prêt-à-porter fashion store based in Tipaza. The project aimed to establish the brand’s online presence by showcasing its modern clothing collections and providing a smooth digital shopping experience. The website focuses on clean design, responsive layouts, and brand identity alignment.",
        tech: ["Next Js", "Tailwind Css", "prisma", "sql database"],
        image: boutiqueImg.src,
        status: "Completed",
      },
      {
        title: "Mirasens Website",
        description:
          "A real-world collaboration with Sirius Net to enhance their corporate website through performance optimization, AI integration, and internationalization. The project focused on improving speed, accessibility, and user engagement while aligning with modern web standards. As a result of these contributions, I was offered an IoT internship with Sirius Net.",
        tech: ["html", "css", "node js", "javaScript", "php"],
        image: mirasensImg.src,
        link: "https://www.mirasens.com/index.html",
        status: "Completed",
      },
      {
        title: "Tejarati Website",
        description:
          "Tejarati is an AI-powered web platform developed during NCS Hack 2.0, a 4-day hackathon organized by the NIT Computer Society. The platform empowers Algerian e-commerce practitioners by helping them manage operations more efficiently and intelligently.It addresses key challenges such as high product return rates, unreliable logistics, and limited insights into buyer behavior through intelligent automation and analytics.",
        tech: ["React Js", "Nest Js", "Flask", "PostgreSQL", "Docker"],
        image: tejaratiImg.src,
        status: "Completed",
      },
      {
        title: "Amanar",
        description:
          "Amanar is a tourism mobile app designed to promote sustainable travel across Algeria’s Sahara. Developed during the SolveX 2.0 Ideathon, the project aims to encourage local and international travelers to discover the cultural, historical, and natural richness of the southern regions. Amanar combines technology and tourism to offer destination insights, guided routes, and authentic local experiences while supporting eco-friendly and community-based tourism. The project proudly secured 1st place at SolveX 2.0 for its innovation and social impact.",
        tech: ["Figma"],
        image: amanarImg.src,
        status: "Completed",
      },
    ],
    certifications: [
      {
        title: "Web Development Full Course",
        issuer: "BrainerX",
        date: "July 2024",
      },
      {
        title: "IoT Development Course",
        issuer: "Sirius Company",
        date: "September 2025",
      },
      {
        title: "Business Model Canvas & Financial Plans",
        issuer: "Comet Coworking",
        date: "July 2025",
      },
    ],
    social: {
      github: "https://github.com/AfafKhadraoui",
      linkedin:
        "https://www.linkedin.com/in/afaf-khadraoui-29283032b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "afaf.khadraoui@ensia.edu.dz",
      website:
        "https://www.figma.com/proto/4KwwzBB1vXZBv36xt0nsag/Afaf-Khadraoui?node-id=16-6&p=f&t=9dUtTcED8G3trf5q-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=16%3A6",
      phone: "+213 559 366 595",
    },
    cv: "/Khadraoui_Afaf_CV.pdf",
  },
};

export default afaf;
