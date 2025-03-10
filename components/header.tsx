"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Image from "next/image";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen]);
  
  const handleMobileNavClick = (name: "Home" | "About" | "Projects" | "Skills" | "Experience" | "Contact") => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setMobileMenuOpen(false);
  };
  

  return (
    <header className="z-[999] relative">
      <motion.div
        className={clsx(
          "fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40",
          {
            "bg-opacity-95 dark:bg-opacity-90": isScrolled,
            "bg-opacity-80 dark:bg-opacity-75": !isScrolled
          }
        )}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      
      <div className="sm:hidden fixed top-0 left-0 z-[1000] flex items-center h-[4.5rem] px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center"
        >
          <div className="w-14 h-14 relative mr-2">
            <Image
              src="/favicon.ico"
              alt="My Logo"
              fill
              sizes="32px"
              className="object-contain"
              priority
            />
          </div>
          
        </motion.div>
      </div>

      
      <nav className="hidden sm:flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-white font-bold":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      <div className="sm:hidden fixed top-0 right-0 p-4 z-[1000]">
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={clsx(
            "p-2 rounded-full shadow-md transition-all duration-300 flex items-center justify-center",
            mobileMenuOpen 
              ? "bg-gray-100 rotate-90 dark:bg-gray-800" 
              : "bg-white dark:bg-gray-900"
          )}
          whileTap={{ scale: 0.9 }}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileMenuOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? (
                <HiX className="w-6 h-6 text-gray-900 dark:text-gray-100" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6 text-gray-900 dark:text-gray-100" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[998] sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              className="absolute top-[4.5rem] left-4 right-4 bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ 
                duration: 0.3, 
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.05
              }}
            >
              <ul className="py-2">
                {links.map((link, index) => (
                  <motion.li
                    key={link.hash}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ 
                      delay: index * 0.05, 
                      duration: 0.25,
                      ease: "easeOut"
                    }}
                  >
                    <Link
                      href={link.hash}
                      className={clsx(
                        "flex items-center mx-3 my-2 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                        activeSection === link.name
                          ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                          : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800/50"
                      )}
                      onClick={() => handleMobileNavClick(link.name)}
                    >
                      {activeSection === link.name && (
                        <motion.span
                          className="absolute left-0 top-0 bottom-0 w-1 bg-gray-900 dark:bg-gray-300 rounded-full"
                          layoutId="mobileActiveIndicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span>{link.name}</span>
                      {activeSection === link.name && (
                        <motion.span 
                          className="ml-auto w-2 h-2 rounded-full bg-gray-900 dark:bg-gray-300"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}