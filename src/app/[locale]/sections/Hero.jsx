"use client";
import formatLineBreak from "@/utils/formatLineBreak";
import Button from "../../../components/Button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLenis } from "lenis/react";
import BackgroundVideo from "next-video/background-video";
import HeroVideo from "/videos/Hero.mp4";
import AnimateComponent from "@/components/AnimateComponent";

export default function Hero() {
  const lenis = useLenis();
  const t = useTranslations("HomePage.Hero");

  return (
    <>
      <section
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center gap-3 px-5"
      >
        <h1 className="z-20 text-center font-vonca text-[2.7rem] leading-none text-white sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
          {formatLineBreak(t("Title"))}
        </h1>

        <p className="z-20 mb-5 text-center text-white md:mb-10 md:text-2xl">
          {formatLineBreak(t("Subtitle"))}
        </p>
        <Link
          href="/#contact"
          className="z-20"
          onClick={() => {
            lenis?.scrollTo("#contact"),
              {
                offset: -80,
                duration: 4,
              };
          }}
        >
          <Button
            text={t("CTA")}
            className="px-3 py-1.5 md:px-6 md:py-3 md:text-xl"
          />
        </Link>
        <div className="absolute bottom-0 left-0 right-0 top-0">
          <div className="absolute bottom-0 z-20 h-[20px] w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[#987776]"></div>
          <div className="absolute z-10 h-full w-full bg-[rgba(0,0,0,0.6)]"></div>
          {/* <CldVideoPlayer
            src="pcoxj19uvbv1wrdzkghb"
            className="pointer-events-none -z-10 h-full w-full"
            width="1920"
            height="1080"
            muted
            loop
            autoPlay={true}
            autoplayMode="on-scroll"
            controls={false}
            hideContextMenu
            quality={90}
          /> */}

          {/* <BackgroundVideo
            src={HeroVideo}
            autoPlay
            loop
            className="z-0 h-full w-full  object-cover"
          /> */}
          <video
            autoPlay
            loop
            muted
            className="h-full w-full object-cover"
            src="/videos/Hero.mp4"
          />
        </div>
      </section>
    </>
  );
}
