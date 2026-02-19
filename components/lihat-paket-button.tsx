"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BUTTON_CLASS =
  "inline-flex items-center rounded-full border-2 border-white bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-emerald-700";

export function LihatPaketButton() {
  const pathname = usePathname();
  const isPaketOutbound = pathname === "/paket-outbound";

  const scrollToPackages = () => {
    const el = document.getElementById("packages");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  if (isPaketOutbound) {
    return (
      <button
        type="button"
        onClick={scrollToPackages}
        className={BUTTON_CLASS}
      >
        Lihat Paket
      </button>
    );
  }

  return (
    <Link href="/paket-outbound" className={BUTTON_CLASS}>
      Lihat Paket
    </Link>
  );
}
