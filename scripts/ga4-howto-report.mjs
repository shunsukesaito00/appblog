#!/usr/bin/env node
/**
 * How-to 記事の PV・参照元を GA4 から取得（ga4 CLI 要・認証済み）
 */
import { spawnSync } from "node:child_process";

const path = "/blog/salary-pdf-import-takehome-howto";
const filter = `pagePath=^${path}`;

const pages = spawnSync(
  "ga4",
  ["pages", "-f", filter, "--limit", "5", "--compact"],
  { encoding: "utf8" },
);

if (pages.status !== 0) {
  console.error(pages.stderr || pages.stdout || "ga4 pages failed");
  process.exit(pages.status ?? 1);
}

const sources = spawnSync(
  "ga4",
  ["sources", "-f", filter, "--limit", "5", "--compact"],
  { encoding: "utf8" },
);

if (sources.status !== 0) {
  console.error(sources.stderr || sources.stdout || "ga4 sources failed");
  process.exit(sources.status ?? 1);
}

console.log("=== pages ===");
console.log(pages.stdout.trim() || "[]");
console.log("=== sources ===");
console.log(sources.stdout.trim() || "[]");
