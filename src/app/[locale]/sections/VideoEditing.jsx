"use client";
import Button from "@/components/Button";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState, useEffect, useMemo, useRef } from "react";
import Logo from "@/components/Logo";
import { useLenis } from "lenis/react";

// import { useAtom } from "jotai";
// import { currentPathAtom, videoIndexAtom } from "@/utils/store";

// import Player from "@/components/Player";
// import Video from "next-video";
import BackgroundVideo from "next-video/background-video";
// import Video1 from "/videos/VideoEditing/1.mp4";
// import Video2 from "/videos/VideoEditing/2.mp4";
import Video3 from "/videos/VideoEditing/3.mp4";
import AnimateComponent from "@/components/AnimateComponent";
// import Video4 from "/videos/VideoEditing/4.mp4";
// import Video5 from "/videos/VideoEditing/5.mp4";

// const videos = [
//   { video: Video1 },
//   { video: Video2 },
//   { video: Video3 },
//   { video: Video4 },
//   { video: Video5 },
// ];

export default function VideoEditing() {
  const lenis = useLenis();
  const t = useTranslations("HomePage.Video editing");
  // const [currentPath] = useAtom(currentPathAtom);
  // const [videoIndex, setVideoIndex] = useAtom(videoIndexAtom); // Center video index
  const [isAnimating, setIsAnimating] = useState(false); // Prevent overlapping animations
  // const [touchStart, setTouchStart] = useState(0); // Track touch start position
  // const [isPlaying, setIsPlaying] = useState(
  //   () =>
  //     Array(videos.length)
  //       .fill(false)
  //       .map((_, i) => i === 0), // Initialize first video to play
  // );

  // useEffect(() => {
  //   console.log("currentPath: " + currentPath);
  //   console.log("isPlaying: " + isPlaying);
  //   console.log("videoIndex: " + videoIndex);
  //   setIsPlaying(videos.map((_, i) => i === videoIndex)); // Ensure only the current video is playing
  // }, [currentPath]); // Also update when path changes

  // useEffect(() => {
  //   // Update the playing state based on the current videoIndex
  //   const newPlayingState = isPlaying.map((_, index) => index === videoIndex);
  //   setIsPlaying(newPlayingState);
  // }, [videoIndex]); // Run this effect whenever videoIndex changes

  // const handleVideoEnd = () => {
  //   console.log("Video ended");
  //   startAnimationTimeout(() => {
  //     setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  //   });
  // };

  // const startAnimationTimeout = (callback) => {
  //   setIsAnimating(true);
  //   setTimeout(() => {
  //     callback();
  //     setIsAnimating(false);
  //   }, 1000); // Animation duration (1s)
  // };

  // const handleDotClick = (index) => {
  //   if (index !== videoIndex) {
  //     startAnimationTimeout(() => {
  //       setVideoIndex(index);
  //     });
  //   }
  // };

  // const handleTouchStart = (e) => {
  //   const touchStartPosition = e.touches[0].clientX;
  //   setTouchStart(touchStartPosition);
  // };

  // const handleTouchEnd = (e) => {
  //   const touchEndPosition = e.changedTouches[0].clientX;
  //   const swipeDistance = touchStart - touchEndPosition;

  //   if (Math.abs(swipeDistance) > 50) {
  //     if (swipeDistance > 0) {
  //       // Swiped left
  //       startAnimationTimeout(() => {
  //         setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  //       });
  //     } else {
  //       // Swiped right
  //       startAnimationTimeout(() => {
  //         setVideoIndex(
  //           (prevIndex) => (prevIndex - 1 + videos.length) % videos.length,
  //         );
  //       });
  //     }
  //   }
  // };

  // const visibleVideos = useMemo(() => {
  //   const prevIndex = (videoIndex - 1 + videos.length) % videos.length;
  //   const nextIndex = (videoIndex + 1) % videos.length;

  //   return { prevIndex, videoIndex, nextIndex };
  // }, [videoIndex]);

  // const getVideoClasses = (index) => {
  //   if (index === visibleVideos.videoIndex) {
  //     return "z-20 h-auto w-[400px] rounded-3xl shadow-[0px_0px_30px_0px_rgba(0,0,0,0.25)]"; // Main video in focus
  //   }
  //   if (index === visibleVideos.prevIndex) {
  //     return `z-10 left-0 absolute h-auto w-[300px] rounded-3xl shadow-[0px_0px_30px_0px_rgba(0,0,0,0.25)]`;
  //   }
  //   if (index === visibleVideos.nextIndex) {
  //     return `z-10 right-0 absolute h-auto w-[300px] rounded-3xl shadow-[0px_0px_30px_0px_rgba(0,0,0,0.25)] `;
  //   }
  //   return `hidden`; // Hide all other videos
  // };

  return (
    <section
      id="videoEditing"
      className="flex min-h-screen w-full flex-col-reverse items-center justify-between gap-10 bg-[#dfd5d4] px-5 py-10 md:px-32 lg:flex-row lg:gap-5 xl:pl-32 xl:pr-64 2xl:px-64"
      // px-5 md:pr-32 lg:flex-row lg:gap-5 xl:pr-64
      // onTouchStart={handleTouchStart}
      // onTouchEnd={handleTouchEnd}
    >
      {/* <div className="flex h-full w-full flex-col items-center justify-between lg:w-[811px]">
        <div className="relative flex h-[711px] w-full items-center justify-center">
           <div
            className={`absolute z-30 flex h-full w-full max-w-[400px] items-center justify-center rounded-3xl bg-[#987776] shadow-[0px_0px_30px_0px_rgba(0,0,0,0.25)] transition-opacity duration-1000 ${isAnimating ? "opacity-100" : "opacity-0"} `}
          >
            <Logo width={150} height={150} />
          </div>
          <div
            className={`absolute left-0 z-20 flex aspect-[9/16] w-[300px] cursor-pointer items-center justify-center rounded-3xl bg-[#987776] shadow-[0px_0px_30px_0px_rgba(0,0,0,0.25)] transition-opacity duration-1000 ${isAnimating ? "opacity-100" : "opacity-0"} `}
            onClick={() => {
              startAnimationTimeout(() => {
                setVideoIndex(
                  (prevIndex) =>
                    (prevIndex - 1 + videos.length) % videos.length,
                );
              });
            }}
          ></div> 
           <div
            className={`absolute right-0 z-20 flex aspect-[9/16] w-[300px] cursor-pointer items-center justify-center rounded-3xl bg-[#987776] shadow-[0px_0px_30px_0px_rgba(0,0,0,0.25)] transition-opacity duration-1000 ${isAnimating ? "opacity-100" : "opacity-0"} `}
            onClick={() => {
              startAnimationTimeout(() => {
                setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
              });
            }}
          ></div> 
            <div className="z-20 h-auto w-[400px] overflow-hidden rounded-3xl shadow-[0px_0px_30px_0px_rgba(0,0,0,0.25)]">

              {videos.map((video, i) => (
                <div key={i} className={getVideoClasses(i)}>
                  <Video
                    src={video.video}
                    as={Player}
                    playing={isPlaying[i]}
                    muted={true} // Crucial for autoplay
                    controls={false}
                    onEnded={() => {
                      if (i === videoIndex) {
                        handleVideoEnd();
                      }
                    }}
                  />
                </div>
              ))}         
            </div>

        </div>*/}
      {/* Dots for Video Navigation */}
      {/* <div className="mt-10 flex items-center justify-center gap-3">
          {videos.map((_, index) => (
            <button
              key={index}
              disabled={isAnimating}
              onClick={() => handleDotClick(index)}
              className={`size-3 cursor-pointer rounded-full bg-white transition-all duration-300`}
              style={{
                transform: index === videoIndex ? "scale(1.4)" : "scale(1)",
              }}
            />
          ))}
        </div> 
      </div>*/}
      <div className="h-full">
        <div className="z-20 h-auto max-w-[430px] overflow-hidden rounded-3xl shadow-[0px_0px_30px_0px_rgba(0,0,0,0.5)]">
          {/* <BackgroundVideo
            className=""
            src={Video3}
            muted={true} // Crucial for autoplay
            controls={false}
            loop={true}
          /> */}
          <video
            autoPlay
            muted
            loop
            className={`z-20 rounded-3xl transition-transform duration-1000`}
            src="/videos/VideoEditing/3.mp4"
          />
        </div>
      </div>
      {/* Text Content */}
      <div className="flex flex-col text-center lg:w-2/3 lg:items-end lg:text-right">
        <AnimateComponent>
          <h2 className="mb-3 font-vonca text-[2.7rem] text-[#66564E] sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
            {t("Title")}
          </h2>
        </AnimateComponent>
        <AnimateComponent className="lg:max-w-[500px] 2xl:max-w-[600px]">
          <p className="mb-10 text-[#66564E] md:text-lg">{t("Subtitle")}</p>
        </AnimateComponent>
        <AnimateComponent>
          <Link
            href="/#contact"
            onClick={() => {
              lenis?.scrollTo("#contact"),
                {
                  offset: -80,
                  duration: 4,
                };
            }}
          >
            <Button text={t("CTA")} />
          </Link>
        </AnimateComponent>
      </div>
    </section>
  );
}
