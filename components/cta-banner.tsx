import Image from "next/image";
import { MountainSilhouette } from "@/components/mountain-silhouette";
import { contact } from "@/lib/constants";
import { cn } from "@/lib/utils";

const CUSTOM_PROPOSAL_MESSAGE =
  "Halo, saya ingin minta proposal custom untuk paket outbound sesuai budget kantor kami. Bisa dibantu?";

interface CtaBannerProps {
  buttonText?: string;
  className?: string;
  /** Match Kontak / teal-forward pages; default keeps emerald for rest of site */
  palette?: "emerald" | "teal";
}

export function CtaBanner({
  buttonText = "Minta Proposal Custom",
  className,
  palette = "emerald",
}: CtaBannerProps) {
  const url = `${contact.whatsappUrl}?text=${encodeURIComponent(CUSTOM_PROPOSAL_MESSAGE)}`;

  return (
    <section
      id="cta-proposal"
      className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 ${className ?? ""}`}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl px-8 py-14 text-center shadow-2xl sm:px-14 sm:py-20",
          palette === "teal"
            ? "bg-linear-to-b from-teal-800 via-teal-700 to-cyan-900 shadow-teal-950/35"
            : "bg-linear-to-b from-emerald-800 via-emerald-700 to-teal-800 shadow-emerald-950/30"
        )}
      >
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
            className={cn(
              "mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold shadow-lg ring-2 ring-white/10 transition-all hover:scale-105 hover:shadow-xl",
              palette === "teal"
                ? "text-teal-700 hover:bg-teal-50 hover:shadow-teal-900/25"
                : "text-emerald-700 hover:bg-emerald-50 hover:shadow-emerald-900/20"
            )}
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
