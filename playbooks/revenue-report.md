# Playbook: Revenue Report（収益報告記事）

収益報告ブログ記事の作成・更新タスクで **作業開始前に必ず読む**。

## Phase 1: 参照するファイル

1. **`playbooks/writing-voice.md`（必須・文体の正本）**
2. 本 playbook
3. 記事テンプレ: `src/content/blog-templates/revenue-report-seo-template.mdx`
4. 直近のまとめ記事（例: `src/content/blog/revenue-report-2026-06.mdx`）— 構成・コンポーネントの慣例に合わせる（禁止フレーズは引き継がない）

## Phase 2: 記事を書く

- ユーザーが渡した **スクショ・数値のみ** を根拠にする。画面に無い指標（リクエスト・表示・DL など）は **捏造しない**。取れない場合は「—」または未取得と明記する。
- 出力先: `src/content/blog/revenue-report-YYYY-MM.mdx`（アプリ単体は `revenue-report-YYYY-MM-<slug>.mdx`）
- SEO: `title` / `description` に年月・主要指標（DL・AdMob 収益）・「個人開発」を含める（キーワード羅列にしない。`writing-voice.md` §3）
- 文体: **`playbooks/writing-voice.md` に従う**（煽らない正直ログ。空のビジネス語・きれいな逆転着地禁止）
- 構成: サマリーカード、表、スクショ、前月比、FAQ、関連記事、免責（FAQ・カードは埋め草にしない）
- 内部リンク: 前月まとめ、アプリ紹介記事（`/blog/app-intro-*`）、`/apps`・`/blog`
- 画像: `public/images/blog/` に配置（例: `admob-all-apps-2026-06.png`, `asc-all-apps-units-2026-06.png`）

## Phase 3: 検証

- `playbooks/writing-voice.md` §6 チェックリストを通す
- `npm run build` が通ること
- 新規記事の URL が `dist/blog/revenue-report-*/` に生成されること
- `git commit` / `push` は **ユーザーが明示したときのみ**

## Phase 4: 次の開発提案（必須・1件のみ）

作業完了後、`playbooks/site-roadmap.md` を踏まえ **「次の開発提案」** を **1件だけ** 書く。形式は site-roadmap の「提案の出し方」に従う。

収益報告タスクでは、記事内容に根拠を置きつつ、**サイトアクセス・DL・収益が小さい前提**（`playbooks/site-roadmap.md` の「前提」）では、フェーズ0〜3を優先する。月次レポートの追加だけを提案しない。

数値の捏造はしない。因果は断定せず、提案は「試す価値がある仮説」として書く。
