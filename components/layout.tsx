import { FC, ReactNode } from "react";

import Head from "next/head";

import Button from "./button";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/gnv6bik.css" />
        <meta name="twitter:card" content="summary_large_image" />
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
