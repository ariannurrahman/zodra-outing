import Link from "next/link";
import { Waves, Target, Car, Swords, Tent, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { icon: Waves, label: "Rafting", href: "/paket-outbound#packages" },
  { icon: Target, label: "Paintball", href: "/paket-outbound#packages" },
  { icon: Car, label: "Offroad Land Rover", href: "/paket-outbound#packages" },
  { icon: Swords, label: "Archery War", href: "/paket-outbound#packages" },
  { icon: Tent, label: "Camping/Glamping", href: "/paket-outbound#packages" },
  { icon: Users, label: "Team Building", href: "/paket-outbound#packages" },
];

interface ServiceCategoriesProps {
  title?: string;
  className?: string;
}

export function ServiceCategories({
  title = "Aktivitas Outbound & Team Building",
  className,
}: ServiceCategoriesProps) {
  return (
    <section
      id="layanan"
      className={cn(
        "relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-4 py-16 sm:px-6 lg:px-8",
        "bg-linear-to-b from-emerald-50/60 to-transparent dark:from-emerald-950/20 dark:to-transparent",
        className
      )}
    >
      <h2 className="mb-12 text-center text-2xl font-bold text-foreground sm:text-3xl">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {categories.map(({ icon: Icon, label, href }) => (
          <Link
            key={label}
            href={href}
            className="group flex items-center gap-3 rounded-full border border-emerald-200/60 bg-white px-5 py-3 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:border-emerald-400/80 hover:bg-emerald-50/80 hover:shadow-md hover:shadow-emerald-500/10 dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:ring-white/5 dark:hover:border-emerald-600/60 dark:hover:bg-emerald-900/40"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-200 group-hover:text-emerald-800 dark:bg-emerald-800/50 dark:text-emerald-300 dark:group-hover:bg-emerald-700/60 dark:group-hover:text-emerald-200">
              <Icon className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-foreground">{label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
