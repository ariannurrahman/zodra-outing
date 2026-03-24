/**
 * One-off: add `blocks` from legacy `content`, then remove `content`.
 * Run: npx tsx scripts/migrate-blog-blocks.ts
 */
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { splitBlogContent } from "../app/blog/split-blog-content";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jsonPath = path.resolve(__dirname, "../app/blog/blogs.json");

type Row = {
  content?: string;
  blocks?: unknown;
  [key: string]: unknown;
};

const raw = JSON.parse(fs.readFileSync(jsonPath, "utf8")) as Row[];

for (const post of raw) {
  if (post.blocks) continue;
  const content = post.content;
  if (typeof content !== "string") continue;
  const { introHtml, sections } = splitBlogContent(content);
  post.blocks = { introHtml, sections };
  delete post.content;
}

fs.writeFileSync(jsonPath, JSON.stringify(raw));

console.log("Migrated", raw.length, "posts to blocks; removed content.");
