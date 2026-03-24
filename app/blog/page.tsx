import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogListingJsonLd } from "@/components/blog-json-ld";
import { CtaBanner } from "@/components/cta-banner";
import { siteConfig } from "@/lib/site";
import {
  formatBlogDate,
  getBlogCoverImage,
  getBlogExcerpt,
  getBlogTitle,
  getSortedBlogs,
} from "./constants";

const blogDescription =
  "Artikel dan tips outing Bandung, outbound, team building, dan kegiatan outdoor. Inspirasi untuk acara perusahaan & sekolah.";

export const metadata: Metadata = {
  title: "Blog",
  description: blogDescription,
  alternates: { canonical: "/blog" },
  keywords: [
    ...siteConfig.keywords,
    "blog outbound bandung",
    "artikel team building",
    "tips outing perusahaan",
  ],
  openGraph: {
    title: "Blog | Zodra Adventure",
    description: blogDescription,
    url: "/blog",
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Zodra Adventure",
    description: blogDescription,
  },
};

export default function BlogPage() {
  const posts = getSortedBlogs();
  const listJsonItems = posts.map((post) => ({
    slug: post.slug,
    title: getBlogTitle(post),
  }));

  return (
    <>
      <BlogListingJsonLd items={listJsonItems} />
      <section className="relative overflow-hidden border-b border-teal-950/10 bg-linear-to-b from-teal-50/80 via-cyan-50/30 to-background py-12 sm:py-16 dark:border-teal-800/20 dark:from-teal-950/40 dark:via-teal-950/25 dark:to-background">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-amber-500/15 via-teal-500/10 to-transparent dark:from-amber-500/10 dark:via-teal-500/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-1/4 h-64 w-64 rounded-full bg-teal-600/10 blur-3xl dark:bg-teal-500/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-teal-600/10 blur-3xl dark:bg-teal-500/10"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm text-teal-800/70 dark:text-teal-300/80">
            <Link
              href="/"
              className="transition-colors hover:text-teal-950 dark:hover:text-teal-100"
            >
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-teal-950 dark:text-teal-50">
              Blog
            </span>
          </nav>
          <h1 className="text-3xl font-bold tracking-tight text-teal-950 dark:text-teal-50 sm:text-4xl">
            Blog Petualangan &amp; Tim
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-teal-900/80 dark:text-teal-200/85">
            Tips, ide kegiatan, dan cerita dari dunia outbound Bandung—dari ice
            breaking hingga paket outing alam. Baca sambil bayangkan tim Anda di
            tengah hutan pinus dan udara pegunungan.
          </p>
          <p className="mt-3 text-sm text-teal-800/75 dark:text-teal-300/80">
            <strong className="font-semibold text-teal-950 dark:text-teal-100">
              {posts.length}
            </strong>{" "}
            artikel untuk inspirasi acara kantor atau sekolah.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {posts.map((post) => {
            const cover = getBlogCoverImage(post);
            const title = getBlogTitle(post);
            return (
              <article
                key={post.id}
                className="overflow-hidden rounded-2xl border border-teal-950/10 bg-card shadow-md transition-shadow hover:shadow-lg dark:border-teal-800/25"
              >
                <div className="flex flex-col sm:flex-row">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group relative aspect-16/10 w-full shrink-0 overflow-hidden sm:aspect-auto sm:w-72 lg:w-80"
                  >
                    <Image
                      src={cover}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 639px) 100vw, 320px"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-linear-to-t from-teal-950/50 to-transparent opacity-80 sm:bg-linear-to-r"
                      aria-hidden
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <time
                      className="text-sm font-medium text-teal-800/75 dark:text-teal-300/85"
                      dateTime={post.date}
                    >
                      {formatBlogDate(post.date)}
                    </time>
                    <h2 className="mt-2 text-xl font-semibold text-teal-950 dark:text-teal-50">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="transition-colors hover:text-teal-700 hover:underline dark:hover:text-teal-200"
                      >
                        {title}
                      </Link>
                    </h2>
                    <p className="mt-2 flex-1 text-teal-900/80 dark:text-teal-100/75">
                      {getBlogExcerpt(post)}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-900 dark:text-teal-300 dark:hover:text-teal-100"
                    >
                      Baca selengkapnya
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CtaBanner palette="teal" />
    </>
  );
}
