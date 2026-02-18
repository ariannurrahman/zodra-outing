import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const posts: Record<
  string,
  { title: string; content: string; date: string }
> = {
  "manfaat-outbound-untuk-tim": {
    title: "Manfaat Outbound untuk Pengembangan Tim",
    date: "15 Feb 2025",
    content:
      "Outbound tidak hanya menyenangkan, tapi juga membangun kerjasama tim yang solid. Kegiatan outbound membantu anggota tim saling mengenal, berkomunikasi dengan lebih baik, dan memecahkan masalah bersama. Dengan berbagai tantangan yang dirancang khusus, tim akan belajar untuk saling mendukung dan mencapai tujuan bersama.",
  },
  "tips-memilih-lokasi-outbound": {
    title: "Tips Memilih Lokasi Outbound yang Tepat",
    date: "10 Feb 2025",
    content:
      "Pilih lokasi yang aman, nyaman, dan mendukung aktivitas outbound Anda. Pertimbangkan aksesibilitas, fasilitas yang tersedia, dan kapasitas lokasi. Pastikan lokasi memiliki area yang cukup untuk berbagai permainan dan aktivitas tim.",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Zodra Outing Blog`,
    description: post.content.slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        ← Kembali ke Blog
      </Link>
      <header className="mt-8">
        <time className="text-sm text-muted-foreground">{post.date}</time>
        <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
          {post.title}
        </h1>
      </header>
      <div className="mt-8 prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-muted-foreground leading-relaxed">{post.content}</p>
      </div>
    </article>
  );
}
