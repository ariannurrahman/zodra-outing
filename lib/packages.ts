export type PackageType = "1-hari" | "2d1n" | "3d2n";

export type CategorySlug = "1-day" | "2d1n" | "3d2n";

export interface SubPackage {
  slug: string;
  image: string;
  imageAlt: string;
  title: string;
  price: string;
  dayPackage: string;
  buttonText: string;
  href: string;
  /** Short description for category page display */
  description?: string;
}

export interface PackageCategory {
  id: PackageType;
  categorySlug: CategorySlug;
  title: string;
  subtitle: string;
  packages: SubPackage[];
}

/** Get package by category slug + package slug */
export function getPackageBySlug(
  categorySlug: CategorySlug,
  packageSlug: string
): { category: PackageCategory; pkg: SubPackage } | null {
  const category = paketOutboundByType.find(
    (c) => c.categorySlug === categorySlug
  );
  const pkg = category?.packages.find((p) => p.slug === packageSlug);
  if (!category || !pkg) return null;
  return { category, pkg };
}

/** All category+slug pairs for static generation */
export function getAllPackagePaths(): { category: CategorySlug; slug: string }[] {
  return paketOutboundByType.flatMap((cat) =>
    cat.packages.map((p) => ({ category: cat.categorySlug, slug: p.slug }))
  );
}

/** Paket Outbound 1 Hari (One Day) */
const paket1Hari: SubPackage[] = [
  {
    slug: "low-team-building-paintball",
    image: "/activity/paintball-1.webp",
    imageAlt: "Low Team Building Paintball",
    title: "Paket Outing 1 Hari : Low Team Building Paintball",
    price: "Hubungi kami",
    dayPackage: "1 Hari",
    buttonText: "Detail Paket",
    href: "/paket-outbound/1-day/low-team-building-paintball",
    description:
      "Kombinasi team building games dengan paintball. Ice breaking, leadership games, dan sesi paintball untuk membangun kerja sama tim.",
  },
  {
    slug: "low-team-building-highrope",
    image: "/activity/rope-1.webp",
    imageAlt: "Low Team Building Highrope",
    title: "Paket Outbound 1 Hari : Low Team Building Highrope",
    price: "Hubungi kami",
    dayPackage: "1 Hari",
    buttonText: "Detail Paket",
    href: "/paket-outbound/1-day/low-team-building-highrope",
    description:
      "Team building dengan tantangan highrope: flying fox, jembatan dua tali, rappelling. Menguji keberanian dan kepercayaan tim.",
  },
  {
    slug: "low-team-building-halfday",
    image: "/activity/games-1.webp",
    imageAlt: "Low Team Building Halfday",
    title: "Paket Outing 1 Hari : Low Team Building Halfday",
    price: "Rp. 150.000",
    dayPackage: "1 Hari",
    buttonText: "Detail Paket",
    href: "/paket-outbound/1-day/low-team-building-halfday",
    description:
      "Paket hemat setengah hari. Games ringan: ice breaking, energizer, dan dinamika kelompok. Cocok untuk waktu terbatas.",
  },
  {
    slug: "low-team-building-fun-offroad",
    image: "/activity/offroad-1.webp",
    imageAlt: "Low Team Building Fun Offroad",
    title: "Paket Outbound 1 Hari : Low Team Building Fun Offroad",
    price: "Rp. 435.000",
    dayPackage: "1 Hari",
    buttonText: "Detail Paket",
    href: "/paket-outbound/1-day/low-team-building-fun-offroad",
    description:
      "Petualangan offroad 4x4 di Cikole. Team building games plus jelajah medan menantang. Pengalaman seru untuk tim.",
  },
  {
    slug: "amazing-race-offroad-paintball",
    image: "/activity/paintball-2.webp",
    imageAlt: "Amazing Race Offroad Paintball",
    title: "One Day Low Team Building : Amazing Race-Offroad-Paintball",
    price: "Rp. 525.000",
    dayPackage: "1 Hari",
    buttonText: "Detail Paket",
    href: "/paket-outbound/1-day/amazing-race-offroad-paintball",
    description:
      "Paket lengkap: Amazing Race, offroad adventure, dan paintball. Kombinasi tiga aktivitas dalam satu hari penuh.",
  },
  {
    slug: "rafting-pangalengan-ciater",
    image: "/activity/games-2.webp",
    imageAlt: "Rafting Pangalengan & Ciater",
    title: "Paket Rafting Pangalengan & Ciater – Outbound 1 Hari (One Day)",
    price: "Rp. 300.000",
    dayPackage: "1 Hari",
    buttonText: "Detail Paket",
    href: "/paket-outbound/1-day/rafting-pangalengan-ciater",
    description:
      "Rafting di Sungai Citarik Pangalengan atau Ciater. Arung jeram dengan pemandangan alam Bandung. Termasuk asuransi dan peralatan.",
  },
  {
    slug: "paket-outbound-bandung-1-hari",
    image: "/activity/party-1.webp",
    imageAlt: "Paket Outbound Bandung 1 Hari",
    title: "Paket Outbound Bandung 1 Hari (One Day)",
    price: "Start from Rp. 150.000",
    dayPackage: "1 Hari",
    buttonText: "Detail Paket",
    href: "/paket-outbound/1-day/paket-outbound-bandung-1-hari",
    description:
      "Paket dasar one day. Dapat disesuaikan dengan kebutuhan: games, paintball, highrope, offroad, atau rafting. Fleksibel untuk berbagai ukuran tim.",
  },
  {
    slug: "paintball-rafting-ciater",
    image: "/activity/paintball-3.webp",
    imageAlt: "Paintball dan Rafting Ciater",
    title: "Program Outbound Paintball dan Rafting Ciater 1 Day",
    price: "Hubungi kami",
    dayPackage: "1 Hari",
    buttonText: "Detail Paket",
    href: "/paket-outbound/1-day/paintball-rafting-ciater",
    description:
      "Dua aktivitas utama: paintball di pagi/siang dan rafting di Ciater. Pengalaman lengkap adventure dalam satu hari.",
  },
];

