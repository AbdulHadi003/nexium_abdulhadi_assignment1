"use client";

import { InputForm } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"

const text = "Quote Generator";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
    const handleExit = () => {
    window.close();
    setTimeout(() => {
      if (!window.closed) {
        alert("Your browser blocked the window from closing. Please close this tab manually.");
      }
    }, 300);
  };
  
  return (
    <main className="bg-gradient-to-r from-amber-100 to-amber-300 flex justify-center min-h-screen">
      <div className="text-center space-x-5 space-y-30 mt-20">
        <motion.h1
          className="text-5xl italic font-extrabold text-foreground bg-amber-200 p-4 rounded-lg shadow-lg"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letterAnimation}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
          <InputForm />
      <div className = "relative -top-15 mb-5" >
          <Button variant="outline" className="bg-amber-200 text-xl" onClick={handleExit}>Exit</Button>
        </div>
      </div>  
    </main>
  )
}
