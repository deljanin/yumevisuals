import { useTranslations } from 'next-intl';
import Button from '../../../components/Button';

export default function Videography() {
  const t = useTranslations('HomePage.Videography');

  return (
    <div className="relative w-full min-h-screen bg-[#987776] overflow-hidden">
      <div className="relative z-30 md:w-7/12 xl:px-64 md:px-32 px-5 pt-44">
        <h1 className="text-white text-8xl font-vonca mb-3">{t('Title')}</h1>
        <p className="text-white text-lg mb-10">{t('Subtitle')}</p>
        <a href="/#contact">
          <Button text={t('CTA')} />
        </a>
      </div>
      <div className="absolute -top-[56.5vh] left-0 w-[110%] h-[100vh] -skew-y-[25deg] z-20 bg-[#987776] shadow-[-50px_-5px_25px_0px_rgba(0,0,0,0.3)_inset]"></div>
      <div className="absolute bottom-0 w-full h-[10%] bg-gradient-to-t from-[#dfd5d4ff] to-[#dfd5d400] z-10"></div>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 w-full h-full object-cover">
        <source src="/videos/Videography.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
