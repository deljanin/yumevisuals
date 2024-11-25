import formatLineBreak from '@/utils/formatLineBreak';
import Button from '../../../components/Button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('HomePage.Hero');

  return (
    <>
      <div
        id="hero"
        className="relative min-h-screen flex items-center justify-center flex-col gap-3 bg-[#987776]">
        <h1 className="text-8xl font-vonca text-center text-white z-10">
          {formatLineBreak(t('Title'))}
        </h1>
        <p className="text-2xl text-center mb-10 text-white z-10 ">
          {formatLineBreak(t('Subtitle'))}
        </p>
        <Link href="/#contact" className="z-10">
          <Button text={t('CTA')} className="text-xl px-6 py-3" />
        </Link>
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div className="absolute bottom-0 w-full h-[80px] bg-gradient-to-b from-[rgba(0,0,0,0)] to-[#987776]"></div>
          <div className="absolute  w-full h-full bg-[rgba(0,0,0,0.6)]"></div>
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
            src="/videos/Hero.mp4"
          />
        </div>
      </div>
    </>
  );
}
