# GA4 読み取り専用認証（ga-cli）

エージェントが How-to の PV・参照元を `ga4` CLI で取得するための手順。Property ID は設定後 `playbooks/site-roadmap.md` に1行追記する。

## 1. Google Cloud

1. [プロジェクト作成](https://console.cloud.google.com/projectcreate)
2. API を有効化:
   - [Analytics Data API](https://console.cloud.google.com/apis/library/analyticsdata.googleapis.com)
   - [Google Analytics Admin API](https://console.cloud.google.com/apis/library/analyticsadmin.googleapis.com)
3. [サービスアカウント](https://console.cloud.google.com/iam-admin/serviceaccounts) → キー → JSON をダウンロード

## 2. GA4

1. GA4 → **管理** → **プロパティのアクセス管理** → ユーザーを追加
2. サービスアカウントのメール（`*.iam.gserviceaccount.com`）を **閲覧者** で追加
3. **管理** → **プロパティの設定** で数値の **プロパティ ID** を控える

## 3. ローカル設定

```bash
mkdir -p ~/.config/ga-cli
mv ~/Downloads/<key>.json ~/.config/ga-cli/sa.json
cp config/ga-cli.config.toml.example ~/.config/ga-cli/config.toml
# default_property の YOUR_NUMERIC_ID をプロパティ ID に置換
```

## 4. 確認

```bash
npm run ga4:check
npm run ga4:howto   # How-to の PV・参照元（認証済みのとき）
```

`ga4 auth check --ping` が成功したら、Property ID を `site-roadmap.md` に追記する。
