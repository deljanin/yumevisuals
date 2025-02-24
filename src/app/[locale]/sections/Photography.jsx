"use client";
import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/routing";
import Button from "@/components/Button";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLenis } from "lenis/react";

const images = [
  "/parallax-images/1.jpg",
  "/parallax-images/2.jpg",
  "/parallax-images/3.jpg",
  "/parallax-images/4.jpg",
  "/parallax-images/5.jpg",
  "/parallax-images/6.jpg",
  "/parallax-images/7.jpg",
  "/parallax-images/8.jpg",
  "/parallax-images/9.jpg",
  "/parallax-images/10.jpg",
  "/parallax-images/11.jpg",
  "/parallax-images/12.jpg",
];

export default function Photography() {
  const lenis = useLenis();
  const t = useTranslations("HomePage.Photography");

  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 4]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div id="photography" className="relative h-[200vh] w-full overflow-hidden">
      {/* Text Content */}
      <div className="relative z-30 px-5 pt-44 md:w-7/12 md:px-32 xl:px-64">
        <h1 className="mb-3 font-vonca text-8xl text-[#66564E]">
          {t("Title")}
        </h1>
        <p className="mb-10 text-lg text-[#66564E]">{t("Subtitle")}</p>
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
      <div
        ref={gallery}
        className="absolute left-0 top-0 box-border flex h-[200vh] w-full gap-[2vw] overflow-hidden bg-[#dfd5d4] p-[2vw]"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} index={1} />
        <Column images={[images[3], images[4], images[5]]} y={y2} index={2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} index={3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} index={4} />
      </div>
      <div className="absolute -top-[28%] left-0 z-20 h-[100vh] w-[110%] -skew-y-[25deg] bg-[#dfd5d4] shadow-[0px_5px_25px_0px_rgba(0,0,0,0.5)]"></div>
    </div>
  );
}

const Column = ({ images, y, index }) => {
  const topOffsets = {
    1: "-45%",
    2: "-95%",
    3: "-45%",
    4: "-100%",
  };

  return (
    <motion.div
      className={`relative flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw]`}
      style={{ top: topOffsets[index], y }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="relative h-full w-full overflow-hidden rounded-2xl"
        >
          <Image src={`${src}`} alt="image" fill className="object-cover" />
        </div>
      ))}
    </motion.div>
  );
};
