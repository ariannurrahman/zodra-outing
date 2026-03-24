import { stripHtml } from "./constants";

/** Turn "Baca juga: …" paragraphs into aside callouts (matches WP export pattern). */
export function enhanceBlogBodyHtml(html: string): string {
  let out = html.replace(
    /<p><strong>Baca juga:\s*(<a[^>]+>[\s\S]*?<\/a>)<\/strong><\/p>/gi,
    '<aside class="blog-related"><p class="blog-related-p"><span class="blog-related-label">Baca juga</span>$1</p></aside>',
  );
  out = out.replace(
    /<p><strong>Baca juga:<\/strong>\s*(<a[^>]+>[\s\S]*?<\/a>)<\/p>/gi,
    '<aside class="blog-related"><p class="blog-related-p"><span class="blog-related-label">Baca juga</span>$1</p></aside>',
  );
  return out;
}

export type BlogSection = {
  title: string;
  bodyHtml: string;
};

export type BlogContentSplit = {
  introHtml: string;
  sections: BlogSection[];
};

/**
 * Splits WordPress HTML on top-level <h2> into an intro + section cards.
 * Posts without <h2> return the full string as intro only.
 */
export function splitBlogContent(html: string): BlogContentSplit {
  const enhanced = enhanceBlogBodyHtml(html);
  const h2re = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
  const matches = [...enhanced.matchAll(h2re)];

  if (matches.length === 0) {
    return { introHtml: enhanced.trim(), sections: [] };
  }

  const introHtml = enhanced.slice(0, matches[0].index).trim();
  const sections: BlogSection[] = [];

  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    const title = stripHtml(m[1]);
    const start = m.index! + m[0].length;
    const end =
      i + 1 < matches.length ? matches[i + 1].index! : enhanced.length;
    sections.push({
      title,
      bodyHtml: enhanced.slice(start, end).trim(),
    });
  }

  return { introHtml, sections };
}
