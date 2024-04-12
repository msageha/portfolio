import React from "react";
import type { PageProps } from "gatsby";
import App from "../components/App";

export function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <title key="title">Portfolio</title>
      <meta property="og:title" content="mizuki's Portfolio" />
      <html lang="ja" />
      <meta name="description" content={"mzk Portfolio"} />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:site_name" content="mizuki msageha mzk Portfolio" />
      <meta
        name="description"
        property="og:description"
        content={"mizuki's Portfolio\n珊瑚 彩主紀のポートフォリオページ"}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/msageha/portfolio/main/src/images/profile.jpg"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:wght@400;700&display=swap"
      />
    </>
  );
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <App />
    </>
  );
};

export default IndexPage;
