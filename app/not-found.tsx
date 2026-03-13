import Link from "next/link";
import { Home, MapPin } from "lucide-react";
import { WhatsAppCta } from "@/components/whatsapp-cta";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
      <div className="text-center">
        <p className="text-8xl font-bold text-primary/20">404</p>
        <h1 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
          Halaman Tidak Ditemukan | Paket Outbound Bandung
        </h1>
        <p className="mx-auto mt-2 max-w-md text-muted-foreground">
          Halaman yang Anda cari tidak ada. Temukan paket outing & team building
          Bandung terbaik—mulai Rp. 150.000. Konsultasi gratis via WhatsApp.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4">

          <div className="flex flex-row gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Home className="h-4 w-4" />
              Kembali ke Beranda
            </Link>
            <Link
              href="/paket-outbound"
              className="flex items-center gap-2 rounded-xl border border-border/60 bg-card px-6 py-3 font-semibold text-foreground transition-colors hover:bg-muted/50"
            >
              <MapPin className="h-4 w-4" />
              Lihat Paket Outbound
            </Link>
          </div>
          <WhatsAppCta
            variant="button"
            message="Halo, saya tersesat di halaman 404. Saya tertarik dengan paket outbound Bandung. Bisa info lebih detail?"
          >
            Konsultasi via WhatsApp
          </WhatsAppCta>
        </div>
      </div>
    </div>
  );
}
