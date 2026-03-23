import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import {
    BookOpen,
    Compass,
    Leaf,
    MapPin,
    Mountain,
    Shield,
    Sparkles,
    Target,
    TreePine,
    Users,
} from "lucide-react";

const WHATSAPP_MESSAGE =
    "Halo Zodra Adventure! Kami ingin konsultasi program outbound & team building untuk perusahaan. Bisa bantu susun konsep, lokasi, dan estimasi?";

export const metadata: Metadata = {
    title: "Tentang Kami",
    description:
        "Zodra Adventure — MICE & penyedia outbound Bandung sejak 2010. Team building, family gathering, dan training outdoor di Cikole Lembang, Pangalengan, Ciwidey. Fasilitator berpengalaman, learning by doing.",
    openGraph: {
        title: "Tentang Zodra Adventure | MICE & Outbound Bandung sejak 2010",
        description:
            "Outbound Bandung dan team building di alam terbuka: Cikole Lembang, Pangalengan, Ciwidey. Program HR disesuaikan goal perusahaan Anda.",
    },
};

const programs = [
    "Team building",
    "Family gathering",
    "Training leadership & personal development",
    "Service excellence & mind power",
];

const locations = [
    {
        name: "Cikole & Lembang (utara)",
        detail:
            "Kawasan pegunungan dan perkebunan teh — udara sejuk, minim polusi, cocok untuk sesi fokus tim.",
    },
    {
        name: "Pangalengan & Ciwidey (selatan)",
        detail:
            "Lanskap dataran tinggi untuk aktivitas outdoor yang variatif dan pengalaman lapangan mendalam.",
    },
    {
        name: "Lokasi custom",
        detail:
            "Kami fleksibel: program dapat diadaptasi ke kebutuhan peserta dan venue yang Anda inginkan.",
    },
];

