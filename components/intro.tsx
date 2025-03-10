"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FlipWords } from "./ui/flip-words";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const technologies = [
    "React", 
    "Next.js", 
    "TypeScript", 
    "Node.js", 
    "MongoDB",
    "Express.js"
  ];

  return (
    <section
      ref={ref}
      id="home"
      className="mb-36 mt-16 sm:mt-28 max-w-[50rem] text-center sm:mb-40 scroll-mt-[100rem]"
    >
      <div className="px-4 mb-8">
        <motion.div
          className="space-y-4 mb-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Hello, I&apos;m Majed.
          </h1>
          
          <div className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium">
            A passionate <span className="text-gray-900 dark:text-white font-bold">Software Engineer</span> and{" "}
            <span className="text-gray-900 dark:text-white font-bold">Full-Stack Developer</span>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            building innovative, scalable, and high-performance web applications with
          </p>
          </div>
          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <FlipWords words={technologies} />
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.5
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Resume_Majed_Alshehri.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-4 text-[1.2rem]">
          <a
            className="bg-white p-4 text-gray-700 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/majedalshehri1/"
            target="_blank"
            aria-label="Visit LinkedIn Profile"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/majedalshehri1"
            target="_blank"
            aria-label="Visit Github Profile"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}