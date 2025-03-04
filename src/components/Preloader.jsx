"use client";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { useEffect } from "react";

const slideUp = {
  initial: {
    y: "0",
  },
  entry: {
    y: "0",
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: {
    y: "-100vh",
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const slideDown = {
  initial: {
    y: "-100vh",
  },
  entry: {
    y: "0",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  exit: {
    y: "-100vh",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const pathVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

export default function Preloader({ transition = false }) {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2000);
  }, []);
  return (
    <motion.div
      variants={transition ? slideDown : slideUp}
      initial="initial"
      animate="entry"
      exit="exit"
      className="fixed bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-full items-center justify-center overflow-hidden bg-[#987776] shadow-[0px_0px_210px_0px_rgba(0,0,0,0.50)]"
    >
      <Logo width={300} height={300} animation={true} />
    </motion.div>
  );
}
