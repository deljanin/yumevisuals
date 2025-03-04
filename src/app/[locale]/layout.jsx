import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import localFont from "next/font/local";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const vonca = localFont({
  src: [
    { path: "../fonts/Vonca-Regular.woff", weight: "400", style: "normal" },
    { path: "../fonts/Vonca-Medium.woff", weight: "500", style: "normal" },
  ],
  variable: "--font-vonca",
});
// const voncaMedium = localFont({
//   src: '../fonts/Vonca-Medium.woff',
//   variable: '--font-vonca-medium',
// });
const helveticaLight = localFont({
  src: "../fonts/Helvetica-Light.otf",
  variable: "--font-helvetica-light",
});

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const language = locale || "en"; // Default to English if language is missing

  return {
    title:
      language === "sr"
        ? "Yume Visuals - Profesionalna Videografija i Fotografija"
        : "Yume Visuals - Professional Videography & Photography",
    description:
      language === "sr"
        ? "Stručne usluge videografije, fotografije i snimanja dronom. Podignite svoj brend uz kinematografske vizuale."
        : "Expert videography, photography, and drone filming services. Elevate your brand with cinematic visuals.",
    keywords:
      language === "sr"
        ? "videografija, profesionalna fotografija, snimanje dronom, montaža videa, filmska produkcija, video montaža, kreativni snimci, snimanje događaja, snimanje venčanja, filmska estetika, promo video, komercijalni video, reklamni spot, high-end produkcija, muzički spot, fotografisanje proizvoda, marketinška fotografija, profesionalni snimci, videografija Beograd, profesionalna fotografija Beograd, snimanje dronom Beograd, montaža videa Beograd, produkcija videa Beograd, snimanje događaja Beograd, snimanje venčanja Beograd, reklamni video Beograd, promo video Beograd, snimanje konferencija Beograd, korporativni video Beograd, marketinška fotografija Beograd, snimanje nekretnina Beograd, video produkcija Srbija, fotografisanje proizvoda Beograd, profesionalni snimci Beograd"
        : "videography services, professional photography, drone filming, video editing, cinematic production, commercial videography, corporate video production, event videography, wedding videography, high-quality video editing, social media video production, 4K videography, promotional video services, music video production, short film production, advertising photography, real estate videography, creative storytelling, cinematic video production, marketing photography, professional headshots, behind-the-scenes videography, slow-motion filming, timelapse videography, brand storytelling, business videography, aerial drone shots, high-end video production, luxury video content, professional portrait photography, e-commerce photography, lifestyle photography, videography Belgrade, professional photography Belgrade, drone filming Belgrade, video editing Belgrade, video production Belgrade, event videography Belgrade, wedding videography Belgrade, promotional video Belgrade, commercial videography Belgrade, corporate video production Belgrade, real estate videography Belgrade, product photography Belgrade, marketing photography Belgrade, professional video services Belgrade, short film production Belgrade, cinematic video production Belgrade, aerial drone shots Belgrade, professional videographers Serbia",

    alternates: {
      canonical:
        language === "sr"
          ? "https://yumevisuals.com/sr"
          : "https://yumevisuals.com/en",
      languages: {
        en: "https://yumevisuals.com/en",
        sr: "https://yumevisuals.com/sr",
      },
    },
    icons: [
      { rel: "icon", url: "/favicon.ico", sizes: "48x48" },
      { rel: "icon", url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      {
        rel: "icon",
        url: "/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
    manifest: "/site.webmanifest",
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <>
      <html lang={locale}>
        <body
          className={`${vonca.variable} ${helveticaLight.variable} font-helveticaLight antialiased`}
        >
          <SmoothScroll>
            <NextIntlClientProvider messages={messages}>
              <Navbar />
              <PageTransition>{children}</PageTransition>
              <Footer />
            </NextIntlClientProvider>
          </SmoothScroll>
          <div
            className="pointer-events-none fixed inset-0 bottom-0 left-0 right-0 top-0 opacity-[0.075]"
            style={{
              backgroundImage: "url(/grain.png)",
              backgroundSize: "100px",
              animation: `noise 3s steps(2) infinite`,
              zIndex: 9999,
              position: "fixed",
            }}
          ></div>
        </body>
      </html>
    </>
  );
}
