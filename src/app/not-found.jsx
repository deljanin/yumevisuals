"use client";
import Button from "@/components/Button";
import localFont from "next/font/local";
import Link from "next/link";
import { useEffect } from "react";

const vonca = localFont({
  src: [
    { path: "./fonts/Vonca-Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/Vonca-Medium.woff", weight: "500", style: "normal" },
  ],
  variable: "--font-vonca",
});
const helveticaLight = localFont({
  src: "./fonts/Helvetica-Light.otf",
  variable: "--font-helvetica-light",
});

export default function NotFound() {
  useEffect(() => {
    document.body.style.cursor = "default";
  });
  return (
    <html>
      <body
        className={`${vonca.variable} ${helveticaLight.variable} font-helveticaLight antialiased`}
      >
        <div className="flex h-screen w-full flex-col items-center justify-center gap-5 overflow-hidden text-white">
          <h1 className="text-center font-vonca text-[2.7rem] leading-none text-white sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
            404
          </h1>
          <p className="text-center text-white md:mb-10 md:text-2xl">
            Page Not Found
          </p>
          <Link href="/">
            <Button text="Return to homepage?" />
          </Link>
        </div>
      </body>
    </html>
  );
}
