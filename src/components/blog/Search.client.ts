// Search.tsx が出力した静的なマークアップに、入力・検索・開閉の処理を付ける
interface PagefindResult {
  url: string;
  excerpt: string;
  meta: { title: string };
}

interface Pagefind {
  init: () => Promise<void>;
  search: (query: string) => Promise<{ results: { data: () => Promise<PagefindResult> }[] }>;
}

type Status = "idle" | "loading" | "error";

let pagefindPromise: Promise<Pagefind> | undefined;

function loadPagefind(): Promise<Pagefind> {
  pagefindPromise ??= (async () => {
    // pagefind.js は build 後に生成される静的ファイルなので、パスを変数で渡して解決させない。
    // リテラルにすると @vite-ignore を付けても Vite の dev が解決に失敗し、TypeScript も型エラーにする
    const pagefindPath = "/pagefind/pagefind.js";
    const pagefind: Pagefind = await import(/* @vite-ignore */ pagefindPath);
    await pagefind.init();
    return pagefind;
  })();
  return pagefindPromise;
}

const root = document.querySelector<HTMLElement>("[data-search]")!;
const input = root.querySelector<HTMLInputElement>("[data-search-input]")!;
const statusText = root.querySelector<HTMLElement>("[data-search-status]")!;
const panel = root.querySelector<HTMLElement>("[data-search-panel]")!;
const resultList = root.querySelector<HTMLElement>("[data-search-view=\"results\"]")!;
const resultTemplate = root.querySelector<HTMLTemplateElement>("[data-search-result]")!;
const errorText = root.querySelector<HTMLElement>("[data-search-view=\"error\"]")!.textContent?.trim() ?? "";

let status: Status = "idle";
let results: PagefindResult[] = [];
let open = false;
let timer: ReturnType<typeof setTimeout> | undefined;
// 応答を待つ間に入力が変わったら、古い検索の結果は捨てる
let latestSearch = 0;

function resultItem(result: PagefindResult): DocumentFragment {
  const item = document.importNode(resultTemplate.content, true);
  item.querySelector<HTMLAnchorElement>("[data-search-result-link]")!.href = result.url;
  item.querySelector<HTMLElement>("[data-search-result-title]")!.textContent = result.meta.title;
  // Pagefind の excerpt は HTML エスケープ済みで、一致箇所だけ <mark> で囲まれている
  item.querySelector<HTMLElement>("[data-search-result-excerpt]")!.innerHTML = result.excerpt;
  return item;
}

function render() {
  for (const indicator of root.querySelectorAll<HTMLElement>("[data-search-indicator]")) {
    indicator.hidden = indicator.dataset.searchIndicator !== (status === "loading" ? "loading" : "idle");
  }
  statusText.textContent = status === "loading"
    ? "検索中"
    : status === "error"
    ? errorText
    : open
    ? `${results.length} 件の結果`
    : "";

  panel.hidden = !open;
  if (!open) return;
  const view = status === "idle" ? (results.length === 0 ? "empty" : "results") : status;
  for (const element of panel.querySelectorAll<HTMLElement>("[data-search-view]")) {
    element.hidden = element.dataset.searchView !== view;
  }
  if (view === "results") resultList.replaceChildren(...results.map(resultItem));
}

function reset() {
  clearTimeout(timer);
  latestSearch++;
  results = [];
  status = "idle";
  open = false;
  render();
}

function search(keyword: string) {
  const id = ++latestSearch;
  timer = setTimeout(async () => {
    try {
      const pagefind = await loadPagefind();
      const found = await pagefind.search(keyword);
      const data = await Promise.all(found.results.slice(0, 10).map((result) => result.data()));
      if (id !== latestSearch) return;
      results = data;
      status = "idle";
    } catch (error) {
      if (id !== latestSearch) return;
      console.error("Search failed:", error);
      status = "error";
    }
    render();
  }, 300);
}

input.addEventListener("input", () => {
  clearTimeout(timer);
  const keyword = input.value.trim();
  if (!keyword) {
    reset();
    return;
  }
  status = "loading";
  open = true;
  render();
  search(keyword);
});

input.addEventListener("focus", () => {
  if (!input.value.trim()) return;
  open = true;
  render();
});

root.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  input.value = "";
  reset();
  if (event.target instanceof HTMLElement) event.target.blur();
});

root.addEventListener("focusout", (event) => {
  // relatedTarget が null になるケース (Safari の非 focusable リンクのクリック等) では閉じない
  if (event.relatedTarget instanceof Node && !root.contains(event.relatedTarget)) {
    open = false;
    render();
  }
});

document.addEventListener("mousedown", (event) => {
  if (event.target instanceof Node && root.contains(event.target)) return;
  open = false;
  render();
});
