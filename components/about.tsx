"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { ContainerScroll } from "./ui/container-scroll-animation";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-24 sm:mb-56 max-w-3xl mx-auto px-4 sm:px-6 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  About Me
                </span>
              </h1>
            </>
          }
        >
          <div className="flex items-center gap-6">
            <div className="flex-grow">
              <div className="space-y-6  text-gray-700 dark:text-white/70 leading-relaxed text-[13px] sm:text-lg p-3">
                <p>
                  I&apos;m a <span className="font-bold">software engineer</span> passionate about creating <span className="font-bold">impactful digital solutions</span>. With expertise in crafting <span className="font-bold">high-quality code</span>, I develop applications that solve <span className="font-bold">real-world problems</span> and deliver <span className="font-bold">exceptional user experiences</span>.
                </p>
                
                <p>
                  My experience spans both <span className="font-bold">front-end</span> and <span className="font-bold">back-end development</span>, allowing me to build <span className="font-bold">complete, seamless solutions</span>. I enjoy <span className="font-bold">collaborating with teams</span> to transform <span className="font-bold">innovative ideas</span> into reality, always bridging <span className="font-bold">technical excellence</span> with <span className="font-bold">user-friendly design</span>.
                </p>
                
                <p>
                  My focus is on developing tools and applications that are not only <span className="font-bold">functionally robust</span> but also <span className="font-bold">enjoyable to use</span>. If you&apos;re looking for a <span className="font-bold">dedicated developer</span> to bring your ideas to life, feel free to reach out at <a href="mailto:engmajedas1@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline font-bold">engmajedas1@gmail.com</a>.
                </p>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </motion.section>
  );
}