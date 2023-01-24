import { FC, ReactNode } from "react";

import Head from "next/head";

import Button from "./button";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Head>
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
      </Head>
      <header>
        <div className="flex w-full">
          <Button text="Profile" link="/" />
          <Button text="Works" link="/works" />
        </div>
      </header>
      <main className="m-auto max-w-xl md:max-w-5xl">{children}</main>
    </div>
  );
};

export default Layout;
