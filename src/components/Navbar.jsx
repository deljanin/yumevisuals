'use client';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useRouter } from 'next/navigation';
import { Locale, usePathname } from '@/i18n/routing';
import { useEffect, useState, useTransition } from 'react';
import { useLocale, useTranslations, useMessages } from 'next-intl';
import { useLenis } from 'lenis/react';
import Logo from '@/components/Logo';
import Globe from '@/components/Globe';

export default function Navbar() {
  const localeActive = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const path = usePathname();
  const [notHome, setNotHome] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    setNotHome(path !== '/');
  }, [path]);

  function changeLanguage() {
    let nextLocale;
    if (localeActive === 'sr') {
      nextLocale = 'en';
    } else {
      nextLocale = 'sr';
    }
    startTransition(() => {
      router.replace(`/${nextLocale}${path.trimStart(3)}`);
    });
  }

  const t = useTranslations('Layout.Navbar');
  const messages = useMessages();
  const keys = Object.keys(messages.Layout.Navbar);

  return (
    <div className={` sticky top-0 left-0 right-0 h-0 z-50 `}>
      <div
        className={` ${
          notHome
            ? ' bg-white text-[#66564e] shadow-lg'
            : ' bg-white bg-opacity-[0.001] backdrop-blur-md text-white'
        } h-[70px] flex items-center justify-between xl:mx-64 md:mx-32 mx-5
        rounded-b-3xl transition-all duration-300`}>
        <Link href={`/`} className={`ml-2 cursor-pointer`}>
          <Logo fill={notHome ? '#66564e' : '#ffffff'} />
        </Link>

        <div
          className={`${
            notHome ? '' : 'font-medium'
          } font-vonca  text-2xl flex items-center justify-evenly w-1/2`}>
          {keys.map((key) => (
            <Link
              key={key}
              href={t(`${key}.Link`)}
              className={`${
                notHome ? 'after:bg-[#66564e]' : 'after:bg-[#ffffff]'
              } relative transition-all cursor-pointer
              after:content-[''] after:absolute after:w-full after:h-[2px] after:left-0 
              after:bottom-[-2px] after:origin-bottom-right after:hover:origin-bottom-left 
              after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300`}>
              {t(`${key}.Text`)}
            </Link>
          ))}
        </div>

        <button
          className={`mr-2 cursor-pointer`}
          onClick={changeLanguage}
          disabled={isPending}>
          <Globe fill={notHome ? '#66564e' : '#ffffff'} />
        </button>
      </div>
    </div>
  );
}
