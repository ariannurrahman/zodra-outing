import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCta } from "@/components/whatsapp-cta";

const packages: Record<
  string,
  { title: string; description: string; price: string }
> = {
  "1-day": {
    title: "Paket Outbound 1 Day",
    description: "Paket outbound singkat satu hari dengan berbagai aktivitas seru.",
    price: "Mulai Rp. 150.000",
  },
  "2d1n": {
    title: "Paket Outbound 2D1N",
    description: "Pengalaman outbound 2 hari 1 malam dengan akomodasi lengkap.",
    price: "Mulai Rp. 650.000",
  },
  "3d2n": {
    title: "Paket Outbound 3D2N",
    description: "Petualangan outbound 3 hari 2 malam dengan aktivitas lengkap.",
    price: "Mulai Rp. 1.100.000",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packages[slug];
  if (!pkg) return { title: "Paket Tidak Ditemukan" };
  return {
    title: `${pkg.title} | Zodra Outing`,
    description: pkg.description,
  };
}

export default async function PaketDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = packages[slug];

  if (!pkg) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Paket tidak ditemukan</h1>
        <Link href="/paket-outbound" className="mt-4 text-primary hover:underline">
          Kembali ke Paket Outbound
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/paket-outbound"
        className="text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        ← Kembali ke Paket
      </Link>
      <div className="mt-8">
        <h1 className="text-3xl font-bold text-foreground">{pkg.title}</h1>
        <p className="mt-4 text-muted-foreground">{pkg.description}</p>
        <p className="mt-4 text-xl font-semibold text-primary">{pkg.price}</p>
        <div className="mt-8">
          <WhatsAppCta
            variant="button"
            message={`Halo, saya tertarik dengan ${pkg.title}. Bisa info lebih detail?`}
          />
        </div>
      </div>
    </div>
  );
}
