import {
  Gamepad2,
  Target,
  Waves,
  UtensilsCrossed,
  Coffee,
  MapPin,
  Megaphone,
  Car,
  Thermometer,
} from "lucide-react";
import {
  InclusionsSection,
  ItinerarySection,
} from "../package-sections";

const inclusions = [
  { icon: Target, label: "Paintball" },
  { icon: Waves, label: "Bamboe Rafting & Rafting" },
  { icon: Gamepad2, label: "Ice Breaking Games" },
  { icon: UtensilsCrossed, label: "Makan Siang 1x, Snack box, Coffee Break" },
  { icon: Car, label: "Transport Bis" },
  { icon: Thermometer, label: "Berendam kolam air panas alami" },
];

const itinerary = [
  {
    time: "07.00",
    label: 'Berkumpul — Persiapan "Fun Adventure", absensi',
    icon: MapPin,
  },
  {
    time: "07.30",
    label: "Seluruh peserta berangkat menuju Ciater menggunakan Bis — Snack box dibagikan",
    icon: Car,
  },
  {
    time: "09.30",
    label:
      "Diperkirakan tiba di Ciater Spa — Persiapan Adventures Games: Pembukaan, Sekapur sirih, Energizer, Dinamika Kelompok",
    icon: Megaphone,
  },
  {
    time: "10.00",
    label:
      "Ice Breaking Games: Dum Dum Dah Dah, Bim Bum, 1,2 tangkap, Tupai dan Pemburu, Angin Ribut, People to people",
    icon: Gamepad2,
  },
  {
    time: "11.00",
    label: "Paintball Games — Safety Talk, Simulasi, War Games",
    icon: Target,
  },
  {
    time: "12.00",
    label: "Makan Siang",
    icon: UtensilsCrossed,
  },
  {
    time: "13.00",
    label:
      "Bamboe Rafting — Debrief, Safety Talk, Simulasi, Building Crossing",
    icon: Waves,
  },
  {
    time: "15.00",
    label: "Rafting — Safety Talk, Simulasi dayung, Pengarungan",
    icon: Waves,
  },
  {
    time: "15.30",
    label: "Berendam di kolam air panas alami",
    icon: Thermometer,
  },
  {
    time: "16.30",
    label: "Coffee Break",
    icon: Coffee,
  },
  {
    time: "17.00",
    label: "Persiapan kembali menuju kantor depo Kai menggunakan Bis",
    icon: Car,
  },
];

export function PaintballRaftingCiaterContent() {
  return (
    <div className="space-y-14">
      <InclusionsSection items={inclusions} />
      <ItinerarySection title="Jadwal Kegiatan" items={itinerary} />
    </div>
  );
}
