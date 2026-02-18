"use client";

import Image from "next/image";
import { contact } from "@/lib/constants";

interface FloatingWhatsAppProps {
  message?: string;
  className?: string;
}

const DEFAULT_MESSAGE =
  "Halo, saya tertarik dengan layanan outbound Zodra Outing. Bisa info lebih detail?";

export function FloatingWhatsApp({ message, className }: FloatingWhatsAppProps) {
  const text = message ?? DEFAULT_MESSAGE;
  const url = `${contact.whatsappUrl}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:bg-[#20BD5A] hover:shadow-xl ${className ?? ""}`}
      aria-label="Chat via WhatsApp"
    >
      <Image
        src="/icon/whatsapp.png"
        alt="WhatsApp"
        width={28}
        height={28}
        className="brightness-0 invert"
      />
    </a>
  );
}
