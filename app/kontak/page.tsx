import type { Metadata } from "next";
import { Fragment } from "react";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { contact } from "@/lib/constants";
import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  Compass,
  Mail,
  MapPin,
  Trees,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi Zodra Adventure untuk reservasi paket outing Bandung dan outbound. WhatsApp: ${contact.whatsapp}. Respons cepat.`,
};

const WHATSAPP_MESSAGE =
  "Halo Zodra Adventure! Kami rencana outing/offroad di Bandung. Bisa bantu cek ketersediaan tanggal dan paket?";

const mapsUrl =
  "https://www.google.com/maps?cid=8845003114080669947&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAEYASAB&hl=id&gl=ID&source=embed";

const contactCardBase =
  "group flex flex-col rounded-2xl border border-teal-900/[0.07] bg-white p-5 text-left shadow-[0_1px_3px_rgba(13,148,136,0.07)] transition-all duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/40 focus-visible:ring-offset-2 dark:border-white/9 dark:bg-teal-950/45 dark:shadow-[0_1px_3px_rgba(0,0,0,0.2)] dark:focus-visible:ring-teal-400/40 dark:focus-visible:ring-offset-teal-950";

const contactCardEmail =
  `${contactCardBase} hover:border-teal-500/30 hover:shadow-[0_12px_40px_-16px_rgba(20,184,166,0.22)] dark:hover:border-teal-400/35 dark:hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.45)]`;

const contactCardMaps =
  `${contactCardBase} hover:border-amber-500/35 hover:shadow-[0_12px_40px_-16px_rgba(245,158,11,0.2)] dark:hover:border-amber-400/35 dark:hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.45)]`;

const iconWellEmail =
  "flex size-12 shrink-0 items-center justify-center rounded-xl bg-teal-600/[0.11] text-teal-700 transition-transform duration-200 group-hover:scale-[1.02] dark:bg-teal-400/15 dark:text-teal-300";

const iconWellMaps =
  "flex size-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/[0.12] text-amber-800 transition-transform duration-200 group-hover:scale-[1.02] dark:bg-amber-400/15 dark:text-amber-200";

const heroTitle = "Hubungi Base Camp Zodra untuk Petualangan Tim Anda";
const heroHighlight = "Petualangan";

function HeroTitle() {
  if (!heroTitle.includes(heroHighlight)) {
    return <>{heroTitle}</>;
  }
  const parts = heroTitle.split(heroHighlight);
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && (
        <span className="text-teal-600 dark:text-teal-400">
          {heroHighlight}
        </span>
      )}
    </Fragment>
  ));
}

export default function KontakPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-teal-950/10 bg-linear-to-b from-teal-50/80 via-cyan-50/30 to-background py-12 sm:py-16 dark:border-teal-800/20 dark:from-teal-950/40 dark:via-teal-950/25 dark:to-background">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-amber-500/15 via-teal-500/10 to-transparent dark:from-amber-500/10 dark:via-teal-500/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-1/4 h-64 w-64 rounded-full bg-teal-600/10 blur-3xl dark:bg-teal-500/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-teal-600/10 blur-3xl dark:bg-teal-500/10"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 grid-cols-1 lg:gap-12 xl:gap-16">
            <div className="flex min-w-0 flex-col gap-8">
              <div className="text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-teal-700/20 bg-white/70 px-4 py-1.5 text-sm font-semibold text-teal-900 shadow-sm shadow-teal-900/5 backdrop-blur-sm dark:border-teal-600/30 dark:bg-teal-950/60 dark:text-teal-100">
                  <Trees
                    className="h-4 w-4 text-teal-600 dark:text-teal-400"
                    aria-hidden
                  />
                  <Compass
                    className="h-4 w-4 text-amber-600 dark:text-amber-400"
                    aria-hidden
                  />
                  Base camp · Bandung
                </span>
                <h1 className="mt-5 text-3xl font-bold tracking-tight text-teal-950 dark:text-teal-50 sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
                  <HeroTitle />
                </h1>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-teal-900/80 dark:text-teal-200/85 sm:text-lg">
                  Mau nego rute offroad, jadwal tim, atau proposal custom? Tim
                  lapangan kami siap bantu merencanakan outing Bandung yang
                  kompak dan berkesan.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <WhatsAppCta variant="card" message={WHATSAPP_MESSAGE} />
                <a href={`mailto:${contact.email}`} className={contactCardEmail}>
                  <div className="flex items-start gap-4">
                    <span className={iconWellEmail}>
                      <Mail className="size-[1.35rem]" aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <h3 className="text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-teal-800/70 dark:text-teal-300/80">
                        Email
                      </h3>
                      <p className="mt-1.5 break-all text-base font-medium tracking-tight text-teal-950 dark:text-teal-50">
                        {contact.email}
                      </p>
                      <p className="mt-1 text-sm leading-snug text-teal-800/65 dark:text-teal-200/70">
                        Cocok untuk proposal & lampiran
                      </p>
                    </div>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 transition-colors group-hover:text-teal-800 dark:text-teal-400 dark:group-hover:text-teal-300">
                    Kirim brief & lampiran
                    <ArrowUpRight
                      className="size-4 shrink-0 opacity-60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      aria-hidden
                    />
                  </span>
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactCardMaps}
                >
                  <div className="flex items-start gap-4">
                    <span className={iconWellMaps}>
                      <MapPin className="size-[1.35rem]" aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <h3 className="text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-teal-800/70 dark:text-teal-300/80">
                        Kantor
                      </h3>
                      <p className="mt-1.5 text-sm font-medium text-teal-950 dark:text-teal-50">
                        {contact.company}
                      </p>
                      <p className="mt-1 text-sm leading-snug text-teal-800/70 dark:text-teal-200/75">
                        {contact.address}
                      </p>
                    </div>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-800 transition-colors group-hover:text-amber-900 dark:text-amber-400 dark:group-hover:text-amber-300">
                    Buka di Google Maps
                    <ArrowUpRight
                      className="size-4 shrink-0 opacity-60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      aria-hidden
                    />
                  </span>
                </a>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Media sosial
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={contact.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal-200/80 bg-white text-teal-700 shadow-sm transition-all hover:border-teal-400 hover:bg-teal-50 hover:text-teal-800 dark:border-teal-800/60 dark:bg-teal-950/40 dark:text-teal-300 dark:hover:border-teal-600 dark:hover:bg-teal-900/50"
                      aria-label="Facebook Zodra Adventure"
                    >
                      <svg
                        className="h-[18px] w-[18px]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href={contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal-200/80 bg-white text-teal-700 shadow-sm transition-all hover:border-teal-400 hover:bg-teal-50 hover:text-teal-800 dark:border-teal-800/60 dark:bg-teal-950/40 dark:text-teal-300 dark:hover:border-teal-600 dark:hover:bg-teal-900/50"
                      aria-label="Instagram Zodra Adventure"
                    >
                      <svg
                        className="h-[18px] w-[18px]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-teal-800/25 bg-linear-to-b from-teal-950 via-teal-900 to-cyan-950 py-16 text-teal-50">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-linear-to-b from-amber-500/12 to-transparent"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-500/90">
              <Zap className="h-4 w-4 text-amber-400" aria-hidden />
              Respons & pengalaman
            </span>
            <h2 className="mt-3 text-xl font-bold text-teal-50 sm:text-2xl">
              Balasan cepat dari tim yang sudah terbiasa di lapangan
            </h2>
            <p className="mt-2 text-sm text-teal-200/85 sm:text-base">
              Lebih dari satu dekade melayani outing & outbound Bandung, dengan
              ratusan klien perusahaan yang kami dampingi dari chat pertama
              sampai hari H.
            </p>
          </div>
          <ul className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
            {[
              {
                icon: Zap,
                stat: "Respons cepat",
                body: "Pertanyaan jadwal, paket, dan ketersediaan kami tangani lewat WhatsApp di jam kerja—supaya tim Anda dapat jawaban tanpa nunggu lama.",
              },
              {
                icon: CalendarDays,
                stat: "10+ tahun",
                body: "Pengalaman memadukan safety, logistik, dan energi tim di berbagai skala acara—dari gathering kantor hingga program outbound penuh.",
              },
              {
                icon: Building2,
                stat: "500+ perusahaan",
                body: "Perusahaan, institusi, dan komunitas telah mempercayakan outing mereka kepada kami; pola yang sama kami bawa ke percakapan dengan tim Anda.",
              },
            ].map(({ icon: Icon, stat, body }) => (
              <li
                key={stat}
                className="flex flex-col rounded-2xl border border-teal-700/35 bg-teal-900/35 p-5 text-left shadow-inner shadow-black/10 backdrop-blur-sm transition-colors hover:border-amber-500/25 hover:bg-teal-900/50 sm:p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 ring-1 ring-amber-400/20">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-4 text-lg font-bold tracking-tight text-teal-50">
                  {stat}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-teal-200/90">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
