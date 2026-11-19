// トップページのセクションの配色。Wave の上下の色を隣接する Section の背景と揃えるため、両者がここを参照する
interface ToneClasses {
  bg: string;
  text: string;
  /** Wave の波 (fill="currentColor") の色。背景と同じ色を text-* で指定する */
  wave: string;
}

export type Tone = "dark" | "light";

export const TONES = {
  dark: { bg: "bg-gray-900", text: "text-white", wave: "text-gray-900" },
  light: { bg: "bg-slate-300", text: "text-black", wave: "text-slate-300" },
} satisfies Record<Tone, ToneClasses>;
