import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { PackageDetailCard } from "@/components/package-detail-card";
import { paketOutboundByType } from "@/lib/packages";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Paket Outbound 2D1N Bandung | Outing Kantor & Family Gathering",
  description:
    "Paket outbound 2 hari 1 malam Bandung mulai Rp. 650.000. Outing kantor, employee gathering, team building dengan highrope, rappelling, flying fox. Lokasi Lembang, Ciwidey, Pangalengan. Dokumentasi drone included.",
};

const hotelPrices = [
  { name: "Narima Hotel", price: "Rp. 650.000" },
  { name: "Grafika Cikole", price: "Rp. 750.000" },
  { name: "Panorama Hotel", price: "Rp. 800.000" },
  { name: "Kastuba Resort", price: "Rp. 1.000.000" },
];

const inclusions = [
  "Penginapan 1 malam di Hotel/Cottage",
  "Makan 3x + Snack 2x",
  "Team Building Games, Leadership Games",
  "Ice Breaking Games, Master game, Highrope Games",
  "Fasilitator",
  "Sound system, Sewa lahan",
  "Electone + Singer MC, Spanduk kegiatan",
  "Dokumentasi, Liputan Video Drone",
];

export default async function TwoD1NCategoryPage() {
  const cat = paketOutboundByType.find((c) => c.categorySlug === "2d1n");
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
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">
            Paket Outbound 2D1N Bandung
          </h1>
          <WhatsAppCta
            variant="link"
            message="Halo, saya ingin konsultasi Paket Outbound 2D1N Bandung untuk tim kami. Bisa dapat penawaran hari ini?"
          />
        </div>

        <p className="mt-4 text-muted-foreground">
          Paket Outbound Bandung 2 Hari 1 Malam (Family Gathering) pada program
          Outbound Gathering 2 hari 1 malam lebih fokus pada Games/Permainan
          Outbound. Ideal untuk{" "}
          <strong className="text-foreground">outing kantor</strong>,{" "}
          <strong className="text-foreground">employee gathering</strong>, dan{" "}
          <strong className="text-foreground">team building</strong> dengan
          kegiatan Adventures Games Highrope: Two Line Bridges, Rappelling,
          Flying Fox.
        </p>

        <p className="mt-4 text-muted-foreground">
          Hari pertama diisi dengan Ice Breaking Games dan Low Team Building
          Games, sedangkan Adventure Games dilakukan di hari kedua. Kegiatan
          malam hari diisi dengan hiburan musik yang bisa disesuaikan dengan
          permintaan klien.
        </p>

        <div className="mt-6 rounded-xl border border-border/60 bg-muted/30 p-4">
          <h2 className="text-lg font-semibold text-foreground">
            Sudah termasuk dalam paket:
          </h2>
          <ul className="mt-2 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
            {inclusions.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-foreground">
            Harga Paket (per Pax) — Pilih Hotel:
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {hotelPrices.map((hotel) => (
              <div
                key={hotel.name}
                className="flex items-center justify-between rounded-xl border border-border/60 bg-card/50 px-4 py-3"
              >
                <span className="font-medium text-foreground">{hotel.name}</span>
                <span className="font-semibold text-primary">{hotel.price}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Lokasi program dan games Paket Outbound Bandung 2 Hari 1 Malam dapat
          disesuaikan dengan permintaan klien. Area yang kami layani:{" "}
          <strong className="text-foreground">
            Lembang, Ciwidey, dan Pangalengan
          </strong>
          —semua dengan akses mudah dari Bandung.
        </p>

        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
          <h3 className="font-semibold text-foreground">
            Dokumentasi Video Drone
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Setiap kegiatan mendapatkan dokumentasi Video Drone dengan hasil
            tampak sinematik dan berkualitas tinggi. Peserta akan merasa lebih
            puas karena momen-momen penting terekam secara luas dan dramatis.
          </p>
        </div>

        <div className="mt-6 flex justify-center md:justify-between flex-wrap items-center gap-4">
          <p className="text-xl font-semibold text-primary">
            Mulai Rp. 650.000{" "}
            <span className="text-sm font-normal text-muted-foreground">
              /pax
            </span>
          </p>
          <WhatsAppCta
            variant="button"
            message="Halo, saya ingin konsultasi Paket Outbound 2D1N Bandung untuk tim kami. Bisa dapat penawaran hari ini?"
          >
            Dapat Penawaran Gratis
          </WhatsAppCta>
        </div>
      </div>

      <section className="mt-20 w-full">
        <div className="mb-10 rounded-2xl border border-border/50 bg-muted/20 px-6 py-8 sm:px-8">
          <div>
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {packages.length} paket tersedia
            </span>
            <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
              Pilih Paket Outbound 2 Hari 1 Malam
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Pengalaman outbound lengkap dengan menginap—games, highrope
              adventure, dan malam keakraban.
            </p>
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
