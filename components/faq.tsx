"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { contact } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  /** One or more paragraphs (shown in order) */
  paragraphs: string[];
  /** Optional bullet list for steps, highlights, or checklists */
  bulletPoints?: string[];
  /** Optional internal links under the answer */
  links?: readonly { href: string; label: string }[];
}

function faqAnswerToPlainText(item: FaqItem): string {
  const chunks: string[] = [...item.paragraphs];
  if (item.bulletPoints?.length) {
    chunks.push(item.bulletPoints.join(" "));
  }
  return chunks.join("\n\n");
}

const faqItems: FaqItem[] = [
  {
    question: "Apa saja layanan yang ditawarkan Zodra Adventure?",
    paragraphs: [
      "Zodra Adventure adalah mitra outing dan outbound Bandung untuk perusahaan, sekolah, dan komunitas. Kami merancang pengalaman yang menggabungkan aktivitas di alam, permainan team building, dan tantangan outdoor agar tim lebih kompak dan termotivasi.",
      "Selain paket siap pakai (satu hari hingga menginap), kami juga membantu corporate gathering, corporate training, outing organizing, hingga program adventure seperti offroad 4x4, rafting, dan paintball—disesuaikan dengan skala acara dan budget Anda.",
    ],
    bulletPoints: [
      "Corporate gathering, training & personal development",
      "Outing organizing: team bonding, fun games, amazing race, treasure hunt",
      "Adventure: offroad Cikole, rafting, paintball, corporate outdoor camp",
      "Paket 1 hari, 2D1N, dan 3D2N dengan detail di halaman Paket Outbound",
    ],
    links: [{ href: "/paket-outbound", label: "Lihat Paket Outbound" }],
  },
  {
    question: "Berapa minimal peserta dan apakah bisa paket khusus?",
    paragraphs: [
      "Secara umum, paket outbound kami dioptimalkan untuk grup—biasanya sekitar minimal 10 peserta—agar aktivitas team building dan logistik lokasi tetap efektif dan ekonomis untuk Anda.",
      "Grup lebih kecil atau jauh lebih besar tetap bisa kami tangani. Kami akan menyesuaikan pilihan games, durasi, lokasi, dan komposisi aktivitas (misalnya lebih banyak ice breaking atau fokus adventure) supaya tetap nyaman dan aman.",
    ],
    bulletPoints: [
      "Grup kecil: diskusikan opsi half day atau paket fleksibel",
      "Grup besar: koordinasi batch, fasilitator, dan venue dapat diatur lebih awal",
      "Untuk rancangan khusus, tim kami bantu lewat WhatsApp atau halaman Kontak",
    ],
    links: [
      { href: "/kontak", label: "Halaman Kontak" },
      { href: contact.whatsappUrl, label: "Chat WhatsApp" },
    ],
  },
  {
    question: "Apa bedanya paket 1 hari, 2D1N, dan 3D2N?",
    paragraphs: [
      "Pemilihan durasi bergantung pada tujuan retreat: sekadar refresh singkat, pembentukan tim yang lebih dalam, atau kombinasi pelatihan dan rekreasi selama beberapa hari.",
    ],
    bulletPoints: [
      "1 hari — cocok untuk full day atau half day: ice breaking, games, dan satu atau lebih aktivitas outdoor tanpa menginap.",
      "2D1N — menambah malam menginap: lebih banyak sesi refleksi, energizer, dan waktu bersantai bersama tim.",
      "3D2N — pengalaman lebih lengkap: variasi aktivitas, pacing yang santai, dan ruang untuk agenda internal perusahaan jika diperlukan.",
    ],
    links: [
      { href: "/paket-outbound/1-day", label: "Paket 1 hari" },
      { href: "/paket-outbound/2d1n", label: "Paket 2D1N" },
      { href: "/paket-outbound/3d2n", label: "Paket 3D2N" },
    ],
  },
  {
    question: "Apakah harga sudah termasuk makan, transport, dan dokumentasi?",
    paragraphs: [
      "Setiap paket memiliki komposisi fasilitas yang berbeda. Yang termasuk dalam harga selalu kami jelaskan di ringkasan dan halaman detail paket agar transparan sebelum Anda memutuskan.",
      "Contoh: pada paket rafting tertentu, deskripsi menyebut asuransi dan peralatan. Untuk paket menginap, cek apakah akomodasi dan makan sudah tercantum. Transport peserta dari titik kumpul, dokumentasi foto/video, dan add-on lain bisa bervariasi—sebaiknya dikonfirmasi saat konsultasi.",
    ],
    bulletPoints: [
      "Baca deskripsi di kartu paket dan halaman detail sebelum booking",
      "Jika ada kebutuhan khusus (diet, shuttle, durasi dokumentasi), tanyakan ke tim kami",
    ],
  },
  {
    question: "Di mana lokasi outbound dan aktivitas seperti offroad atau rafting?",
    paragraphs: [
      "Kami beroperasi di kawasan Bandung Raya dan sekitarnya. Banyak klien memilih Lembang, Cikole, atau Ciwidey untuk suasana pegunungan dan hutan pinus—termasuk pengalaman offroad yang menjadi salah satu andalan kami.",
      "Untuk rafting, lokasi mengikuti paket yang Anda pilih, misalnya area Pangalengan & Ciater sesuai deskripsi paket di situs. Titik pasti, rute, dan jadwal final akan disepakati bersama saat perencanaan acara.",
    ],
    bulletPoints: [
      "Outbound & offroad: Lembang, Cikole, Ciwidey, dan area Bandung Raya",
      "Rafting: mengikut paket (mis. Pangalengan / Ciater) dan kondisi musim",
      "Request tema atau venue khusus bisa didiskusikan lebih dulu",
    ],
  },
  {
    question: "Apakah peserta dilindungi asuransi dan bagaimana standar keamanannya?",
    paragraphs: [
      "Keselamatan peserta adalah prioritas. Kami menerapkan standar Zero Accident: prosedur jelas sebelum aktivitas, peralatan yang teruji, dan briefing oleh fasilitator berpengalaman.",
      "Peserta dilindungi asuransi sesuai ketentuan paket. Tim medis lapangan mendampingi kegiatan. Untuk aktivitas berisiko tinggi seperti rafting, detail perlindungan dan syarat peserta juga tercantum di deskripsi paket terkait.",
    ],
    bulletPoints: [
      "Protokol keselamatan dan briefing sebelum setiap aktivitas utama",
      "Asuransi peserta dan pendampingan medis di lapangan",
      "Peralatan memenuhi standar; aktivitas khusus mengikuti aturan paket",
    ],
  },
  {
    question: "Di mana bisa melihat daftar permainan outbound & team building?",
    paragraphs: [
      "Katalog lengkap permainan outbound tersedia di halaman Permainan. Di sini Anda bisa menjelajahi puluhan aktivitas beserta kategori dan manfaat untuk tim—mulai dari pemanasan di awal sesi hingga tantangan yang lebih kompleks.",
      "Filter kategori membantu menemukan ice breaking, leadership, goal & trust, low team building, initiative, amazing race & offroad, highrope, hingga program khusus. Manfaat team building per permainan ditulis agar mudah dipahami HR atau panitia acara.",
    ],
    bulletPoints: [
      "Ice breaking & energizer untuk membuka sesi",
      "Leadership, trust, dan initiative games untuk dinamika tim",
      "Amazing race, highrope, dan program khusus sesuai kebutuhan",
    ],
    links: [{ href: "/games", label: "Buka katalog Permainan" }],
  },
  {
    question: "Bagaimana cara memesan atau minta proposal custom?",
    paragraphs: [
      "Anda bisa menghubungi kami kapan saja melalui WhatsApp (tombol di seluruh situs), mengirim email, atau menggunakan informasi di halaman Kontak. Untuk proposal custom, kami sesuaikan dengan budget, jumlah peserta, dan tujuan outing perusahaan atau sekolah Anda.",
      "Semakin lengkap informasi yang Anda berikan di awal, semakin cepat kami bisa mengarahkan ke paket, tanggal, dan format aktivitas yang pas.",
    ],
    bulletPoints: [
      "Perkiraan tanggal outing dan durasi (half day / 1 hari / menginap)",
      "Jumlah peserta dan profil peserta (kantor, sekolah, komunitas)",
      "Tema atau aktivitas yang diinginkan—misalnya offroad, rafting, atau fokus games",
      `Budget kasar atau referensi paket; email: ${contact.email}`,
    ],
    links: [
      { href: "/kontak", label: "Kontak & info booking" },
      { href: contact.whatsappUrl, label: "WhatsApp" },
    ],
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
      text: faqAnswerToPlainText(item),
    },
  })),
};

