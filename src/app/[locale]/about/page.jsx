"use client";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
export default function About() {
  const t = useTranslations("AboutPage.Hero");
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.cursor = "default";
  });
  return (
    <>
      <div className="sticky top-0 flex min-h-screen w-full items-center justify-center bg-[#987776] font-vonca text-6xl text-white shadow-[0px_0px_210px_0px_rgba(0,0,0,0.50)]">
        {t("Heading1")}
      </div>
      <div className="sticky top-0 flex min-h-screen w-full items-center justify-center bg-[#987786] font-vonca text-6xl text-white shadow-[0px_0px_210px_0px_rgba(0,0,0,0.50)]">
        {t("Heading1")}
      </div>
      <div className="sticky top-0 flex min-h-screen w-full items-center justify-center bg-[#987796] font-vonca text-6xl text-white shadow-[0px_0px_210px_0px_rgba(0,0,0,0.50)]">
        {t("Heading1")}
      </div>
      <div className="sticky top-0 flex min-h-screen w-full items-center justify-center bg-[#987756] font-vonca text-6xl text-white shadow-[0px_0px_210px_0px_rgba(0,0,0,0.50)]">
        {t("Heading1")}
      </div>
      <div className="sticky top-0 flex min-h-screen w-full items-center justify-center bg-[#987746] font-vonca text-6xl text-white shadow-[0px_0px_210px_0px_rgba(0,0,0,0.50)]">
        {t("Heading1")}
      </div>
      <div className="sticky top-0 flex min-h-screen w-full items-center justify-center bg-[#987726] font-vonca text-6xl text-white shadow-[0px_0px_210px_0px_rgba(0,0,0,0.50)]">
        {t("Heading1")}
      </div>
    </>
  );
}
