import {
  Car,
  Gamepad2,
  Users,
  Volume2,
  Camera,
  Target,
  UtensilsCrossed,
  Coffee,
  MapPin,
  Shield,
  Ticket,
  Flag,
  Search,
} from "lucide-react";
import {
  InclusionsSection,
  ItinerarySection,
} from "../package-sections";

const inclusions = [
  { icon: Car, label: "Paket Offroad" },
  { icon: Ticket, label: "Tiket Kawasan" },
  { icon: Shield, label: "Asuransi" },
  { icon: Search, label: "Paket Amazing Race" },
  { icon: Gamepad2, label: "Ice Breaking Games" },
  { icon: Gamepad2, label: "Team Building Games" },
  { icon: Users, label: "Master Games dan Fasilitator" },
  { icon: Target, label: "Paintball war game, 40 peluru paintball" },
  {
    icon: UtensilsCrossed,
    label: "Makan Siang 1x, Coffee Break 1x, Air Mineral",
  },
  { icon: Volume2, label: "Sound System, Spanduk" },
  { icon: Camera, label: "Dokumentasi Foto" },
];

const itinerary = [
  {
    time: "08.00",
    label:
      'Berkumpul di halaman yang telah ditentukan — Persiapan "Fun Adventure" by Landrover, De Brief, Energizer, Dinamika Kelompok',
    icon: MapPin,
  },
  {
    time: "08.30",
    label:
      "Setiap kelompok akan diberi media puzzle mencari gambar Sempurna dari gambar bentuk abstrak sambil menuju lokasi medan offroad desa Sukawana Pos 1 dengan melalui perkebunan teh yang asri — Flag Hunting",
    icon: Search,
  },
  {
    time: "10.30",
    label:
      "Menuju Pos 2 Bungker Jepang — peserta akan melalui jalan yang memacu adrenalin. Games Kebersamaan: Find the perfect star, Hulla hoop relay, Stick transfer, Water transfer, Mission impossible",
    icon: Gamepad2,
  },
  {
    time: "12.30",
    label: "Makan Siang Nasi Liwet, di dalam hutan",
    icon: UtensilsCrossed,
  },
  {
    time: "13.30",
    label: "Paintball — Safety talk, Simulasi, War Game",
    icon: Target,
  },
  {
    time: "15.00",
    label: "Coffee break tradisional",
    icon: Coffee,
  },
  {
    time: "15.30",
    label: "Seluruh peserta melanjutkan perjalanan kembali",
    icon: Car,
  },
  {
    time: "16.00",
    label: "Diperkirakan tiba kembali di Finish point",
    icon: Flag,
  },
];

export function AmazingRaceOffroadPaintballContent() {
  return (
    <div className="space-y-14">
      <InclusionsSection items={inclusions} />
      <ItinerarySection title="Jadwal Kegiatan" items={itinerary} />
    </div>
  );
}
