import { Link } from '@/i18n/routing';
import Button from '@/components/Button';
import { useTranslations } from 'next-intl';

export default function Drone() {
  const t = useTranslations('HomePage.Drone filming');

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center text-center bg-black bg-opacity-45 shadow-[0px_-10px_30px_0px_rgba(0,0,0,0.40)]">
      <h1 className="text-white xl:text-8xl text-5xl font-vonca mb-3">
        {t('Title')}
      </h1>
      <p className="text-white md:text-lg mb-10 xl:w-1/3 md:w-2/3 px-5">
        {t('Subtitle')}
      </p>
      <Link href="/#contact">
        <Button text={t('CTA')} />
      </Link>
      <div className="absolute h-screen w-full top-0 left-0 right-0 bottom-0  -z-10">
        <video
          autoPlay
          loop
          muted
          src="/videos/Drone.mp4"
          className="w-full h-full object-cover"></video>
      </div>
    </div>
  );
}
