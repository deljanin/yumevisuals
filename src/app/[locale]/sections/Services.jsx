"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useLenis } from "lenis/react";
import AnimateComponent from "@/components/AnimateComponent";

export default function Services() {
  const lenis = useLenis();
  const t = useTranslations("HomePage.Our services");
  return (
    <section
      id="services"
      className="relative min-h-[125vh] w-full overflow-hidden bg-[#DFD5D4] py-10"
    >
      <div className="relative z-30 px-5 pt-16 md:px-32 xl:px-64">
        <AnimateComponent>
          <h2 className="mb-20 text-center font-vonca text-[2.7rem] font-medium leading-none text-white sm:text-5xl md:text-6xl">
            {t("Title")}
          </h2>
        </AnimateComponent>
        <div className="grid grid-cols-1 gap-16 md:px-10 lg:grid-cols-2">
          {[...Array(4)].map((_, i) => {
            return (
              <AnimateComponent key={i}>
                <div className="group flex min-h-[400px] flex-col rounded-3xl bg-[linear-gradient(45deg,#dfd5d4_0%,white_100%)] px-12 py-7 shadow-[0px_0px_30px_-7px_rgba(0,0,0,0.7)] transition-all hover:scale-[1.02] hover:shadow-[0px_0px_30px_-7px_rgba(0,0,0)]">
                  <h2 className="mb-6 cursor-default text-center font-vonca text-4xl font-medium text-[#66564E]">
                    {t(`Service${i}.Title`)}
                  </h2>
                  <p className="cursor-default text-left text-xl text-[#987776]">
                    {t(`Service${i}.Subtitle1`)}
                  </p>
                  <p className="cursor-default text-left text-[#987776]">
                    {t(`Service${i}.Subtitle2`)}
                  </p>
                  <h2 className="my-2 cursor-default font-vonca text-5xl font-medium text-[#66564E]">
                    {t(`Service${i}.Price`)}
                  </h2>
                  <ul className="cursor-default list-inside list-disc text-[#987776]">
                    <li className="">{t(`Service${i}.List.item1`)}</li>
                    <li className="">{t(`Service${i}.List.item2`)}</li>
                    <li className="">{t(`Service${i}.List.item3`)}</li>
                  </ul>
                  <Link href="/#contact" className="mt-auto">
                    <button
                      className="mt-4 rounded-3xl bg-[#987776] px-6 py-2 text-lg tracking-wide text-white shadow-[0px_0px_30px_-9px_rgba(0,0,0,0.25)] transition-all delay-100 group-hover:scale-105 group-hover:shadow-[0px_0px_30px_-9px_rgba(0,0,0,0.5)]"
                      onClick={() => {
                        lenis?.scrollTo("#contact"),
                          {
                            offset: -80,
                            duration: 4,
                          };
                      }}
                    >
                      {t(`Service${i}.CTA`)}
                    </button>
                  </Link>
                </div>
              </AnimateComponent>
            );
          })}
        </div>
      </div>
      <div className="absolute -top-[65vh] left-0 z-20 h-[130vh] w-[110%] -skew-y-[25deg] bg-[#987776] shadow-[0px_5px_25px_0px_rgba(0,0,0,0.5)]"></div>
    </section>
  );
}
