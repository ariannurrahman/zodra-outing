import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import {
  getGameBySlug,
  getAllGameSlugs,
  outboundGames,
} from "@/lib/games";

type Props = { params: Promise<{ game: string }> };

export function generateStaticParams() {
  return getAllGameSlugs().map((game) => ({ game }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { game: slug } = await params;
  const g = getGameBySlug(slug);
  if (!g) return { title: "Permainan tidak ditemukan" };
  return {
    title: `${g.name} | Permainan Outbound`,
    description: `${g.shortDescription} Manfaat team building: ${g.teamBuildingBenefits[0]}`,
  };
}

export default async function GameDetailPage({ params }: Props) {
  const { game: slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const idx = outboundGames.findIndex((x) => x.slug === slug);
  const prev = idx > 0 ? outboundGames[idx - 1] : null;
  const next =
    idx < outboundGames.length - 1 ? outboundGames[idx + 1] : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/games" className="hover:text-foreground">
          Permainan
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">{game.name}</span>
      </nav>

      <Link
        href="/games"
        className="text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        ← Kembali ke daftar permainan
      </Link>

      <article className="mt-6">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {game.categoryLabel}
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {game.name}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {game.shortDescription}
        </p>

        <div className="mt-10 rounded-2xl border border-border/60 bg-card/50 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-foreground">
            Tentang permainan ini
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            {game.description}
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-foreground">
            Manfaat untuk team building
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Permainan ini mendukung pengembangan tim di lingkungan outbound
            profesional:
          </p>
          <ul className="mt-4 space-y-3">
            {game.teamBuildingBenefits.map((b) => (
              <li key={b} className="flex gap-3 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <WhatsAppCta
            variant="button"
            message={`Halo, saya tertarik memasukkan permainan "${game.name}" ke paket outbound tim kami. Bisa diskusi?`}
          >
            Konsultasi paket outbound
          </WhatsAppCta>
          <Link
            href="/paket-outbound"
            className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Lihat paket outbound
          </Link>
        </div>

        {(prev || next) && (
          <nav className="mt-14 flex flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:justify-between">
            {prev ? (
              <Link
                href={`/games/${prev.slug}`}
                className="group rounded-xl border border-border/60 bg-card/50 p-4 transition-colors hover:border-primary/30"
              >
                <span className="text-xs font-medium text-muted-foreground">
                  Sebelumnya
                </span>
                <p className="mt-1 font-semibold text-foreground group-hover:text-primary">
                  {prev.name}
                </p>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/games/${next.slug}`}
                className="group rounded-xl border border-border/60 bg-card/50 p-4 text-right transition-colors hover:border-primary/30 sm:ml-auto"
              >
                <span className="text-xs font-medium text-muted-foreground">
                  Berikutnya
                </span>
                <p className="mt-1 font-semibold text-foreground group-hover:text-primary">
                  {next.name}
                </p>
              </Link>
            ) : null}
          </nav>
        )}
      </article>
    </div>
  );
}
