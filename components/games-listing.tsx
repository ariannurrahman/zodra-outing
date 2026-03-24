"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  outboundGames,
  getGameCategories,
  gameCategoryLabels,
  type GameCategory,
} from "@/lib/games";

const categories = getGameCategories();

/**
 * Forest & trail palette only: moss, pine, teal, stone, faint path-amber.
 * Categories differ by subtle temperature / depth, not rainbow hues.
 */
const GAME_CARD_THEMES: Record<
  GameCategory,
  {
    card: string;
    badge: string;
    title: string;
    titleHover: string;
    cta: string;
    orb: string;
  }
> = {
  "ice-breaking": {
    card: "border-emerald-800/18 bg-linear-to-br from-slate-100/95 via-emerald-50/90 to-teal-50/85 shadow-sm shadow-emerald-950/5 hover:border-emerald-700/30 hover:shadow-md hover:shadow-emerald-950/8 dark:border-emerald-800/35 dark:from-slate-950/90 dark:via-emerald-950/88 dark:to-teal-950/80 dark:shadow-black/20 dark:hover:border-emerald-600/40",
    badge:
      "bg-emerald-800/10 text-emerald-900 ring-1 ring-emerald-800/18 dark:bg-emerald-400/10 dark:text-emerald-100 dark:ring-emerald-500/20",
    title: "text-emerald-950 dark:text-emerald-50",
    titleHover:
      "group-hover:text-teal-800 dark:group-hover:text-teal-200",
    cta: "text-teal-800 dark:text-teal-300",
    orb: "bg-teal-600/12 dark:bg-teal-500/10",
  },
  leadership: {
    card: "border-emerald-800/18 bg-linear-to-br from-stone-100/95 via-emerald-50 to-emerald-100/70 shadow-sm shadow-emerald-950/5 hover:border-amber-900/22 hover:shadow-md hover:shadow-emerald-950/8 dark:border-emerald-800/35 dark:from-stone-950/85 dark:via-emerald-950/90 dark:to-emerald-950/80 dark:shadow-black/20 dark:hover:border-amber-800/30",
    badge:
      "bg-amber-900/10 text-emerald-950 ring-1 ring-amber-900/15 dark:bg-amber-950/25 dark:text-amber-100/95 dark:ring-amber-800/25",
    title: "text-emerald-950 dark:text-emerald-50",
    titleHover:
      "group-hover:text-emerald-800 dark:group-hover:text-emerald-200",
    cta: "text-emerald-800 dark:text-emerald-300",
    orb: "bg-amber-800/10 dark:bg-amber-900/15",
  },
  "goal-trust": {
    card: "border-stone-500/22 bg-linear-to-br from-stone-100 via-stone-50/95 to-emerald-100/75 shadow-sm shadow-stone-900/5 hover:border-emerald-800/28 hover:shadow-md hover:shadow-emerald-950/8 dark:border-stone-600/35 dark:from-stone-950/88 dark:via-emerald-950/82 dark:to-emerald-950/78 dark:shadow-black/20 dark:hover:border-emerald-700/35",
    badge:
      "bg-stone-600/10 text-emerald-900 ring-1 ring-stone-500/20 dark:bg-stone-500/15 dark:text-stone-100 dark:ring-stone-500/25",
    title: "text-emerald-950 dark:text-emerald-50",
    titleHover:
      "group-hover:text-emerald-800 dark:group-hover:text-emerald-300",
    cta: "text-emerald-800 dark:text-emerald-400",
    orb: "bg-emerald-700/10 dark:bg-emerald-600/12",
  },
  "low-team-building": {
    card: "border-emerald-800/18 bg-linear-to-br from-emerald-50 via-green-50/90 to-teal-50/80 shadow-sm shadow-emerald-950/5 hover:border-teal-800/28 hover:shadow-md hover:shadow-teal-950/8 dark:border-emerald-800/35 dark:from-emerald-950/88 dark:via-green-950/82 dark:to-teal-950/78 dark:shadow-black/20 dark:hover:border-teal-700/38",
    badge:
      "bg-teal-800/10 text-emerald-950 ring-1 ring-teal-800/18 dark:bg-teal-600/12 dark:text-emerald-100 dark:ring-teal-500/22",
    title: "text-emerald-950 dark:text-emerald-50",
    titleHover:
      "group-hover:text-teal-800 dark:group-hover:text-teal-200",
    cta: "text-teal-800 dark:text-teal-300",
    orb: "bg-emerald-600/12 dark:bg-emerald-500/10",
  },
  initiative: {
    card: "border-emerald-800/20 bg-linear-to-br from-emerald-100/80 via-emerald-50 to-teal-50/85 shadow-sm shadow-emerald-950/5 hover:border-emerald-700/32 hover:shadow-md hover:shadow-emerald-950/8 dark:border-emerald-800/38 dark:from-emerald-950/92 dark:via-emerald-950/85 dark:to-teal-950/80 dark:shadow-black/20 dark:hover:border-emerald-600/42",
    badge:
      "bg-emerald-800/12 text-emerald-950 ring-1 ring-emerald-800/20 dark:bg-emerald-500/12 dark:text-emerald-100 dark:ring-emerald-400/22",
    title: "text-emerald-950 dark:text-emerald-50",
    titleHover:
      "group-hover:text-emerald-800 dark:group-hover:text-emerald-200",
    cta: "text-emerald-800 dark:text-emerald-300",
    orb: "bg-teal-700/10 dark:bg-teal-600/12",
  },
  "amazing-race": {
    card: "border-amber-900/20 bg-linear-to-br from-stone-100/95 via-amber-50/50 to-emerald-100/70 shadow-sm shadow-stone-900/5 hover:border-amber-800/28 hover:shadow-md hover:shadow-emerald-950/8 dark:border-amber-950/35 dark:from-stone-950/88 dark:via-amber-950/40 dark:to-emerald-950/85 dark:shadow-black/20 dark:hover:border-amber-800/35",
    badge:
      "bg-amber-950/12 text-emerald-950 ring-1 ring-amber-900/18 dark:bg-amber-950/30 dark:text-amber-100/90 dark:ring-amber-800/25",
    title: "text-emerald-950 dark:text-emerald-50",
    titleHover:
      "group-hover:text-amber-900 dark:group-hover:text-amber-200/95",
    cta: "text-emerald-800 dark:text-emerald-300",
    orb: "bg-amber-800/8 dark:bg-amber-900/12",
  },
  highrope: {
    card: "border-teal-800/20 bg-linear-to-br from-teal-50/90 via-emerald-50 to-slate-100/90 shadow-sm shadow-teal-950/5 hover:border-teal-700/32 hover:shadow-md hover:shadow-teal-950/8 dark:border-teal-800/38 dark:from-teal-950/85 dark:via-emerald-950/88 dark:to-slate-950/80 dark:shadow-black/20 dark:hover:border-teal-600/40",
    badge:
      "bg-teal-800/10 text-emerald-950 ring-1 ring-teal-800/18 dark:bg-teal-600/12 dark:text-teal-100 dark:ring-teal-500/22",
    title: "text-emerald-950 dark:text-emerald-50",
    titleHover:
      "group-hover:text-teal-800 dark:group-hover:text-teal-200",
    cta: "text-teal-800 dark:text-teal-300",
    orb: "bg-slate-500/10 dark:bg-slate-400/8",
  },
  "program-khusus": {
    card: "border-emerald-900/22 bg-linear-to-br from-emerald-100/70 via-teal-100/65 to-emerald-50/90 shadow-sm shadow-emerald-950/6 hover:border-emerald-800/32 hover:shadow-md hover:shadow-emerald-950/10 dark:border-emerald-900/40 dark:from-emerald-950/92 dark:via-teal-950/88 dark:to-emerald-950/85 dark:shadow-black/25 dark:hover:border-emerald-700/45",
    badge:
      "bg-emerald-900/12 text-emerald-950 ring-1 ring-emerald-900/20 dark:bg-emerald-600/14 dark:text-emerald-100 dark:ring-emerald-500/25",
    title: "text-emerald-950 dark:text-emerald-50",
    titleHover:
      "group-hover:text-teal-800 dark:group-hover:text-teal-200",
    cta: "text-teal-800 dark:text-teal-300",
    orb: "bg-emerald-800/10 dark:bg-emerald-700/14",
  },
};

