import Image from "next/image";
import { LihatPaketButton } from "@/components/lihat-paket-button";
import { WhatsAppCta } from "@/components/whatsapp-cta";

const HERO_IMAGE = "/activity/offroad-1.webp";

export function PackageHero() {
  return (
    <section className="relative h-[75vh] min-h-[400px] overflow-hidden bg-neutral-800">
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl">
            Paket Outbound
          </h1>
          <p className="mt-6 text-lg font-medium leading-8 text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Pilih paket outbound yang sesuai dengan kebutuhan tim Anda. Dari paket
            half day hingga full camping, kami siap melayani.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WhatsAppCta
              variant="button"
              message="Halo, saya tertarik dengan layanan outbound Zodra Adventure. Bisa info lebih detail?"
            >
              Konsultasi Gratis via WhatsApp
            </WhatsAppCta>
            <LihatPaketButton />
          </div>
        </div>
      </div>
    </section>
  );
}
