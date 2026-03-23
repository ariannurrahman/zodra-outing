import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { contact } from "@/lib/constants";
import { Check, Compass, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Zodra Adventure untuk reservasi paket outing Bandung dan outbound. WhatsApp: 0895 1319 2579. Respons cepat.",
};

const WHATSAPP_MESSAGE =
  "Halo Zodra Adventure! Kami rencana outing/offroad di Bandung. Bisa bantu cek ketersediaan tanggal dan paket?";

const mapsUrl =
  "https://www.google.com/maps?cid=8845003114080669947&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAEYASAB&hl=id&gl=ID&source=embed";

const cardBase =
  "flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-emerald-500/40 hover:shadow-md hover:shadow-emerald-900/5 dark:hover:border-emerald-400/30";

export default function KontakPage() {
  return (
    <>
      <Hero
        title="Hubungi Base Camp Zodra untuk Petualangan Tim Anda"
        subtitle="Mau nego rute offroad, jadwal tim, atau proposal custom? Tim lapangan kami siap bantu merencanakan outing Bandung yang kompak dan berkesan."
        highlightKeyword="Petualangan"
        showCta={true}
      />

      <section className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-x-0 -top-8 h-32 bg-linear-to-b from-emerald-600/10 to-transparent dark:from-emerald-500/15"
          aria-hidden
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-50/80 px-4 py-1.5 text-sm font-semibold text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-950/50 dark:text-emerald-200">
            <Compass
              className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
              aria-hidden
            />
            Base camp · Bandung
          </span>
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Tiga jalur menuju tim kami
          </h2>
          <p className="mt-3 text-muted-foreground">
            Pilih cara yang paling nyaman. Untuk reservasi cepat, WhatsApp tetap
            jalur utama kami di lapangan.
          </p>
        </div>

        <div className="relative mt-12 grid gap-6 md:grid-cols-3">
          <WhatsAppCta
            variant="card"
            message={WHATSAPP_MESSAGE}
            className="rounded-2xl border-emerald-600/20 bg-linear-to-b from-emerald-50/50 to-card hover:border-emerald-600/50 dark:from-emerald-950/40"
          />
          <a
            href={`mailto:${contact.email}`}
            className={`${cardBase} group`}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700 transition-colors group-hover:bg-emerald-600/20 dark:text-emerald-400">
              <Mail className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="mt-4 font-semibold text-foreground">Email</h3>
            <p className="mt-2 text-sm text-muted-foreground">{contact.email}</p>
            <p className="mt-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              Kirim brief & lampiran
            </p>
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cardBase} group`}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700 transition-colors group-hover:bg-emerald-600/20 dark:text-emerald-400">
              <MapPin className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="mt-4 font-semibold text-foreground">Kantor</h3>
            <p className="mt-1 text-xs font-medium text-muted-foreground">
              {contact.company}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{contact.address}</p>
            <p className="mt-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              Buka di Google Maps
            </p>
          </a>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-14 dark:bg-muted/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">
              Biar perjalanan mulus dari chat pertama
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
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
                className="flex gap-3 rounded-xl border border-border bg-card px-4 py-3 text-left text-sm text-foreground shadow-sm"
              >
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400"
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
