import { BLOGS, type BlogPost } from "./constants";
import {
  enhanceBlogBodyHtml,
  splitBlogContent,
  type BlogContentSplit,
} from "./split-blog-content";

const KNOWN_SLUGS = new Set(BLOGS.map((p) => p.slug));

/**
 * Rewrites bandung-outbound.com links to local /blog/[slug] when the path
 * matches a post slug (last URL segment).
 */
export function rewriteBandungOutboundLinks(html: string): string {
  const tryRewrite = (url: string, quote: string): string | null => {
    const m = url.match(
      /^https?:\/\/(?:www\.)?bandung-outbound\.com\/(.+)$/i,
    );
    if (!m) return null;
    const rawPath = m[1].replace(/\/+$/, "");
    const parts = rawPath.split("/").filter(Boolean);
    if (parts.length === 0) return null;
    const leaf = parts[parts.length - 1];
    if (leaf && KNOWN_SLUGS.has(leaf)) {
      return `href=${quote}/blog/${leaf}${quote}`;
    }
    return null;
  };

  return html
    .replace(
      /href="(https?:\/\/(?:www\.)?bandung-outbound\.com\/[^"]+)"/gi,
      (full, u: string) => tryRewrite(u, '"') ?? full,
    )
    .replace(
      /href='(https?:\/\/(?:www\.)?bandung-outbound\.com\/[^']+)'/gi,
      (full, u: string) => tryRewrite(u, "'") ?? full,
    );
}

function pipeBlogHtml(html: string): string {
  return rewriteBandungOutboundLinks(enhanceBlogBodyHtml(html));
}

/**
 * Structured blocks from JSON, or legacy split from `content`.
 */
export function getBlogBlocks(post: BlogPost): BlogContentSplit {
  if (post.blocks) {
    return {
      introHtml: pipeBlogHtml(post.blocks.introHtml),
      sections: post.blocks.sections.map((s) => ({
        title: s.title,
        bodyHtml: pipeBlogHtml(s.bodyHtml),
      })),
    };
  }

  const split = splitBlogContent(post.content ?? "");
  return {
    introHtml: rewriteBandungOutboundLinks(split.introHtml),
    sections: split.sections.map((s) => ({
      title: s.title,
      bodyHtml: rewriteBandungOutboundLinks(s.bodyHtml),
    })),
  };
}