/** Paket Outbound 2D1N */
const paket2D1N: SubPackage[] = [
  {
    slug: "paket-outbound-bandung-2d1n",
    image: "/activity/offroad-2.webp",
    imageAlt: "Paket Outbound Bandung 2 Hari 1 Malam",
    title: "Paket Outbound Bandung 2 Hari 1 Malam",
    price: "Start from Rp. 650.000",
    dayPackage: "2D1N",
    buttonText: "Detail Paket",
    href: "/paket-outbound/2d1n/paket-outbound-bandung-2d1n",
    description:
      "Penginapan 1 malam, makan 3x, games, highrope adventure (Two Line Bridges, Rappelling, Flying Fox), dan malam keakraban dengan hiburan musik.",
  },
];

/** Paket Outbound 3D2N */
const paket3D2N: SubPackage[] = [
  {
    slug: "fun-offroad-3d2n",
    image: "/activity/offroad-3.webp",
    imageAlt: "Fun Offroad 3 Hari 2 Malam",
    title: "Paket Outbound Bandung Fun Offroad 3 Hari 2 Malam (3D2N)",
    price: "Hubungi kami",
    dayPackage: "3D2N",
    buttonText: "Detail Paket",
    href: "/paket-outbound/3d2n/fun-offroad-3d2n",
    description:
      "Paket outbound 3 hari 2 malam dengan fokus fun offroad adventure. Games lengkap, highrope, paintball, dan penginapan 2 malam.",
  },
  {
    slug: "paket-outbound-bandung-3d2n",
    image: "/activity/offroad-4.webp",
    imageAlt: "Paket Outbound Bandung 3 Hari 2 Malam",
    title: "Paket Outbound Bandung 3 Hari 2 Malam",
    price: "Start from Rp. 1.100.000",
    dayPackage: "3D2N",
    buttonText: "Detail Paket",
    href: "/paket-outbound/3d2n/paket-outbound-bandung-3d2n",
    description:
      "Paket lengkap 3 hari 2 malam: treasure hunt, construction building, ice breaking, highrope, paintball war game. Makan 6x, snack 4x, dokumentasi drone.",
  },
];

