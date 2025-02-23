"use client";
import { useTranslations } from "next-intl";
import Button from "../../../components/Button";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { motion } from "framer-motion";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import { useMemo } from "react";

export default function Videography() {
  const lenis = useLenis();
  const t = useTranslations("HomePage.Videography");
  const videoId = useMemo(() => `Videography-${crypto.randomUUID()}`, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#987776]">
      <div className="relative z-30 px-5 pt-44 md:w-7/12 md:px-32 xl:px-64">
        <h1 className="mb-3 font-vonca text-8xl text-white">{t("Title")}</h1>
        <p className="mb-10 text-lg text-white">{t("Subtitle")}</p>
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
      </div>
      <div className="absolute -top-[56.5vh] left-0 z-20 h-[100vh] w-[110%] -skew-y-[25deg] bg-[#987776] shadow-[-50px_-5px_25px_0px_rgba(0,0,0,0.3)_inset]"></div>
      <div className="absolute bottom-0 z-10 h-[5%] w-full bg-gradient-to-t from-[#dfd5d4ff] to-[#dfd5d400]"></div>
      <div className="absolute top-0 h-full w-full object-cover">
        <CldVideoPlayer
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
        />
      </div>
    </div>
  );
}
