import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";

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

export const metadata = {
  title: "Yume Visuals",
  description:
    "We transform your visions into mind-blowing videos that&apos;ll have you saying, &apos;Wow!&apos;",
};

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
      <Head>
        <>
          <Head>
            <link rel="alternate" hrefLang="en" href="/en" />
            {/*  href="https://example.com/en" */}
            <link rel="alternate" hrefLang="sr" href="/sr" />
            {/*  href="https://example.com/sr" */}
          </Head>
        </>
        );
      </Head>
      <html lang={locale}>
        <body
          className={`${vonca.variable} ${helveticaLight.variable} font-helveticaLight antialiased`}
        >
          <SmoothScroll>
            <NextIntlClientProvider messages={messages}>
              <Navbar />

              {children}

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
