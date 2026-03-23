import type { LucideIcon } from "lucide-react";
import { Map, Mountain, Tent, TreePine, Users } from "lucide-react";
import { MountainSilhouette } from "@/components/mountain-silhouette";

const groups: {
  title: string;
  items: readonly string[];
  icon: LucideIcon;
  accent: string;
}[] = [
    {
      title: "Corporate Gathering",
      items: [
        "Employee Gathering",
        "Family Gathering",
        "Corporate Anniversary",
        "Business Partner Gathering",
      ],
      icon: Users,
      accent: "from-amber-300/30 to-transparent",
    },
    {
      title: "Corporate Training",
      items: [
        "Leadership Training",
        "Personal Development",
        "Team Development",
        "The Miracle of Teamwork",
      ],
      icon: Mountain,
      accent: "from-white/25 to-transparent",
    },
    {
      title: "Outing Organizing",
      items: [
        "Team Bonding Journey",
        "Fun Outdoor Games",
        "Amazing Race",
        "Treasure Hunt",
      ],
      icon: Map,
      accent: "from-teal-200/25 to-transparent",
    },
    {
      title: "Adventure Challenge",
      items: ["Offroad", "Rafting", "Paintball", "Corporate Outdoor Camp"],
      icon: Tent,
      accent: "from-amber-200/25 to-transparent",
    },
  ];

export function ProgramOfferings() {
  return (
    <div className="overflow-hidden pb-16">
      <div className="relative overflow-hidden bg-linear-to-b from-emerald-800 via-emerald-700 to-teal-800 shadow-2xl shadow-emerald-950/30">
        <MountainSilhouette />

        <div className="relative mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-12">
          <header className="mb-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-amber-100 backdrop-blur-sm">
              <TreePine className="h-4 w-4 shrink-0 text-amber-300" aria-hidden />
              Alam & petualangan
            </span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Layanan & Program
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
              Dari gathering korporat sampai tantangan outdoor—semuanya dirancang
              untuk tim yang ingin keluar zona nyaman dan merasakan energi hutan
              pinus & jalur offroad.
            </p>
          </header>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {groups.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg shadow-black/10 backdrop-blur-sm transition duration-300 hover:border-white/30 hover:bg-white/15"
                >
                  <div
                    className={`pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-linear-to-br ${group.accent} blur-2xl`}
                    aria-hidden
                  />
                  <div className="relative flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-amber-200 ring-1 ring-white/10">
                      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <h4 className="text-sm font-bold leading-snug text-white">
                        {group.title}
                      </h4>
                    </div>
                  </div>
                  <ul className="relative mt-5 space-y-2.5 border-t border-white/20 pt-5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm">
                        <span
                          className="mt-1.5 h-0 w-0 shrink-0 border-y-[3px] border-l-[5px] border-y-transparent border-l-amber-300/90"
                          aria-hidden
                        />
                        <span className="leading-snug text-white/90 transition-colors group-hover:text-white">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
