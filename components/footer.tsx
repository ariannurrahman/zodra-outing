import Link from "next/link";
import Image from "next/image";
import { contact } from "@/lib/constants";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";

const footerLinks = {
  paket: [
    { href: "/paket-outbound/1-day", label: "Paket 1 Hari" },
    { href: "/paket-outbound/2d1n", label: "Paket 2D1N" },
    { href: "/paket-outbound/3d2n", label: "Paket 3D2N" },
  ],
  navigasi: [
    { href: "/", label: "Home" },
    { href: "/paket-outbound", label: "Paket Outbound" },
    { href: "/blog", label: "Blog" },
    { href: "/kontak", label: "Kontak" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-emerald-950/10 bg-linear-to-b from-emerald-50/40 to-muted/30 dark:from-emerald-950/10 dark:to-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + Kontak */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              Zodra Adventure
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Penyedia layanan outing dan outbound Bandung profesional untuk
              perusahaan, sekolah, dan komunitas. Petualangan yang mendidik dan
              menyenangkan.
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium text-foreground">
                {contact.company}
              </p>
              <p className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span>{contact.address}</span>
              </p>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
              >
                <Phone className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                {contact.phone}
              </a>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                {contact.whatsapp}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
              >
                <Mail className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                {contact.email}
              </a>
            </div>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#20BD5A] hover:shadow-md"
            >
              <Image
                src="/icon/whatsapp.png"
                alt=""
                width={18}
                height={18}
                className="shrink-0 brightness-0 invert"
              />
              Chat WhatsApp
            </a>
          </div>

          {/* Paket */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Paket
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.paket.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.navigasi.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Zodra Adventure. All rights reserved.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="text-sm text-muted-foreground transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
          >
            {contact.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
