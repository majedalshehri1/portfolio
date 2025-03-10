"use client";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 2500,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [typingText, setTypingText] = useState("");
  const [showPrompt, setShowPrompt] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cursorPosition, setCursorPosition] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timerRef = useRef<any>(null);

  // Function to simulate typing animation
  const typeText = useCallback((targetText: string, speed: number = 70) => {
    let i = 0;
    setTypingText("");
    setCursorPosition(0);
    setShowPrompt(false);
    
    clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      if (i < targetText.length) {
        setTypingText(prev => prev + targetText.charAt(i));
        setCursorPosition(i + 1);
        i++;
      } else {
        clearInterval(timerRef.current);
        setTimeout(() => {
          setShowPrompt(true);
          setTypingText("");
        }, 800);
      }
    }, speed);
  }, []);

  // Start animation for word change
  const startAnimation = useCallback(() => {
    const wordIndex = words.indexOf(currentWord);
    const nextWord = words[(wordIndex + 1) % words.length];
    
    setIsAnimating(true);
    
    // Begin typing animation with the new word
    typeText(nextWord);
    
    // Set the actual word after typing completes
    setTimeout(() => {
      setCurrentWord(nextWord);
    }, nextWord.length * 70 + 100);
    
  }, [currentWord, words, typeText]);

  // Trigger animation effect
  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      
      return () => clearTimeout(timer);
    }
    
    return () => clearInterval(timerRef.current);
  }, [isAnimating, duration, startAnimation]);

  // Cleanup timers on component unmount
  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="w-full">
      <motion.div 
        className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-md border border-[#3a3a3a]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Terminal header */}
        <div className="bg-[#2b2b2b] px-4 py-2 flex items-center justify-between border-b border-[#3a3a3a]">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="text-xs font-mono text-[#a0a0a0]">bash -- 80×24</div>
          <div className="w-4"></div>
        </div>
        
        {/* Terminal content */}
        <div className="p-4 font-mono text-left text-sm">
          <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
            <motion.div
              key={currentWord + "container"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[80px]"
            >
              {/* Previous command line */}
              {!showPrompt && (
                <div className="text-[#a0a0a0] mb-1">
                  <span className="text-[#4EB05B]">majed@developer</span>
                  <span className="text-white">:</span>
                  <span className="text-[#3B95D5]">~</span>
                  <span className="text-white">$ </span>
                  <span className="text-[#f1f1f1]">show-tech </span>
                </div>
              )}
              
              {/* Current command line */}
              <div className="text-[#a0a0a0]">
                <span className="text-[#4EB05B]">majed@developer</span>
                <span className="text-white">:</span>
                <span className="text-[#3B95D5]">~</span>
                <span className="text-white">$ </span>
                {showPrompt ? (
                  <>
                    <span className="text-[#f1f1f1]">show-tech </span>
                    <span className={cn("text-[#55BCEA]", className)}>{currentWord}</span>
                    <motion.span
                      className="inline-block w-2 h-5 bg-white ml-[1px] -mb-[1px]"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                    />
                  </>
                ) : (
                  <>
                    <span className="text-[#f1f1f1]">show-tech </span>
                    <span className="text-[#55BCEA]">{typingText}</span>
                    <motion.span
                      className="inline-block w-2 h-5 bg-white ml-[1px] -mb-[1px]"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                    />
                  </>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};