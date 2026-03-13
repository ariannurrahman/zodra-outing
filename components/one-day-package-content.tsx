import {
  Check,
  MapPin,
  Gamepad2,
  Users,
  UtensilsCrossed,
  Camera,
  Shield,
  Volume2,
  Sparkles,
  Megaphone,
  Activity,
  Mountain,
  Flag,
} from "lucide-react";
import {
  InclusionsSection,
  ItinerarySection,
} from "./package-sections";

const inclusions = [
  { icon: UtensilsCrossed, label: "1x makan siang" },
  { icon: Sparkles, label: "1x snack tradisional" },
  { icon: Shield, label: "Asuransi (khusus rafting & paintball)" },
  { icon: Camera, label: "Dokumentasi foto" },
  { icon: Gamepad2, label: "Spanduk kegiatan" },
  { icon: Check, label: "Air mineral" },
  { icon: Users, label: "Fasilitator" },
  { icon: Gamepad2, label: "Master games" },
  { icon: Volume2, label: "Sound system" },
  {
    icon: Check,
    label:
      "Tiket kawasan & peralatan khusus (peluru paintball untuk paket tertentu)",
  },
];

const locations = ["Lembang", "Ciwidey", "Pangalengan"];

const activities = [
  {
    title: "Ice Breaking Games",
    games: ["Tac tic boom", "Hujan Badai", "Making Melody", "Tonji-tonji"],
  },
  {
    title: "Leadership Games",
    games: ["Menara Pisa", "Scream Machine", "Silen Line Up", "Dragon Tail"],
  },
  {
    title: "Goal Activities Games",
    games: ["Blind Follow", "Hear the Sound", "Trust Fall", "Save Island"],
  },
];

const schedule = [
  {
    time: "08.00–09.00",
    label: "Pembukaan & energizer",
    icon: Megaphone,
  },
  {
    time: "09.00–12.00",
    label: "Aktivitas utama (outbound games, offroad, rafting, dll)",
    icon: Activity,
  },
  { time: "12.00–12.30", label: "Makan siang", icon: UtensilsCrossed },
  {
    time: "12.30–16.00",
    label: "Aktivitas sore (paintball, highrope, dll)",
    icon: Mountain,
  },
  { time: "16.00–16.30", label: "Penutupan", icon: Flag },
];

const targetAudience = [
  "Paket Outing Kantor",
  "Employee Gathering",
  "Team Building",
];

export function OneDayPackageContent() {
  return (
    <div className="space-y-14">
      {/* Target Audience */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-foreground">
          Untuk Siapa
        </h2>
        <p className="mb-4 text-muted-foreground">
          Paket Outbound Bandung 1 Hari / One Day Activity ini dirancang khusus
          untuk:
        </p>
        <div className="flex flex-wrap gap-2">
          {targetAudience.map((item) => (
            <span
              key={item}
              className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <InclusionsSection
        items={inclusions}
        description="Secara umum, paket include:"
      />

      {/* Lokasi */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-foreground">
          Lokasi Kegiatan
        </h2>
        <p className="mb-4 text-muted-foreground">
          Lokasi kegiatan dapat disesuaikan dengan permintaan klien. Lokasi yang
          umum digunakan:
        </p>
        <div className="flex flex-wrap gap-3">
          {locations.map((loc) => (
            <div
              key={loc}
              className="flex items-center gap-2 rounded-xl border border-border/60 bg-card/50 px-4 py-3"
            >
              <MapPin className="h-4 w-4 text-primary" />
              <span className="font-medium text-foreground">{loc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Aktivitas */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-foreground">
          Aktivitas
        </h2>
        <p className="mb-6 text-muted-foreground">
          Aktivitas meliputi berbagai games yang dirancang untuk membangun tim:
        </p>
        <div className="space-y-6">
          {activities.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-border/60 bg-card/50 p-5"
            >
              <h3 className="mb-3 font-medium text-foreground">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.games.map((game) => (
                  <li
                    key={game}
                    className="rounded-lg bg-muted/80 px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {game}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <ItinerarySection
        title="Jadwal Kegiatan"
        description="Kegiatan umumnya mengikuti alur berikut. Jadwal detail bervariasi untuk setiap jenis paket."
        items={schedule}
      />
    </div>
  );
}
