import formatLineBreak from '@/utils/formatLineBreak';
import Button from '../../../components/Button';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('HomePage.Hero');

  return (
    <>
      <div
        id="hero"
        className="relative min-h-screen flex items-center justify-center flex-col gap-3 bg-[#987776]">
        <h1 className="text-8xl font-vonca text-center text-white">
          {formatLineBreak(t('Title'))}
        </h1>
        <p className="text-2xl text-center mb-10 text-white">
          {formatLineBreak(t('Subtitle'))}
        </p>
        <a href="/#contact">
          <Button text={t('CTA')} className="text-xl px-6 py-3" />
        </a>
        <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
          {/* bg-[url('/hero.png')] bg-cover bg-center */}
          {/* <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
            src="/hero.mp4"
          /> */}
        </div>
      </div>
    </>
  );
}
