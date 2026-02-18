import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { PackageCard } from "@/components/package-card";
import { WhyUs } from "@/components/why-us";
import { ServiceCategories } from "@/components/service-categories";
import { Gallery } from "@/components/gallery";
import { Faq } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";
import { outboundPackages, teamBuildingPackages } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Paket Outbound | Zodra Outing",
  description:
    "Lihat berbagai paket outbound kami untuk perusahaan, sekolah, dan komunitas. Pilih paket yang sesuai dengan kebutuhan Anda.",
};

export default function PaketOutboundPage() {
  return (
    <>
      <Hero
        title="Paket Outbound"
        subtitle="Pilih paket outbound yang sesuai dengan kebutuhan tim Anda. Dari paket half day hingga full camping, kami siap melayani."
        showCta={true}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Paket Outbound Bandung */}
        <div className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-foreground">
            Paket Outbound Bandung
          </h2>
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
          <h2 className="mb-8 text-2xl font-bold text-foreground">
            Paket Low Team Building
          </h2>
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
