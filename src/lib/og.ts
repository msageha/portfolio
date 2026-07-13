import type { ReactNode } from "react";
import satori from "satori";
import sharp from "sharp";

// satori は woff2 非対応のため、単一ファイルで取得できる OTF をビルド時にダウンロードする
const FONT_URL = "https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/SubsetOTF/JP/NotoSansJP-Bold.otf";

let fontPromise: Promise<ArrayBuffer> | null = null;

function loadFont(): Promise<ArrayBuffer> {
  if (!fontPromise) {
    fontPromise = fetch(FONT_URL).then((res) => {
      if (!res.ok) {
        throw new Error(`OG 画像用フォントの取得に失敗しました: ${res.status} ${FONT_URL}`);
      }
      return res.arrayBuffer();
    });
  }
  return fontPromise;
}

export async function renderOgImage(title: string, subtitle: string): Promise<Buffer> {
  const font = await loadFont();

  // satori は JSX なしの場合 {type, props} のオブジェクト形式を受け取る仕様だが、
  // 型定義は ReactNode のみなので明示的に変換する
  const vdom = {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundColor: "#111827",
        color: "#ffffff",
        fontFamily: "Noto Sans JP",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              fontSize: title.length > 40 ? "48px" : "56px",
              fontWeight: 700,
              lineHeight: 1.45,
              letterSpacing: "-0.02em",
              backgroundImage: "linear-gradient(to right, #ec4899, #8b5cf6)",
              backgroundClip: "text",
              color: "transparent",
            },
            children: title,
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
            children: [
              {
                type: "div",
                props: {
                  style: { display: "flex", fontSize: "30px", color: "#ffffff" },
                  children: subtitle,
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    fontSize: "30px",
                    fontWeight: 700,
                    backgroundImage: "linear-gradient(to right, #ec4899, #8b5cf6)",
                    backgroundClip: "text",
                    color: "transparent",
                  },
                  children: "Mizuki Sango",
                },
              },
            ],
          },
        },
      ],
    },
  };

  const svg = await satori(vdom as unknown as ReactNode, {
    width: 1200,
    height: 630,
    fonts: [{ name: "Noto Sans JP", data: font, weight: 700, style: "normal" }],
  });

  return sharp(Buffer.from(svg)).png().toBuffer();
}
