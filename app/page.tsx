import Link from "next/link";
import { Hero } from "@/components/hero";
import { ClientLogos } from "@/components/client-logos";
import { PackageCard } from "@/components/package-card";
import { WhyUs } from "@/components/why-us";
import { ServiceCategories } from "@/components/service-categories";
import { Gallery } from "@/components/gallery";
import { Faq } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";
import { clients } from "@/lib/clients";
import { outboundPackages, teamBuildingPackages } from "@/lib/packages";

export default function Home() {
  return (
    <>
      <Hero highlightKeyword="Offroad" />
      <ClientLogos clients={clients} />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h2 className="text-2xl font-bold text-foreground">
            Paket Outbound & Team Building
          </h2>
          <Link
            href="/paket-outbound"
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
          >
            Lihat Semua Paket →
          </Link>
        </div>

        {/* Paket Outbound Bandung */}
        <div className="mb-16">
          <h3 className="mb-6 text-xl font-semibold text-foreground">
            Paket Outbound Bandung
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {outboundPackages.map((pkg) => (
              <PackageCard
                key={pkg.title}
                variant="outbound"
                image={pkg.image}
                imageAlt={pkg.imageAlt}
                title={pkg.title}
                price={pkg.price}
                dayPackage={pkg.dayPackage}
                buttonText={pkg.buttonText}
                href={pkg.href}
              />
            ))}
          </div>
        </div>

        {/* Paket Low Team Building */}
        <div>
          <h3 className="mb-6 text-xl font-semibold text-foreground">
            Paket Low Team Building
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamBuildingPackages.map((pkg) => (
              <PackageCard
                key={pkg.title}
                variant="team-building"
                image={pkg.image}
                imageAlt={pkg.imageAlt}
                title={pkg.title}
                price={pkg.price}
                overlay={pkg.overlay}
                showFasilitas={pkg.showFasilitas}
                watermark={pkg.watermark}
              />
            ))}
          </div>
        </div>
      </section>
      <WhyUs />
      <ServiceCategories />
      <Gallery />
      <Faq />
      <CtaBanner />
    </>
  );
}
