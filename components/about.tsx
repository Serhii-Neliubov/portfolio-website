"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating from a{" "}
        <span className="font-medium">programming school in Ukraine</span>, I
        decided to pursue my passion. I went to the University{" "}
        <span className="font-medium">
          of Information and Communication Technologies in Bratislava.
        </span>
        .There I met like-minded people{" "}
        <span className="italic">with whom I started freelancing.</span> What I
        <span className="underline">like</span> the feeling of finally figuring
        out a solution to a problem. My main stack is
        <span className="font-medium">
          React, Next.js, TypeScript, Redux Toolkit, and Tailwind CSS
        </span>
        . I am also familiar with NodeJS and MongoDB. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I relaxing in
        nature or spending time playing sports, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">psychology</span>
      </p>
    </motion.section>
  );
}
