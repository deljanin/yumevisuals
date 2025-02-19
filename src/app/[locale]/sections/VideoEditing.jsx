'use client';
import Button from '@/components/Button';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Logo from '@/components/Logo';
import { useLenis } from 'lenis/react';

const videos = [
  { path: '/videos/VideoEditing/1.mp4', duration: 21 },
  { path: '/videos/VideoEditing/2.mp4', duration: 25 },
  { path: '/videos/VideoEditing/3.mp4', duration: 28 },
  { path: '/videos/VideoEditing/4.mp4', duration: 22 },
  { path: '/videos/VideoEditing/5.mp4', duration: 30 },
];

export default function VideoEditing() {
  const lenis = useLenis();
  const [videoIndex, setVideoIndex] = useState(1); // Center video index
  const [isAnimating, setIsAnimating] = useState(false); // Prevent overlapping animations
  const [touchStart, setTouchStart] = useState(0); // Track touch start position
  const t = useTranslations('HomePage.Video editing');

  useEffect(() => {
    const currentVideo = videos[videoIndex];
    const timer = setTimeout(() => {
      handleVideoEnd();
    }, currentVideo.duration * 1000); // Trigger after the current video's duration

    return () => clearTimeout(timer); // Cleanup on component unmount or when index changes
  }, [videoIndex]);

  const startAnimationTimeout = (callback) => {
    setIsAnimating(true);
    setTimeout(() => {
      callback();
      setIsAnimating(false);
    }, 1000); // Animation duration (1s)
  };

  const handleVideoEnd = () => {
    startAnimationTimeout(() => {
      // Update video index cyclically
      setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    });
  };

  const handleDotClick = (index) => {
    if (index !== videoIndex) {
      startAnimationTimeout(() => {
        setVideoIndex(index);
      });
    }
  };

  const handleTouchStart = (e) => {
    const touchStartPosition = e.touches[0].clientX;
    setTouchStart(touchStartPosition);
  };

  const handleTouchEnd = (e) => {
    const touchEndPosition = e.changedTouches[0].clientX;
    const swipeDistance = touchStart - touchEndPosition;

    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        // Swiped left
        startAnimationTimeout(() => {
          setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        });
      } else {
        // Swiped right
        startAnimationTimeout(() => {
          setVideoIndex(
            (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
          );
        });
      }
    }
  };

  return (
    <div
      className="w-full min-h-screen bg-[#dfd5d4] xl:pr-64 md:pr-32 px-5 lg:flex-row flex flex-col-reverse items-center justify-between lg:gap-5 gap-10"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}>
      {/* Video Section */}
      <div className="flex flex-col items-center justify-between lg:w-[811px] w-full h-full">
        <div className="w-full h-[711px] relative flex items-center justify-center">
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
        {/* Dots for Video Navigation */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {videos.map((_, index) => (
            <button
              key={index}
              disabled={isAnimating}
              onClick={() => handleDotClick(index)}
              className={`bg-white rounded-full cursor-pointer transition-all duration-300 size-3`}
              style={{
                transform: index === videoIndex ? 'scale(1.4)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Text Content */}
      <div className="lg:text-right md:max-w-[600px] flex flex-col lg:items-end text-center">
        <h1 className="text-[#66564E] text-8xl font-vonca mb-3">
          {t('Title')}
        </h1>
        <p className="text-[#66564E] text-lg mb-10">{t('Subtitle')}</p>
        <Link
          href="/#contact"
          onClick={() => {
            lenis?.scrollTo('#contact'),
              {
                offset: -80,
                duration: 4,
              };
          }}>
          <Button text={t('CTA')} />
        </Link>
      </div>
    </div>
  );
}
