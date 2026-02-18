import Image from "next/image";
import { contact } from "@/lib/constants";

const CUSTOM_PROPOSAL_MESSAGE =
  "Halo, saya ingin minta proposal custom untuk paket outbound sesuai budget kantor kami. Bisa dibantu?";

interface CtaBannerProps {
  title?: string;
  buttonText?: string;
  className?: string;
}

export function CtaBanner({
  title = "Belum nemu paket yang pas? Kita buatkan proposal custom sesuai budget kantor Anda.",
  buttonText = "Minta Proposal Custom",
  className,
}: CtaBannerProps) {
  const url = `${contact.whatsappUrl}?text=${encodeURIComponent(CUSTOM_PROPOSAL_MESSAGE)}`;

  return (
    <section
      id="cta-proposal"
      className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 ${className ?? ""}`}
    >
      <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-12 text-center shadow-xl sm:px-12 sm:py-16">
        <p className="text-xl font-semibold text-white sm:text-2xl">
          {title}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-emerald-700 shadow-lg transition-all hover:bg-emerald-50 hover:shadow-xl"
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
    </section>
  );
}
