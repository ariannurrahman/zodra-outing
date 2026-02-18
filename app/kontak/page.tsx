import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { contact } from "@/lib/constants";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontak | Zodra Outing",
  description:
    "Hubungi Zodra Outing untuk informasi paket outbound dan reservasi. Kami siap melayani Anda.",
};

export default function KontakPage() {
  return (
    <>
      <Hero
        title="Kontak Kami"
        subtitle="Punya pertanyaan atau ingin reservasi? Hubungi kami melalui WhatsApp untuk respons cepat."
        showCta={true}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <WhatsAppCta variant="card" />
          <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm">
            <Mail className="h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 font-semibold text-foreground">Email</h3>
            <p className="mt-2 text-sm text-muted-foreground">{contact.email}</p>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm">
            <MapPin className="h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 font-semibold text-foreground">Alamat</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Jawa Barat, Indonesia
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
