import { useTranslations } from 'next-intl';
export default function About() {
  const t = useTranslations('AboutPage.Hero');

  return <>{t('Title')}</>;
}
