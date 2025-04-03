"use client";
import formatLineBreak from "@/utils/formatLineBreak";
import Button from "../../../components/Button";
import { useTranslations } from "next-intl";
import { useLenis } from "lenis/react";
import { Link } from "@/i18n/routing";
import dynamic from "next/dynamic";

const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[#987776]" />,
});

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
        <div className="absolute inset-0">
          <div className="absolute bottom-0 z-20 h-[20px] w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[#987776]"></div>
          <div className="absolute z-10 h-full w-full bg-[rgba(0,0,0,0.6)]"></div>
          <MuxPlayer
            playbackId="uRubwZ502E1pJgL8NBYZ1HoODO7jYcFL1nXnsTAERJjk"
            streamType="on-demand"
            preload="auto"
            metadataVideoTitle="Hero video"
            autoPlay={true}
            muted
            loop
            className="h-full w-full [--controls:none] [--media-object-fit:cover]"
          />
        </div>
      </section>
    </>
  );
}
