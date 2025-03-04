"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Arrow from "@/components/Arrow";
import formatLineBreak from "@/utils/formatLineBreak";
import AnimateComponent from "@/components/AnimateComponent";
export default function FAQ() {
  const t = useTranslations("HomePage.FAQ");
  const [index, setIndex] = useState(-1);
  const qa = useTranslations(`HomePage.FAQ.List`);

  return (
    <section className="flex min-h-screen w-full flex-col items-center bg-[#dfd5d4] px-5 pt-14">
      <AnimateComponent>
        <h2 className="mb-20 text-center font-vonca text-[2.7rem] font-medium leading-none text-[#66564E] sm:text-5xl md:text-6xl">
          {formatLineBreak(t("Title"))}
        </h2>
      </AnimateComponent>
      <div className="w-full md:w-3/4 xl:w-1/2">
        {[...Array(5)].map((_, i) => {
          return (
            <AnimateComponent key={i}>
              <div
                className="relative mb-10 select-none"
                onMouseDown={() => {
                  if (index === i) {
                    setIndex(-1);
                  } else {
                    setIndex(i);
                  }
                }}
              >
                <div
                  className={`w-full cursor-pointer rounded-2xl bg-white p-5 text-lg text-[#66564E] shadow-[0px_0px_30px_-7px_rgba(0,0,0,0.7)] md:text-2xl`}
                >
                  <div className="flex items-center justify-between gap-3.5">
                    <span className="">{qa(`Question${i}`)}</span>
                    <Arrow
                      fill="#66564E"
                      className={`transition-all ${index === i ? "rotate-90" : "rotate-180"} `}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 md:text-xl ${index === i ? "mt-2 max-h-[300px]" : "max-h-0"} `}
                  >
                    <div className="">{qa(`Answer${i}`)}</div>
                  </div>
                </div>
              </div>
            </AnimateComponent>
          );
        })}
      </div>
    </section>
  );
}
