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
              ? "bg-primary text-primary-foreground"
              : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
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
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            {gameCategoryLabels[cat]} (
            {outboundGames.filter((g) => g.category === cat).length})
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((game) => (
          <Link
            key={game.slug}
            href={`/games/${game.slug}`}
            className="group flex flex-col rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
          >
            <span className="mb-2 inline-block w-fit rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
              {game.categoryLabel}
            </span>
            <h2 className="text-lg font-bold text-foreground group-hover:text-primary">
              {game.name}
            </h2>
            <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
              {game.shortDescription}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
              Lihat detail
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