function FaqAnswerBody({ item }: { item: FaqItem }) {
  return (
    <div className="space-y-0">
      <div className="space-y-3.5">
        {item.paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-sm leading-relaxed text-muted-foreground sm:text-[15px] sm:leading-[1.65]"
          >
            {p}
          </p>
        ))}
      </div>
      {item.bulletPoints && item.bulletPoints.length > 0 && (
        <ul className="mt-5 space-y-2.5 border-l-2 border-emerald-500/35 py-0.5 pl-4 dark:border-emerald-500/25">
          {item.bulletPoints.map((b, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px] sm:leading-relaxed"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                aria-hidden
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {item.links && item.links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2.5 border-t border-border/40 pt-5">
          {item.links.map((l) => {
            const isExternal = l.href.startsWith("http");
            const className =
              "inline-flex items-center gap-1 rounded-lg border border-emerald-200/80 bg-emerald-50/60 px-3.5 py-2 text-sm font-semibold text-emerald-800 transition-colors hover:border-emerald-400 hover:bg-emerald-100/80 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-200 dark:hover:border-emerald-600 dark:hover:bg-emerald-900/35";
            if (isExternal) {
              return (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {l.label}
                  <span className="text-xs opacity-80" aria-hidden>
                    ↗
                  </span>
                </a>
              );
            }
            return (
              <Link key={l.href} href={l.href} className={className}>
                {l.label}
                <span className="text-emerald-600 dark:text-emerald-300" aria-hidden>
                  →
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

interface FaqProps {
  title?: string;
  className?: string;
}

export function Faq({
  title = "Pertanyaan yang Sering Diajukan",
  className,
}: FaqProps) {
  /** Indices of expanded items — multiple can be open at once */
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      id="faq"
      className={cn(
        "mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8",
        className
      )}
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
              onClick={() => toggleItem(index)}
              aria-expanded={openIndices.includes(index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-foreground sm:px-6"
            >
              <span className="pr-2">{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
                  openIndices.includes(index) && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-200 ease-in-out",
                openIndices.includes(index) ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div className="border-t border-border/50 px-5 pb-6 pt-1 sm:px-6 sm:pb-7">
                  <FaqAnswerBody item={item} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
