import satori from "satori";
import sharp from "sharp";
import { AUTHOR } from "../data/site";

// satori は woff2 非対応のため、単一ファイルで取得できる OTF をビルド時にダウンロードする。
// 描画結果が外部の更新で変わらないよう release tag で固定する
const FONT_URL = "https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@Sans2.004/Sans/SubsetOTF/JP/NotoSansJP-Bold.otf";

let fontPromise: Promise<ArrayBuffer> | undefined;

function loadFont(): Promise<ArrayBuffer> {
  fontPromise ??= fetch(FONT_URL).then((res) => {
    if (!res.ok) {
      throw new Error(`Failed to fetch OG image font: ${res.status} ${FONT_URL}`);
    }
    return res.arrayBuffer();
  });
  return fontPromise;
}

// satori は CSS 変数を解決できないため色は hex で直接指定する (Tailwind v3 相当の近似値で、
// 背景 #111827 ≈ gray-900、グラデーション #ec4899 → #8b5cf6 ≈ pink-500 → violet-500)
const gradientText = {
  backgroundImage: "linear-gradient(to right, #ec4899, #8b5cf6)",
  backgroundClip: "text",
  color: "transparent",
} as const;

export async function ogImageResponse(title: string, subtitle: string): Promise<Response> {
  const font = await loadFont();

  const svg = await satori(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundColor: "#111827",
        color: "#ffffff",
        fontFamily: "Noto Sans JP",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: title.length > 40 ? "48px" : "56px",
          fontWeight: 700,
          lineHeight: 1.45,
          letterSpacing: "-0.02em",
          ...gradientText,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", fontSize: "30px" }}>{subtitle}</div>
        <div style={{ display: "flex", fontSize: "30px", fontWeight: 700, ...gradientText }}>{AUTHOR.name}</div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Noto Sans JP", data: font, weight: 700, style: "normal" }],
    },
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
}
