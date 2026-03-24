import { siteConfig } from "@/lib/site";

type BlogPostJsonLdProps = {
  title: string;
  description: string;
  slug: string;
  dateIso: string;
  imagePath: string;
};

export function BlogPostJsonLd({
  title,
  description,
  slug,
  dateIso,
  imagePath,
}: BlogPostJsonLdProps) {
  const base = siteConfig.url.replace(/\/$/, "");
  const pageUrl = `${base}/blog/${slug}`;
  const imageUrl = imagePath.startsWith("http")
    ? imagePath
    : `${base}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`;

  const published = new Date(dateIso).toISOString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: published,
    dateModified: published,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: base,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: base,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    url: pageUrl,
    image: [imageUrl],
    inLanguage: "id-ID",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export type BlogListItem = { slug: string; title: string };

type BlogListingJsonLdProps = {
  items: BlogListItem[];
};

export function BlogListingJsonLd({ items }: BlogListingJsonLdProps) {
  const base = siteConfig.url.replace(/\/$/, "");
  const blogIndexUrl = `${base}/blog`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Blog | ${siteConfig.name}`,
    description:
      "Artikel outing Bandung, outbound, team building, dan kegiatan outdoor.",
    url: blogIndexUrl,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: base,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: `${base}/blog/${item.slug}`,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
