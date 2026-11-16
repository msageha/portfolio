export const SITE_URL = "https://msageha.net";

export const AUTHOR = {
  name: "Mizuki Sango",
  nameJa: "珊瑚 彩主紀",
} as const;

export const PROFILE_PHOTO_ALT = `${AUTHOR.nameJa}のプロフィール写真 (台湾 九份で撮影)`;

export const BLOG = {
  title: "Mizuki Sango Blog",
  description: "技術記事やプロジェクトの記録",
} as const;

export const GITHUB_URL = "https://github.com/msageha";

export const SOCIAL_LINKS = [
  { label: "GitHub", href: GITHUB_URL, icon: "github" },
  { label: "X", href: "https://x.com/mzking622", icon: "x" },
  { label: "Instagram", href: "https://instagram.com/msageha", icon: "instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mizuki-sango", icon: "linkedin" },
] as const;

export const WEBTOOLS_URL = "https://webtools.msageha.net/";
