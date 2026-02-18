"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "Berapa minimal pax untuk paket outbound?",
    answer:
      "Minimal peserta untuk paket outbound kami adalah 10 orang. Untuk grup lebih kecil, kami dapat menyusun paket khusus. Hubungi kami via WhatsApp untuk konsultasi.",
  },
  {
    question: "Apakah harga sudah termasuk makan & dokumentasi?",
    answer:
      "Ya, sebagian besar paket kami sudah termasuk makan (sesuai pilihan paket) dan dokumentasi foto. Detail lengkap dapat dilihat di deskripsi masing-masing paket atau tanyakan langsung ke tim kami.",
  },
  {
    question: "Bisakah request lokasi di Ciwidey?",
    answer:
      "Tentu! Kami melayani request lokasi outbound di berbagai area Bandung Raya termasuk Ciwidey, Lembang, Cikole, dan sekitarnya. Silakan hubungi kami untuk diskusi kebutuhan dan ketersediaan lokasi.",
  },
  {
    question: "Apakah peserta dilindungi asuransi?",
    answer:
      "Ya, seluruh peserta outbound kami dilindungi asuransi kecelakaan. Kami menerapkan standar keamanan Zero Accident dengan protokol ketat, peralatan teruji, dan didampingi tim medis lapangan.",
  },
  {
    question: "Berapa lama durasi paket outbound 1 day?",
    answer:
      "Paket outbound 1 day biasanya berlangsung 6–8 jam, mencakup ice breaking, games team building, dan aktivitas outdoor. Jadwal dapat disesuaikan dengan kebutuhan grup Anda.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

interface FaqProps {
  title?: string;
  className?: string;
}

export function Faq({
  title = "Pertanyaan yang Sering Diajukan",
  className,
}: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className={cn("mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8", className)}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2 className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl">
        {title}
      </h2>
      <div className="space-y-2">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-border/50 bg-card transition-colors hover:border-emerald-500/30"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-foreground"
          >
              <span>{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
                  openIndex === index && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-200 ease-in-out",
                openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div className="border-t border-border/50 px-5 py-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
