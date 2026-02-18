import Link from "next/link";
import { WhatsAppCta } from "@/components/whatsapp-cta";

interface HeroProps {
  title?: string;
  subtitle?: string;
  showCta?: boolean;
}

export function Hero({
  title = "Petualangan Outbound Tak Terlupakan",
  subtitle = "Rasakan pengalaman outbound yang mendidik dan menyenangkan bersama tim Anda. Kami menyediakan paket outbound profesional untuk perusahaan, sekolah, dan komunitas.",
  showCta = true,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-primary/5 via-background to-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {subtitle}
          </p>
          {showCta && (
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <WhatsAppCta variant="button" />
              <Link
                href="/paket-outbound"
                className="inline-flex items-center rounded-full border-2 border-primary px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Lihat Paket
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
