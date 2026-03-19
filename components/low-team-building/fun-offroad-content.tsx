import {
  Car,
  Gamepad2,
  Users,
  Volume2,
  Camera,
  UtensilsCrossed,
  Check,
  MapPin,
  Mountain,
  Flag,
} from "lucide-react";
import {
  InclusionsSection,
  ItinerarySection,
} from "../package-sections";

const inclusions = [
  { icon: Car, label: "Paket Offroad" },
  { icon: Gamepad2, label: "Ice Breaking Games" },
  { icon: Gamepad2, label: "Team Building Games" },
  { icon: Users, label: "Master Games dan Fasilitator" },
  { icon: Volume2, label: "Sound System" },
  { icon: MapPin, label: "Sewa lahan" },
  {
    icon: UtensilsCrossed,
    label: "Makan Siang 1x, Coffee Break 1x, Air Mineral",
  },
  { icon: Check, label: "Spanduk kegiatan" },
  { icon: Camera, label: "Dokumentasi Foto" },
];

const itinerary = [
  {
    time: "08.00",
    label:
      'Berkumpul di halaman yang telah ditentukan — Persiapan "Fun Adventure" by Landrover, Persiapan dan Pengarahan, Energizer, Dinamika Kelompok',
    icon: MapPin,
  },
  {
    time: "09.30",
    label:
      "Menuju lokasi medan Offroad dengan melalui perkebunan teh, jalan batu – medan lumpur",
    icon: Car,
  },
  {
    time: "10.00",
    label:
      "Games Kebersamaan: Ice Breaking Games (Tac tic boom, Hujan Badai, Making Melody, Tonji-tonji), Leadership Games (Menara Pisa, Scream Machine, Silent Line Up, Dragon Tail), Goal Activities Games (Blind Follow, Hear the Sound, Trust Fall, Save Island)",
    icon: Gamepad2,
  },
  {
    time: "12.30",
    label: "Makan Siang Nasi Liwet, di dalam hutan Cagar Alam",
    icon: UtensilsCrossed,
  },
  {
    time: "13.30",
    label:
      "Menuju Track Offroad — peserta akan melalui jalan yang memacu adrenalin",
    icon: Mountain,
  },
  {
    time: "16.00",
    label: "Diperkirakan tiba di Finish point",
    icon: Flag,
  },
];

export function FunOffroadContent() {
  return (
    <div className="space-y-14">
      <InclusionsSection items={inclusions} />
      <ItinerarySection title="Jadwal Kegiatan" items={itinerary} />
    </div>
  );
}
