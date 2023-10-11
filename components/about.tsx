"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">
          Engineering in Information Technology
        </span>
        , I decided to pursue my passion for programming. I enrolled in a web
        development courses and bootcamps and learned{" "}
        <span className="font-medium">full-stack web development</span>. I love
        problem-solving and solution building aspect of programming. My core
        stack is{" "}
        <span className="font-medium">React, ASP.NET and Postgres.</span>I am
        also familiar with{" "}
        <span className="font-medium">
          TypeScript, Next.js and the MERN stack.
        </span>{" "}
        I am always looking to learn new technologies.
        <span>
          I am currently working as a full-stack SDE @
          <span className="font-medium">Infogen Labs</span>.
        </span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing music. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I'm also
        learning how to play the ukulele and studying japanese.
      </p>
    </motion.section>
  );
}
