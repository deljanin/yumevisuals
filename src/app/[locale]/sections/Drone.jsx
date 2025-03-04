"use client";
import { useLenis } from "lenis/react";
import { Link } from "@/i18n/routing";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import BackgroundVideo from "next-video/background-video";
import DroneVideo from "/videos/Drone.mp4";

export default function Drone() {
  const lenis = useLenis();
  const t = useTranslations("HomePage.Drone filming");

  return (
    <section
      id="drone"
      className="relative z-20 flex h-screen w-full flex-col items-center justify-center bg-black bg-opacity-45 text-center shadow-[0px_5px_25px_0px_rgba(0,0,0,0.5)]"
    >
      <h2 className="mb-3 font-vonca text-5xl text-white xl:text-8xl">
        {t("Title")}
      </h2>
      <p className="mb-10 px-5 text-white md:w-2/3 md:text-lg xl:w-1/3">
        {t("Subtitle")}
      </p>
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
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-screen w-full object-cover">
        {/* <CldVideoPlayer
          className="h-full w-full"
          src="ojr4s0bwm9u5igtcy97m"
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
        <video
          autoPlay
          loop
          muted
          src="/videos/Drone.mp4"
          className="h-full w-full object-cover"
        ></video>
        {/* <BackgroundVideo
          src={DroneVideo}
          autoPlay
          loop
          className="[&>video]:object-cover"
        /> */}
      </div>
    </section>
  );
}
