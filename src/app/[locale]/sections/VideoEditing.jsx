'use client';
import Button from '@/components/Button';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Logo from '@/components/Logo';

const videos = [
  { path: '/videos/VideoEditing/1.mp4', duration: 21 },
  { path: '/videos/VideoEditing/2.mp4', duration: 25 },
  { path: '/videos/VideoEditing/3.mp4', duration: 28 },
  { path: '/videos/VideoEditing/4.mp4', duration: 22 },
  { path: '/videos/VideoEditing/5.mp4', duration: 30 },
];

export default function VideoEditing() {
  const [videoIndex, setVideoIndex] = useState(1); // Center video index
  const [isAnimating, setIsAnimating] = useState(false); // Prevent overlapping animations
  const t = useTranslations('HomePage.Video editing');

  useEffect(() => {
    const currentVideo = videos[videoIndex];
    const timer = setTimeout(() => {
      handleVideoEnd();
    }, currentVideo.duration * 1000); // Trigger after the current video's duration

    return () => clearTimeout(timer); // Cleanup on component unmount or when index changes
  }, [videoIndex]);

  const handleVideoEnd = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      // Update video index cyclically
      setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      setIsAnimating(false);
    }, 1000); // Animation duration (1s)
  };

  return (
    <div className="w-full min-h-screen bg-[#dfd5d4] xl:pr-64 md:pr-32 px-5 md:flex-row flex flex-col-reverse items-center justify-between gap-5">
      {/* Video Section */}
      <div className="md:w-1/2 h-[711px] relative flex items-center justify-center">
        <div
          className={`absolute w-full h-full bg-[#987776]
             flex items-center justify-center z-30 rounded-3xl max-w-[400px] 
             shadow-[0px_0px_30px_0px_rgba(0,0,0,0.25)]
             opacity-0 transition-opacity duration-1000
            ${isAnimating ? 'opacity-100' : ''}
            `}>
          <Logo width={150} height={150} />
        </div>
        <video
          loop
          muted
          className={`z-10 absolute left-0 h-auto max-w-[300px] rounded-3xl shadow-[0px_0px_30px_0px_rgba(0,0,0,0.25)] transition-transform duration-1000 ${
            isAnimating && 'translate-x-[220px]'
          }`}
          src={videos[(videoIndex - 1 + videos.length) % videos.length].path}
        />

        <video
          autoPlay
          muted
          className={`z-20 h-auto max-w-[400px] rounded-3xl shadow-[0px_0px_30px_0px_rgba(0,0,0,0.25)] transition-transform duration-1000 `}
          src={videos[videoIndex].path}
        />

        <video
          loop
          muted
          className={`z-10 absolute right-0 h-auto max-w-[300px] rounded-3xl shadow-[0px_0px_30px_0px_rgba(0,0,0,0.25)] transition-transform duration-1000 ${
            isAnimating && '-translate-x-[220px]'
          }`}
          src={videos[(videoIndex + 1) % videos.length].path}
        />
      </div>

      {/* Text Content */}
      <div className="md:text-right md:max-w-[600px] flex flex-col items-end text-center">
        <h1 className="text-[#66564E] text-8xl font-vonca mb-3">
          {t('Title')}
        </h1>
        <p className="text-[#66564E] text-lg mb-10">{t('Subtitle')}</p>
        <Link href="/#contact">
          <Button text={t('CTA')} />
        </Link>
      </div>
    </div>
  );
}
