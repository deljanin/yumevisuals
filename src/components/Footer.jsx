"use client";
import { Link } from "@/i18n/routing";
import formatLineBreak from "@/utils/formatLineBreak";
import { useLenis } from "lenis/react";
import { useTranslations, useMessages } from "next-intl";

export default function Footer() {
  const lenis = useLenis();
  const t = useTranslations("Layout.Footer");
  const messages = useMessages();
  const keys = Object.keys(messages.Layout.Footer.Group1.Links);

  return (
    <div
      className="relative h-[150vh] xl:h-[600px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 flex h-[150vh] w-full flex-col justify-end bg-[#dfd5d4] text-[#66564E] lg:justify-center xl:h-[600px]">
        <h2 className="mb-2 text-center font-vonca text-6xl font-medium md:mb-0 md:text-9xl xl:text-[13rem] 2xl:text-[15.5rem]">
          {t("Heading")}
        </h2>
        <div className="flex flex-col justify-between gap-5 px-5 md:flex-row md:flex-wrap md:px-32 xl:px-64">
          <div className="flex flex-col">
            <h5 className="mb-2 font-vonca text-2xl font-medium md:text-4xl">
              {t("Group1.Title")}
            </h5>
            <ul className="text-xl md:text-2xl">
              {keys.map((key) => {
                const link = t(`Group1.Links.${key}.Link`);
                const scrollLink = link.replace("/", "");

                return (
                  <Link
                    key={key}
                    href={link}
                    onClick={() => {
                      lenis?.scrollTo(scrollLink),
                        {
                          duration: 4,
                        };
                    }}
                  >
                    <li className="relative flex cursor-pointer items-center gap-2 transition-all after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#66564E] after:transition-transform after:duration-300 after:content-[''] after:hover:origin-bottom-left after:hover:scale-x-100">
                      {t(`Group1.Links.${key}.Text`)}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col">
            <h5 className="mb-2 font-vonca text-2xl font-medium md:text-4xl">
              {t("Group2.Title")}
            </h5>
            <ul className="text-xl md:text-2xl">
              <a href="https://www.instagram.com/yume_visuals" target="_blank">
                <li className="relative flex cursor-pointer items-center gap-2 transition-all after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#66564E] after:transition-transform after:duration-300 after:content-[''] after:hover:origin-bottom-left after:hover:scale-x-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    className="inline-block"
                  >
                    <path
                      d="M6.46675 0.5H14.8667C18.0667 0.5 20.6667 3.1 20.6667 6.3V14.7C20.6667 16.2383 20.0557 17.7135 18.968 18.8012C17.8803 19.8889 16.405 20.5 14.8667 20.5H6.46675C3.26675 20.5 0.666748 17.9 0.666748 14.7V6.3C0.666748 4.76174 1.27782 3.28649 2.36553 2.19878C3.45324 1.11107 4.92849 0.5 6.46675 0.5ZM6.26675 2.5C5.31197 2.5 4.39629 2.87928 3.72116 3.55442C3.04603 4.22955 2.66675 5.14522 2.66675 6.1V14.9C2.66675 16.89 4.27675 18.5 6.26675 18.5H15.0667C16.0215 18.5 16.9372 18.1207 17.6123 17.4456C18.2875 16.7705 18.6667 15.8548 18.6667 14.9V6.1C18.6667 4.11 17.0567 2.5 15.0667 2.5H6.26675ZM15.9167 4C16.2483 4 16.5662 4.1317 16.8006 4.36612C17.0351 4.60054 17.1667 4.91848 17.1667 5.25C17.1667 5.58152 17.0351 5.89946 16.8006 6.13388C16.5662 6.3683 16.2483 6.5 15.9167 6.5C15.5852 6.5 15.2673 6.3683 15.0329 6.13388C14.7984 5.89946 14.6667 5.58152 14.6667 5.25C14.6667 4.91848 14.7984 4.60054 15.0329 4.36612C15.2673 4.1317 15.5852 4 15.9167 4ZM10.6667 5.5C11.9928 5.5 13.2646 6.02678 14.2023 6.96447C15.14 7.90215 15.6667 9.17392 15.6667 10.5C15.6667 11.8261 15.14 13.0979 14.2023 14.0355C13.2646 14.9732 11.9928 15.5 10.6667 15.5C9.34067 15.5 8.0689 14.9732 7.13121 14.0355C6.19353 13.0979 5.66675 11.8261 5.66675 10.5C5.66675 9.17392 6.19353 7.90215 7.13121 6.96447C8.0689 6.02678 9.34067 5.5 10.6667 5.5ZM10.6667 7.5C9.8711 7.5 9.10804 7.81607 8.54543 8.37868C7.98282 8.94129 7.66675 9.70435 7.66675 10.5C7.66675 11.2956 7.98282 12.0587 8.54543 12.6213C9.10804 13.1839 9.8711 13.5 10.6667 13.5C11.4624 13.5 12.2255 13.1839 12.7881 12.6213C13.3507 12.0587 13.6667 11.2956 13.6667 10.5C13.6667 9.70435 13.3507 8.94129 12.7881 8.37868C12.2255 7.81607 11.4624 7.5 10.6667 7.5Z"
                      fill="#66564E"
                    />
                  </svg>{" "}
                  Instagram
                </li>
              </a>
              {/* <a href="https://www.facebook.com/yumevisuals" target="_blank">
                <li className="relative flex cursor-pointer items-center gap-2 transition-all after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#66564E] after:transition-transform after:duration-300 after:content-[''] after:hover:origin-bottom-left after:hover:scale-x-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    className="inline-block"
                  >
                    <path
                      d="M20.6667 10.5249C20.6667 5.0049 16.1867 0.524902 10.6667 0.524902C5.14675 0.524902 0.666748 5.0049 0.666748 10.5249C0.666748 15.3649 4.10675 19.3949 8.66675 20.3249V13.5249H6.66675V10.5249H8.66675V8.0249C8.66675 6.0949 10.2367 4.5249 12.1667 4.5249H14.6667V7.5249H12.6667C12.1167 7.5249 11.6667 7.9749 11.6667 8.5249V10.5249H14.6667V13.5249H11.6667V20.4749C16.7167 19.9749 20.6667 15.7149 20.6667 10.5249Z"
                      fill="#66564E"
                    />
                  </svg>{" "}
                  TODO Facebook?
                </li>
              </a> */}
            </ul>
          </div>
          <div className="flex flex-col">
            <h5 className="mb-2 font-vonca text-2xl font-medium md:text-4xl">
              {t("Group3.Title")}
            </h5>
            <ul className="text-xl md:text-2xl">
              <a href="mailto:contact@yumevisuals.com" className="">
                <li className="relative cursor-pointer transition-all after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#66564E] after:transition-transform after:duration-300 after:content-[''] after:hover:origin-bottom-left after:hover:scale-x-100">
                  info@yumevisuals.com
                </li>
              </a>
              {/* <a href="mailto:contact@yumevisuals.com" className="">
                <li className="relative cursor-pointer transition-all after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#66564E] after:transition-transform after:duration-300 after:content-[''] after:hover:origin-bottom-left after:hover:scale-x-100">
                  TODO TELEGRAM?
                </li>
              </a> */}
            </ul>
          </div>
          <div className="flex flex-col">
            <h5 className="mb-2 font-vonca text-2xl font-medium md:text-4xl">
              {t("Group4.Title")}
            </h5>
            <ul className="text-xl md:text-2xl">
              <Link href={"/privacy-policy"}>
                <li className="relative cursor-pointer transition-all after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#66564E] after:transition-transform after:duration-300 after:content-[''] after:hover:origin-bottom-left after:hover:scale-x-100">
                  {t("Group4.Links.Text1")}
                </li>
              </Link>
              <li>{formatLineBreak(t("Group4.Links.Text2"))}</li>
              <a href={t("Group4.Links.Link3")} target="_blank">
                <li className="relative cursor-pointer transition-all after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#66564E] after:transition-transform after:duration-300 after:content-[''] after:hover:origin-bottom-left after:hover:scale-x-100">
                  {t("Group4.Links.Text3")}
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
