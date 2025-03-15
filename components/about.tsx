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
        I'm a dedicated and results-driven 4th Year BSCS student at{" "}
        <span className="font-medium">De La Salle University Manila</span> with a passion for programming and problem-solving. My academic journey, combined with hands-on experience in{" "}
        <span className="font-medium">full-stack development</span>, has enabled me to build robust web applications and innovative solutions. I specialize in modern technologies such as{" "}
        <span className="font-medium">React, Next.js, Node.js, PostgreSQL, and Java Spring Boot</span>, and I'm continually expanding my skill set with tools like{" "}
        <span className="font-medium">TypeScript, TypeORM, Docker, and the ELK stack</span>.
      </p>

      <p>
        Throughout my studies and internships, I've been immersed in both front-end and back-end development, working on projects that support the internal teams of my department. As a{" "}
        <span className="font-medium">Scrum Master</span>, I've honed my leadership and collaboration skills, fostering an agile mindset and a keen eye for efficient project execution.{" "}
        <span className="italic">Always eager to learn</span> and stay updated on the latest technologies, I embrace challenges and strive to transform complex problems into elegant, practical solutions. I am currently seeking an{" "}
        <span className="font-medium">internship position</span> as a software developer to further contribute my technical expertise, creativity, and collaborative spirit.
      </p>
    </motion.section>
  );
}
