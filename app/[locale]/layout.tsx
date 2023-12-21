import { ReactElement } from "react";

import Header from "components/header";
import { I18nProviderClient } from "lib/locales/client";

export default function SubLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: ReactElement;
}) {
  return (
    <I18nProviderClient locale={locale}>
      <Header />
      <main className="m-auto max-w-xl md:max-w-5xl">{children}</main>
    </I18nProviderClient>
  );
}
