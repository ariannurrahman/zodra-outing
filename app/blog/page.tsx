import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";

export const metadata: Metadata = {
  title: "Blog | Zodra Outing",
  description:
    "Artikel dan tips seputar outbound, team building, dan kegiatan outdoor.",
};

export default function BlogPage() {
  const posts = [
    {
      slug: "manfaat-outbound-untuk-tim",
      title: "Manfaat Outbound untuk Pengembangan Tim",
      excerpt: "Outbound tidak hanya menyenangkan, tapi juga membangun kerjasama tim yang solid.",
      date: "15 Feb 2025",
    },
    {
      slug: "tips-memilih-lokasi-outbound",
      title: "Tips Memilih Lokasi Outbound yang Tepat",
      excerpt: "Pilih lokasi yang aman, nyaman, dan mendukung aktivitas outbound Anda.",
      date: "10 Feb 2025",
    },
  ];

  return (
    <>
      <Hero
        title="Blog"
        subtitle="Tips, artikel, dan inspirasi seputar outbound dan team building."
        showCta={false}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <time className="text-sm text-muted-foreground">{post.date}</time>
              <h2 className="mt-2 text-xl font-semibold text-foreground">
                {post.title}
              </h2>
              <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
              >
                Baca selengkapnya →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
