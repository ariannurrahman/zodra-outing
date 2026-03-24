import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPostJsonLd } from "@/components/blog-json-ld";
import { siteConfig } from "@/lib/site";
import {
  BLOGS,
  getBlogBySlug,
  getBlogCoverImage,
  getBlogExcerpt,
  getBlogTitle,
  formatBlogDate,
} from "../constants";
import { getBlogBlocks } from "../get-blog-blocks";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOGS.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  const title = getBlogTitle(post);
  const description = getBlogExcerpt(post, 155);
  const cover = getBlogCoverImage(post);
  const publishedIso = new Date(post.date).toISOString();
  const canonicalPath = `/blog/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonicalPath,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      publishedTime: publishedIso,
      modifiedTime: publishedIso,
      authors: [siteConfig.name],
      images: [{ url: cover, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [cover],
    },
    robots: { index: true, follow: true },
  };
}

const blogProseClass =
  "blog-prose prose prose-neutral max-w-none dark:prose-invert " +
  "prose-p:leading-relaxed prose-p:text-teal-950/85 dark:prose-p:text-teal-100/80 " +
  "prose-strong:text-teal-950 prose-strong:font-semibold dark:prose-strong:text-teal-50 " +
  "prose-a:text-teal-700 prose-a:font-medium prose-a:no-underline hover:prose-a:underline dark:prose-a:text-teal-300 " +
  "prose-headings:scroll-mt-24 prose-headings:text-teal-950 dark:prose-headings:text-teal-50 " +
  "prose-img:rounded-xl prose-img:border prose-img:border-teal-200/60 prose-img:shadow-sm dark:prose-img:border-teal-800/50 " +
  "prose-ul:my-4 prose-ol:my-4 prose-li:text-teal-900/80 dark:prose-li:text-teal-100/75";

function BlogHtml({ html }: { html: string }) {
  return (
    <div
      className={blogProseClass}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  const title = getBlogTitle(post);
  const cover = getBlogCoverImage(post);
  const { introHtml, sections } = getBlogBlocks(post);
  const hasSections = sections.length > 0;

  const description = getBlogExcerpt(post, 155);

  return (
    <>
      <BlogPostJsonLd
        title={title}
        description={description}
        slug={post.slug}
        dateIso={post.date}
        imagePath={cover}
      />
      <section className="relative overflow-hidden border-b border-teal-950/10 bg-linear-to-b from-teal-50/80 via-cyan-50/30 to-background py-10 sm:py-14 dark:border-teal-800/20 dark:from-teal-950/40 dark:via-teal-950/25 dark:to-background">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-amber-500/15 via-teal-500/10 to-transparent dark:from-amber-500/10 dark:via-teal-500/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-1/4 h-56 w-56 rounded-full bg-teal-600/10 blur-3xl dark:bg-teal-500/10"
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-4 text-sm text-teal-800/70 dark:text-teal-300/80">
            <Link
              href="/"
              className="transition-colors hover:text-teal-950 dark:hover:text-teal-100"
            >
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/blog"
              className="transition-colors hover:text-teal-950 dark:hover:text-teal-100"
            >
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="line-clamp-1 font-medium text-teal-950 dark:text-teal-50">
              {title}
            </span>
          </nav>
          <Link
            href="/blog"
            className="text-sm font-medium text-teal-800 transition-colors hover:text-teal-950 dark:text-teal-300 dark:hover:text-teal-100"
          >
            ← Kembali ke Blog
          </Link>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:max-w-4xl lg:px-8">
        <header className="overflow-hidden rounded-2xl border border-teal-950/10 bg-card shadow-md dark:border-teal-800/25 sm:grid sm:grid-cols-5 sm:items-stretch">
          <div className="relative aspect-16/10 min-h-[200px] sm:col-span-2 sm:aspect-auto sm:min-h-[240px]">
            <Image
              src={cover}
              alt={title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 639px) 100vw, 40vw"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-teal-950/40 to-transparent sm:bg-linear-to-r sm:from-teal-950/30 sm:to-transparent"
              aria-hidden
            />
          </div>
          <div className="flex flex-col justify-center border-t border-teal-950/10 bg-linear-to-br from-white to-teal-50/50 p-6 dark:border-teal-800/20 dark:from-teal-950/30 dark:to-teal-950/10 sm:col-span-3 sm:border-t-0 sm:border-l sm:p-8">
            <div className="border-l-4 border-teal-600 pl-5 dark:border-teal-400 sm:pl-6">
              <time
                className="text-sm font-medium text-teal-800/80 dark:text-teal-300/90"
                dateTime={post.date}
              >
                {formatBlogDate(post.date)}
              </time>
              <h1 className="mt-2 text-balance text-2xl font-bold tracking-tight text-teal-950 dark:text-teal-50 sm:text-4xl sm:leading-tight">
                {title}
              </h1>
            </div>
          </div>
        </header>

        <div className="mt-10 space-y-10">
          {introHtml ? (
            <div
              className={
                hasSections
                  ? "blog-intro rounded-2xl border border-dashed border-teal-800/20 bg-teal-50/40 p-6 dark:border-teal-700/30 dark:bg-teal-950/25 sm:p-8"
                  : "blog-intro rounded-2xl border border-teal-950/10 bg-card p-6 shadow-sm dark:border-teal-800/25 sm:p-8"
              }
            >
              <BlogHtml html={introHtml} />
            </div>
          ) : null}

          {hasSections
            ? sections.map((section, i) => (
              <section
                key={`${section.title}-${i}`}
                id={`section-${i + 1}`}
                className="overflow-hidden scroll-mt-24 rounded-2xl border border-teal-950/10 bg-card shadow-md dark:border-teal-800/25"
              >
                <div className="flex flex-col gap-0 sm:flex-row sm:items-stretch">
                  {/* <div className="flex shrink-0 items-center justify-center border-b border-teal-950/10 bg-linear-to-b from-teal-100/80 to-teal-50/50 px-4 py-3 dark:border-teal-800/30 dark:from-teal-900/50 dark:to-teal-950/40 sm:w-16 sm:flex-col sm:border-b-0 sm:border-r sm:py-6">
                      <span className="font-mono text-xl font-bold tabular-nums text-teal-800 dark:text-teal-200 sm:text-2xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div> */}
                  <div className="min-w-0 flex-1">
                    <h2 className="border-b border-teal-950/10 bg-teal-50/60 px-5 py-4 text-lg font-semibold leading-snug text-teal-950 dark:border-teal-800/25 dark:bg-teal-950/40 dark:text-teal-50 sm:px-6 sm:text-xl">
                      {section.title}
                    </h2>
                    <div className="px-5 py-6 sm:px-6 sm:py-8">
                      <BlogHtml html={section.bodyHtml} />
                    </div>
                  </div>
                </div>
              </section>
            ))
            : null}

          {!introHtml && !hasSections ? (
            <p className="text-teal-800/80 dark:text-teal-300/80">
              Konten tidak tersedia.
            </p>
          ) : null}
        </div>
      </article>
    </>
  );
}
