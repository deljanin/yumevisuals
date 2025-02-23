"use client";
import formatLineBreak from "@/utils/formatLineBreak";
import Button from "../../../components/Button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useMemo } from "react";
import { useLenis } from "lenis/react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function Hero() {
  const lenis = useLenis();
  const t = useTranslations("HomePage.Hero");

  const videoId = useMemo(() => `Hero-${crypto.randomUUID()}`, []);
  return (
    <>
      <div
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center gap-3"
      >
        <h1 className="z-10 text-center font-vonca text-8xl text-white">
          {formatLineBreak(t("Title"))}
        </h1>
        <p className="z-10 mb-10 text-center text-2xl text-white">
          {formatLineBreak(t("Subtitle"))}
        </p>
        <Link
          href="/#contact"
          className="z-10"
          onClick={() => {
            lenis?.scrollTo("#contact"),
              {
                offset: -80,
                duration: 4,
              };
          }}
        >
          <Button text={t("CTA")} className="px-6 py-3 text-xl" />
        </Link>
        <div className="absolute bottom-0 left-0 right-0 top-0">
          <div className="absolute bottom-0 z-20 h-[20px] w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[#987776]"></div>
          <div className="absolute z-0 h-full w-full bg-[rgba(0,0,0,0.6)]"></div>
          <CldVideoPlayer
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
          />
        </div>
      </div>
    </>
  );
}
