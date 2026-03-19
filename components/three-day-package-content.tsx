import {
  BedDouble,
  UtensilsCrossed,
  Gamepad2,
  Users,
  Volume2,
  Camera,
  Video,
  Music,
  Mountain,
  MapPin,
  Building2,
  Coffee,
  Flag,
  Car,
  Trophy,
  Search,
  Hammer,
  Target,
} from "lucide-react";
import {
  InclusionsSection,
  ItinerarySection,
  PriceListSection,
} from "./package-sections";

const inclusions = [
  { icon: BedDouble, label: "Penginapan 2 malam di Hotel/Cottage" },
  { icon: UtensilsCrossed, label: "Makan 6x + Snack 4x" },
  { icon: Gamepad2, label: "Team Building Games, Leadership Games" },
  { icon: Gamepad2, label: "Ice Breaking Games, Master game, Highrope Games" },
  { icon: Target, label: "Paintball War Game, 40 peluru Paintball" },
  { icon: Users, label: "Fasilitator" },
  { icon: Volume2, label: "Sound system, Sewa lahan, Spanduk kegiatan" },
  { icon: Music, label: "Electone + Singer MC, Api unggun" },
  { icon: Camera, label: "Dokumentasi" },
  { icon: Video, label: "Liputan Video Drone" },
];

const day1Itinerary = [
  {
    time: "08.00",
    label: "Berkumpul di tempat yang telah ditentukan",
    icon: MapPin,
  },
  {
    time: "08.30",
    label: "Perjalanan menuju lokasi, Cek in Hotel, Makan Siang",
    icon: Building2,
  },
  {
    time: "12.00",
    label: "Treasure Hunt Games",
    icon: Search,
  },
  {
    time: "14.00",
    label: "Construction Building Games",
    icon: Hammer,
  },
  {
    time: "16.00",
    label: "Coffee Break & Pemaknaan",
    icon: Coffee,
  },
  { time: "19.00", label: "Makan Malam", icon: UtensilsCrossed },
  {
    time: "20.00",
    label:
      "Malam Keakraban: Electone + Singer, Api Unggun, Snack Tradisional",
    icon: Music,
  },
  { time: "22.00", label: "Istirahat", icon: BedDouble },
];

const day2Itinerary = [
  { time: "07.00", label: "Sarapan Pagi", icon: UtensilsCrossed },
  {
    time: "08.00",
    label: "Energizer, Ice Breaking Games, Low Team Building Games",
    icon: Gamepad2,
  },
  {
    time: "10.00",
    label: "Leadership Game: Pisa, Scream Machine, Silent line up, Dragon Tail",
    icon: Trophy,
  },
  {
    time: "12.00",
    label: "Makan Siang",
    icon: UtensilsCrossed,
  },
  {
    time: "13.00",
    label:
      "Adventures Games Highrope: Two Line Bridges, Rappelling, Flying Fox",
    icon: Mountain,
  },
  {
    time: "15.00",
    label: "War Game Paintball: Safety Talk, Simulasi, War Game",
    icon: Target,
  },
  { time: "17.00", label: "Coffee Break & Pemaknaan", icon: Coffee },
  { time: "19.00", label: "Makan Malam", icon: UtensilsCrossed },
  {
    time: "20.00",
    label: "Malam Keakraban: Hiburan musik, Snack Tradisional",
    icon: Music,
  },
  { time: "22.00", label: "Istirahat", icon: BedDouble },
];

const day3Itinerary = [
  { time: "07.00", label: "Sarapan Pagi", icon: UtensilsCrossed },
  {
    time: "08.00",
    label: "Clossing dan Pemaknaan",
    icon: Flag,
  },
  {
    time: "09.00",
    label: "Cek out, Kembali menuju tempat semula",
    icon: Car,
  },
];

const hotelPrices = [
  { name: "Narima Hotel", price: "Rp. 1.100.000" },
  { name: "Panorama Hotel", price: "Rp. 1.350.000" },
  { name: "Putri Gunung Hotel", price: "Rp. 1.800.000" },
];

const optionalAddons = [
  { name: "Rafting", price: "Rp. 150.000" },
  { name: "Fun Offroad", price: "Rp. 175.000" },
  { name: "Archery", price: "Rp. 80.000" },
  { name: "T-shirt", price: "Rp. 80.000" },
  { name: "Kambing Guling", price: "Rp. 2.500.000" },
  { name: "Bus Pariwisata", price: "Rp. 4.000.000" },
];

export function ThreeDayPackageContent() {
  return (
    <div className="space-y-14">
      <InclusionsSection items={inclusions} />

      <ItinerarySection title="Itinerary Day 1" items={day1Itinerary} />
      <ItinerarySection title="Itinerary Day 2" items={day2Itinerary} />
      <ItinerarySection title="Itinerary Day 3" items={day3Itinerary} />

      <PriceListSection
        title="Harga Paket (per Pax)"
        description="Harga bervariasi sesuai pilihan hotel. Sudah termasuk penginapan 2 malam, makan 6x, snack 4x, games, highrope, paintball, fasilitator, dan dokumentasi drone."
        items={hotelPrices}
      />

      <PriceListSection
        title="Optional Add-on"
        description="Tambahkan aktivitas atau fasilitas berikut sesuai kebutuhan:"
        items={optionalAddons}
        compact
      />
    </div>
  );
}
