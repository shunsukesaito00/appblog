import type { CollectionEntry } from "astro:content";

const MONTHLY_REVENUE_REPORT_ID = /^revenue-report-\d{4}-\d{2}$/;

export function getLatestMonthlyRevenueReport(
  posts: CollectionEntry<"blog">[],
): CollectionEntry<"blog"> | undefined {
  return posts
    .filter((post) => MONTHLY_REVENUE_REPORT_ID.test(post.id))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())[0];
}
