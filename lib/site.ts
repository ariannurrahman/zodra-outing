// Site config for SEO - update with your production URL
export const siteConfig = {
  name: "Zodra Adventure",
  description:
    "Penyedia layanan outing dan outbound Bandung profesional untuk perusahaan, sekolah, dan komunitas. Paket outbound Bandung, team building, offroad Cikole.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://zodraouting.com"),
  locale: "id_ID",
  keywords: [
    "outing bandung",
    "outbound bandung",
    "paket outbound bandung",
    "team building bandung",
    "offroad bandung",
    "rafting bandung",
    "outbound Cikole",
    "outbound perusahaan",
    "outbound sekolah",
  ],
};
