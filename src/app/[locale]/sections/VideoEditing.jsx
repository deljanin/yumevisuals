"use client";
import Button from "@/components/Button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState, useEffect, useMemo, useRef, createRef } from "react";
import Logo from "@/components/Logo";
import { useLenis } from "lenis/react";
import { CldVideoPlayer } from "next-cloudinary";
import { motion } from "framer-motion";
import "next-cloudinary/dist/cld-video-player.css";

// const videos = [
//   { path: '/videos/VideoEditing/1.mp4', duration: 21 },
//   { path: '/videos/VideoEditing/2.mp4', duration: 25 },
//   { path: '/videos/VideoEditing/3.mp4', duration: 28 },
//   { path: '/videos/VideoEditing/4.mp4', duration: 22 },
//   { path: '/videos/VideoEditing/5.mp4', duration: 30 },
// ];

const videos = [
  { path: "uxx4pq9b28plaqliarnf", duration: 21 },
  { path: "iyqflrxosrl6stb2eeo9", duration: 25 },
  { path: "fad59agvqnztewll6rfs", duration: 28 },
  { path: "narpas4powfglsces8fz", duration: 22 },
  { path: "q12dqxwzdbhw05pgni3e", duration: 30 },
];

export default function VideoEditing() {
  const lenis = useLenis();
  const [videoIndex, setVideoIndex] = useState(1); // Center video index
  const [isAnimating, setIsAnimating] = useState(false); // Prevent overlapping animations
  const [touchStart, setTouchStart] = useState(0); // Track touch start position
  const container = useRef(null);

  const playerRefs = useRef(videos.map(() => createRef()));
  const t = useTranslations("HomePage.Video editing");

  useEffect(() => {
    const currentPlayer = playerRefs.current[videoIndex]?.current;

    if (currentPlayer) {
      currentPlayer.play(); // Ensure it starts playing
    }
  });

  useEffect(() => {
    // Ensure only the main video plays
    playerRefs.current.forEach((ref, index) => {
      if (ref.current) {
        if (index === videoIndex) {
          ref.current.play();
        } else {
          ref.current.pause();
          ref.current.currentTime = 0; // Reset side videos to start
        }
      }
    });
  }, [videoIndex]);

  const handleVideoEnd = () => {
    startAnimationTimeout(() => {
      setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    });
  };

  const startAnimationTimeout = (callback) => {
    setIsAnimating(true);
    setTimeout(() => {
      callback();
      setIsAnimating(false);
    }, 1000); // Animation duration (1s)
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
            (prevIndex) => (prevIndex - 1 + videos.length) % videos.length,
          );
        });
      }
    }
  };

  const visibleVideos = useMemo(() => {
    const prevIndex = (videoIndex - 1 + videos.length) % videos.length;
    const nextIndex = (videoIndex + 1) % videos.length;

    return { prevIndex, videoIndex, nextIndex };
  }, [videoIndex]);

  const getVideoClasses = (index) => {
    if (index === visibleVideos.videoIndex) {
      return "z-20 h-auto w-[400px] rounded-3xl shadow-[0px_0px_30px_0px_rgba(0,0,0,0.25)]"; // Main video in focus
    }
    if (index === visibleVideos.prevIndex) {
      return `z-10 left-0 absolute h-auto w-[300px] rounded-3xl shadow-[0px_0px_30px_0px_rgba(0,0,0,0.25)]`;
    }
    if (index === visibleVideos.nextIndex) {
      return `z-10 right-0 absolute h-auto w-[300px] rounded-3xl shadow-[0px_0px_30px_0px_rgba(0,0,0,0.25)] `;
    }
    return `hidden`; // Hide all other videos
  };

  return (
    <motion.div
      ref={container}
      className="flex min-h-screen w-full flex-col-reverse items-center justify-between gap-10 bg-[#dfd5d4] px-5 md:pr-32 lg:flex-row lg:gap-5 xl:pr-64"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Video Section */}
      <div className="flex h-full w-full flex-col items-center justify-between lg:w-[811px]">
        <div className="relative flex h-[711px] w-full items-center justify-center">
          <div
            className={`absolute z-30 flex h-full w-full max-w-[400px] items-center justify-center rounded-3xl bg-[#987776] shadow-[0px_0px_30px_0px_rgba(0,0,0,0.25)] transition-opacity duration-1000 ${isAnimating ? "opacity-100" : "opacity-0"} `}
          >
            <Logo width={150} height={150} />
          </div>
          <div
            className={`absolute left-0 z-20 flex aspect-[9/16] w-[300px] items-center justify-center rounded-3xl bg-[#987776] shadow-[0px_0px_30px_0px_rgba(0,0,0,0.25)] transition-opacity duration-1000 ${isAnimating ? "opacity-100" : "opacity-0"} `}
          >
            <Logo width={150} height={150} />
          </div>
          <div
            className={`absolute right-0 z-20 flex aspect-[9/16] w-[300px] items-center justify-center rounded-3xl bg-[#987776] shadow-[0px_0px_30px_0px_rgba(0,0,0,0.25)] transition-opacity duration-1000 ${isAnimating ? "opacity-100" : "opacity-0"} `}
          >
            <Logo width={150} height={150} />
          </div>
          {videos.map((video, i) => (
            <div key={i} className={getVideoClasses(i)}>
              <CldVideoPlayer
                playerRef={playerRefs.current[i]}
                id={i}
                className="h-full w-full rounded-3xl"
                src={video.path}
                width="1080"
                height="1920"
                muted
                bigPlayButton={false}
                controls={false}
                hideContextMenu
                quality={90}
                onEnded={handleVideoEnd} // Listen for video end
              />
            </div>
          ))}
        </div>
        {/* Dots for Video Navigation */}
        <div className="mt-10 flex items-center justify-center gap-3">
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
      </div>

      {/* Text Content */}
      <div className="flex flex-col text-center md:max-w-[600px] lg:items-end lg:text-right">
        <h1 className="mb-3 font-vonca text-8xl text-[#66564E]">
          {t("Title")}
        </h1>
        <p className="mb-10 text-lg text-[#66564E]">{t("Subtitle")}</p>
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
      </div>
    </motion.div>
  );
}
