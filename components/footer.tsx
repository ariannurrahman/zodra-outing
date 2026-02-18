import Link from "next/link";

const footerLinks = {
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
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-foreground"
            >
              Zodra Outing
            </Link>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Penyedia layanan outbound profesional untuk perusahaan, sekolah,
              dan komunitas. Petualangan yang mendidik dan menyenangkan.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Navigasi</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.navigasi.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Zodra Outing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
