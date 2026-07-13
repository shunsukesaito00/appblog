# Playbook: Revenue Report（収益報告記事）

収益報告ブログ記事の作成・更新タスクで **作業開始前に必ず読む**。

## Phase 1: 参照するファイル

1. 本 playbook
2. 記事テンプレ: `src/content/blog-templates/revenue-report-seo-template.mdx`
3. 直近のまとめ記事（例: `src/content/blog/revenue-report-2026-06.mdx`）— 文体・構成・コンポーネントの慣例に合わせる

## Phase 2: 記事を書く

- ユーザーが渡した **スクショ・数値のみ** を根拠にする。画面に無い指標（リクエスト・表示・DL など）は **捏造しない**。取れない場合は「—」または未取得と明記する。
- 出力先: `src/content/blog/revenue-report-YYYY-MM.mdx`（アプリ単体は `revenue-report-YYYY-MM-<slug>.mdx`）
- SEO: `title` / `description` に年月・主要指標（DL・AdMob 収益）・「個人開発」を含める
- 文体: 煽らない。人間味のある正直ログ（5月・6月記事のトーンに合わせる）
- 構成: サマリーカード、表、スクショ、前月比、FAQ、関連記事、免責
- 内部リンク: 前月まとめ、アプリ紹介記事（`/blog/app-intro-*`）、`/apps`・`/blog`
- 画像: `public/images/blog/` に配置（例: `admob-all-apps-2026-06.png`, `asc-all-apps-units-2026-06.png`）

## Phase 3: 検証

- `npm run build` が通ること
- 新規記事の URL が `dist/blog/revenue-report-*/` に生成されること
- `git commit` / `push` は **ユーザーが明示したときのみ**

## Phase 4: 次の開発提案（必須・省略不可）

作業完了後、回答末尾に **「次の開発提案」** を **1〜3件** 書く。各提案はコピペ可能なプロンプト形式にする。

提案の観点（今月の数値・記事内容に根拠を置く）:

1. **収益・DLログ** — 翌月まとめ、アプリ別単体レポート、未取得指標の補完
2. **アプリ改善** — DL・収益内訳から見える ASO、スクショ、ストア訴求、配信まわり
3. **サイト・SEO** — 内部リンク、関連記事、カテゴリ導線、OGP・メタ
4. **公開・運用** — commit / push、本番デプロイ確認

数値の捏造はしない。因果は断定せず、提案は「試す価値がある仮説」として書く。
