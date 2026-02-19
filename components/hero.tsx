import { Fragment } from "react";
import { LihatPaketButton } from "@/components/lihat-paket-button";
import { WhatsAppCta } from "@/components/whatsapp-cta";

interface HeroProps {
  title?: string;
  subtitle?: string;
  showCta?: boolean;
  /** Word to highlight in emerald (e.g. "Offroad") */
  highlightKeyword?: string;
}

export function Hero({
  title = "Bikin Tim Makin Kompak dengan Petualangan Offroad",
  subtitle = "Lupakan penat kantor sejenak. Rasakan sensasi menerjang hutan pinus Cikole dengan Land Rover 4x4. Pengalaman healing seru yang menyatukan tim Anda kembali.",
  showCta = true,
  highlightKeyword,
}: HeroProps) {
  const renderTitle = () => {
    if (!highlightKeyword || !title.includes(highlightKeyword)) {
      return title;
    }
    const parts = title.split(highlightKeyword);
    return parts.map((part, i) => (
      <Fragment key={i}>
        {part}
        {i < parts.length - 1 && (
          <span className="text-emerald-400">{highlightKeyword}</span>
        )}
      </Fragment>
    ));
  };
  return (
    <section className="relative h-[75vh] min-h-[400px] overflow-hidden bg-neutral-800">
      {/* Video background - autoplay, muted, no controls */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      >
        <source src="/video/zodra.mp4" type="video/mp4" />
      </video>
      {/* Overlay for readability (40–50% for accessibility) */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl">
            {renderTitle()}
          </h1>
          <p className="mt-6 text-lg font-medium leading-8 text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {subtitle}
          </p>
          {showCta && (
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <WhatsAppCta variant="button" message="Halo, saya tertarik dengan layanan outbound Zodra Outing. Bisa info lebih detail?">Konsultasi Gratis via WhatsApp</WhatsAppCta>
              <LihatPaketButton />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
