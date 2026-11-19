// マークアップだけを持ち、ビルド時に静的な HTML として出力する (client:* を付けない)。
// 入力・検索・開閉の処理は Search.client.ts が data-search-* 属性の要素を操作して行う
export function Search() {
  return (
    <div className="relative w-full" data-search>
      <div className="relative">
        <input
          type="text"
          placeholder="記事を検索..."
          aria-label="記事を検索"
          className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white transition-all placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-pink-500 focus:outline-none"
          data-search-input
        />
        <div className="absolute top-1/2 right-3 -translate-y-1/2 text-xs text-gray-400">
          <span className="animate-pulse" hidden data-search-indicator="loading">
            検索中...
          </span>
          <kbd
            className="rounded bg-gray-700 px-2 py-1 text-xs text-gray-300"
            data-search-indicator="idle"
          >
            ESC
          </kbd>
        </div>
      </div>

      <p className="mt-2 ml-1 text-xs text-gray-400">キーワードをスペースで区切って検索できます</p>
      <p role="status" className="sr-only" data-search-status />

      <div
        className="absolute z-50 mt-2 max-h-96 w-full overflow-y-auto rounded-lg border border-gray-700 bg-gray-800/95 shadow-lg shadow-pink-500/10 backdrop-blur-sm"
        hidden
        data-search-panel
      >
        <p className="p-4 text-center text-gray-400" hidden data-search-view="loading">
          <span className="animate-pulse">検索中...</span>
        </p>
        <p className="p-4 text-center text-sm text-gray-400" hidden data-search-view="error">
          検索機能を読み込めませんでした
        </p>
        <p className="p-4 text-center text-sm text-gray-400" hidden data-search-view="empty">
          検索結果が見つかりませんでした
        </p>
        <ul className="py-2" hidden data-search-view="results" />
      </div>

      <template data-search-result>
        <li className="border-b border-gray-700 last:border-0">
          {/* biome-ignore lint/a11y/useValidAnchor: href は Search.client.ts が検索結果の URL を設定する。 */}
          <a
            className="block px-4 py-3 transition-colors hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
            data-search-result-link
          >
            <span
              className="mb-1 block text-base font-semibold text-white"
              data-search-result-title
            />
            <p
              className="line-clamp-2 text-sm text-gray-300 [&_mark]:rounded [&_mark]:bg-pink-500/30 [&_mark]:px-1 [&_mark]:text-pink-200"
              data-search-result-excerpt
            />
          </a>
        </li>
      </template>
    </div>
  );
}
