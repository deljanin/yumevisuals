'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useLenis } from 'lenis/react';

export default function Services() {
  const lenis = useLenis();
  const t = useTranslations('HomePage.Our services');
  return (
    <div
      id="services"
      className="min-h-[125vh] relative w-full bg-[#DFD5D4] overflow-hidden">
      <div className="relative z-30 xl:px-64 md:px-32 px-5 pt-16">
        <h1 className="text-white text-6xl font-vonca font-medium mb-20 text-center">
          {t('Title')}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 md:px-10 gap-20">
          {[...Array(4)].map((_, i) => {
            return (
              <div
                key={i}
                className="flex flex-col px-12 py-7 min-h-[350px] group rounded-3xl shadow-[0px_0px_30px_-7px_rgba(0,0,0,0.7)]
                 hover:shadow-[0px_0px_30px_-7px_rgba(0,0,0)] hover:scale-[1.02]
                 transition-all bg-[linear-gradient(45deg,#dfd5d4_0%,white_100%)]">
                <h2 className="text-4xl font-vonca font-medium text-[#66564E] text-center mb-6 cursor-default">
                  {t(`Service${i}.Title`)}
                </h2>
                <p className="text-left text-xl text-[#987776] cursor-default">
                  {t(`Service${i}.Subtitle1`)}
                </p>
                <p className="text-left text-[#987776] cursor-default">
                  {t(`Service${i}.Subtitle2`)}
                </p>
                <h2 className="text-5xl font-vonca font-medium my-2 text-[#66564E] cursor-default">
                  {t(`Service${i}.Price`)}
                </h2>
                <ul className="text-[#987776] list-disc list-inside cursor-default">
                  <li className="">{t(`Service${i}.List.item1`)}</li>
                  <li className="">{t(`Service${i}.List.item2`)}</li>
                  <li className="">{t(`Service${i}.List.item3`)}</li>
                </ul>
                <Link href="/#contact" className="mt-auto">
                  <button
                    className="mt-4 rounded-3xl text-white bg-[#987776] text-lg tracking-wide px-6 py-2
                    shadow-[0px_0px_30px_-9px_rgba(0,0,0,0.25)] transition-all
                    group-hover:scale-105  group-hover:shadow-[0px_0px_30px_-9px_rgba(0,0,0,0.5)] delay-100"
                    onClick={() => {
                      lenis?.scrollTo('#contact'),
                        {
                          offset: -80,
                          duration: 4,
                        };
                    }}>
                    {t(`Service${i}.CTA`)}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute -top-[58.5vh] left-0 w-[110%] h-[120vh] -skew-y-[25deg] z-20 bg-[#987776] shadow-[0px_5px_25px_0px_rgba(0,0,0,0.5)]"></div>
    </div>
  );
}
