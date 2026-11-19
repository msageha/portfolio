/** @type {import('@commitlint/types').UserConfig} */
import process from "node:process";
export default {
  extends: ["@commitlint/config-conventional"],
  // PR の題は squash merge の件名になるので、Git が作る件名 (Merge・Revert・fixup! など) を除外せずに検査する。
  // ローカルの commit では、rebase で使う fixup! などを通すため既定の除外を残す。
  defaultIgnores: process.env.COMMITLINT_PR_TITLE !== "true",
  rules: {
    // 日本語の件名に英語の固有名詞 (Gatsby, SNS など) が先頭に来ると
    // sentence-case / upper-case 判定で誤爆するため、大文字小文字の検査は行わない
    "subject-case": [0],
  },
};
