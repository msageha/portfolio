import React from "react";
import type { PageProps } from "gatsby";
import App from "../components/App";

export function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <title key="title">Portfolio</title>
      <html lang="ja" />
      <meta name="description" content={"mzk Portfolio"} />
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
