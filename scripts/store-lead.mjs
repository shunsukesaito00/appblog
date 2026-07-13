#!/usr/bin/env node
/**
 * App Store Connect 用の説明文先頭段落を表示（給与明細管理）
 */
import { apps } from "../src/data/apps.ts";

const app = apps.find((item) => item.name === "給与明細管理");

if (!app?.appStoreDescriptionLead) {
  console.error("appStoreDescriptionLead not found for 給与明細管理");
  process.exit(1);
}

console.log(app.appStoreDescriptionLead);
