// NOTE: この正規表現群 (特に文字クラス内のバッククォート) を .astro の frontmatter に置くと
// dprint の markup_fmt プラグインが字句解析に失敗しファイル全体を空に整形するため、.ts に分離している
export function excerpt(body: string, length = 200): string {
  const plain = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`~[\]()!-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return plain.length > length ? `${plain.slice(0, length)}…` : plain;
}
