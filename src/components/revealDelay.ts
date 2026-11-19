// Reveal のフェードインを始めるまでの遅延 (ms)。見出し → 本文 → 次の操作への誘導の順に現れるよう段をずらす
export const REVEAL_DELAY_MS = { heading: 300, content: 600, callToAction: 1000 } as const;
