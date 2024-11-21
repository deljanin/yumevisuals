'use client';
import { useEffect, useRef, useState } from 'react';
import { Link } from '@/i18n/routing';
import Button from '@/components/Button';
import Image from 'next/image';
import { useTransform, useScroll, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const images = [
  '/parallax-images/1.jpg',
  '/parallax-images/2.jpg',
  '/parallax-images/3.jpg',
  '/parallax-images/4.jpg',
  '/parallax-images/5.jpg',
  '/parallax-images/6.jpg',
  '/parallax-images/7.jpg',
  '/parallax-images/8.jpg',
  '/parallax-images/9.jpg',
  '/parallax-images/10.jpg',
  '/parallax-images/11.jpg',
  '/parallax-images/12.jpg',
];

export default function Photography() {
  const t = useTranslations('HomePage.Photography');

  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 4]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <main>
      <div className="h-[200vh] relative w-full overflow-hidden">
        {/* Text Content */}
        <div className="relative z-30 md:w-7/12 xl:px-64 md:px-32 px-5 pt-44">
          <h1 className="text-[#66564E] text-8xl font-vonca mb-3">
            {t('Title')}
          </h1>
          <p className="text-[#66564E] text-lg mb-10">{t('Subtitle')}</p>
          <Link href="/#contact">
            <Button text={t('CTA')} />
          </Link>
        </div>
        <div
          ref={gallery}
          className="absolute top-0 left-0 w-full bg-[#dfd5d4] flex gap-[2vw] p-[2vw] overflow-hidden box-border h-[200vh]">
          <Column images={[images[0], images[1], images[2]]} y={y} index={1} />
          <Column images={[images[3], images[4], images[5]]} y={y2} index={2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} index={3} />
          <Column
            images={[images[9], images[10], images[11]]}
            y={y4}
            index={4}
          />
        </div>
        <div className="absolute -top-[28%] left-0 w-[110%] h-[100vh] -skew-y-[25deg] z-20 bg-[#dfd5d4] shadow-[0px_5px_25px_0px_rgba(0,0,0,0.5)]"></div>
      </div>
    </main>
  );
}

const Column = ({ images, y, index }) => {
  const topOffsets = {
    1: '-45%',
    2: '-95%',
    3: '-45%',
    4: '-100%',
  };

  return (
    <motion.div
      className={`relative h-full w-1/4 min-w-[250px] flex flex-col gap-[2vw]`}
      style={{ top: topOffsets[index], y }}>
      {images.map((src, i) => (
        <div
          key={i}
          className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image src={`${src}`} alt="image" fill className="object-cover" />
        </div>
      ))}
    </motion.div>
  );
};
