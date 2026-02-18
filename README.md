# Zodra Outing

Website untuk **Zodra Outing** — penyedia layanan outbound profesional untuk perusahaan, sekolah, dan komunitas di Indonesia. Menawarkan paket petualangan yang mendidik dan menyenangkan.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com), [Radix UI](https://radix-ui.com)
- **Icons:** [Lucide React](https://lucide.dev)

## Project Structure

```
├── app/
│   ├── blog/              # Blog & artikel
│   ├── kontak/            # Halaman kontak
│   ├── paket-outbound/    # Paket outbound & team building
│   ├── layout.tsx
│   └── page.tsx
├── components/            # Reusable UI components
├── lib/                   # Data & utilities
│   ├── clients.ts         # Client logos
│   ├── constants.ts       # Contact info (WhatsApp, email)
│   ├── gallery.ts
│   └── packages.ts        # Paket outbound & team building
└── public/
    ├── client-logo/       # Logo perusahaan klien
    └── icon/
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, paket unggulan, client logos, gallery, FAQ |
| `/paket-outbound` | Semua paket outbound & team building |
| `/paket-outbound/[slug]` | Detail paket (1-day, 2d1n, 3d2n, dll.) |
| `/blog` | Artikel & tips seputar outbound |
| `/blog/[slug]` | Detail artikel blog |
| `/kontak` | Kontak — WhatsApp, email, alamat |

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Configuration

### Contact Info

Edit `lib/constants.ts` untuk mengubah nomor WhatsApp, email, dan info kontak lainnya.

### Client Logos

Tambahkan logo klien di `lib/clients.ts` dan file gambar di `public/client-logo/`.

### Packages

Data paket outbound dan team building dikelola di `lib/packages.ts`.

## Features

- **Responsive design** — mobile-first, mendukung semua ukuran layar
- **Floating WhatsApp** — tombol chat WhatsApp di setiap halaman
- **Dark mode** — mendukung tema gelap
- **Image optimization** — Next.js Image dengan remote patterns (Unsplash, dll.)
- **SEO** — metadata per halaman

## Deploy

Proyek ini siap di-deploy ke [Vercel](https://vercel.com) atau platform lain yang mendukung Next.js.

```bash
npm run build
```

## License

Private — Zodra Outing
