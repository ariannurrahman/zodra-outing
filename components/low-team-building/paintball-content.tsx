import {
  Gamepad2,
  Users,
  Volume2,
  Camera,
  Target,
  UtensilsCrossed,
  Coffee,
  Check,
  MapPin,
  Megaphone,
  Flag,
} from "lucide-react";
import {
  InclusionsSection,
  ItinerarySection,
} from "../package-sections";

const inclusions = [
  { icon: Gamepad2, label: "Ice Breaking Games" },
  { icon: Gamepad2, label: "Team Building Games" },
  { icon: Gamepad2, label: "Highrope Games" },
  { icon: Users, label: "Master Games dan Fasilitator" },
  { icon: Volume2, label: "Sound System" },
  { icon: Target, label: "Paintball War game" },
  { icon: Target, label: "40 peluru paintball" },
  { icon: UtensilsCrossed, label: "Makan Siang 1x" },
  { icon: Coffee, label: "Coffee Break 1x" },
  { icon: Check, label: "Air Mineral" },
  { icon: Check, label: "Spanduk" },
  { icon: Camera, label: "Dokumentasi Foto" },
];

const itinerary = [
  {
    time: "06.00",
    label: "Peserta berkumpul di halaman kantor",
    icon: MapPin,
  },
  {
    time: "06.30",
    label: "Berangkat menuju Lembang",
    icon: MapPin,
  },
  {
    time: "09.30",
    label:
      "Tiba di lokasi Outing — Pembukaan, Sekapur sirih, Energizer, Dinamika Kelompok",
    icon: Megaphone,
  },
  {
    time: "10.00",
    label:
      "Ice Breaking: Tac tic boom, Hujan Badai, Making Melody, Tonji-tonji",
    icon: Gamepad2,
  },
  {
    time: "11.00",
    label:
      "Leadership Games: Menara Pisa, Scream Machine, Silent Line Up, Dragon Tail",
    icon: Gamepad2,
  },
  {
    time: "12.00",
    label: "Makan Siang",
    icon: UtensilsCrossed,
  },
  {
    time: "13.00",
    label:
      "Goal Activities Games: Blind Follow, Hear the Sound, Trust Fall, Save Island",
    icon: Gamepad2,
  },
  {
    time: "14.00",
    label: "Clossing dan Pemaknaan",
    icon: Flag,
  },
  {
    time: "14.30",
    label: "Paintball — Safety Talk, Shot Simulasi, War Games",
    icon: Target,
  },
  {
    time: "16.30",
    label: "Acara selesai",
    icon: Flag,
  },
];

export function PaintballContent() {
  return (
    <div className="space-y-14">
      <InclusionsSection items={inclusions} />
      <ItinerarySection title="Jadwal Kegiatan" items={itinerary} />
    </div>
  );
}
