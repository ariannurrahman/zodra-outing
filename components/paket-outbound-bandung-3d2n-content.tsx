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
  Car,
  Search,
  Hammer,
  Target,
  Megaphone,
  Trophy,
} from "lucide-react";
import {
  InclusionsSection,
  ItinerarySection,
  PriceListSection,
} from "./package-sections";

const hotelPrices = [
  { name: "Narima Hotel", price: "Rp. 1.100.000" },
  { name: "Panorama Hotel", price: "Rp. 1.350.000" },
  { name: "Putri Gunung Hotel", price: "Rp. 1.800.000" },
];

const inclusions = [
  { icon: BedDouble, label: "Penginapan 2 malam di Hotel/Cottage" },
  { icon: UtensilsCrossed, label: "Makan 6x" },
  { icon: UtensilsCrossed, label: "Snack 4x" },
  { icon: Gamepad2, label: "Team Building Games" },
  { icon: Trophy, label: "Leadership Games" },
  { icon: Gamepad2, label: "Ice Breaking Games" },
  { icon: Gamepad2, label: "Master game" },
  { icon: Users, label: "Fasilitator" },
  { icon: Volume2, label: "Sound system" },
  { icon: MapPin, label: "Sewa lahan" },
  { icon: Mountain, label: "Highrope Games" },
  { icon: Target, label: "Paintball war game" },
  { icon: Target, label: "40 peluru paintball" },
  { icon: Music, label: "Electone + Singer MC" },
  { icon: Gamepad2, label: "Spanduk" },
  { icon: Camera, label: "Dokumentasi" },
  { icon: Video, label: "Liputan Video Drone" },
  { icon: Music, label: "Api Unggun" },
];

const day1Itinerary = [
  {
    time: "08.00",
    label: "Berkumpul di tempat yang telah ditentukan",
    icon: MapPin,
  },
  {
    time: "08.30",
    label: "Berangkat menuju Bandung",
    icon: Car,
  },
  {
    time: "12.00",
    label: "Diperkirakan tiba di Hotel, Cek in, Makan Siang",
    icon: Building2,
  },
  {
    time: "13.00",
    label: "Persiapan Treasure Hunt Games — Pembukaan, Sekapur sirih",
    icon: Megaphone,
  },
  {
    time: "13.30",
    label:
      "Treasure Hunt Games: peserta mencari 'harta karun' berupa bendera dan batu yang telah disebar di area kolam renang dengan clue serta peta buta",
    icon: Search,
  },
  {
    time: "15.00",
    label: "Coffee Break",
    icon: Coffee,
  },
  {
    time: "15.30",
    label: "Construction Building Games",
    icon: Hammer,
  },
  {
    time: "17.00",
    label: "Istirahat",
    icon: BedDouble,
  },
  {
    time: "19.00",
    label: "Makan Malam",
    icon: UtensilsCrossed,
  },
  {
    time: "20.00",
    label: "Api Unggun",
    icon: Music,
  },
  {
    time: "21.00",
    label: "Coffee Break, Istirahat",
    icon: Coffee,
  },
];

const day2Itinerary = [
  {
    time: "07.00",
    label: "Sarapan pagi",
    icon: UtensilsCrossed,
  },
  {
    time: "08.00",
    label:
      "Persiapan Outing Games — De Brief, Energizer, Dinamika Kelompok",
    icon: Megaphone,
  },
  {
    time: "08.30",
    label:
      "Ice Breaking Games: Making Melody, Tac tic Boom, Tonji-tonji, Burung Terbang",
    icon: Gamepad2,
  },
  {
    time: "09.30",
    label:
      "Low Team Building Games: All Stand Up, Hoolla Hop, Human Chair, Transfer Stick, Catterpillar",
    icon: Gamepad2,
  },
  {
    time: "11.00",
    label:
      "Leadership Game: Pisa, Scream Machine, Silent line up, Dragon Tail",
    icon: Trophy,
  },
  {
    time: "12.00",
    label: "Makan Siang / Istirahat",
    icon: UtensilsCrossed,
  },
  {
    time: "13.00",
    label:
      "Adventures Games Highrope: Two Line Bridges, Rappelling, Flying Fox",
    icon: Mountain,
  },
  {
    time: "14.30",
    label: "Coffee Break",
    icon: Coffee,
  },
  {
    time: "15.00",
    label: "War Game Paintball — Safety Talk, Simulasi, War Game",
    icon: Target,
  },
  {
    time: "16.30",
    label: "Kembali ke hotel",
    icon: Car,
  },
  {
    time: "19.00",
    label: "Makan Malam",
    icon: UtensilsCrossed,
  },
  {
    time: "19.30",
    label: "Malam Keakraban: Electone + Singer, Singing and Dancing",
    icon: Music,
  },
  {
    time: "20.30",
    label:
      "Snack Tradisional: Bakar Jagung, Bandrek, pisang rebus, kacang rebus. Api Unggun",
    icon: Music,
  },
  {
    time: "22.00",
    label: "Istirahat",
    icon: BedDouble,
  },
];

const day3Itinerary = [
  {
    time: "07.00",
    label: "Sarapan pagi di hotel",
    icon: UtensilsCrossed,
  },
  {
    time: "10.00",
    label: "Check out hotel dan acara selesai",
    icon: Building2,
  },
];

export function PaketOutboundBandung3D2NContent() {
  return (
    <div className="space-y-14">
      <PriceListSection
        title="Harga Paket (per Pax)"
        description="Harga sudah termasuk penginapan 2 malam, makan 6x, snack 4x, games, highrope, paintball, fasilitator, dan dokumentasi drone."
        items={hotelPrices}
      />
      <InclusionsSection items={inclusions} />
      <ItinerarySection title="Day 1" items={day1Itinerary} />
      <ItinerarySection title="Day 2" items={day2Itinerary} />
      <ItinerarySection title="Day 3" items={day3Itinerary} />
    </div>
  );
}
