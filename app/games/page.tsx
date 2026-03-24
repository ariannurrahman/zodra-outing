import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { GamesListing } from "@/components/games-listing";
import { outboundGames } from "@/lib/games";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Permainan Outbound & Team Building",
  description: `${outboundGames.length}+ permainan outbound Bandung: ice breaking, leadership, highrope, amazing race, initiative games. Manfaat team building untuk perusahaan & sekolah.`,
};

export default function GamesPage() {
  return (
    <>
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
              Permainan
            </span>
          </nav>
          <h1 className="text-3xl font-bold tracking-tight text-teal-950 dark:text-teal-50 sm:text-4xl">
            Permainan Outbound & Team Building
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-teal-900/80 dark:text-teal-200/85">
            Kumpulan permainan yang kami gunakan di paket outbound Bandung—from
            ice breaking hingga highrope dan amazing race. Setiap permainan
            dirancang untuk memperkuat komunikasi, kepercayaan, dan kerja sama
            tim.
          </p>
          <p className="mt-3 text-sm text-teal-800/75 dark:text-teal-300/80">
            Total{" "}
            <strong className="font-semibold text-teal-950 dark:text-teal-100">
              {outboundGames.length}
            </strong>{" "}
            permainan — pilih kategori atau telusuri semua.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="min-h-[200px] animate-pulse rounded-2xl bg-teal-100/40 dark:bg-teal-950/30" />
          }
        >
          <GamesListing />
        </Suspense>
      </section>

      <CtaBanner palette="teal" />
    </>
  );
}
