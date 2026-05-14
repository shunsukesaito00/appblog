/**
 * OGP 画像 URL（自動生成パイプラインの土台）
 * 将来: Cloudflare Worker や Edge で slug・タイトルから 1200×630 を生成し、その URL を返す。
 * 現状はサイト共通の静的 ogp.png を返す。
 */
export function resolveArticleOgImageUrl(
  site: URL,
  _opts: { entryId: string; title: string },
): string {
  return new URL("/ogp.png", site).toString();
}
