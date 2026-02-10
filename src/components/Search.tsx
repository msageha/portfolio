import React, { useState, useEffect, useRef } from "react";
import { navigate } from "gatsby";

// Pagefind type definitions
interface PagefindSearchResult {
  id: string;
  data: () => Promise<PagefindResultData>;
}

interface PagefindResultData {
  url: string;
  excerpt: string;
  meta: {
    title: string;
  };
  content: string;
  word_count: number;
}

interface PagefindInstance {
  search: (query: string) => Promise<{ results: PagefindSearchResult[] }>;
  init: () => Promise<void>;
}

interface SearchProps {
  className?: string;
  onQueryChange?: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ className = "", onQueryChange }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PagefindResultData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [pagefind, setPagefind] = useState<PagefindInstance | null>(null);

  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize Pagefind
  useEffect(() => {
    const loadPagefind = async () => {
      try {
        // @ts-ignore - Pagefind is loaded dynamically
        const pagefindModule = await import(/* webpackIgnore: true */ "/pagefind/pagefind.js");
        await pagefindModule.init();
        setPagefind(pagefindModule);
      } catch (err) {
        console.error("Failed to load Pagefind:", err);
        setError("検索機能はビルド後に利用できます");
      }
    };

    loadPagefind();
  }, []);

  // Notify parent of query changes
  useEffect(() => {
    onQueryChange?.(query);
  }, [query, onQueryChange]);

  // Handle click outside to close results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle ESC key to clear search
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setQuery("");
        setResults([]);
        setShowResults(false);
        inputRef.current?.blur();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Debounced search
  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (!query.trim()) {
      setResults([]);
      setShowResults(false);
      return;
    }

    debounceTimerRef.current = setTimeout(async () => {
      if (!pagefind) {
        return;
      }

      setIsLoading(true);
      setShowResults(true);

      try {
        const searchResults = await pagefind.search(query);
        const resultsData = await Promise.all(
          searchResults.results.slice(0, 10).map((result) => result.data()),
        );
        setResults(resultsData);
      } catch (err) {
        console.error("Search error:", err);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [query, pagefind]);

  const handleResultClick = (url: string) => {
    setShowResults(false);
    setQuery("");
    navigate(url);
  };

  const highlightExcerpt = (excerpt: string) => {
    // Pagefind already provides excerpts with <mark> tags for highlighting
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: excerpt.replace(
            /<mark>/g,
            '<mark class="bg-pink-500/30 text-pink-200 px-1 rounded">',
          ),
        }}
      />
    );
  };

  return (
    <div ref={searchRef} className={`relative w-full ${className}`}>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && setShowResults(true)}
          placeholder="記事を検索..."
          aria-label="記事を検索"
          aria-expanded={showResults}
          aria-controls="search-results"
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs">
          {isLoading ? (
            <span className="animate-pulse">検索中...</span>
          ) : (
            <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">ESC</kbd>
          )}
        </div>
      </div>

      <p className="text-gray-500 text-xs mt-2 ml-1">キーワードをスペースで区切って検索できます</p>

      {error && (
        <div className="mt-2 p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 text-sm">
          {error}
        </div>
      )}

      {showResults && !error && (
        <div
          id="search-results"
          role="listbox"
          className="absolute z-50 w-full mt-2 bg-gray-800/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg shadow-pink-500/10 max-h-96 overflow-y-auto"
        >
          {isLoading ? (
            <div className="p-4 text-center text-gray-400">
              <span className="animate-pulse">検索中...</span>
            </div>
          ) : results.length > 0 ? (
            <ul className="py-2">
              {results.map((result, index) => (
                <li
                  key={result.url}
                  role="option"
                  aria-selected="false"
                  className="border-b border-gray-700 last:border-0"
                >
                  <button
                    onClick={() => handleResultClick(result.url)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-700 transition-colors focus:outline-none focus:bg-gray-700"
                  >
                    <h3 className="text-white font-semibold mb-1 text-base">{result.meta.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {highlightExcerpt(result.excerpt)}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          ) : query.trim() ? (
            <div className="p-4 text-center text-gray-400 text-sm">
              検索結果が見つかりませんでした
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Search;
