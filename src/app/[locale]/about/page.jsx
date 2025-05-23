"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";

import Image1 from "../../../../public/about-images/1.jpg";
import Image2 from "../../../../public/about-images/2.jpg";
import Image3 from "../../../../public/about-images/3.jpg";

export default function About() {
  const t = useTranslations("AboutPage.Hero");

  useEffect(() => {
    document.body.style.cursor = "default";
  }, []);
  const images = [Image1, Image2, Image3];

  return (
    // px-5 md:px-32 xl:px-64
    <div className="relative">
      {images.map((image, i) => {
        return (
          <div
            key={i}
            className="sticky top-0 flex h-screen w-full flex-col justify-center bg-[#987776] px-5 text-white shadow-[0px_0px_210px_0px_rgba(0,0,0,0.50)] md:px-32 xl:px-64"
          >
            <Image
              src={image}
              alt="img"
              fill
              placeholder="blur"
              priority={i === 0}
              className={`absolute top-0 -z-20 h-full w-full object-cover ${i === 1 ? "object-[70%_50%]" : ""}`}
            />
            <div className="absolute left-0 top-0 -z-10 h-full w-full bg-black bg-opacity-40"></div>
            <h2 className="mb-5 font-vonca text-[2.7rem] leading-none sm:text-5xl md:text-6xl">
              {t(`Heading${i + 1}`)}
            </h2>
            <p className="md:text-lg lg:w-2/3 xl:text-xl">
              {t(`Description${i + 1}`)}
            </p>
          </div>
        );
      })}
      {/* <div className="sticky top-0 flex h-screen w-full items-center justify-center bg-[#987786] font-vonca text-6xl text-white shadow-[0px_0px_210px_0px_rgba(0,0,0,0.50)]">
        {t("Heading1")}
      </div>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center bg-[#987796] font-vonca text-6xl text-white shadow-[0px_0px_210px_0px_rgba(0,0,0,0.50)]">
        {t("Heading1")}
      </div>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center bg-[#987756] font-vonca text-6xl text-white shadow-[0px_0px_210px_0px_rgba(0,0,0,0.50)]">
        {t("Heading1")}
      </div>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center bg-[#987746] font-vonca text-6xl text-white shadow-[0px_0px_210px_0px_rgba(0,0,0,0.50)]">
        {t("Heading1")}
      </div>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center bg-[#987726] font-vonca text-6xl text-white shadow-[0px_0px_210px_0px_rgba(0,0,0,0.50)]">
        {t("Heading1")}
      </div> */}

      <div className="absolute bottom-0 z-10 h-full w-full shadow-[0px_0px_74px_-17px_rgba(0,0,0,0.8)]"></div>
    </div>
  );
}
