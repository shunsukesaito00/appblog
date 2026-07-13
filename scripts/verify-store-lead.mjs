#!/usr/bin/env node
/**
 * App Store 公開説明文が appStoreDescriptionLead と一致するか確認
 */
import { apps } from "../src/data/apps.ts";

const app = apps.find((item) => item.name === "給与明細管理");
const lead = app?.appStoreDescriptionLead?.trim();
const appId = "6759832140";

if (!lead) {
  console.error("appStoreDescriptionLead not found");
  process.exit(1);
}

const res = await fetch(
  `https://itunes.apple.com/lookup?id=${appId}&country=jp`,
);
const data = await res.json();
const description = data.results?.[0]?.description?.trim() ?? "";

const reflected = description.startsWith(lead);

console.log(
  JSON.stringify(
    {
      appId,
      reflected,
      expectedLead: lead,
      liveLead: description.slice(0, lead.length),
    },
    null,
    2,
  ),
);

process.exit(reflected ? 0 : 1);
