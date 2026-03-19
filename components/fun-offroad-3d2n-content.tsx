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
  Coffee,
  Car,
  Search,
  Megaphone,
  Building2,
  Flag,
  Trophy,
} from "lucide-react";
import {
  InclusionsSection,
  ItinerarySection,
  PriceListSection,
} from "./package-sections";

const hotelPrices = [
  { name: "Narima Hotel", price: "Rp. 1.275.000" },
  { name: "Panorama Hotel", price: "Rp. 1.525.000" },
  { name: "Putri Gunung Hotel", price: "Rp. 1.975.000" },
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
  { icon: Music, label: "Electone + Singer MC" },
  { icon: Gamepad2, label: "Spanduk" },
  { icon: Camera, label: "Dokumentasi" },
  { icon: Video, label: "Liputan video drone" },
  { icon: Music, label: "Api Unggun" },
];

const day1Itinerary = [
  {
    time: "07.00",
    label: "Berkumpul di halaman kantor",
    icon: MapPin,
  },
  {
    time: "08.00",
    label: "Berangkat menuju Bandung",
    icon: Car,
  },
  {
    time: "12.00",
    label: "Diperkirakan tiba di Cikole, Proses Cek in, Makan Siang",
    icon: Building2,
  },
  {
    time: "13.00",
    label: "Persiapan Team Building — Pembukaan, Sekapur sirih, Energizer",
    icon: Megaphone,
  },
  {
    time: "13.30",
    label:
      "Ice Breaking Games (Dinamika Kelompok): Tac tic boom, Hujan Badai, Making Melody, Tonji-tonji",
    icon: Gamepad2,
  },
  {
    time: "14.00",
    label:
      "Low Team Building Games: All Stand Up, Human Bridge, Human Chair, Transfer Stick",
    icon: Gamepad2,
  },
  {
    time: "15.30",
    label: "Highrope Games: Two Line Bridges, Rappelling, Flying Fox",
    icon: Mountain,
  },
  {
    time: "16.30",
    label: "Coffee Break",
    icon: Coffee,
  },
  {
    time: "17.00",
    label: "Menuju Hotel",
    icon: Car,
  },
  {
    time: "17.30",
    label: "Proses Cek In",
    icon: Building2,
  },
  {
    time: "19.00",
    label: "Makan Malam",
    icon: UtensilsCrossed,
  },
  {
    time: "21.00",
    label: "Api Unggun, Snack Tradisional",
    icon: Music,
  },
];

const day2Itinerary = [
  {
    time: "07.00",
    label: "Sarapan Pagi",
    icon: UtensilsCrossed,
  },
  {
    time: "08.00",
    label:
      'Berkumpul di tempat yang telah ditentukan — Persiapan "Amazing Race" by Landrover: De Brief, Energizer, Dinamika Kelompok',
    icon: Megaphone,
  },
  {
    time: "08.30",
    label:
      "Setiap kelompok diberi media puzzle mencari gambar Sempurna sambil menuju medan offroad desa Sukawana Pos 1 via perkebunan teh — Flag Hunting",
    icon: Search,
  },
  {
    time: "10.30",
    label:
      "Menuju Pos 2 Bungker Jepang — peserta melalui jalan yang memacu adrenalin: Toxic Waste, Half Pipe",
    icon: Car,
  },
  {
    time: "12.30",
    label: "Makan Siang, di Resto Cikole",
    icon: UtensilsCrossed,
  },
  {
    time: "13.30",
    label:
      "Menuju Pos 3 Hutan Pinus kaki Gunung Tangkuban Perahu, Lapang Jendral: Find the perfect star, Hullahoop relay, Nuclear bomb, Mission impossible",
    icon: Gamepad2,
  },
  {
    time: "15.30",
    label: "Closing Games: Save island",
    icon: Gamepad2,
  },
  {
    time: "16.00",
    label: "Evaluasi & Winner Group Announcing",
    icon: Trophy,
  },
  {
    time: "16.30",
    label: "Kembali menuju Hotel",
    icon: Car,
  },
  {
    time: "19.00",
    label: "Makan Malam at resto hotel",
    icon: UtensilsCrossed,
  },
  {
    time: "19.30",
    label:
      "Malam keakraban: Hiburan by MC, Akustik Plus, Sing a Song, Dancing Together, Fun Games",
    icon: Music,
  },
  {
    time: "21.30",
    label: "Coffee Break",
    icon: Coffee,
  },
  {
    time: "22.30",
    label: "Istirahat",
    icon: BedDouble,
  },
];

const day3Itinerary = [
  {
    time: "07.00",
    label: "Sarapan Pagi",
    icon: UtensilsCrossed,
  },
  {
    time: "09.00",
    label: "Cek Out Hotel",
    icon: Building2,
  },
  {
    time: "09.30",
    label: "Kembali menuju tempat semula",
    icon: Car,
  },
];

export function FunOffroad3D2NContent() {
  return (
    <div className="space-y-14">
      <PriceListSection
        title="Harga Paket (per Pax)"
        description="Harga bervariasi sesuai pilihan hotel. Sudah termasuk penginapan 2 malam, makan 6x, snack 4x, games, highrope, amazing race offroad, fasilitator, dan dokumentasi drone."
        items={hotelPrices}
      />
      <InclusionsSection items={inclusions} />
      <ItinerarySection title="Day 1" items={day1Itinerary} />
      <ItinerarySection title="Day 2" items={day2Itinerary} />
      <ItinerarySection title="Day 3" items={day3Itinerary} />
    </div>
  );
}
