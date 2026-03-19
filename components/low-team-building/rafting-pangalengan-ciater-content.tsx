import {
  Gamepad2,
  Users,
  Volume2,
  Camera,
  UtensilsCrossed,
  MapPin,
  Shield,
  Waves,
  Megaphone,
  Flag,
  Car,
} from "lucide-react";
import {
  InclusionsSection,
  ItinerarySection,
  PriceListSection,
} from "../package-sections";

const priceOptions = [
  { name: "Rafting Ciater", price: "Rp. 300.000" },
  { name: "Rafting Pangalengan", price: "Rp. 340.000" },
];

const inclusions = [
  { icon: Gamepad2, label: "Team Building Game" },
  { icon: Users, label: "Game master" },
  { icon: Users, label: "Fasilitator" },
  { icon: MapPin, label: "Sewa lahan" },
  { icon: Volume2, label: "Sound system" },
  { icon: Waves, label: "Rafting" },
  { icon: Shield, label: "Asuransi" },
  {
    icon: UtensilsCrossed,
    label: "1x Makan siang, 1x Snack Tradisional, Air mineral",
  },
  { icon: Camera, label: "Dokumentasi foto, Spanduk kegiatan" },
];

const itinerary = [
  {
    time: "06.00",
    label: "Peserta berkumpul di halaman kantor",
    icon: MapPin,
  },
  {
    time: "06.30",
    label: "Berangkat menuju Pangalengan / Lembang",
    icon: Car,
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
      "Ice Breaking: Dum Dum Dah Dah, Bim Bum, 1,2 tangkap, Tupai dan Pemburu, Angin Ribut, People to people",
    icon: Gamepad2,
  },
  {
    time: "10.30",
    label:
      "Initiative Games 1: Maze, Mines Field, Star Pyramid, Ball Challenge",
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
      "Initiative Games 2: Performing, Warm Up Opposite, Oddisey: Find The Perfect Star, Nuclear Bomb, Moving Ball, Mission Impossible",
    icon: Gamepad2,
  },
  {
    time: "14.00",
    label: "Rafting — Debrief, Safety Talk, Simulasi, Pengarungan",
    icon: Waves,
  },
  {
    time: "16.30",
    label: "Clossing dan Pemaknaan — Kembali menuju tempat semula",
    icon: Flag,
  },
];

export function RaftingPangalenganCiaterContent() {
  return (
    <div className="space-y-14">
      <PriceListSection
        title="Harga Paket (per Pax)"
        description="Pilih lokasi rafting sesuai preferensi Anda:"
        items={priceOptions}
      />
      <InclusionsSection items={inclusions} />
      <ItinerarySection title="Jadwal Kegiatan" items={itinerary} />
    </div>
  );
}