function isGameCategory(value: string): value is GameCategory {
  return categories.includes(value as GameCategory);
}

export function GamesListing() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState<GameCategory | "all">("all");

  useEffect(() => {
    const k = searchParams.get("kategori");
    if (k && isGameCategory(k)) {
      setActive(k);
    } else {
      setActive("all");
    }
  }, [searchParams]);

  const applyCategory = useCallback(
    (cat: GameCategory | "all") => {
      setActive(cat);
      const params = new URLSearchParams(searchParams.toString());
      if (cat === "all") {
        params.delete("kategori");
      } else {
        params.set("kategori", cat);
      }
      const q = params.toString();
      router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  const filtered = useMemo(() => {
    if (active === "all") return outboundGames;
    return outboundGames.filter((g) => g.category === active);
  }, [active]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => applyCategory("all")}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
            active === "all"
              ? "bg-teal-600 text-white shadow-sm shadow-teal-900/15 dark:bg-teal-500"
              : "border border-teal-200/80 bg-card text-muted-foreground hover:border-teal-400/50 hover:text-teal-950 dark:border-teal-800/50 dark:hover:border-teal-600/50 dark:hover:text-teal-100"
          )}
        >
          Semua ({outboundGames.length})
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => applyCategory(cat)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              active === cat
                ? "bg-teal-600 text-white shadow-sm shadow-teal-900/15 dark:bg-teal-500"
                : "border border-teal-200/80 bg-card text-muted-foreground hover:border-teal-400/50 hover:text-teal-950 dark:border-teal-800/50 dark:hover:border-teal-600/50 dark:hover:text-teal-100"
            )}
          >
            {gameCategoryLabels[cat]} (
            {outboundGames.filter((g) => g.category === cat).length})
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((game) => {
          const theme = GAME_CARD_THEMES[game.category];
          return (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl border-2 p-5 transition-all duration-300 hover:-translate-y-0.5",
                theme.card
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl",
                  theme.orb
                )}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-emerald-900/4 blur-2xl dark:bg-emerald-300/6"
                aria-hidden
              />

              <div className="relative flex min-h-0 flex-1 flex-col">
                <span
                  className={cn(
                    "mb-3 inline-block w-fit rounded-full px-3 py-0.5 text-xs font-bold tracking-wide",
                    theme.badge
                  )}
                >
                  {game.categoryLabel}
                </span>
                <h2
                  className={cn(
                    "text-lg font-bold tracking-tight transition-colors",
                    theme.title,
                    theme.titleHover
                  )}
                >
                  {game.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-700/90 dark:text-stone-200/80">
                  {game.shortDescription}
                </p>
                <span
                  className={cn(
                    "mt-4 inline-flex items-center gap-1 text-sm font-bold transition-colors",
                    theme.cta
                  )}
                >
                  Lihat detail
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
