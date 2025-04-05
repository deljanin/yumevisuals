"use client";
import { useTranslations, useMessages } from "next-intl";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  const t = useTranslations("PrivacyPolicyPage");
  const messages = useMessages();
  const keys = Object.keys(messages.PrivacyPolicyPage.Lists);
  useEffect(() => {
    document.body.style.cursor = "default";
  });
  return (
    <div className="flex min-h-screen items-center justify-center p-5 text-white">
      <div className="w-full max-w-3xl pt-32">
        <h1 className="mb-4 font-vonca text-3xl">{t("Title")}</h1>
        <p className="mb-6">{t("Date")}</p>
        {keys.map((key) => {
          const Heading = t(`Lists.${key}.Heading`);
          const Description = t(`Lists.${key}.Description`);
          const Points = messages.PrivacyPolicyPage.Lists[key].Points || {};
          const pointKeys = Object.keys(Points);
          return (
            <section key={key} className="mb-6">
              <h2 className="mb-2 font-vonca text-2xl">{Heading}</h2>
              <p className="mb-2">{Description}</p>
              {pointKeys.length > 0 && (
                <ul className="list-inside list-disc">
                  {pointKeys.map((pointKey) => (
                    <li key={pointKey}>
                      {t(`Lists.${key}.Points.${pointKey}`)}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
