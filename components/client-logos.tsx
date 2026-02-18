"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface ClientLogo {
  name: string;
  logo?: string;
}

interface ClientLogosProps {
  clients: ClientLogo[];
  title?: string;
  subtitle?: string;
  className?: string;
}

function LogoItem({ client, index }: { client: ClientLogo; index: number }) {
  const [imgError, setImgError] = useState(false);
  const showImage = client.logo && !imgError;

  return (
    <div
      key={`${client.name}-${index}`}
      className="flex shrink-0 items-center justify-center"
    >
      {showImage ? (
        <div className="relative h-14 w-36 grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100">
          <Image
            src={client.logo!}
            alt={client.name}
            fill
            className="object-contain"
            sizes="144px"
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        <div
          className="flex h-14 w-36 items-center justify-center rounded-lg bg-muted"
          title={client.name}
        >
          <span className="text-xl font-bold text-muted-foreground">
            {client.name.charAt(0)}
          </span>
        </div>
      )}
    </div>
  );
}

export function ClientLogos({
  clients,
  title = "Dipercaya 500+ Perusahaan untuk Corporate Gathering & Team Building Bandung",
  subtitle = "Menjadi mitra pilihan instansi BUMN, Bank, dan Perusahaan Swasta dalam menyelenggarakan event outbound profesional di Lembang dan Cikole.",
  className,
}: ClientLogosProps) {
  // Quadruple for seamless infinite scroll - ensures no visible gap at loop point
  const marqueeClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section
      className={cn(
        "overflow-hidden border-y border-border/50 bg-muted/30 py-16",
        className
      )}
    >
      <div className="mx-auto mb-10 max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 text-muted-foreground">{subtitle}</p>
      </div>
      <div className="relative flex w-full overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center">
          {marqueeClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex shrink-0 items-center pr-12"
            >
              <LogoItem client={client} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
