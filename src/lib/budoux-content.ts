import { loadDefaultJapaneseParser } from "budoux";

const TARGET_SELECTOR = "p, h1, h2, h3, h4, h5, h6, li, blockquote";

/**
 * container 内の日本語テキストノードに BudouX で <wbr> を挿入し、
 * 読みやすい位置での改行を可能にする。
 */
export function applyBudouX(container: Element): void {
  const parser = loadDefaultJapaneseParser();
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  const targets: Text[] = [];

  let node: Node | null;
  while ((node = walker.nextNode())) {
    const text = node as Text;
    if (text.textContent?.trim() && text.parentElement?.closest(TARGET_SELECTOR)) {
      targets.push(text);
    }
  }

  for (const text of targets) {
    const chunks = parser.parse(text.textContent ?? "");
    if (chunks.length <= 1) continue;

    const fragment = document.createDocumentFragment();
    chunks.forEach((chunk, index) => {
      fragment.appendChild(document.createTextNode(chunk));
      if (index < chunks.length - 1) {
        fragment.appendChild(document.createElement("wbr"));
      }
    });
    text.parentNode?.replaceChild(fragment, text);
  }
}
