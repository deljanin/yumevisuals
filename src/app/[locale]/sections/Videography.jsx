"use client";
import { useTranslations } from "next-intl";
import Button from "../../../components/Button";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { motion } from "framer-motion";
import BackgroundVideo from "next-video/background-video";
import VideographyVideo from "/videos/Videography.mp4";

export default function Videography() {
  const lenis = useLenis();
  const t = useTranslations("HomePage.Videography");

  return (
    <section
      id="videography"
      className="relative min-h-screen w-full overflow-hidden bg-[#987776]"
    >
      <div className="relative z-30 px-5 pt-10 sm:w-2/3 sm:pt-16 md:w-3/4 md:px-32 lg:w-9/12 xl:px-64 xl:pt-32 2xl:w-7/12 2xl:pt-44">
        {/* filter: "blur(50px)",
filter: "blur(0px)", */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mb-3 font-vonca text-[2.7rem] leading-none text-white sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl"
        >
          {t("Title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mb-10 text-white md:text-lg"
        >
          {t("Subtitle")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link
            href="/#contact"
            onClick={() => {
              lenis?.scrollTo("#contact"),
                {
                  offset: -80,
                  duration: 4,
                };
            }}
          >
            <Button text={t("CTA")} />
          </Link>
        </motion.div>
      </div>
      <div className="absolute -top-[56.5vh] left-0 z-20 h-[100vh] w-[110%] -skew-y-[25deg] bg-[#987776] shadow-[-50px_-5px_25px_0px_rgba(0,0,0,0.3)_inset]"></div>
      <div className="absolute bottom-0 z-10 h-[5%] w-full bg-gradient-to-t from-[#dfd5d4ff] to-[#dfd5d400]"></div>
      <div className="absolute top-0 h-full w-full object-cover">
        {/* <CldVideoPlayer
          src="iasvx3llxdu24kvjn1oi"
          width="1920"
          height="1080"
          loop
          autoPlay={true}
          autoplayMode="on-scroll"
          muted
          bigPlayButton={false}
          controls={false}
          hideContextMenu
          quality={90}
        /> */}
        {/* <BackgroundVideo src={VideographyVideo} autoPlay loop />
         */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 h-full w-full object-cover"
        >
          <source src="/videos/Videography.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
