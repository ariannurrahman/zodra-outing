import Image from "next/image";
import { contact } from "@/lib/constants";

const CUSTOM_PROPOSAL_MESSAGE =
  "Halo, saya ingin minta proposal custom untuk paket outbound sesuai budget kantor kami. Bisa dibantu?";

interface CtaBannerProps {
  buttonText?: string;
  className?: string;
}

export function CtaBanner({
  buttonText = "Minta Proposal Custom",
  className,
}: CtaBannerProps) {
  const url = `${contact.whatsappUrl}?text=${encodeURIComponent(CUSTOM_PROPOSAL_MESSAGE)}`;

  return (
    <section
      id="cta-proposal"
      className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 ${className ?? ""}`}
    >
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-600 via-teal-600 to-emerald-700 px-8 py-14 text-center shadow-2xl shadow-emerald-900/20 sm:px-14 sm:py-20">
        {/* Decorative circles */}
        <div className="absolute -left-2 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-white/5" />
        <div className="absolute -right-2 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-white/5" />
        <div className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />

        <div className="relative">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white/95 backdrop-blur-sm">
            Gratis & tanpa biaya
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Belum nemu paket yang pas?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-lg text-white/90 sm:text-xl">
            Kita buatkan proposal custom sesuai budget kantor Anda.
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-emerald-700 shadow-lg ring-2 ring-white/10 transition-all hover:scale-105 hover:bg-emerald-50 hover:shadow-xl hover:shadow-emerald-900/20"
          >
            <Image
              src="/icon/whatsapp.png"
              alt=""
              width={24}
              height={24}
              className="shrink-0"
            />
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
