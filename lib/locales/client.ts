"use client";

import { createI18nClient } from "next-international/client";

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  useCurrentLocale,
} = createI18nClient({
  fr: () => import(`@/public/locales/fr/common.json`),
  en: () => import(`@/public/locales/en/common.json`),
});
