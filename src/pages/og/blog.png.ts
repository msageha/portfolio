import type { APIRoute } from "astro";
import { renderOgImage } from "../../lib/og";

export const GET: APIRoute = async () => {
  const png = await renderOgImage("Mizuki Sango Blog", "技術記事やプロジェクトの記録");
  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};
