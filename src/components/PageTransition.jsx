"use client";
import { useRef } from "react";
import { TransitionRouter } from "next-transition-router";
import { useLenis } from "lenis/react";

export default function Providers({ children }) {
  const wrapperRef = useRef(null);
  const lenis = useLenis(); // Get the current Lenis instance
  const duration = 300;

  const fadeOut = (next) => {
    if (wrapperRef.current) {
      // Fade out the content over 500ms
      wrapperRef.current.style.transition = `opacity ${duration}ms ease`;
      wrapperRef.current.style.opacity = "0";

      // After the fade-out is complete…
      setTimeout(() => {
        if (lenis) {
          // Pause Lenis updates while scrolling is forced
          lenis.stop();
          // Force an immediate scroll to top; use onComplete to continue the transition
          lenis.scrollTo(0, {
            immediate: true,
            force: true,
            onComplete: () => {
              // Once scrollTo is complete, continue the route transition
              next();
              // Restart smooth scrolling on the new page
              lenis.start();
            },
          });
        } else {
          next();
        }
      }, duration);
    }
  };

  const fadeIn = (next) => {
    if (wrapperRef.current) {
      // Prepare element for fade-in
      wrapperRef.current.style.opacity = "0";
      wrapperRef.current.style.transition = `opacity ${duration}ms ease`;
      requestAnimationFrame(() => {
        wrapperRef.current.style.opacity = "1";
        setTimeout(next, duration);
      });
    }
  };

  return (
    <TransitionRouter auto leave={fadeOut} enter={fadeIn}>
      <div ref={wrapperRef}>{children}</div>
    </TransitionRouter>
  );
}
