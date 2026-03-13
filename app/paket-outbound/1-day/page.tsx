import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { PackageDetailCard } from "@/components/package-detail-card";
import { paketOutboundByType } from "@/lib/packages";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Paket Outbound 1 Day Bandung | Outing Kantor & Team Building",
  description:
    "Paket outbound 1 hari Bandung mulai Rp. 150.000. Outing kantor, employee gathering, team building: paintball, highrope, offroad Cikole, rafting Pangalengan. Lokasi Lembang, Ciwidey, Ciater. Konsultasi gratis.",
};

export default async function OneDayCategoryPage() {
  const cat = paketOutboundByType.find((c) => c.categorySlug === "1-day");
  const packages = cat?.packages ?? [];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/paket-outbound"
        className="text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        ← Kembali ke Paket
      </Link>

      <div className="mx-auto mt-8 max-w-3xl">
        <div className="flex flex-col md:flex-row md:justify-between items-center justify-center gap-2">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Paket Outbound 1 Day Bandung
          </h1>
          <WhatsAppCta
            variant="link"
            message="Halo, saya ingin konsultasi Paket Outbound 1 Day Bandung untuk tim kami. Bisa dapat penawaran hari ini?"
          />
        </div>
        <p className="mt-4 text-muted-foreground">
          Paket Outbound Bandung 1 Hari (Low Team Building) ideal untuk{" "}
          <strong className="text-foreground">outing kantor</strong>,{" "}
          <strong className="text-foreground">employee gathering</strong>, dan{" "}
          <strong className="text-foreground">team building</strong>. Pilih
          aktivitas sesuai kebutuhan: paintball, highrope, offroad Cikole,
          rafting Pangalengan, atau kombinasi. Mulai dari setengah hari hingga
          full day, fleksibel untuk budget dan jadwal tim Anda.
        </p>

        <div className="mt-6 rounded-xl border border-border/60 bg-muted/30 p-4">
          <h2 className="text-lg font-semibold text-foreground">
            Sudah termasuk dalam paket:
          </h2>
          <ul className="mt-2 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
            <li>• 1 x Makan siang</li>
            <li>• 1 x Snack Tradisional</li>
            <li>• Asuransi (Rafting, Paintball)</li>
            <li>• Dokumentasi foto</li>
            <li>• Spanduk kegiatan</li>
            <li>• Air mineral</li>
          </ul>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Lokasi kegiatan outbound Bandung dapat disesuaikan dengan permintaan
          Anda. Area yang kami layani:{" "}
          <strong className="text-foreground">
            Lembang, Ciwidey, dan Pangalengan
          </strong>
          , semua dengan akses mudah dari Bandung.
        </p>

        <div className="mt-6 flex justify-center md:justify-between flex-wrap items-center gap-4">
          <p className="text-xl font-semibold text-primary">
            Mulai Rp. 150.000 <span className="text-sm font-normal text-muted-foreground">/pax</span>
          </p>
          <WhatsAppCta
            variant="button"
            message="Halo, saya ingin konsultasi Paket Outbound 1 Day Bandung untuk tim kami. Bisa dapat penawaran hari ini?"
          >
            Dapat Penawaran Gratis
          </WhatsAppCta>
        </div>
      </div>

      <section className="mt-20 w-full">
        <div className="mb-10 rounded-2xl border border-border/50 bg-muted/20 px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {packages.length} paket tersedia
              </span>
              <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                Pilih Paket Outing Kantor & Team Building
              </h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Pilih aktivitas yang paling sesuai dengan tujuan tim Anda, dari
                paket hemat halfday hingga kombinasi paintball, offroad, dan
                rafting.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg) => (
            <PackageDetailCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </section>
      <CtaBanner />
    </div>
  );
}
