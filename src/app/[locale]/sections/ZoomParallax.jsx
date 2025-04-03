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
            index === 0 && "top-0 w-[35vw] h-[35vh] md:w-[30vw] md:h-[35vh]",
            index === 1 &&
              "top-[-31vh] left-[3vw] w-[36vw] h-[23vh] sm:top-[-32.5vh] sm:left-[-6.3vw] sm:w-[17.5vw] sm:h-[25vh] scale-x-[-1]",
            index === 2 &&
              "top-[-5vh] left-[-37vw] w-[33vw] sm:left-[-24vw] sm:w-[16vw] h-[45vh]",
            index === 3 &&
              "top-[5vh] left-[36.5vw] w-[32vw] h-[45vh] sm:top-[12.5vh] sm:left-[26vw] sm:w-[20vw] sm:h-[60vh]",
            index === 4 &&
              "top-[32vh] left-[0vw] w-[30vw] h-[25vh] sm:left-[2.5vw] sm:w-[25vw]",
            index === 5 &&
              "top-[27.5vh] left-[-36vw] w-[37vw] h-[16vh] sm:top-[27vh] sm:left-[-22.5vw] sm:w-[23vw] sm:h-[15vh]",
            index === 6 &&
              "top-[-28vh] left-[36.5vw] w-[25vw] h-[17vh] sm:left-[16vw]",
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
                {/* <div className="absolute">{index}</div> */}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
