import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { SubPackage } from "@/lib/packages";

interface PackageDetailCardProps {
  pkg: SubPackage;
}

export function PackageDetailCard({ pkg }: PackageDetailCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          {pkg.dayPackage}
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-semibold drop-shadow-md">{pkg.title}</h3>
          {/* <span className="mt-1 inline-block font-bold text-amber-300 drop-shadow-md">
            {pkg.price}
          </span> */}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        {pkg.description && (
          <p className="mb-4 flex-1 text-sm text-muted-foreground leading-relaxed">
            {pkg.description}
          </p>
        )}
        <Link
          href={pkg.href}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
        >
          {pkg.buttonText}
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
