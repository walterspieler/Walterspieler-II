import { ReactElement } from "react";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../styles/global.css";

config.autoAddCss = false;

export default function SubLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: ReactElement;
}) {
  return (
    <html lang={locale}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/gnv6bik.css" />
        <script
          id="GTM-MR73C8H"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MR73C8H');`,
          }}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body>
        {children}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MR73C8H" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
      </body>
    </html>
  );
}
