import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

type PackageCardVariant = "outbound" | "team-building";

interface PackageCardBaseProps {
  image: string;
  imageAlt: string;
  title: string;
  price: string;
  className?: string;
}

interface PackageCardOutboundProps extends PackageCardBaseProps {
  variant: "outbound";
  dayPackage: string;
  buttonText: string;
  href: string;
  watermark?: string;
}

interface PackageCardTeamBuildingProps extends PackageCardBaseProps {
  variant: "team-building";
  overlay?: string;
  showFasilitas?: boolean;
  fasilitasImages?: string[];
  watermark?: string;
}

export type PackageCardProps =
  | PackageCardOutboundProps
  | PackageCardTeamBuildingProps;

function isOutboundProps(
  props: PackageCardProps
): props is PackageCardOutboundProps {
  return props.variant === "outbound";
}

export function PackageCard(props: PackageCardProps) {
  const { image, imageAlt, title, price, className } = props;

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5",
        className
      )}
    >
      {/* Image section */}
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Day package badge (outbound only) */}
        {isOutboundProps(props) && (
          <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            {props.dayPackage}
          </span>
        )}

        {/* Overlay badge (team-building only) */}
        {!isOutboundProps(props) && props.overlay && (
          <span className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1.5 text-xs font-medium text-primary-foreground backdrop-blur-sm">
            {props.overlay}
          </span>
        )}

        {/* Fasilitas banner (team-building only) */}
        {!isOutboundProps(props) && props.showFasilitas && (
          <span className="absolute right-4 top-4 rounded-full bg-amber-400/95 px-3 py-1.5 text-xs font-semibold text-amber-950 backdrop-blur-sm">
            Fasilitas
          </span>
        )}

        {/* Watermark */}
        {props.watermark && (
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium text-muted-foreground backdrop-blur-sm">
            {props.watermark}
          </span>
        )}
      </div>

      {/* Content section */}
      <div className="flex flex-col gap-0 p-5">
        {/* Title */}
        <h3 className="text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
          {title}
        </h3>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          {!isOutboundProps(props) && (
            <Tag className="h-4 w-4 shrink-0 text-muted-foreground" />
          )}
          <span className="font-bold text-primary">{price}</span>
        </div>

        {/* CTA button (outbound only) */}
        {isOutboundProps(props) && (
          <Link
            href={props.href}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            {props.buttonText}
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>
    </article>
  );
}
