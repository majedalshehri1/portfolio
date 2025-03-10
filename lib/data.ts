import React from "react";
// Organize imports by categories
// Experience icons
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

// Project images
import TalaqaProject from "@/public/Talaqa-project.webp";
import AthanProject from "@/public/Athan-project.webp";


// Skill icons - Font Awesome
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaJs, 
  FaReact,
  FaNodeJs, 
  FaGitAlt, 
  FaGithub,
  FaPython
} from "react-icons/fa";

// Skill icons - Simple Icons
import { 
  SiTailwindcss, 
  SiFramer, 
  SiTypescript, 
  SiDjango, 
  SiJquery, 
  SiRedux, 
  SiNextdotjs, 
  SiSvelte, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiFirebase, 
  SiPostman, 
  SiOverleaf,
  SiFigma
} from "react-icons/si";

// Additional icons
import { BsFillKanbanFill } from "react-icons/bs";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Cooperative Training",
    location: "Jeddah Chamber",
    description:
      "Optimized network management by configuring DNS, DHCP, and Active Directory, ensuring seamless operations and security. Enhanced IT infrastructure through hardware and software installation, as well as virtualization improvements. Developed immersive VR solutions using Unity Engine, elevating digital content quality and user engagement.",
    icon: React.createElement(CgWorkAlt),
    date: " Aug 2024",
  },
  {
    title: "Bachelor of Software Engineering",
    location: "University of Jeddah",
    description:
      "Graduated with honors from the University of Jeddah in 2025 with a Bachelor's in Software Engineering. Gained strong expertise in programming, database management, and information systems through hands-on coursework and practical projects. Actively participated in hackathons, collaborative initiatives, and extracurricular activities, sharpening technical proficiency and problem-solving skills.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2025",
  },
] as const;

export const projectsData = [
  {
    title: "TALAQA",
    description:
      "' TALAQA ' combines gaming and speech therapy for young stutterers, offering an engaging experience with personalized plans and measurable progress.",
    tags: ["SvelteKit", "Tailwind","Unreal Engine 5","REST API","Speech-to-Text API","Firebase"],
    imageUrl:TalaqaProject ,
    projectUrl: 'https://github.com/majedalshehri1/Therapeutic-Speech-Oriented.git'
  },
  {
    title: "Athan App",
    description:
      "Project ` أذان ` was done by using the open-source “ Aladhan API “ which has many Islamic API options to use in Islamic sites or sites visited by Muslims.",
    tags: ["Svelte", "Tailwind", "Vercel"],
    imageUrl: AthanProject,
    projectUrl:'https://github.com/majedalshehri1/Prayer-Time-Api.git'
  },
] as const;

// Skills data with icons
export const skillsData = [
  { name: "HTML", icon: React.createElement(FaHtml5, { color: "#E34F26" }) },
  { name: "CSS", icon: React.createElement(FaCss3Alt, { color: "#1572B6" }) },
  { name: "JavaScript", icon: React.createElement(FaJs, { color: "#F7DF1E" }) },
  { name: "TypeScript", icon: React.createElement(SiTypescript, { color: "#3178C6" }) },
  { name: "React", icon: React.createElement(FaReact, { color: "#61DAFB" }) },
  { name: "Next.js", icon: React.createElement(SiNextdotjs) },
  { name: "Redux", icon: React.createElement(SiRedux, { color: "#764ABC" }) },
  { name: "Node.js", icon: React.createElement(FaNodeJs, { color: "#339933" }) },
  { name: "Express", icon: React.createElement(SiExpress) },
  { name: "MongoDB", icon: React.createElement(SiMongodb, { color: "#47A248" }) },
  { name: "PostgreSQL", icon: React.createElement(SiPostgresql, { color: "#4169E1" }) },
  { name: "Tailwind", icon: React.createElement(SiTailwindcss, { color: "#06B6D4" }) },
  { name: "Bootstrap", icon: React.createElement(FaBootstrap, { color: "#7952B3" }) },
  { name: "Python", icon: React.createElement(FaPython, { color: "#3776AB" }) },
  { name: "Django", icon: React.createElement(SiDjango, { color: "#092E20" }) },
  { name: "jQuery", icon: React.createElement(SiJquery, { color: "#0769AD" }) },
  { name: "Svelte", icon: React.createElement(SiSvelte, { color: "#FF3E00" }) },
  { name: "Framer Motion", icon: React.createElement(SiFramer, { color: "#0055FF" }) },
  { name: "Firebase", icon: React.createElement(SiFirebase, { color: "#FFCA28" }) },
  { name: "Git", icon: React.createElement(FaGitAlt, { color: "#F05032" }) },
  { name: "Github", icon: React.createElement(FaGithub) },
  { name: "Postman", icon: React.createElement(SiPostman, { color: "#FF6C37" }) },
  { name: "Overleaf", icon: React.createElement(SiOverleaf, { color: "#47A141" }) },
  { name: "Figma", icon: React.createElement(SiFigma, { color: "#F24E1E" }) },
  { name: "Scrum", icon: React.createElement(BsFillKanbanFill, { color: "#5091CD" }) },
] as const;