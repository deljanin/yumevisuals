'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Arrow from '@/components/Arrow';
import formatLineBreak from '@/utils/formatLineBreak';
export default function FAQ() {
  const t = useTranslations('HomePage.FAQ');
  const [index, setIndex] = useState(-1);
  const qa = useTranslations(`HomePage.FAQ.List`);

  return (
    <div className="flex flex-col items-center pt-14 w-full min-h-screen bg-[#dfd5d4] px-5">
      <h1 className="font-vonca font-medium text-6xl text-[#66564E] mb-20 text-center">
        {formatLineBreak(t('Title'))}
      </h1>
      <div className="md:w-1/2 w-full">
        {[...Array(5)].map((_, i) => {
          return (
            <div
              key={i}
              className="relative mb-10 select-none"
              onMouseDown={() => {
                if (index === i) {
                  setIndex(-1);
                } else {
                  setIndex(i);
                }
              }}>
              <div
                className={`p-5 bg-white rounded-2xl w-full cursor-pointer text-2xl text-[#66564E] 
                      shadow-[0px_0px_30px_-7px_rgba(0,0,0,0.7)]
                ${index === i ? '' : ''}
                `}>
                <div className="flex items-center justify-between">
                  <span className="">{qa(`Question${i}`)}</span>
                  <Arrow
                    fill="#66564E"
                    className={`transition-all
                  ${index === i ? 'rotate-90' : 'rotate-180'}
                  `}
                  />
                </div>
                <div
                  className={`text-xl overflow-hidden transition-all duration-500 
                        ${index === i ? 'max-h-[300px] mt-2' : 'max-h-0 '}
                        `}>
                  <div className="">{qa(`Answer${i}`)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
