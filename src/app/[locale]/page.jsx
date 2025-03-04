"use client";
import { isLoadingAtom } from "@/utils/store";
import Contact from "./sections/Contact";
import Drone from "./sections/Drone";
import FAQ from "./sections/FAQ";
import Hero from "./sections/Hero";
import Photography from "./sections/Photography";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import VideoEditing from "./sections/VideoEditing";
import Videography from "./sections/Videography";
import ZoomParallax from "./sections/ZoomParallax";
import Preloader from "@/components/Preloader";
import { AnimatePresence } from "framer-motion";
import { useAtom } from "jotai";
import { useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
      }, 3000);
    } else {
      document.body.style.cursor = "default";
    }
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {/* <Preloader /> */}
      <Hero />
      <ZoomParallax />
      <Videography />
      <VideoEditing />
      <Photography />
      <Drone />
      <Testimonials />
      <Services />
      <FAQ />
      <Contact />
    </>
  );
}
