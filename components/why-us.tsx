import { Shield, Mountain, Compass, TreePine } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Mountain,
    title: "Legalitas Resmi & Berbadan Hukum",
    description:
      "Kami bukan freelancer. Zodra Adventure beroperasi di bawah payung hukum resmi (PT/CV) dengan dokumen lengkap untuk kebutuhan administrasi & faktur pajak korporasi.",
  },
  {
    icon: Shield,
    title: 'Standar Keamanan "Zero Accident"',
    description:
      "Protokol keselamatan ketat. Seluruh peserta dilindungi asuransi, peralatan teruji standar industri, dan didampingi tim medis lapangan.",
  },
  {
    icon: Compass,
    title: "Fasilitator Tersertifikasi BNSP",
    description:
      "Event Anda dipandu oleh trainer profesional yang tidak hanya seru, tapi juga terlatih dalam manajemen risiko dan dinamika kelompok (Team Building).",
  },
  {
    icon: TreePine,
    title: "Terpercaya Sejak 2015",
    description:
      "Menjadi mitra andalan BUMN, Perbankan, dan Startup Unicorn. Kami menggaransi event gathering yang rapi, on-time, dan berkesan.",
  },
];

interface WhyUsProps {
  title?: string;
  sinceYear?: number;
  className?: string;
}

export function WhyUs({
  title = "Kenapa 500+ Perusahaan Memilih Zodra Adventure?",
  sinceYear = 2015,
  className,
}: WhyUsProps) {
  const benefitsWithYear = benefits.map((b) =>
    b.title.startsWith("Terpercaya Sejak")
      ? { ...b, title: `Terpercaya Sejak ${sinceYear}` }
      : b
  );

  return (
    <section
      id="why-us"
      className={cn("mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8", className)}
    >
      <h2 className="mb-12 text-center text-2xl font-bold text-foreground sm:text-3xl">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:items-start">
        {benefitsWithYear.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div
              key={benefit.title}
              className="group relative h-full flex flex-col overflow-hidden rounded-2xl border border-emerald-200/50 bg-linear-to-b from-emerald-50/50 to-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-lg hover:shadow-emerald-500/10 dark:border-emerald-900/30 dark:from-emerald-950/20 dark:to-card dark:hover:border-emerald-700/50"
            >
              {/* Subtle leaf accent */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-emerald-200/20 dark:bg-emerald-800/10" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-700 transition-colors group-hover:bg-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-hover:bg-emerald-500/20">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-h-8">
                  <h3 className="text-base font-bold leading-tight text-foreground">
                    {benefit.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
