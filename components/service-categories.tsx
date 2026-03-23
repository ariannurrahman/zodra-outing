import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Crown,
  Lightbulb,
  Map,
  Mountain,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";
import {
  getGameCategories,
  gameCategoryLabels,
  type GameCategory,
} from "@/lib/games";
import { cn } from "@/lib/utils";

const categoryIcons: Record<GameCategory, LucideIcon> = {
  "ice-breaking": Sparkles,
  leadership: Crown,
  "goal-trust": Target,
  "low-team-building": Users,
  initiative: Lightbulb,
  "amazing-race": Map,
  highrope: Mountain,
  "program-khusus": Star,
};

const categories = getGameCategories().map((category) => ({
  category,
  icon: categoryIcons[category],
  label: gameCategoryLabels[category],
  href: `/games?kategori=${encodeURIComponent(category)}`,
}));

interface ServiceCategoriesProps {
  title?: string;
  className?: string;
  description?: string;
}

export function ServiceCategories({
  title = "Aktivitas Outbound & Team Building",
  className,
  description = "Kami menyediakan berbagai aktivitas outbound dan team building yang dapat dipilih sesuai kebutuhan Anda.",
}: ServiceCategoriesProps) {
  return (
    <section
      id="layanan"
      className={cn(
        "relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8",
        "bg-linear-to-b from-emerald-50/60 to-transparent dark:from-emerald-950/20 dark:to-transparent",
        className
      )}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">
              {title}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              {description}
            </p>
          </div>
          <Link href="/games" className="text-sm text-nowrap font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 block">Lihat Semua Aktivitas →</Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3 sm:gap-4">
        {categories.map(({ category, icon: Icon, label, href }) => (
          <Link
            key={category}
            href={href}
            className="group flex items-center gap-3 rounded-full border border-emerald-200/60 bg-white px-5 py-3 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:border-emerald-400/80 hover:bg-emerald-50/80 hover:shadow-md hover:shadow-emerald-500/10 dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:ring-white/5 dark:hover:border-emerald-600/60 dark:hover:bg-emerald-900/40"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-200 group-hover:text-emerald-800 dark:bg-emerald-800/50 dark:text-emerald-300 dark:group-hover:bg-emerald-700/60 dark:group-hover:text-emerald-200">
              <Icon className="h-4 w-4" aria-hidden />
            </span>
            <span className="text-sm font-semibold text-foreground">{label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
