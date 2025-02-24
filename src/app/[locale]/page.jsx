"use client";
import { useEffect, useState } from "react";
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
import { isLoadingAtom } from "@/utils/store";

export default function Home() {
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      console.log("isLoading", isLoading);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 1000);
    // async () => {

    // };
  });
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
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
