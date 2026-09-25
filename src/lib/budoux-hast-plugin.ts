import { loadDefaultJapaneseParser } from "budoux";
import { defineHastPlugin, type HastContent } from "satteri";

const TARGET_TAGS = new Set(["p", "h1", "h2", "h3", "h4", "h5", "h6", "li", "blockquote"]);
const SKIP_TAGS = new Set(["code", "pre", "kbd", "samp"]);

const parser = loadDefaultJapaneseParser();

const wbr: HastContent = { type: "element", tagName: "wbr", properties: {}, children: [] };

// Markdown 本文の日本語テキストを BudouX で文節に分割し、境界に <wbr> を挿入する。
// 対応する CSS (post.css の word-break: keep-all) と組み合わせて文節単位で折り返す。
export const budouxHastPlugin = defineHastPlugin({
  name: "budoux",
  text(node, ctx) {
    if (!node.value.trim()) return;

    let inTarget = false;
    for (let parent = ctx.parent(node); parent?.type === "element"; parent = ctx.parent(parent)) {
      if (SKIP_TAGS.has(parent.tagName)) return;
      if (TARGET_TAGS.has(parent.tagName)) inTarget = true;
    }
    if (!inTarget) return;

    const chunks = parser.parse(node.value);
    if (chunks.length <= 1) return;

    ctx.replaceNode(
      node,
      chunks.flatMap((chunk, index): HastContent[] =>
        index === 0 ? [{ type: "text", value: chunk }] : [wbr, { type: "text", value: chunk }]
      ),
    );
  },
});
