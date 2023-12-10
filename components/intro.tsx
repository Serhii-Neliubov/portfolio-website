"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0"
    >
      <div className="flex flex-col items-center justify-center z-10 relative">
        <div className="relative">
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/portrait.jpg"
              alt="Serhii's portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 object-cover shadow-xl rounded-full border-[0.35rem] border-white"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-4xl absolute bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        >
          <span className="font-bold">Hello, I'm Serhii.</span> I'm a{" "}
          <span className="font-bold">Front-end developer</span> with{" "}
          <span className="font-bold">3 years</span> of experience. I enjoy
          building <span className="italic">sites & apps</span>. My focus is{" "}
          <span className="underline">React (Next.js)</span>.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          className="flex flex-col sm:flex-row  items-center justify-center gap-2 px-4 text-lg font-medium"
        >
          <Link
            href="#contact"
            className="group hover:scale-110 hover:bg-gray-950 transition active:scale-105 outline-none focus:scale-110 bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          <a
            href="/portrait.jpg"
            download
            className="border border-black/10 cursor-pointer group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
          <a
            href="https://www.instagram.com/nelyubovsk/"
            className="cursor-pointer focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition bg-white px-4 py-4 text-gray-700 flex items-center gap-2 rounded-full "
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/Serhii-Neliubov"
            className="cursor-pointer focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition bg-white px-4 py-4 text-[1.35rem] text-gray-700 flex items-center gap-2 rounded-full"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://github.com/Serhii-Neliubov"
            className="cursor-pointer focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition bg-white px-4 py-4 text-[1.35rem] text-gray-700 flex items-center gap-2 rounded-full"
          >
            <TbBrandFiverr />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
