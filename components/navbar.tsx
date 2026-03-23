"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Trees } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/tentang-kami", label: "TENTANG KAMI" },
  { href: "/paket-outbound", label: "PAKET OUTBOUND" },
  { href: "/games", label: "PERMAINAN" },
  { href: "/blog", label: "BLOG" },
  { href: "/kontak", label: "KONTAK" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-emerald-950/10 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
          >
            <Logo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-2">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wider transition-all duration-300",
                    isActive
                      ? "bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/25"
                      : "text-muted-foreground hover:bg-emerald-500/10 hover:text-emerald-800 dark:hover:text-emerald-300"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile sidebar overlay — twilight forest haze */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-emerald-950/65 backdrop-blur-[2px] transition-opacity lg:hidden",
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile sidebar — canopy / trail panel */}
      <aside
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-72 max-w-[85vw] flex-col border-l border-emerald-700/30 bg-linear-to-b from-emerald-950 via-green-950 to-teal-950 text-emerald-50 shadow-2xl shadow-emerald-950/50 transition-transform duration-300 ease-in-out lg:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-amber-500/12 via-emerald-600/6 to-transparent"
          aria-hidden
        />
        <div className="relative flex h-16 shrink-0 items-center justify-between border-b border-emerald-800/45 bg-emerald-950/40 px-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-600/35 bg-emerald-900/50 text-emerald-300 shadow-inner shadow-black/20">
              <Trees className="h-5 w-5" aria-hidden />
            </span>
            <div className="leading-tight">
              <span className="block text-lg font-bold leading-none tracking-tight text-emerald-50">
                Navigasi
              </span>
              <span className="text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-emerald-500/90">
                Petualangan menanti
              </span>
            </div>
          </div>
          <button
            type="button"
            className="rounded-lg border border-emerald-700/50 bg-emerald-900/45 p-2 text-emerald-200 transition-colors hover:border-amber-600/40 hover:bg-emerald-800/70 hover:text-amber-100"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav
          className="relative flex flex-1 flex-col gap-1.5 overflow-y-auto p-4 pb-10"
          aria-label="Menu mobile"
        >
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "rounded-xl border px-4 py-3.5 text-base font-semibold uppercase tracking-wider transition-all duration-300",
                  isActive
                    ? "border-amber-500/35 bg-linear-to-r from-emerald-600 via-teal-600 to-green-700 text-white shadow-lg shadow-black/30 ring-1 ring-emerald-400/25"
                    : "border-transparent text-emerald-100/90 hover:border-emerald-700/55 hover:bg-emerald-900/55 hover:text-amber-50"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div
          className="pointer-events-none shrink-0 border-t border-emerald-800/35 bg-emerald-950/60 px-4 py-3 text-center text-[11px] font-medium text-emerald-600/80"
          aria-hidden
        >
          Outing & outbound Bandung
        </div>
      </aside>
    </>
  );
}
