"use client";
import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/routing";
import Button from "@/components/Button";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLenis } from "lenis/react";
import AnimateComponent from "@/components/AnimateComponent";

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
    <section
      id="photography"
      className="relative h-[200vh] w-full overflow-hidden"
    >
      <div className="relative z-30 px-5 pt-8 sm:w-2/3 sm:pt-16 md:w-3/4 md:px-32 lg:w-8/12 xl:px-64 xl:pt-32 2xl:w-7/12 2xl:pt-44">
        <AnimateComponent>
          <h2 className="mb-3 font-vonca text-[2.7rem] text-[#66564E] sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
            {t("Title")}
          </h2>
        </AnimateComponent>
        <AnimateComponent>
          <p className="mb-10 text-[#66564E] md:text-lg">{t("Subtitle")}</p>
        </AnimateComponent>
        <AnimateComponent>
          <Link
            href="/#contact"
            onClick={() => {
              lenis?.scrollTo("#contact", { offset: -80, duration: 4 });
            }}
          >
            <Button text={t("CTA")} />
          </Link>
        </AnimateComponent>
      </div>

      <GalleryColumns dimension={dimension} galleryRef={gallery} />

      <div className="absolute -top-[28%] left-0 z-20 h-[102vh] w-[110%] -skew-y-[25deg] bg-[#dfd5d4] shadow-[0px_5px_25px_0px_rgba(0,0,0,0.5)] lg:h-[100vh]"></div>
    </section>
  );
}

function GalleryColumns({ dimension, galleryRef }) {
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  const yValues = [
    useTransform(scrollYProgress, [0, 1], [0, 2 * dimension.height]),
    useTransform(scrollYProgress, [0, 1], [0, 3.3 * dimension.height]),
    useTransform(scrollYProgress, [0, 1], [0, 1.25 * dimension.height]),
    useTransform(scrollYProgress, [0, 1], [0, 4 * dimension.height]),
  ];

  const isMobile = dimension.width <= 768;

  const columns = isMobile
    ? [
        {
          images: [images[0], images[1], images[2], images[6], images[7]],
          y: yValues[0],
        },
        {
          images: [images[3], images[4], images[5], images[9], images[10]],
          y: yValues[1],
        },
      ]
    : [
        { images: [images[0], images[1], images[2]], y: yValues[0] },
        { images: [images[3], images[4], images[5]], y: yValues[1] },
        { images: [images[6], images[7], images[8]], y: yValues[2] },
        { images: [images[9], images[10], images[11]], y: yValues[3] },
      ];

  return (
    <div
      ref={galleryRef}
      className="absolute left-0 top-0 flex h-[200vh] w-full gap-[2vw] overflow-hidden bg-[#dfd5d4] p-[2vw]"
    >
      {columns.map((col, index) => (
        <Column key={index} images={col.images} y={col.y} index={index + 1} />
      ))}
    </div>
  );
}

function Column({ images, y, index }) {
  const topOffsets = {
    1: "-45%",
    2: "-95%",
    3: "-45%",
    4: "-100%",
  };

  return (
    <motion.div
      className={`relative flex h-full w-1/2 flex-col gap-[2vw] md:w-1/4`}
      style={{ top: topOffsets[index], y }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="relative h-full w-full overflow-hidden rounded-2xl"
        >
          <Image src={src} alt="image" fill className="object-cover" />
        </div>
      ))}
    </motion.div>
  );
}
