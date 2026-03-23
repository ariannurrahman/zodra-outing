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
      <section className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">Permainan</span>
          </nav>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Permainan Outbound & Team Building
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Kumpulan permainan yang kami gunakan di paket outbound Bandung—from
            ice breaking hingga highrope dan amazing race. Setiap permainan
            dirancang untuk memperkuat komunikasi, kepercayaan, dan kerja sama
            tim.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Total <strong className="text-foreground">{outboundGames.length}</strong>{" "}
            permainan — pilih kategori atau telusuri semua.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="min-h-[200px] animate-pulse rounded-2xl bg-muted/50" />
          }
        >
          <GamesListing />
        </Suspense>
      </section>

      <CtaBanner />
    </>
  );
}
