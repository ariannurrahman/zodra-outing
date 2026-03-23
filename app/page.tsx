import Link from "next/link";
import { Hero } from "@/components/hero";
import { ClientLogos } from "@/components/client-logos";
import { PackageCard } from "@/components/package-card";
import { ProgramOfferings } from "@/components/program-offerings";
import { WhyUs } from "@/components/why-us";
import { ServiceCategories } from "@/components/service-categories";
import { Gallery } from "@/components/gallery";
import { Faq } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";
import { clients } from "@/lib/clients";
import {
  getOutboundPackagesForHome,
  teamBuildingPackages,
} from "@/lib/packages";

export default function Home() {
  return (
    <>
      <Hero highlightKeyword="Offroad" />
      <ClientLogos clients={clients} />
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-0 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h2 className="sm:text-2xl text-xl font-bold text-foreground">
              Paket Outbound & Team Building
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Kami menyediakan berbagai paket outbound dan team building yang dapat dipilih sesuai kebutuhan Anda.
            </p>
          </div>
          <Link
            href="/paket-outbound"
            className="text-sm text-nowrap font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
          >
            Lihat Semua Paket →
          </Link>
        </div>

        {/* Paket Outbound Bandung */}
        <div className="mb-16">
          <h3 className="mb-6 text-xl font-semibold text-foreground">
            Paket Outbound
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getOutboundPackagesForHome().map((pkg) => (
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
        <div className="mb-16">
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
                href={pkg.href}
                overlay={pkg.overlay}
                showFasilitas={pkg.showFasilitas}
              />
            ))}
          </div>
        </div>
      </section>

      <ProgramOfferings />
      <WhyUs />
      <ServiceCategories />
      <Gallery />
      <Faq />
      <CtaBanner />
    </>
  );
}
