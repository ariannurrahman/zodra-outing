import Link from "next/link";
import Image from "next/image";
import { contact } from "@/lib/constants";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import { Logo } from "./logo";

const footerLinks = {
  paket: [
    { href: "/paket-outbound/1-day", label: "Paket 1 Hari" },
    { href: "/paket-outbound/2d1n", label: "Paket 2D1N" },
    { href: "/paket-outbound/3d2n", label: "Paket 3D2N" },
  ],
  navigasi: [
    { href: "/", label: "Home" },
    { href: "/tentang-kami", label: "Tentang Kami" },
    { href: "/paket-outbound", label: "Paket Outbound" },
    { href: "/games", label: "Permainan" },
    { href: "/blog", label: "Blog" },
    { href: "/kontak", label: "Kontak" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-emerald-950/10 bg-linear-to-b from-emerald-50 to-muted/30 dark:from-emerald-950/10 dark:to-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + Kontak */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-start justify-start gap-2 text-xl font-bold tracking-tight text-foreground transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              <Logo />
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
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Media sosial
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200/80 bg-white text-emerald-700 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-800 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:border-emerald-600 dark:hover:bg-emerald-900/50"
                  aria-label="Facebook Zodra Adventure"
                >
                  <svg
                    className="h-[18px] w-[18px]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200/80 bg-white text-emerald-700 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-800 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:border-emerald-600 dark:hover:bg-emerald-900/50"
                  aria-label="Instagram Zodra Adventure"
                >
                  <svg
                    className="h-[18px] w-[18px]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
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
                    className="text-sm text-muted-foreground transition-colors hover:underline hover:text-emerald-500 dark:hover:text-emerald-400"
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
                    className="text-sm text-muted-foreground hover:underline transition-colors hover:text-emerald-500 dark:hover:text-emerald-400"
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
