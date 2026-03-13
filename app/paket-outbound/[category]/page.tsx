import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { PackageCard } from "@/components/package-card";
import { PackageDetailCard } from "@/components/package-detail-card";
import { paketOutboundByType } from "@/lib/packages";

const packages: Record<
  string,
  { title: string; description: string; price: string }
> = {
  "1-day": {
    title: "Paket Outbound 1 Day",
    description:
      "Paket outbound singkat satu hari dengan berbagai aktivitas seru: team building, paintball, highrope, offroad, rafting, dan kombinasi lainnya.",
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
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return Object.keys(packages).map((category) => ({ category }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const pkg = packages[category];
  if (!pkg) return { title: "Paket Tidak Ditemukan" };
  return {
    title: `${pkg.title} Bandung`,
    description: `${pkg.description} Paket outing Bandung untuk perusahaan & sekolah. Lokasi Cikole, Ciater, Pangalengan.`,
  };
}

export default async function PaketCategoryPage({ params }: Props) {
  const { category } = await params;
  const pkg = packages[category];

  if (!pkg) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Paket tidak ditemukan</h1>
        <Link
          href="/paket-outbound"
          className="mt-4 text-primary hover:underline"
        >
          Kembali ke Paket Outbound
        </Link>
      </div>
    );
  }

  const cat = paketOutboundByType.find((c) => c.categorySlug === category);
  const sameCategoryPackages = cat?.packages ?? [];
  const isOneDay = category === "1-day";

  const hasEnoughSameCategory = sameCategoryPackages.length >= 2;
  const alternativePackages = paketOutboundByType
    .filter((c) => c.categorySlug !== category)
    .flatMap((c) => c.packages)
    .slice(0, 6);

  const relatedPackages = hasEnoughSameCategory
    ? sameCategoryPackages
    : alternativePackages;
  const relatedSectionTitle = hasEnoughSameCategory
    ? "Paket Lainnya dalam Kategori Ini"
    : "Paket Alternatif";

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/paket-outbound"
        className="text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        ← Kembali ke Paket
      </Link>

      <div className="mx-auto mt-8 max-w-3xl">
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

      <section className="mt-16">
        <h2 className="mb-6 text-xl font-bold text-foreground">
          {isOneDay ? "Pilih Paket 1 Hari" : relatedSectionTitle}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(isOneDay ? sameCategoryPackages : relatedPackages).map((p) =>
            isOneDay ? (
              <PackageDetailCard key={p.slug} pkg={p} />
            ) : (
              <PackageCard
                key={p.slug}
                variant="outbound"
                image={p.image}
                imageAlt={p.imageAlt}
                title={p.title}
                price={p.price}
                dayPackage={p.dayPackage}
                buttonText={p.buttonText}
                href={p.href}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
}
