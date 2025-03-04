"use client";
import Picture1 from "../../../../public/scroll-images/1.jpg";
import Picture2 from "../../../../public/scroll-images/2.jpg";
import Picture3 from "../../../../public/scroll-images/3.jpg";
import Picture4 from "../../../../public/scroll-images/4.jpg";
import Picture5 from "../../../../public/scroll-images/5.jpg";
import Picture6 from "../../../../public/scroll-images/6.jpg";
import Picture7 from "../../../../public/scroll-images/7.jpg";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function ZoomParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale6,
    },
    {
      src: Picture5,
      scale: scale5,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <section ref={container} className="relative h-[300vh] bg-[#987776]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {pictures.map(({ src, scale }, index) => {
          const imageContainerClasses = [
            "relative flex items-center justify-center",
            index === 0 && "top-0 w-[30vw] h-[35vh]",
            index === 1 &&
              "top-[-32.5vh] left-[-6.3vw] w-[17.5vw] h-[25vh] scale-x-[-1]",
            index === 2 && "top-[-5vh] left-[-24vw] w-[16vw] h-[45vh]",
            index === 3 && "top-[12.5vh] left-[26vw]  w-[20vw] h-[60vh]",
            index === 4 && "top-[32vh] left-[2.5vw] w-[25vw] h-[25vh]",
            index === 5 && "top-[27vh] left-[-22.5vw] w-[23vw] h-[15vh]",
            index === 6 && "top-[-28.6vh] left-[16vw] w-[25vw] h-[17vh]",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="absolute top-0 flex h-full w-full items-center justify-center"
            >
              <div className={imageContainerClasses}>
                <Image
                  src={src}
                  fill
                  alt="image"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
