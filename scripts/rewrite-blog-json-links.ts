/**
 * One-off: rewrite bandung-outbound.com hrefs in app/blog/blogs.json to local paths.
 * Run: npx tsx scripts/rewrite-blog-json-links.ts
 */
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { paketOutboundByType } from "../lib/packages";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jsonPath = path.resolve(__dirname, "../app/blog/blogs.json");

type Post = {
  excerpt?: string;
  blocks?: { introHtml: string; sections: { bodyHtml: string }[] };
};

const PACKAGE_HREF_BY_SLUG = new Map<string, string>();
for (const cat of paketOutboundByType) {
  for (const p of cat.packages) {
    PACKAGE_HREF_BY_SLUG.set(p.slug, p.href);
  }
}
const PACKAGE_SLUGS_BY_LENGTH = [...PACKAGE_HREF_BY_SLUG.keys()].sort(
  (a, b) => b.length - a.length,
);

const STATIC_PATH_REDIRECTS = new Map<string, string>([
  ["permainan-outbound", "/games"],
  ["team-building", "/games"],
  ["paket-outbound-bandung", "/paket-outbound"],
  [
    "paket-outbound-paintball-cikole-lembang",
    "/paket-outbound/1-day/low-team-building-paintball",
  ],
  [
    "paket-outbound-amazing-race-offroad-paintball",
    "/paket-outbound/1-day/amazing-race-offroad-paintball",
  ],
]);

const OUTBOUND_HOST_RE =
  /^https?:\/\/(?:www\.|cdn\.)?bandung-outbound\.com(\/.*)?$/i;

const ASSET_PATH_RE =
  /wp-content\/|wp-includes\/|\/wp-admin\/?|\.(jpe?g|webp|png|gif|svg|pdf|ico)(\?|$)/i;

function resolveOutboundUrlToPath(absoluteUrl: string, knownSlugs: Set<string>): string {
  const decoded = absoluteUrl.replace(/&amp;/g, "&");
  const m = decoded.match(OUTBOUND_HOST_RE);
  if (!m) return absoluteUrl;

  const rawPath = (m[1] ?? "/").split("?")[0].replace(/\/+$/, "") || "/";
  const pathname = rawPath.startsWith("/") ? rawPath : `/${rawPath}`;
  const pathLower = pathname.toLowerCase();

  if (pathLower.includes("/wp-admin")) return "/";
  if (ASSET_PATH_RE.test(pathname)) return "/";

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return "/";

  const leaf = segments[segments.length - 1];
  const leafLower = leaf.toLowerCase();

  const staticHit = STATIC_PATH_REDIRECTS.get(leafLower);
  if (staticHit) return staticHit;

  if (knownSlugs.has(leaf)) return `/blog/${leaf}`;

  const exactPkg = PACKAGE_HREF_BY_SLUG.get(leaf);
  if (exactPkg) return exactPkg;

  const withoutOutboundPrefix = leaf.replace(/^outbound-/i, "");
  const pkgFromPrefix = PACKAGE_HREF_BY_SLUG.get(withoutOutboundPrefix);
  if (pkgFromPrefix) return pkgFromPrefix;

  for (const slug of PACKAGE_SLUGS_BY_LENGTH) {
    if (leaf.includes(slug)) {
      return PACKAGE_HREF_BY_SLUG.get(slug)!;
    }
  }

  if (
    /^[a-z0-9]+(?:-[a-z0-9]+){2,}$/i.test(leaf) &&
    leaf.length >= 12 &&
    !/^(paket|outbound|outing)/i.test(leaf)
  ) {
    return "/blog";
  }

  if (/^(paket|outbound|outing)/i.test(leaf) || leaf.length >= 8) {
    return "/paket-outbound";
  }

  return "/";
}

function rewriteHrefs(html: string, knownSlugs: Set<string>): string {
  return html
    .replace(
      /href="(https?:\/\/(?:www\.|cdn\.)?bandung-outbound\.com[^"]*)"/gi,
      (_, u: string) => `href="${resolveOutboundUrlToPath(u, knownSlugs)}"`,
    )
    .replace(
      /href='(https?:\/\/(?:www\.|cdn\.)?bandung-outbound\.com[^']*)'/gi,
      (_, u: string) => `href='${resolveOutboundUrlToPath(u, knownSlugs)}'`,
    );
}

const raw = JSON.parse(fs.readFileSync(jsonPath, "utf8")) as Post[];
const knownSlugs = new Set(
  (raw as { slug: string }[]).map((p) => p.slug),
);

for (const post of raw) {
  if (typeof post.excerpt === "string") {
    post.excerpt = rewriteHrefs(post.excerpt, knownSlugs);
  }
  if (post.blocks) {
    post.blocks.introHtml = rewriteHrefs(post.blocks.introHtml, knownSlugs);
    for (const s of post.blocks.sections) {
      s.bodyHtml = rewriteHrefs(s.bodyHtml, knownSlugs);
    }
  }
}

fs.writeFileSync(jsonPath, JSON.stringify(raw));
console.log("Updated", jsonPath, "(bandung-outbound hrefs → local paths)");
