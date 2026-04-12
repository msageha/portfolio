import React, { useCallback, useEffect, useRef, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

const HEADER_HEIGHT = 64; // ヘッダーの実高さ (px)
const STICKY_TOP_PX = HEADER_HEIGHT + 16; // sticky top 値

const TableOfContents: React.FC = () => {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const activeRef = useRef<HTMLAnchorElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const content = document.querySelector(".mdx-content");
    if (!content) return;

    const headings = Array.from(
      content.querySelectorAll("h1[id], h2[id], h3[id]")
    ).filter((h) => h.id.length > 0);

    setItems(
      headings.map((h) => ({
        id: h.id,
        text: h.textContent?.replace(/\s+/g, " ").trim() ?? "",
        level: parseInt(h.tagName[1]),
      }))
    );
  }, []);

  useEffect(() => {
    if (items.length === 0) return;

    const handleScroll = () => {
      // 「トップへ戻る」ボタンの表示制御
      setShowBackToTop(window.scrollY > 300);

      // アクティブ見出しの検出: ビューポート上部に最も近い見出しを選択
      const threshold = STICKY_TOP_PX + 8;
      let current = "";
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = item.id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  // アクティブ項目が変わったとき、目次リスト内でスクロールして見えるようにする
  useEffect(() => {
    if (activeRef.current && listRef.current) {
      const list = listRef.current;
      const item = activeRef.current;
      const listRect = list.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      if (itemRect.top < listRect.top || itemRect.bottom > listRect.bottom) {
        item.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [activeId]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (items.length === 0) return null;

  const tocList = (
    <ul className="space-y-0.5">
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <li
            key={item.id}
            style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
            className="relative"
          >
            {/* アクティブ時の左ボーダーインジケーター */}
            {isActive && (
              <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-pink-400 rounded-full" />
            )}
            <a
              href={`#${item.id}`}
              ref={isActive ? activeRef : null}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.id);
              }}
              className={`block py-1.5 pl-2 text-sm leading-snug transition-colors duration-150 hover:text-pink-300 ${
                isActive
                  ? "text-pink-400 font-medium"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {item.text}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* ---- デスクトップ目次 ---- */}
      <aside
        className="hidden lg:block lg:w-52 lg:flex-shrink-0 lg:sticky lg:self-start"
        style={{ top: `${STICKY_TOP_PX}px` }}
      >
        <div
          ref={listRef}
          style={{ maxHeight: `calc(100vh - ${STICKY_TOP_PX + 32}px)` }}
          className="overflow-y-auto pr-1"
        >
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 pl-2">
            目次
          </p>
          {tocList}
        </div>
      </aside>

      {/* ---- モバイル: 記事上部の折りたたみ目次 ---- */}
      <div className="lg:hidden mb-6">
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          className="flex items-center justify-between w-full px-4 py-3 text-sm text-gray-300 bg-gray-800 border border-gray-700 rounded-lg transition-colors hover:bg-gray-700"
        >
          <span className="font-medium">目次</span>
          <svg
            className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${mobileOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {mobileOpen && (
          <div className="mt-2 p-4 bg-gray-800 border border-gray-700 rounded-lg">
            {tocList}
          </div>
        )}
      </div>

      {/* ---- 「トップへ戻る」ボタン (全幅) ---- */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="ページトップへ戻る"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-pink-500 text-white shadow-lg hover:bg-pink-400 transition-colors duration-200"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </>
  );
};

export default TableOfContents;
