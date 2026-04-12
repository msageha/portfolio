import React, { useCallback, useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

const TableOfContents: React.FC = () => {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

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
      const offset = 100;
      let current = "";
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (
          el &&
          el.getBoundingClientRect().top + window.scrollY <= window.scrollY + offset
        ) {
          current = item.id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  }, []);

  if (items.length === 0) return null;

  const tocList = (
    <ul className="space-y-1">
      {items.map((item) => (
        <li
          key={item.id}
          style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
        >
          <a
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(item.id);
            }}
            className={`block py-1 text-sm leading-snug transition-colors hover:text-pink-400 ${
              activeId === item.id
                ? "text-pink-400 font-medium"
                : "text-gray-400"
            }`}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <aside className="lg:w-56 lg:flex-shrink-0 mb-6 lg:mb-0">
      {/* デスクトップ: スティッキーサイドバー */}
      <div className="hidden lg:block">
        <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            目次
          </p>
          {tocList}
        </div>
      </div>

      {/* モバイル: 折りたたみ */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-300 bg-gray-800 border border-gray-700 rounded-lg transition-colors hover:bg-gray-700"
        >
          <span className="font-medium">目次</span>
          <svg
            className={`w-4 h-4 flex-shrink-0 transition-transform ${mobileOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {mobileOpen && (
          <div className="mt-2 p-4 bg-gray-800 border border-gray-700 rounded-lg">
            {tocList}
          </div>
        )}
      </div>
    </aside>
  );
};

export default TableOfContents;
