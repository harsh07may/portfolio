import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import airpnp from "@/public/airpnp.png";
import blogger from "@/public/blogger.png";
import reactTemplate from "@/public/react-template.png";
import ecommerceServer from "@/public/ecommerce-server.png";

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
    title: "Internship ",
    location: "Teknorix Systems Ltd. Verna-Goa",
    description:
      "I worked as a Intern for 2 months on ASP.NET Core and React. I upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Graduated University",
    location: "Goa Engineering College Ponda-Goa",
    description:
      "I graduated after 4 years of studying Engineering in Information Technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },

  {
    title: "Full-Stack Developer",
    location: "Pune, India",
    description:
      "I'm currently working as a fullstack developer. My stack includes React, TypeScript, MUI, .NET Core and PostgreSQL.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Blogger",
    description:
      "Full Stack Blog Application built in NextJS.I used React, NextJS, Tailwind, Express & MongoDB",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "MongoDB"],
    imageUrl: blogger,
    repo: "https://github.com/harsh07may/vite-react-ts-tailwind",
  },
  {
    title: "Airpnp",
    description: "Airbnb Clone developed in React+Typescript.",
    tags: ["React", "TypeScript", "Tailwind", "Redux"],
    imageUrl: airpnp,
    repo: "https://github.com/harsh07may/vite-react-ts-tailwind",
  },
  {
    title: "Ecommerce server",
    description: "ASP.NET Core Backend developed for a e-commerce application.",
    tags: [
      "Dotnet-core",
      "EntityFramework-core",
      "MSSQL-server",
      "AutoMapper",
      "JWT",
    ],
    imageUrl: ecommerceServer,
    repo: "https://github.com/harsh07may/Ecommerce-server/",
  },

  {
    title: "React + TypeScript + Vite + TailwindCSS Template",
    description:
      "This template provides a setup to get React working in Vite. ",
    tags: ["React", "Typescript", "Vite", "Axios", "Open-source"],
    imageUrl: reactTemplate,
    repo: "https://github.com/harsh07may/vite-react-ts-tailwind",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Tailwind",
  "MaterialUI",
  "Next.js",
  "Node.js",
  "Express",
  "ASP.NET",
  "MongoDB",
  "PostgreSQL",
  "Azure",
  "AWS",
  "Git",
] as const;
