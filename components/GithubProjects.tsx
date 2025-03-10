"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";

export default function GithubProjects() {
  return (
    <motion.div
      className="max-w-[42rem] mx-auto mt-16 mb-12"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
        <div className="flex items-center justify-center gap-3 mb-4 text-gray-600 dark:text-gray-400">
          <div className="h-px w-16 bg-gray-300 dark:bg-gray-700"></div>
          <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          <div className="h-px w-16 bg-gray-300 dark:bg-gray-700"></div>
        </div>
        
        <h3 className="text-2xl text-center font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
          Discover More Projects
        </h3>     
      <Link 
        href="https://github.com/majedalshehri1"
        target="_blank"
        rel="noopener noreferrer"
        className="group block text-center"
      >
        
        <div className="flex items-center justify-center w-1/3 m-auto ">
          <span className="py-2 px-4 w-full justify-center cursor-pointer rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium text-sm flex items-center gap-1.5 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
            View
            <HiArrowRight className=" opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}