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
    <div
      id="videography"
      className="relative min-h-screen w-full overflow-hidden bg-[#987776]"
    >
      <div className="relative z-30 px-5 pt-44 md:w-7/12 md:px-32 xl:px-64">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mb-3 font-vonca text-8xl text-white"
        >
          {t("Title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mb-10 text-lg text-white"
        >
          {t("Subtitle")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
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
        <BackgroundVideo src={VideographyVideo} autoPlay loop />
      </div>
    </div>
  );
}
