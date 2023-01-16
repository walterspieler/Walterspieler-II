import Head from "next/head";
import Button from "./button";
import { FC, ReactNode } from "react";

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
      <main className="max-w-xl md:max-w-5xl m-auto">{children}</main>
    </div>
  );
};

export default Layout;
