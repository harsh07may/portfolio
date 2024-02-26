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
    >
      <div className="text-neutral-400 mt-5">
        I graduated with a degree in{" "}
        <span className="font-medium">
          Engineering in Information Technology
        </span>{" "}
        and discovered my true passion lies in programming. After completing web
        development courses and bootcamps, I've become proficient in{" "}
        <span className="font-medium">Full-stack development</span> with a core
        focus on <span className="font-medium">React</span>,{" "}
        <span className="font-medium">ASP.NET</span>, and{" "}
        <span className="font-medium">PostgreSQL</span>. I thrive on the
        problem-solving aspect of coding and am always eager to learn new
        technologies, as demonstrated by my familiarity with{" "}
        <span className="font-medium">Next.js</span> and the{" "}
        <span className="font-medium">MERN Stack</span>. Currently, I apply my
        skills as a Full-Stack Software Development Engineer at{" "}
        <span className="font-medium">Infogen Labs.</span>
        <p>
          When I'm not coding, I enjoy playing video games, watching movies, and
          playing music. I also enjoy learning new things. I'm also learning how
          to play the ukulele and studying japanese.
        </p>
      </div>
    </motion.section>
  );
}
