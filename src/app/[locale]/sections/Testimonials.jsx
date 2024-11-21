'use client';
import { useState } from 'react';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import formatLineBreak from '@/utils/formatLineBreak';
import Arrow from '@/components/Arrow';

export default function Testimonials() {
  const t = useTranslations('HomePage.Testimonials');
  const testimonialsLength = 5;
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonialsLength);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, testimonialsLength]);

  return (
    <section className="xl:min-h-[489px] min-h-[600px] py-28 relative bg-[#987776] text-white">
      <h1 className="xl:text-6xl sm:text-5xl text-4xl text-center font-vonca font-medium pb-12 ">
        {formatLineBreak(t('Title'))}
      </h1>
      <div
        className="flex items-center justify-center xl:gap-20 gap-5 pb-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <button
          className=" cursor-pointer transform rotate-180 border-transparent p-4 pl-6 hover:rounded-full hover:border-white border-2 transition-all"
          onMouseDown={() =>
            setIndex((prevIndex) =>
              prevIndex === 0 ? testimonialsLength - 1 : prevIndex - 1
            )
          }>
          <Arrow fill="white" width={40} height={40} />
        </button>
        <p className="md:w-[700px] w-4/5 md:text-xl text-wrap text-center min-h-28">
          &ldquo;{t('Testimonials.Testimonial' + index + '.Text')}&rdquo;
        </p>
        <button
          className=" cursor-pointer border-transparent p-4 pl-6 hover:rounded-full hover:border-white border-2 transition-all"
          onMouseDown={() =>
            setIndex((prevIndex) => (prevIndex + 1) % testimonialsLength)
          }>
          <Arrow fill="white" width={40} height={40} />
        </button>
      </div>
      <p className="md:text-lg text-center">
        {t('Testimonials.Testimonial' + index + '.Position')}
      </p>
      <p className="md:text-lg text-center">
        {t('Testimonials.Testimonial' + index + '.Name')}
      </p>
      {/* Dots Section */}
      <div className="flex items-center justify-center gap-3 mt-10">
        {Array.from({ length: testimonialsLength }).map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setIndex(dotIndex)}
            className="bg-white size-3 rounded-full cursor-pointer transition-all duration-300"
            style={{
              transform: dotIndex === index ? 'scale(1.4)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </section>
  );
}