export const paketOutboundByType: PackageCategory[] = [
  {
    id: "1-hari",
    categorySlug: "1-day",
    title: "Paket Outbound 1 Hari (One Day)",
    subtitle: "Paket one day untuk team building, paintball, rafting, offroad, dan aktivitas outbound lainnya.",
    packages: paket1Hari,
  },
  {
    id: "2d1n",
    categorySlug: "2d1n",
    title: "Paket Outbound 2D1N – 2 Hari 1 Malam",
    subtitle: "Pengalaman outbound lebih lengkap dengan menginap satu malam.",
    packages: paket2D1N,
  },
  {
    id: "3d2n",
    categorySlug: "3d2n",
    title: "Paket Outbound 3D2N – 3 Hari 2 Malam",
    subtitle: "Paket outbound extended untuk tim yang ingin pengalaman mendalam.",
    packages: paket3D2N,
  },
];

/** Home page outbound category cards derived from paketOutboundByType */
const homeCategoryDisplay: Record<
  CategorySlug,
  { title: string; price: string; image: string; imageAlt: string }
> = {
  "1-day": {
    title: "Paket Outbound 1 Day",
    price: "Mulai Rp. 150.000",
    image: "/activity/party-1.webp",
    imageAlt: "Rafting dan zip line outbound",
  },
  "2d1n": {
    title: "Paket Outbound 2D1N",
    price: "Mulai Rp. 650.000",
    image: "/activity/offroad-2.webp",
    imageAlt: "Rafting dan offroad outbound",
  },
  "3d2n": {
    title: "Paket Outbound 3D2N",
    price: "Mulai Rp. 1.100.000",
    image: "/activity/offroad-3.webp",
    imageAlt: "Offroad adventure outbound",
  },
};

export function getOutboundPackagesForHome() {
  return paketOutboundByType.map((cat) => {
    const display = homeCategoryDisplay[cat.categorySlug];
    const firstPkg = cat.packages[0];
    return {
      image: display.image,
      imageAlt: display.imageAlt,
      title: display.title,
      dayPackage: firstPkg?.dayPackage ?? "",
      price: display.price,
      buttonText: `LIHAT PAKET OUTBOUND ${cat.categorySlug.toUpperCase().replace("-", " ")}`,
      href: `/paket-outbound/${cat.categorySlug}`,
    };
  });
}

export const teamBuildingPackages = [
  {
    image: "/activity/paintball-2.webp",
    imageAlt: "Amazing Race Offroad Paintball",
    title: "Amazing Race - Offroad - Paintball",
    price: "Rp. 525.000",
    overlay: undefined as string | undefined,
    showFasilitas: false,
  },
  {
    image: "/activity/offroad-1.webp",
    imageAlt: "Fun Offroad Cikole",
    title: "Fun Offroad Cikole",
    price: "Rp. 435.000",
    overlay: "OFFROAD ADVENTURE",
    showFasilitas: true,
  },
  {
    image: "/activity/games-2.webp",
    imageAlt: "Rafting Ciater & Pangalengan",
    title: "Rafting Ciater & Pangalengan",
    price: "Rp. 300.000",
    overlay: "+TEAMBUILDING",
    showFasilitas: true,
  },
  {
    image: "/activity/paintball-1.webp",
    imageAlt: "Paintball",
    title: "Paintball",
    price: "Rp. 330.000",
    overlay: "+TEAMBUILDING",
    showFasilitas: true,
  },
  {
    image: "/activity/rope-1.webp",
    imageAlt: "Highrope",
    title: "Highrope",
    price: "Rp. 280.000",
    overlay: "+TEAMBUILDING",
    showFasilitas: true,
  },
  {
    image: "/activity/games-1.webp",
    imageAlt: "Halfday team building",
    title: "Halfday",
    price: "Rp. 150.000",
    overlay: undefined as string | undefined,
    showFasilitas: false,
    watermark: "bandung-outbound.com",
  },
];
