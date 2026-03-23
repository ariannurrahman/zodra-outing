import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { PackageCard } from "@/components/package-card";
import { TwoDayPackageContent } from "@/components/two-day-package-content";
import { ThreeDayPackageContent } from "@/components/three-day-package-content";
import { FunOffroad3D2NContent } from "@/components/fun-offroad-3d2n-content";
import { PaketOutboundBandung3D2NContent } from "@/components/paket-outbound-bandung-3d2n-content";
import { PaintballContent, HighropeContent, HalfdayContent, FunOffroadContent, AmazingRaceOffroadPaintballContent, RaftingPangalenganCiaterContent, PaintballRaftingCiaterContent } from "@/components/low-team-building";
import {
  getPackageBySlug,
  getAllPackagePaths,
  paketOutboundByType,
  type CategorySlug,
} from "@/lib/packages";

function getPackageContent(category: string, slug: string, description?: string): ReactNode {
  const key = `${category}:${slug}`;
  switch (key) {
    case "1-day:low-team-building-paintball":
      return <PaintballContent />;
    case "1-day:low-team-building-highrope":
      return <HighropeContent />;
    case "1-day:low-team-building-halfday":
      return <HalfdayContent />;
    case "1-day:low-team-building-fun-offroad":
      return <FunOffroadContent />;
    case "1-day:amazing-race-offroad-paintball":
      return <AmazingRaceOffroadPaintballContent />;
    case "1-day:rafting-pangalengan-ciater":
      return <RaftingPangalenganCiaterContent />;
    case "1-day:paintball-rafting-ciater":
      return <PaintballRaftingCiaterContent />;
    case "3d2n:fun-offroad-3d2n":
      return <FunOffroad3D2NContent />;
    case "3d2n:paket-outbound-bandung-3d2n":
      return <PaketOutboundBandung3D2NContent />;
    default:
      break;
  }
  switch (category) {
    case "2d1n":
      return <TwoDayPackageContent />;
    case "3d2n":
      return <ThreeDayPackageContent />;
    case "1-day":
      return (
        <div className="rounded-xl border border-border/60 bg-card/50 p-6">
          <p className="text-muted-foreground leading-relaxed">
            {description ||
              "Detail lengkap paket ini akan segera ditambahkan. Anda dapat menghubungi kami untuk informasi lebih lanjut mengenai fasilitas, jadwal, dan lokasi kegiatan."}
          </p>
        </div>
      );
    default:
      return (
        <p className="text-muted-foreground">
          Detail lengkap paket ini akan segera ditambahkan. Anda dapat
          menghubungi kami untuk informasi lebih lanjut mengenai fasilitas,
          jadwal, dan lokasi kegiatan.
        </p>
      );
  }
}

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

const validCategories: CategorySlug[] = ["1-day", "2d1n", "3d2n"];

export function generateStaticParams() {
  return getAllPackagePaths();
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  if (!validCategories.includes(category as CategorySlug)) {
    return { title: "Paket Tidak Ditemukan" };
  }
  const result = getPackageBySlug(category as CategorySlug, slug);
  if (!result) return { title: "Paket Tidak Ditemukan" };
  return {
    title: `${result.pkg.title} Bandung`,
    description: `${result.pkg.title} - ${result.pkg.price}. Paket outing Bandung untuk perusahaan & sekolah. Lokasi Cikole, Ciater, Pangalengan.`,
  };
}

export default async function PackageDetailPage({ params }: Props) {
  const { category, slug } = await params;

  if (!validCategories.includes(category as CategorySlug)) {
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

  const result = getPackageBySlug(category as CategorySlug, slug);

  if (!result) {
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

  const { category: cat, pkg } = result;

  // Related packages: same category, exclude current
  const relatedPackages = cat.packages.filter((p) => p.slug !== pkg.slug);
  const hasEnoughSameCategory = relatedPackages.length >= 2;
  const alternativePackages = paketOutboundByType
    .filter((c) => c.categorySlug !== category)
    .flatMap((c) => c.packages)
    .slice(0, 6);
  const displayRelated = hasEnoughSameCategory
    ? relatedPackages
    : alternativePackages;
  const relatedTitle = hasEnoughSameCategory
    ? "Paket Lainnya dalam Kategori Ini"
    : "Paket Alternatif";

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href={`/paket-outbound/${category}`}
        className="text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        ← Kembali ke {cat.title}
      </Link>
      <article className="mt-8">
        <div className="overflow-hidden rounded-2xl">
          <div className="relative aspect-21/9 w-full">
            <Image
              src={pkg.image}
              alt={pkg.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                {pkg.dayPackage}
              </span>
              <h1 className="mt-3 text-3xl font-bold drop-shadow-lg sm:text-4xl">
                {pkg.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex items-center justify-between flex-row">

            <p className="text-2xl font-semibold text-primary">{pkg.price}</p>
            <WhatsAppCta
              variant="link"
              message={`Halo, saya tertarik dengan ${pkg.title}. Bisa info lebih detail?`}
            />
          </div>
          <div className="mt-8">
            {getPackageContent(category, slug, pkg.description)}
          </div>
          <div className="mt-10 flex justify-center">
            <WhatsAppCta
              variant="button"
              message={`Halo, saya tertarik dengan ${pkg.title}. Bisa info lebih detail?`}
            >
              Konsultasi via WhatsApp
            </WhatsAppCta>
          </div>
        </div>
      </article>

      {displayRelated.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-foreground">
            {relatedTitle}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayRelated.map((related) => (
              <PackageCard
                key={related.title}
                variant="outbound"
                image={related.image}
                imageAlt={related.imageAlt}
                title={related.title}
                price={related.price}
                dayPackage={related.dayPackage}
                buttonText={related.buttonText}
                href={related.href}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
