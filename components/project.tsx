"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

type ProjectProps = (typeof projectsData)[number] & {
  projectUrl?: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <Link 
        href={projectUrl} 
        target="_blank"
        rel="noopener noreferrer" 
        className="outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg block"
      >
        <section className="bg-gray-50 max-w-[42rem] border border-gray-300 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] transition group-hover:bg-gray-100 sm:group-even:pl-8 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-400 flex items-center gap-2 transition-colors">
              {title}
              <span className="inline-block opacity-0 group-hover:opacity-100 transition-opacity text-blue-700 dark:text-blue-400">
                <HiArrowUpRight className="w-5 h-5" />
              </span>
            </h3>
            
            <p className="mt-2 leading-relaxed text-gray-800 dark:text-gray-300">
              {description}
            </p>
            
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-gray-900 px-3 py-1 text-[0.75rem] uppercase tracking-wider text-white rounded-full dark:bg-gray-700 dark:text-gray-100"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt={`Screenshot of ${title} project`}
            priority
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-40"
          />
        </section>
      </Link>
    </motion.div>
  );
}
