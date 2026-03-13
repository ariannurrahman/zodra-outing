import type { Metadata } from "next";
import { PackageHero } from "./package-hero";
import { PackageCard } from "@/components/package-card";
import { WhyUs } from "@/components/why-us";
import { ServiceCategories } from "@/components/service-categories";
import { Gallery } from "@/components/gallery";
import { Faq } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";
import { paketOutboundByType } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Paket Outbound Bandung",
  description:
    "Paket outing dan outbound Bandung terbaik: 1 Day, 2D1N, 3D2N. Team building, offroad Cikole, rafting. Lokasi di Bandung & sekitarnya.",
};

export default function PaketOutboundPage() {
  return (
    <>
      <PackageHero />
      <section
        id="packages"
        className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8"
      >
        {paketOutboundByType.map((category) => (
          <div key={category.id} className="mb-16 last:mb-0">
            <div className="mb-2">
              <h2 className="text-2xl font-bold text-foreground">
                {category.title}
              </h2>
              <p className="mt-1 text-muted-foreground">{category.subtitle}</p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.packages.map((pkg) => (
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
        ))}
      </section>
      <WhyUs />
      <ServiceCategories />
      <Gallery />
      <Faq />
      <CtaBanner />
    </>
  );
}
