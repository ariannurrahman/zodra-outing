import blogData from "./blogs.json";

/** One major section (former <h2> block) */
export type BlogBodySection = {
  title: string;
  bodyHtml: string;
};

/** Manual authoring shape: intro + sections */
export type BlogBlocks = {
  introHtml: string;
  sections: BlogBodySection[];
};

/** Fields kept from the WordPress export for the static blog */
export type BlogPost = {
  id: number;
  date: string;
  slug: string;
  title: string;
  excerpt: string;
  /** Legacy single HTML document; optional when `blocks` is set */
  content?: string;
  /** Preferred: explicit intro + sections */
  blocks?: BlogBlocks;
};

/** Activity photos used as blog covers (under `public/activity`). */
export const BLOG_COVER_IMAGES = [
  "/activity/atv-1.webp",
  "/activity/atv-2.webp",
  "/activity/games-1.webp",
  "/activity/games-2.webp",
  "/activity/games-3.webp",
  "/activity/games-4.webp",
  "/activity/games.webp",
  "/activity/offroad-1.webp",
  "/activity/offroad-2.webp",
  "/activity/offroad-3.webp",
  "/activity/offroad-4.webp",
  "/activity/paintball-1.webp",
  "/activity/paintball-2.webp",
  "/activity/paintball-3.webp",
  "/activity/party-1.webp",
  "/activity/party-2.webp",
  "/activity/party-3.webp",
  "/activity/party-4.webp",
  "/activity/party-5.webp",
  "/activity/party-6.webp",
  "/activity/party-7.webp",
  "/activity/party-8.webp",
  "/activity/rope-1.webp",
] as const;

function hashSlug(slug: string): number {
  let h = 2166136261;
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Stable cover per post so list and detail always match. */
export function getBlogCoverImage(post: Pick<BlogPost, "slug">): string {
  const i = hashSlug(post.slug) % BLOG_COVER_IMAGES.length;
  return BLOG_COVER_IMAGES[i]!;
}

export const BLOGS = blogData as BlogPost[];

export function getSortedBlogs(): BlogPost[] {
  return [...BLOGS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOGS.find((p) => p.slug === slug);
}

export function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) =>
      String.fromCharCode(parseInt(h, 16)),
    )
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

export function stripHtml(html: string): string {
  const text = html.replace(/<[^>]*>/g, " ");
  return decodeHtmlEntities(text).replace(/\s+/g, " ").trim();
}

export function formatBlogDate(iso: string): string {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getBlogTitle(post: BlogPost): string {
  return stripHtml(post.title);
}

function excerptFallbackFromBody(post: BlogPost): string {
  if (post.content) return stripHtml(post.content);
  if (post.blocks) {
    const parts = [
      post.blocks.introHtml,
      ...post.blocks.sections.map((s) => s.bodyHtml),
    ];
    return stripHtml(parts.join(" "));
  }
  return "";
}

export function getBlogExcerpt(post: BlogPost, maxLen = 200): string {
  const fromExcerpt = stripHtml(post.excerpt);
  if (fromExcerpt.length >= 40) {
    return fromExcerpt.length > maxLen
      ? `${fromExcerpt.slice(0, maxLen).trim()}…`
      : fromExcerpt;
  }
  const fromBody = excerptFallbackFromBody(post);
  return fromBody.length > maxLen
    ? `${fromBody.slice(0, maxLen).trim()}…`
    : fromBody;
}
