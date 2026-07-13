import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", ".astro"] },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // Astro が描画した DOM の読み取り (TableOfContents) や debounce 付き検索の
      // 入力クリア同期 (Search) など、外部システムとの同期として意図的に effect 内で
      // setState している箇所に誤検知するため無効化する
      "react-hooks/set-state-in-effect": "off",
    },
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
  // Node で実行されるルートの設定ファイル (astro.config.mjs 等)
  {
    files: ["*.mjs"],
    extends: [js.configs.recommended],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
  // .astro ファイル (frontmatter + テンプレート) の lint
  ...astro.configs.recommended,
);
