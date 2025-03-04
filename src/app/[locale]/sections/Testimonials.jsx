"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import formatLineBreak from "@/utils/formatLineBreak";
import Arrow from "@/components/Arrow";
import AnimateComponent from "@/components/AnimateComponent";

export default function Testimonials() {
  const t = useTranslations("HomePage.Testimonials");
  const testimonialsLength = 5;
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonialsLength);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, testimonialsLength]);

  return (
    <section className="relative min-h-[600px] bg-[#987776] px-5 py-28 text-white xl:min-h-[489px]">
      <AnimateComponent>
        <h2 className="pb-12 text-center font-vonca text-[2.7rem] font-medium leading-none sm:text-5xl md:text-6xl">
          {formatLineBreak(t("Title"))}
        </h2>
      </AnimateComponent>
      <AnimateComponent className="h-full">
        <div
          className="flex h-full items-center justify-center gap-2 pb-6 md:gap-5 xl:gap-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            className="rotate-180 transform cursor-pointer border-2 border-transparent p-1 pl-2 transition-all hover:rounded-full hover:border-white md:p-4 md:pl-6"
            onMouseDown={() =>
              setIndex((prevIndex) =>
                prevIndex === 0 ? testimonialsLength - 1 : prevIndex - 1,
              )
            }
          >
            <Arrow fill="white" width={40} height={40} />
          </button>

          {/* Animate Presence for smooth fade transition */}
          <div className="min-w-4/5 min-h-28 text-center md:w-[700px] md:text-xl">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                &ldquo;{t("Testimonials.Testimonial" + index + ".Text")}&rdquo;
              </motion.p>
            </AnimatePresence>
          </div>

          <button
            className="cursor-pointer border-2 border-transparent p-1 pl-2 transition-all hover:rounded-full hover:border-white md:p-4 md:pl-6"
            onMouseDown={() =>
              setIndex((prevIndex) => (prevIndex + 1) % testimonialsLength)
            }
          >
            <Arrow fill="white" width={40} height={40} />
          </button>
        </div>
      </AnimateComponent>

      {/* Position and Name Animations */}
      <AnimatePresence mode="wait">
        <motion.p
          key={`position-${index}`}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
          className="text-center md:text-lg"
        >
          {t("Testimonials.Testimonial" + index + ".Position")}
        </motion.p>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.p
          key={`name-${index}`}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
          className="text-center md:text-lg"
        >
          {t("Testimonials.Testimonial" + index + ".Name")}
        </motion.p>
      </AnimatePresence>

      {/* Dots Section */}
      <AnimateComponent>
        <div className="mt-10 flex items-center justify-center gap-3">
          {Array.from({ length: testimonialsLength }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setIndex(dotIndex)}
              className="size-3 cursor-pointer rounded-full bg-white transition-all duration-300"
              style={{
                transform: dotIndex === index ? "scale(1.4)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </AnimateComponent>
    </section>
  );
}