export default function TentangKamiPage() {
    return (
        <>
            <Hero
                title="Di Balik Setiap Tim Kuat, Ada Cerita di Hutan Pinus"
                subtitle="Sejak 2010, Zodra Adventure menjadi mitra MICE dan outbound Bandung untuk perusahaan, institusi, dan komunitas — dari team building hingga training leadership di alam terbuka."
                highlightKeyword="Hutan Pinus"
                showCta
            />


            {/* Programs — light “clearing in the woods” */}
            <section className="relative border-y border-emerald-800/10 bg-linear-to-b from-emerald-50/70 via-background to-teal-50/30 dark:from-emerald-950/25 dark:via-background dark:to-teal-950/15">
                <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-emerald-800/8 to-transparent dark:from-emerald-800/15"
                    aria-hidden
                />
                <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-800/20 bg-emerald-800/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:border-teal-600/30 dark:bg-teal-900/30 dark:text-teal-100">
                            <Mountain className="h-3.5 w-3.5" aria-hidden />
                            Fokus program
                        </span>
                        <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            Outbound yang menggandeng HR &amp; leadership goals
                        </h2>
                        <p className="mt-3 text-muted-foreground">
                            Kami merangkai aktivitas lapangan agar selaras dengan budaya
                            perusahaan dan outcome yang ingin Anda capai setelah kegiatan
                            selesai.
                        </p>
                    </div>
                    <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
                        {programs.map((item) => (
                            <li
                                key={item}
                                className="flex items-center gap-3 rounded-2xl border border-emerald-800/12 bg-card/80 px-4 py-3.5 text-left text-sm font-medium text-foreground shadow-sm shadow-emerald-950/5 backdrop-blur-sm dark:border-teal-700/20 dark:bg-card/60"
                            >
                                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-800/10 text-emerald-800 dark:bg-teal-800/30 dark:text-teal-200">
                                    <Leaf className="h-4 w-4" aria-hidden />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Same green stack as CtaBanner: emerald-800 → emerald-700 → teal-800 */}
            <div className="relative bg-linear-to-b from-emerald-800 via-emerald-700 to-teal-800 text-white shadow-2xl shadow-emerald-950/30">
                <div
                    className="pointer-events-none absolute inset-0 opacity-90"
                    style={{
                        backgroundImage: `radial-gradient(ellipse 85% 55% at 50% -25%, rgba(255,255,255,0.14) 0%, transparent 52%),
              radial-gradient(circle at 12% 45%, rgba(255,255,255,0.06) 0%, transparent 38%),
              radial-gradient(circle at 88% 55%, rgba(15,118,110,0.35) 0%, transparent 42%)`,
                    }}
                    aria-hidden
                />
                <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/95 backdrop-blur-sm">
                            <TreePine className="h-4 w-4 text-amber-100" aria-hidden />
                            MICE & outbound Bandung
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/95 backdrop-blur-sm">
                            <Leaf className="h-4 w-4 text-amber-100" aria-hidden />
                            Sejak 2010
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/95 backdrop-blur-sm">
                            <Users className="h-4 w-4 text-amber-100" aria-hidden />
                            Klien nasional & mancanegara
                        </span>
                    </div>
                    <h2 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        Mitra outing & pelatihan SDM di alam terbuka
                    </h2>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
                        Zodra Adventure bergerak sebagai penyelenggara MICE dengan fokus{" "}
                        <strong className="font-semibold text-white">
                            kegiatan outbound dan pengembangan tim
                        </strong>
                        . Lebih dari satu dekade kami mendampingi klien korporat dari berbagai
                        industri — di dalam negeri maupun luar negeri — dengan program yang
                        dirancang untuk memadukan pengalaman alam, interaksi tim, dan tujuan
                        bisnis Anda.
                    </p>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/85">
                        Lini layanan kami mencakup{" "}
                        <strong className="font-semibold text-white">
                            team building, family gathering,
                        </strong>{" "}
                        serta modul training seperti leadership, personal development,
                        service excellence, dan mind power — umumnya berlangsung di setting
                        outdoor agar peserta belajar sambil bergerak, bukan hanya mendengar.
                    </p>
                </div>
            </div>


            {/* Visi & Misi */}
            <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-2">
                    <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-emerald-800 via-emerald-700 to-teal-800 p-8 text-white shadow-2xl shadow-emerald-950/30 dark:border-white/15">
                        <div
                            className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl"
                            aria-hidden
                        />
                        <div className="relative flex items-center gap-2 text-amber-100">
                            <Sparkles className="h-5 w-5" aria-hidden />
                            <span className="text-sm font-semibold uppercase tracking-wider">
                                Visi
                            </span>
                        </div>
                        <h2 className="relative mt-3 text-xl font-bold text-white sm:text-2xl">
                            Terdepan dalam ide kreatif &amp; kepuasan pelanggan
                        </h2>
                        <p className="relative mt-4 text-sm leading-relaxed text-white/90 sm:text-base">
                            Menjadi perusahaan yang terdepan dan unggul — melayani serta
                            mencapai kepuasan pelanggan dengan menghadirkan konsep dan ide yang
                            segar, relevan, dan dapat diukur dampaknya bagi organisasi Anda.
                        </p>
                    </article>
                    <article className="rounded-3xl border border-border bg-card p-8 shadow-lg shadow-emerald-950/10 dark:shadow-emerald-950/25">
                        <div className="flex items-center gap-2 text-emerald-800 dark:text-teal-400">
                            <Target className="h-5 w-5" aria-hidden />
                            <span className="text-sm font-semibold uppercase tracking-wider">
                                Misi
                            </span>
                        </div>
                        <h2 className="mt-3 text-xl font-bold text-foreground sm:text-2xl">
                            Kompetensi inti, nilai korporat, tim yang profesional
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                            Meningkatkan kompetensi inti di bidang bisnis utama guna mendukung
                            pencapaian corporate value, sekaligus membangun tim kerja yang
                            profesional dan kreatif dalam menjalankan setiap proyek — dari
                            perencanaan venue hingga eksekusi di lapangan.
                        </p>
                    </article>
                </div>
            </section>

            {/* Tujuan & metode */}
            <section className="border-t border-emerald-800/10 bg-muted/25 py-16 dark:bg-muted/10">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                        <div>
                            <div className="flex items-center gap-2 text-emerald-800 dark:text-teal-400">
                                <BookOpen className="h-5 w-5" aria-hidden />
                                <span className="text-sm font-semibold uppercase tracking-wider">
                                    Tujuan outbound
                                </span>
                            </div>
                            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                                Adaptasi, profesionalisme, kinerja tim yang naik kelas
                            </h2>
                            <p className="mt-4 text-muted-foreground leading-relaxed">
                                Fokus pelatihan outbound kami adalah membantu peserta{" "}
                                <strong className="font-medium text-foreground">
                                    beradaptasi dengan perubahan
                                </strong>{" "}
                                sambil menumbuhkan profesionalisme: trust, belief, dan komitmen
                                pada standar kerja bersama. Diharapkan kinerja individu dan tim
                                menjadi lebih konsisten setelah melalui rangkaian aktivitas
                                terstruktur.
                            </p>
                        </div>
                        <div className="rounded-2xl border-l-4 border-teal-700 bg-card p-6 shadow-sm dark:border-teal-600">
                            <h3 className="font-semibold text-foreground">
                                Metode: alam terbuka &amp; learning by doing
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                Kami memanfaatkan lingkungan outdoor sebagai media latihan dan
                                refleksi, sehingga peserta terbiasa membaca dinamika internal
                                maupun eksternal — baik secara individual maupun organisasi —
                                melalui pengalaman langsung, bukan teori semata.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lokasi */}
            <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-800/20 bg-emerald-50/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-900 dark:border-teal-600/25 dark:bg-teal-950/40 dark:text-teal-100">
                        <MapPin className="h-3.5 w-3.5" aria-hidden />
                        Lokasi outbound Bandung
                    </span>
                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        Base camp di pegunungan &amp; perkebunan teh
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                        Wilayah utara dan selatan Bandung menawarkan ketinggian, udara
                        segar, dan setting alam yang mendukung fokus serta kebersamaan tim.
                    </p>
                </div>
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {locations.map((loc) => (
                        <article
                            key={loc.name}
                            className="flex flex-col rounded-2xl border border-emerald-800/12 bg-linear-to-b from-emerald-50/40 to-card p-6 shadow-md shadow-emerald-950/8 dark:border-teal-800/20 dark:from-teal-950/35 dark:to-card"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-800/10 text-emerald-800 dark:bg-teal-800/35 dark:text-teal-200">
                                <Compass className="h-5 w-5" aria-hidden />
                            </div>
                            <h3 className="mt-4 font-semibold text-foreground">{loc.name}</h3>
                            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                                {loc.detail}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Tim lapangan */}
            <section className="border-t border-emerald-800/10 bg-linear-to-b from-emerald-800 via-emerald-700 to-teal-800 py-16 text-white shadow-2xl shadow-emerald-950/30">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-3 text-amber-100 backdrop-blur-sm">
                            <Shield className="h-6 w-6" aria-hidden />
                        </div>
                        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                            Fasilitator berpengalaman &amp; prosedur keselamatan jelas
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-white/90">
                            Program didampingi fasilitator yang menguasai dinamika grup dan
                            instruktur lapangan yang terlatih dalam prosedur keamanan di alam
                            bebas — sehingga tim Anda bisa fokus belajar dan bersinergi dengan
                            tenang.
                        </p>
                        <p className="mt-4 text-sm leading-relaxed text-white/85">
                            Ingin melihat modul, durasi, dan tema yang cocok dengan goal
                            perusahaan? Kami siap mempresentasikan pilihan program dan
                            menyesuaikan konsep dengan objective HR atau leadership Anda.
                        </p>
                    </div>
                    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <WhatsAppCta variant="button" message={WHATSAPP_MESSAGE}>
                            Diskusi program via WhatsApp
                        </WhatsAppCta>
                        <Link
                            href="/paket-outbound"
                            className="inline-flex h-10 items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                        >
                            Lihat paket outbound
                        </Link>
                        <Link
                            href="/kontak"
                            className="inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium text-white/90 underline-offset-4 hover:text-white hover:underline"
                        >
                            Halaman kontak
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
