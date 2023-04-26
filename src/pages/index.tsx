import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";
import App from "../components/App";
import "bootstrap/dist/css/bootstrap.min.css";

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

// export const Head: HeadFC = () => <title>Portfolio</title>
