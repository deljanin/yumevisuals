"use client";
import { Link } from "@/i18n/routing";
import { useRouter } from "next/navigation";
import { usePathname } from "@/i18n/routing";
import { useState, useEffect, useTransition } from "react";
import { useLocale, useTranslations, useMessages } from "next-intl";
import { useLenis } from "lenis/react";
import Logo from "@/components/Logo";
import Globe from "@/components/Globe";
import { useAtom } from "jotai";
import { currentPathAtom } from "@/utils/store";

export default function Navbar() {
  const localeActive = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const path = usePathname();
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [, setCurrentPath] = useAtom(currentPathAtom);
  const lenis = useLenis();
  const t = useTranslations("Layout.Navbar");
  const messages = useMessages();
  const keys = Object.keys(messages.Layout.Navbar);
  const pathname = usePathname();

  useEffect(() => {
    // Update the path atom whenever the route changes
    setCurrentPath(pathname);
  }, [pathname, setCurrentPath]);

  function changeLanguage() {
    let nextLocale;
    if (localeActive === "sr") {
      nextLocale = "en";
    } else {
      nextLocale = "sr";
    }
    // return `/${nextLocale}${path.trimStart(3)}`;
    startTransition(() => {
      router.replace(`/${nextLocale}${path.trimStart(3)}`);
    });
  }
  return (
    <>
      {/* Mobile menu */}
      <div
        className={`${isOpenMobileMenu ? "translate-x-0" : "-translate-y-[calc(100%+70px)]"} fixed left-0 right-0 top-[70px] z-50 flex h-[calc(100vh-70px)] w-full transform flex-col items-end justify-center bg-white bg-opacity-[0.001] text-white backdrop-blur-md transition-transform duration-500 md:hidden`}
      >
        <div className="flex h-full flex-col items-end justify-between py-5">
          <div />
          <div className="flex flex-col items-end justify-evenly gap-5 px-5 font-vonca text-3xl">
            {keys.map((key) => {
              const link = t(`${key}.Link`);
              const scrollLink = link.replace("/", "");
              return (
                <Link
                  key={key}
                  href={link}
                  scroll={false}
                  onClick={() => {
                    setIsOpenMobileMenu(!isOpenMobileMenu);

                    lenis?.scrollTo(scrollLink),
                      {
                        offset: -80,
                        duration: 4,
                      };
                  }}
                  className=""
                >
                  {t(`${key}.Text`)}
                </Link>
              );
            })}
          </div>
          <button
            className="block pr-4"
            onClick={changeLanguage}
            disabled={isPending}
          >
            <Globe fill="#ffffff" />
          </button>
        </div>
      </div>
      {/* Desktop menu */}
      <div className={`sticky left-0 right-0 top-0 z-50 h-0`}>
        <div className="flex h-[70px] items-center justify-between bg-white bg-opacity-[0.001] px-3 text-white backdrop-blur-md transition-all duration-300 sm:px-5 md:px-32 xl:px-64">
          <Link
            href={`/`}
            className={`ml-2 cursor-pointer`}
            onClick={() => {
              lenis?.scrollTo("#hero"),
                {
                  duration: 4,
                };
            }}
          >
            <Logo fill="#ffffff" />
          </Link>
          {/* Desktop menu */}
          <div className="hidden w-2/3 items-center justify-evenly font-vonca text-2xl md:flex lg:w-1/2">
            {keys.map((key) => {
              const link = t(`${key}.Link`);
              const scrollLink = link.replace("/", "");
              return (
                <Link
                  key={key}
                  href={link}
                  scroll={false}
                  onClick={() => {
                    lenis?.scrollTo(scrollLink),
                      {
                        offset: -80,
                        duration: 4,
                      };
                  }}
                  className="relative cursor-pointer transition-all after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#ffffff] after:transition-transform after:duration-300 after:content-[''] after:hover:origin-bottom-left after:hover:scale-x-100"
                >
                  {t(`${key}.Text`)}
                </Link>
              );
            })}
          </div>

          <button
            className="mr-2 hidden cursor-pointer md:block"
            onClick={changeLanguage}
            disabled={isPending}
          >
            {/* <a href={changeLanguage()}> */}
            <Globe fill="#ffffff" />
            {/* </a> */}
          </button>

          {/* Mobile menu */}
          <button
            className="mr-2 block cursor-pointer md:hidden"
            onClick={() => {
              console.log(isOpenMobileMenu);
              setIsOpenMobileMenu(!isOpenMobileMenu);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="3 7 17 11"
            >
              <path
                fill="currentColor"
                d="M3 8V7h17v1zm17 4v1H3v-1zM3 17h17v1H3z"
              ></path>{" "}
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
