"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { galleryImages, BLUR_DATA_URL } from "@/lib/gallery";

interface GalleryProps {
  title?: string;
  className?: string;
}

// Featured layout: left tall (2 rows), top-right wide, bottom two items
const FEATURED_COUNT = 4;

export function Gallery({
  title = "Keseruan Bersama Kami",
  className,
}: GalleryProps) {
  const featured = galleryImages.slice(0, FEATURED_COUNT);

  return (
    <section
      id="gallery"
      className={cn(
        "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8",
        className
      )}
    >
      <h2 className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl">
        {title}
      </h2>
      {/* Mobile: all images in horizontal scroll */}
      <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-4 sm:hidden">
        {galleryImages.map((image, index) => (
          <div
            key={`${image.alt}-${index}`}
            className="relative aspect-video min-w-[min(85vw,320px)] shrink-0 snap-center overflow-hidden rounded-lg bg-muted shadow-sm transition-shadow hover:shadow-md"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
              sizes="85vw"
            />
          </div>
        ))}
      </div>

      {/* Desktop: 4-item grid layout */}
      <div className="hidden sm:grid sm:max-h-[50vh] sm:grid-cols-3 sm:grid-rows-2 sm:auto-rows-fr sm:gap-3 sm:overflow-hidden">
        <div className="relative overflow-hidden rounded-lg bg-muted shadow-sm transition-shadow hover:shadow-md sm:col-span-1 sm:row-span-2 sm:aspect-auto">
          <Image
            src={featured[1].src}
            alt={featured[1].alt}
            width={featured[1].width}
            height={featured[1].height}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
            sizes="33vw"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg bg-muted shadow-sm transition-shadow hover:shadow-md sm:col-span-2 sm:row-span-1 sm:aspect-auto">
          <Image
            src={featured[3].src}
            alt={featured[3].alt}
            width={featured[3].width}
            height={featured[3].height}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
            sizes="66vw"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg bg-muted shadow-sm transition-shadow hover:shadow-md sm:aspect-auto">
          <Image
            src={featured[2].src}
            alt={featured[2].alt}
            width={featured[2].width}
            height={featured[2].height}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
            sizes="33vw"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg bg-muted shadow-sm transition-shadow hover:shadow-md sm:aspect-auto">
          <Image
            src={featured[0].src}
            alt={featured[0].alt}
            width={featured[0].width}
            height={featured[0].height}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
            sizes="33vw"
          />
        </div>
      </div>
    </section>
  );
}
