import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import simpleNotesImg from "@/public/projects/SimpleNotes-Example.png";

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
    title: "Software Engineer Intern @ ING Hubs B.V. Philippine Branch",
    location: "",
    description:
      "I worked as the backend developer for 7 months, using technologies such as Java Spring, PostgreSQL, ElasticSearch to implement new features for the existing internal applications of our department. I also provided technical support to our internal clients and facilitated our daily meetings as the Scrum Master. This internship upskilled my technical and communication skills.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - December 2024",
  },
] as const;

export const projectsData = [
  {
    title: "SimpleNotes",
    description:
        "This application is used to practice my android development skills, using MVVM, Kotlin, Compose, and ROOM. Users can perform CRUD operations on notes with an added OCR Feature.",
    tags: ["Android", "Kotlin", "Room", "MVVM"],
    imageUrl: simpleNotesImg
  }
] as const;

export const skillsData = [
    "C/C++",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "Kotlin",
  "AWS (S3, EC2, RDS, Lambda)",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Java Spring Framework",
  "Tailwind",
  "HTML",
  "CSS",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "ELK Stack",
  "Git",
  "Docker",
  "Android",
  "Figma"
] as const;
