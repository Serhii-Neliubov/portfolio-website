import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

const corpcommentImg = "/corpcomment.png";
const rmtdevImg = "/rmtdev.png";
const wordanalyticsImg = "/wordanalytics.png";

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
    title: "Graduated Small Academy STEP",
    location: "Ukraine, Kharkov",
    description:
      "I graduated after 5 years of studying. Gained bose knowledge in each of the areas of IT. In particular: design, editing, sound processing, game creation, application creation (Backend and Frontend).",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Graduated school",
    location: "Ukraine, Kharkov",
    description:
      "I graduated after 11 years of studying. Graduated from a physics and math class that allowed me to go on to university.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Slovakia, Bratislava",
    description: "I worked as a front-end developer for 6 months",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Student of FEI STU",
    location: "Slovakia, Bratislava",
    description:
      "I'm studying electrical engineering and computer science at FEI STU in Bratislava",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Redux Toolkit",
  "HTML",
  "CSS",
  "Git",
  "Tailwind",
  "SCSS",
  "Gulp",
  "Webpack",
  "Figma",
  "Photoshop",
] as const;
