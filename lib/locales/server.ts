import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
    fr: () => import(`@/public/locales/fr/common.json`),
    en: () => import(`@/public/locales/en/common.json`),
  });
