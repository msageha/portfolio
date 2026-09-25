export interface Paper {
  title: string;
  authors: string[];
  venue: string;
}

export interface Patent {
  title: string;
  assignee: string;
  inventors: string[];
  href: string;
}

export const PAPERS: Paper[] = [
  {
    title: "Auto Content Moderation in C2C e-Commerce",
    authors: ["Shunya Ueta", "Suganprabu Nagarajan", "Mizuki Sango"],
    venue: "2020 USENIX Conference on Operational Machine Learning (OpML’20)",
  },
  {
    title: "外界一人称と二人称を考慮する日本語述語項構造解析の分野適応",
    authors: ["珊瑚 彩主紀", "西川 仁", "徳永 健伸"],
    venue: "第5回自然言語処理シンポジウム（第238回自然言語処理研究発表会）",
  },
  {
    title: "Effectiveness of Domain Adaptation in Japanese Predicate-Argument Structure Analysis",
    authors: ["Mizuki Sango", "Hitoshi Nishikawa", "Takenobu Tokunaga"],
    venue: "The 32nd Pacific Asia Conference on Language, Information and Computation (PACLIC 32)",
  },
  {
    title: "スマートスピーカーにおける文章読み上げの課題とその解決",
    authors: ["珊瑚 彩主紀", "佐藤 敏紀", "植田 禎子", "橋本 泰一"],
    venue: "言語処理学会第24回年次大会(NLP2018)",
  },
  {
    title: "Monitoring Geographical Entities with Temporal Awareness in Tweets",
    authors: ["Koji Matsuda", "Mizuki Sango", "Naoaki Okazaki", "Kentaro Inui"],
    venue: "International Conference on Computational Linguistics and Intelligent Text Processing (CICLing 2017)",
  },
  {
    title: "ツイート中の地理情報に対する時間的極性の自動推定",
    authors: ["珊瑚 彩主紀", "松田耕史", "岡崎直観", "乾健太郎"],
    venue: "2016年度 人工知能学会全国大会（第30回）",
  },
  {
    title: "ジャーナル",
    authors: ["珊瑚 彩主紀", "西川 仁", "徳永 健伸"],
    venue: "会誌「自然言語処理」",
  },
];

export const PATENTS: Patent[] = [
  {
    title: "プログラム、情報処理方法、及び情報処理装置",
    assignee: "株式会社メルカリ",
    inventors: ["新井 康平", "本間 和尊", "東原 秀亮", "櫻木 善将", "珊瑚 彩主紀", "紫藤 佑介"],
    href: "https://patents.google.com/patent/JP2021189670A",
  },
  {
    title: "端末装置、データ共有方法及びプログラム",
    assignee: "株式会社メルカリ",
    inventors: ["珊瑚 彩主紀"],
    href: "https://patents.google.com/patent/JP2021092890A",
  },
  {
    title: "情報処理方法、情報処理装置、及びプログラム",
    assignee: "LINE株式会社",
    inventors: ["佐藤 敏紀", "珊瑚 彩主紀"],
    href: "https://patents.google.com/patent/JP2020009249A",
  },
];
