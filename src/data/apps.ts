export type AppItem = {
  name: string;
  description: string;
  category: string;
  icon: string;
  appStoreUrl: string;
};

export const apps: AppItem[] = [
  {
    name: "借入返済管理",
    description: "借入額・返済予定・残高をシンプルに管理できるアプリ。",
    category: "Finance",
    icon: "/images/apps/loan-payoff.png",
    appStoreUrl: "https://apps.apple.com/jp/app/xxxxx",
  },
  {
    name: "給与明細管理",
    description: "毎月の給与明細と手取り推移を記録・比較できる管理アプリ。",
    category: "Productivity",
    icon: "/images/apps/salary-tracker.png",
    appStoreUrl: "https://apps.apple.com/jp/app/yyyyy",
  },
  {
    name: "らくらく筋トレ記録",
    description: "トレーニングの種目・回数・重量を直感的に記録できるアプリ。",
    category: "Health & Fitness",
    icon: "/images/apps/workout-log.png",
    appStoreUrl: "https://apps.apple.com/jp/app/zzzzz",
  },
  {
    name: "16タイプ性格診断",
    description: "短時間で性格タイプを診断し、行動傾向を確認できるアプリ。",
    category: "Lifestyle",
    icon: "/images/apps/personality16.png",
    appStoreUrl: "https://apps.apple.com/jp/app/aaaaa",
  },
  {
    name: "コンビニ断ち",
    description: "コンビニ利用を減らして支出改善を目指す習慣化サポートアプリ。",
    category: "Lifestyle",
    icon: "/images/apps/no-convenience-store.png",
    appStoreUrl: "https://apps.apple.com/jp/app/bbbbb",
  },
];
