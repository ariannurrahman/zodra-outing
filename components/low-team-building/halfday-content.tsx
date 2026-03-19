import {
  Gamepad2,
  Users,
  Volume2,
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
  { icon: Users, label: "Master Games dan Fasilitator" },
  { icon: Volume2, label: "Sound System" },
];

const itinerary = [
  {
    time: "08.00",
    label:
      "Tiba di lokasi Outing — Pembukaan, Sekapur sirih, Energizer, Dinamika Kelompok",
    icon: Megaphone,
  },
  {
    time: "09.00",
    label:
      "Ice Breaking Games: Tac tic boom, Hujan Badai, Making Melody, Tonji-tonji",
    icon: Gamepad2,
  },
  {
    time: "10.00",
    label:
      "Leadership Games: Menara Pisa, Scream Machine, Silent Line Up, Dragon Tail",
    icon: Gamepad2,
  },
  {
    time: "11.00",
    label:
      "Goal Activities Games: Blind Follow, Hear the Sound, Trust Fall, Save Island",
    icon: Gamepad2,
  },
  {
    time: "12.00",
    label: "Clossing & Pemaknaan — Acara selesai",
    icon: Flag,
  },
];

export function HalfdayContent() {
  return (
    <div className="space-y-14">
      <InclusionsSection items={inclusions} />
      <ItinerarySection title="Jadwal Kegiatan" items={itinerary} />
    </div>
  );
}
