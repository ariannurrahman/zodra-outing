"use client";

import Image from "next/image";
import Masonry from "react-masonry-css";
import { cn } from "@/lib/utils";
import { galleryImages, BLUR_DATA_URL } from "@/lib/gallery";

const breakpointColumns = {
  default: 3,
  768: 2,
  480: 1,
};

interface GalleryProps {
  title?: string;
  className?: string;
}

export function Gallery({
  title = "Keseruan Bersama Kami",
  className,
}: GalleryProps) {
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
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-3 w-auto"
        columnClassName="pl-3 bg-clip-padding"
      >
        {galleryImages.map((image, index) => (
          <div key={`${image.alt}-${index}`} className="mb-3">
            <div className="overflow-hidden rounded-lg shadow-sm transition-shadow hover:shadow-md">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </Masonry>
    </section>
  );
}
