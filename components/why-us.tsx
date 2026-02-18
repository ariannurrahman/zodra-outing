import { Shield, Award, Users, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Building2,
    title: "Legalitas Resmi & Berbadan Hukum",
    description:
      "Kami bukan freelancer. Zodra Outing beroperasi di bawah payung hukum resmi (PT/CV) dengan dokumen lengkap untuk kebutuhan administrasi & faktur pajak korporasi.",
  },
  {
    icon: Shield,
    title: 'Standar Keamanan "Zero Accident"',
    description:
      "Protokol keselamatan ketat. Seluruh peserta dilindungi asuransi, peralatan teruji standar industri, dan didampingi tim medis lapangan.",
  },
  {
    icon: Award,
    title: "Fasilitator Tersertifikasi BNSP",
    description:
      "Event Anda dipandu oleh trainer profesional yang tidak hanya seru, tapi juga terlatih dalam manajemen risiko dan dinamika kelompok (Team Building).",
  },
  {
    icon: Users,
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
  title = "Kenapa 500+ Perusahaan Memilih Zodra Outing?",
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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:items-start">
        {benefitsWithYear.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div
              key={benefit.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-linear-to-b from-card to-muted/30 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5"
            >
              <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500/20 to-teal-500/20 transition-colors group-hover:from-emerald-500/30 group-hover:to-teal-500/30">
                <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="min-h-11">
                <h3 className="text-base font-bold leading-tight text-foreground">
                  {benefit.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
