export type AppItem = {
  name: string;
  description: string;
  category: string;
  icon: string;
  appStoreUrl: string;
  /** Content collection entry `id` for the app intro post */
  introSlug?: string;
  /** App Store 説明文の先頭段落（Connect 反映用の正本） */
  appStoreDescriptionLead?: string;
};

export const apps: AppItem[] = [
  {
    name: "借入返済管理",
    description: "借入額・返済予定・残高をシンプルに管理できるアプリ。",
    category: "Finance",
    icon: "/images/apps/loan-payoff.jpg",
    appStoreUrl:
      "https://apps.apple.com/us/app/%E5%80%9F%E5%85%A5%E8%BF%94%E6%B8%88%E7%AE%A1%E7%90%86/id6765820158",
    introSlug: "app-intro-loan-payoff",
  },
  {
    name: "給与明細管理",
    description:
      "給与明細のPDF取り込みと手取り記録。月々の手取り・年収推移をグラフで確認できるiOSアプリ。",
    appStoreDescriptionLead:
      "給与明細のPDF取り込みと手取り記録に対応した収入管理アプリです。毎月の明細をPDF・写真・手入力で登録し、手取り・総支給・賞与・年収の推移をグラフで確認できます。",
    category: "Productivity",
    icon: "/images/apps/salary-tracker.jpg",
    appStoreUrl: "https://apps.apple.com/app/id6759832140",
    introSlug: "app-intro-salary",
  },
  {
    name: "らくらく筋トレ記録",
    description: "トレーニングの種目・回数・重量を直感的に記録できるアプリ。",
    category: "Health & Fitness",
    icon: "/images/apps/workout-log.jpg",
    appStoreUrl: "https://apps.apple.com/app/id6761645473",
    introSlug: "app-intro-workout",
  },
  {
    name: "16タイプ性格診断",
    description: "短時間で性格タイプを診断し、行動傾向を確認できるアプリ。",
    category: "Lifestyle",
    icon: "/images/apps/personality16.jpg",
    appStoreUrl: "https://apps.apple.com/app/id6745159807",
    introSlug: "app-intro-personality",
  },
  {
    name: "コンビニ断ち",
    description: "コンビニ利用を減らして支出改善を目指す習慣化サポートアプリ。",
    category: "Lifestyle",
    icon: "/images/apps/no-convenience-store.svg",
    appStoreUrl: "https://apps.apple.com/jp/app/bbbbb",
  },
];
