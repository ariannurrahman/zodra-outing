import Link from "next/link";
import { Waves, Target, Car, Swords, Tent, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { icon: Waves, label: "Rafting", href: "/paket-outbound" },
  { icon: Target, label: "Paintball", href: "/paket-outbound" },
  { icon: Car, label: "Offroad Land Rover", href: "/paket-outbound" },
  { icon: Swords, label: "Archery War", href: "/paket-outbound" },
  { icon: Tent, label: "Camping/Glamping", href: "/paket-outbound" },
  { icon: Users, label: "Team Building", href: "/paket-outbound" },
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
      className={cn("mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8", className)}
    >
      <h2 className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {categories.map(({ icon: Icon, label, href }) => (
          <Link
            key={label}
            href={href}
            className="group flex flex-col items-center rounded-xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-md"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500/20 to-teal-500/20 transition-colors group-hover:from-emerald-500/30 group-hover:to-teal-500/30">
              <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-center text-sm font-semibold text-foreground">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
