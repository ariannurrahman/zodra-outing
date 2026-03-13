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
  ClipboardList,
  Coffee,
  Flag,
  Car,
  Trophy,
} from "lucide-react";
import {
  InclusionsSection,
  ItinerarySection,
  PriceListSection,
} from "./package-sections";

const inclusions = [
  { icon: BedDouble, label: "Penginapan 1 malam di Hotel/Cottage" },
  { icon: UtensilsCrossed, label: "Makan 3x + Snack 2x" },
  { icon: Gamepad2, label: "Team Building Games, Leadership Games" },
  { icon: Gamepad2, label: "Ice Breaking Games, Master game" },
  { icon: Mountain, label: "Highrope Games" },
  { icon: Users, label: "Fasilitator" },
  { icon: Volume2, label: "Sound system, Sewa lahan" },
  { icon: Music, label: "Electone + Singer MC" },
  { icon: Gamepad2, label: "Spanduk kegiatan" },
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
    label: "Diperkirakan tiba di Hotel, Cek in, Makan Siang",
    icon: Building2,
  },
  {
    time: "12.00",
    label:
      "Persiapan Outing Games, De Brief, Energizer, Dinamika Kelompok",
    icon: ClipboardList,
  },
  {
    time: "13.30",
    label:
      "Ice Breaking Games: Making Melody, Tac tic Boom, Tonji-tonji, Burung Terbang",
    icon: Gamepad2,
  },
  {
    time: "14.00",
    label:
      "Low Team Building Games: All Stand Up, Hoolla Hop, Human Chair, Transfer Stick, Catterpillar",
    icon: Gamepad2,
  },
  { time: "15.00", label: "Makan Siang", icon: UtensilsCrossed },
  {
    time: "16.00",
    label: "Leadership Game: Pisa, Scream Machine, Silent line up, Dragon Tail",
    icon: Trophy,
  },
  { time: "17.00", label: "Coffee Break", icon: Coffee },
  { time: "17.30", label: "Clossing dan Pemaknaan", icon: Flag },
  { time: "19.00", label: "Makan Malam", icon: UtensilsCrossed },
  {
    time: "19.00",
    label:
      "Malam Keakraban: Electone + Singer, Singing and Dancing, Snack Tradisional (Bakar Jagung, Bandrek, pisang rebus, kacang rebus), Api Unggun",
    icon: Music,
  },
  { time: "19.00", label: "Istirahat", icon: BedDouble },
];

const day2Itinerary = [
  { time: "07.00", label: "Sarapan Pagi", icon: UtensilsCrossed },
  {
    time: "08.00",
    label:
      "Adventures Games Highrope: Two Line Bridges, Rapelling, Flying Fox",
    icon: Mountain,
  },
  {
    time: "10.00",
    label: "Cek out, Kembali menuju tempat semula",
    icon: Car,
  },
];

const hotelPrices = [
  { name: "Narima Hotel", price: "Rp. 650.000" },
  { name: "Grafika Cikole", price: "Rp. 750.000" },
  { name: "Panorama Hotel", price: "Rp. 800.000" },
  { name: "Kastuba Resort", price: "Rp. 1.000.000" },
];

const optionalAddons = [
  { name: "Rafting", price: "Rp. 150.000" },
  { name: "Paintball", price: "Rp. 85.000" },
  { name: "Archery", price: "Rp. 80.000" },
  { name: "Fun Offroad", price: "Rp. 175.000" },
  { name: "T-shirt", price: "Rp. 80.000" },
  { name: "Kambing Guling", price: "Rp. 2.500.000" },
  { name: "Bus Pariwisata", price: "Rp. 4.000.000" },
];

export function TwoDayPackageContent() {
  return (
    <div className="space-y-14">
      <InclusionsSection items={inclusions} />

      <ItinerarySection title="Itinerary Day 1" items={day1Itinerary} />
      <ItinerarySection title="Itinerary Day 2" items={day2Itinerary} />

      <PriceListSection
        title="Harga Paket (per Pax)"
        description="Harga bervariasi sesuai pilihan hotel. Sudah termasuk penginapan 1 malam, makan 3x, snack 2x, games, fasilitator, dan dokumentasi."
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
