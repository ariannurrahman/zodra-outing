import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { contact } from "@/lib/constants";
import { Check, Compass, Mail, MapPin, Trees } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Zodra Adventure untuk reservasi paket outing Bandung dan outbound. WhatsApp: 0895 1319 2579. Respons cepat.",
};

const WHATSAPP_MESSAGE =
  "Halo Zodra Adventure! Kami rencana outing/offroad di Bandung. Bisa bantu cek ketersediaan tanggal dan paket?";

const mapsUrl =
  "https://www.google.com/maps?cid=8845003114080669947&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAEYASAB&hl=id&gl=ID&source=embed";

const contactCardShell =
  "group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl border border-emerald-200/80 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-950/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:border-emerald-800/55 dark:bg-emerald-950/35 dark:hover:border-emerald-600/50 dark:focus-visible:ring-emerald-400";

const iconWell =
  "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-600/[0.08] text-emerald-700 ring-1 ring-emerald-600/15 transition-transform duration-300 group-hover:scale-[1.03] dark:bg-emerald-400/10 dark:text-emerald-300 dark:ring-emerald-400/20";

export default function KontakPage() {
  return (
    <>
      <Hero
        title="Hubungi Base Camp Zodra untuk Petualangan Tim Anda"
        subtitle="Mau nego rute offroad, jadwal tim, atau proposal custom? Tim lapangan kami siap bantu merencanakan outing Bandung yang kompak dan berkesan."
        highlightKeyword="Petualangan"
        showCta={true}
      />

      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-linear-to-b from-emerald-50/80 via-green-50/40 to-background py-14 dark:border-emerald-800/20 dark:from-emerald-950/40 dark:via-green-950/25 dark:to-background">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-amber-500/15 via-emerald-600/8 to-transparent dark:from-amber-500/10 dark:via-emerald-500/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-1/4 h-64 w-64 rounded-full bg-emerald-600/10 blur-3xl dark:bg-emerald-500/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-teal-600/10 blur-3xl dark:bg-teal-500/10"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-700/20 bg-white/70 px-4 py-1.5 text-sm font-semibold text-emerald-900 shadow-sm shadow-emerald-900/5 backdrop-blur-sm dark:border-emerald-600/30 dark:bg-emerald-950/60 dark:text-emerald-100">
              <Trees
                className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                aria-hidden
              />
              <Compass
                className="h-4 w-4 text-amber-600 dark:text-amber-400"
                aria-hidden
              />
              Base camp · Bandung
            </span>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50 sm:text-3xl">
              Tiga jalur menuju tim kami
            </h2>
            <p className="mt-3 text-emerald-900/75 dark:text-emerald-200/80">
              Pilih cara yang paling nyaman. Untuk reservasi cepat, WhatsApp
              tetap jalur utama kami di lapangan — seperti jejak yang paling
              jelas di hutan.
            </p>
          </div>

          <div className="relative mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            <WhatsAppCta variant="card" message={WHATSAPP_MESSAGE} />
            <a href={`mailto:${contact.email}`} className={contactCardShell}>
              <div
                className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-emerald-700 via-teal-500 to-cyan-500"
                aria-hidden
              />
              <div className="flex gap-4">
                <span className={iconWell}>
                  <Mail className="h-6 w-6" aria-hidden />
                </span>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="text-lg font-semibold tracking-tight text-emerald-950 dark:text-emerald-50">
                    Email
                  </h3>
                  <p className="mt-1 break-all text-sm leading-relaxed text-emerald-800/75 dark:text-emerald-200/80">
                    {contact.email}
                  </p>
                </div>
              </div>
              <p className="mt-auto border-t border-emerald-100 pt-4 text-sm font-medium text-teal-700 dark:border-emerald-800/50 dark:text-teal-400">
                Kirim brief & lampiran
              </p>
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${contactCardShell} sm:col-span-2 md:col-span-1`}
            >
              <div
                className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-amber-500 via-orange-500 to-amber-600"
                aria-hidden
              />
              <div className="flex gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-800 ring-1 ring-amber-500/20 transition-transform duration-300 group-hover:scale-[1.03] dark:bg-amber-400/10 dark:text-amber-200 dark:ring-amber-400/25">
                  <MapPin className="h-6 w-6" aria-hidden />
                </span>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="text-lg font-semibold tracking-tight text-emerald-950 dark:text-emerald-50">
                    Kantor
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-emerald-700/70 dark:text-emerald-400/80">
                    {contact.company}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-800/75 dark:text-emerald-200/80">
                    {contact.address}
                  </p>
                </div>
              </div>
              <p className="mt-auto border-t border-emerald-100 pt-4 text-sm font-medium text-amber-700 dark:border-emerald-800/50 dark:text-amber-400">
                Buka di Google Maps
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-emerald-800/25 bg-linear-to-b from-emerald-950 via-green-950 to-teal-950 py-16 text-emerald-50">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-linear-to-b from-amber-500/12 to-transparent"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500/90">
              <Trees className="h-4 w-4 text-emerald-400" aria-hidden />
              Cek poin sebelum chat
            </span>
            <h2 className="mt-3 text-xl font-bold text-emerald-50 sm:text-2xl">
              Biar perjalanan mulus dari chat pertama
            </h2>
            <p className="mt-2 text-sm text-emerald-200/85 sm:text-base">
              Semakin jelas infonya, semakin cepat kami arahkan ke paket dan
              jadwal yang pas.
            </p>
          </div>
          <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {[
              "Perkiraan tanggal outing & durasi (half day / 1 hari / lebih)",
              "Jumlah peserta dan profil tim (kantor, sekolah, komunitas)",
              "Lokasi atau tema yang diinginkan (offroad, outbound, gathering)",
              "Budget kasar atau referensi paket dari situs",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-emerald-700/35 bg-emerald-900/35 px-4 py-3 text-left text-sm text-emerald-50/95 shadow-inner shadow-black/10 backdrop-blur-sm transition-colors hover:border-amber-500/25 hover:bg-emerald-900/50"
              >
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-400"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
