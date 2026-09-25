import { useEffect, useRef, useState } from "react";

interface PagefindResult {
  url: string;
  excerpt: string;
  meta: { title: string };
}

interface Pagefind {
  init: () => Promise<void>;
  search: (query: string) => Promise<{ results: { data: () => Promise<PagefindResult> }[] }>;
}

let pagefindPromise: Promise<Pagefind> | undefined;

function loadPagefind(): Promise<Pagefind> {
  pagefindPromise ??= (async () => {
    // パスを変数経由で渡し、Vite の静的 import 解析を回避する
    // (esbuild が @vite-ignore コメントを除去するため、リテラルだと dev で解決エラーになる)
    const pagefindPath = "/pagefind/pagefind.js";
    const pagefind: Pagefind = await import(/* @vite-ignore */ pagefindPath);
    await pagefind.init();
    return pagefind;
  })();
  return pagefindPromise;
}

type Status = "idle" | "loading" | "error";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PagefindResult[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  useEffect(() => {
    const keyword = query.trim();
    if (!keyword) return;

    // debounce 中に query が変わったら、進行中の検索結果は破棄する
    let stale = false;
    const timer = setTimeout(async () => {
      setStatus("loading");
      setOpen(true);
      try {
        const pagefind = await loadPagefind();
        const { results } = await pagefind.search(keyword);
        const data = await Promise.all(results.slice(0, 10).map((result) => result.data()));
        if (!stale) {
          setResults(data);
          setStatus("idle");
        }
      } catch (error) {
        if (!stale) {
          console.error("Search failed:", error);
          setStatus("error");
        }
      }
    }, 300);

    return () => {
      stale = true;
      clearTimeout(timer);
    };
  }, [query]);

  const reset = () => {
    setResults([]);
    setStatus("idle");
    setOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className="relative w-full"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setQuery("");
          reset();
          (event.target as HTMLElement).blur();
        }
      }}
      onBlur={(event) => {
        // relatedTarget が null になるケース (Safari の非 focusable リンクのクリック等) では閉じない
        if (event.relatedTarget && !rootRef.current?.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            if (!event.target.value.trim()) reset();
          }}
          onFocus={() => query.trim() && setOpen(true)}
          placeholder="記事を検索..."
          aria-label="記事を検索"
          className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white transition-all placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-pink-500 focus:outline-none"
        />
        <div className="absolute top-1/2 right-3 -translate-y-1/2 text-xs text-gray-500">
          {status === "loading"
            ? <span className="animate-pulse">検索中...</span>
            : <kbd className="rounded bg-gray-700 px-2 py-1 text-xs">ESC</kbd>}
        </div>
      </div>

      <p className="mt-2 ml-1 text-xs text-gray-500">キーワードをスペースで区切って検索できます</p>
      <p role="status" className="sr-only">
        {status === "loading"
          ? "検索中"
          : status === "error"
          ? "検索機能を読み込めませんでした"
          : open
          ? `${results.length} 件の結果`
          : ""}
      </p>

      {open && (
        <div className="absolute z-50 mt-2 max-h-96 w-full overflow-y-auto rounded-lg border border-gray-700 bg-gray-800/95 shadow-lg shadow-pink-500/10 backdrop-blur-sm">
          {status === "error"
            ? <p className="p-4 text-center text-sm text-gray-400">検索機能を読み込めませんでした</p>
            : status === "loading"
            ? (
              <p className="p-4 text-center text-gray-400">
                <span className="animate-pulse">検索中...</span>
              </p>
            )
            : results.length === 0
            ? <p className="p-4 text-center text-sm text-gray-400">検索結果が見つかりませんでした</p>
            : (
              <ul className="py-2">
                {results.map((result) => (
                  <li key={result.url} className="border-b border-gray-700 last:border-0">
                    <a
                      href={result.url}
                      className="block px-4 py-3 transition-colors hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
                    >
                      <span className="mb-1 block text-base font-semibold text-white">{result.meta.title}</span>
                      {/* Pagefind の excerpt は HTML エスケープ済みで、一致箇所だけ <mark> で囲まれている */}
                      <p
                        className="line-clamp-2 text-sm text-gray-300 [&_mark]:rounded [&_mark]:bg-pink-500/30 [&_mark]:px-1 [&_mark]:text-pink-200"
                        dangerouslySetInnerHTML={{ __html: result.excerpt }}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            )}
        </div>
      )}
    </div>
  );
}
