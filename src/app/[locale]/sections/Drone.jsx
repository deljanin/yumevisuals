"use client";
import { useLenis } from "lenis/react";
import { Link } from "@/i18n/routing";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { useInView } from "framer-motion";

const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[#987776]" />,
});

export default function Drone() {
  const lenis = useLenis();
  const t = useTranslations("HomePage.Drone filming");
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef, { amount: 0.01, once: true });

  return (
    <section
      id="drone"
      ref={sectionRef}
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
        <MuxPlayer
          playbackId="NxTieL3hLH01AwE7jCYvlOItQtP9TDsMQa9RMN2yF025g"
          streamType="on-demand"
          preload="auto"
          metadataVideoTitle="Drone video"
          autoPlay={isVisible}
          muted
          loop
          className="h-full w-full [--controls:none] [--media-object-fit:cover]"
        />
      </div>
    </section>
  );
}
