"use client";
import { Link } from "@/i18n/routing";
import { useRouter } from "next/navigation";
import { usePathname } from "@/i18n/routing";
import { useEffect, useTransition } from "react";
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
    <div className={`sticky left-0 right-0 top-0 z-50 h-0`}>
      <div className="flex h-[70px] items-center justify-between bg-white bg-opacity-[0.001] px-5 text-white backdrop-blur-md transition-all duration-300 md:px-32 xl:px-64">
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

        <div className="flex w-1/2 items-center justify-evenly font-vonca text-2xl">
          {keys.map((key) => {
            const link = t(`${key}.Link`);
            const scrollLink = link.replace("/", "");
            return (
              <Link
                key={key}
                href={link}
                onClick={() => {
                  lenis?.scrollTo(scrollLink),
                    {
                      offset: -80,
                      duration: 4,
                    };
                }}
                className="relative cursor-pointer transition-all after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:content-[''] after:hover:origin-bottom-left after:hover:scale-x-100"
              >
                {t(`${key}.Text`)}
              </Link>
            );
          })}
        </div>

        <button
          className={`mr-2 cursor-pointer`}
          onClick={changeLanguage}
          disabled={isPending}
        >
          {/* <a href={changeLanguage()}> */}
          <Globe fill="#ffffff" />
          {/* </a> */}
        </button>
      </div>
    </div>
  );
}
