import Image from "next/image";
import { contact } from "@/lib/constants";

const CUSTOM_PROPOSAL_MESSAGE =
  "Halo, saya ingin minta proposal custom untuk paket outbound sesuai budget kantor kami. Bisa dibantu?";

interface CtaBannerProps {
  buttonText?: string;
  className?: string;
}

/** Mountain silhouette for nature/adventure feel */
function MountainSilhouette() {
  return (
    <svg
      className="absolute bottom-0 left-0 right-0 h-24 w-full text-emerald-900/30 sm:h-32"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M0 120 L0 60 L150 100 L300 40 L450 80 L600 20 L750 70 L900 35 L1050 60 L1200 50 L1200 120 Z"
      />
      <path
        fill="currentColor"
        opacity="0.7"
        d="M0 120 L0 80 L200 100 L400 60 L600 90 L800 50 L1000 70 L1200 60 L1200 120 Z"
      />
    </svg>
  );
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
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-b from-emerald-800 via-emerald-700 to-teal-800 px-8 py-14 text-center shadow-2xl shadow-emerald-950/30 sm:px-14 sm:py-20">
        {/* Mountain silhouette */}
        <MountainSilhouette />

        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-amber-100 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Gratis & tanpa biaya
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Belum nemu paket yang pas?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-lg text-white/90 sm:text-xl">
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
