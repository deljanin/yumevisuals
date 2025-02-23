import { useTranslations } from "next-intl";
export default function About() {
  const t = useTranslations("AboutPage.Hero");

  return (
    <div className="min-h-screen w-full bg-[#987776]">{t("Heading1")}</div>
  );
}
