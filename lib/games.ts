export type GameCategory =
  | "ice-breaking"
  | "leadership"
  | "goal-trust"
  | "low-team-building"
  | "initiative"
  | "amazing-race"
  | "highrope"
  | "program-khusus";

export interface OutboundGame {
  slug: string;
  name: string;
  category: GameCategory;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  teamBuildingBenefits: string[];
}

export const gameCategoryLabels: Record<GameCategory, string> = {
  "ice-breaking": "Ice Breaking",
  leadership: "Leadership",
  "goal-trust": "Goal & Trust",
  "low-team-building": "Low Team Building",
  initiative: "Initiative",
  "amazing-race": "Amazing Race & Offroad",
  highrope: "Highrope",
  "program-khusus": "Program & Aktivitas",
};

export const outboundGames: OutboundGame[] = [
  {
    slug: "tac-tic-boom",
    name: "Tac tic boom",
    category: "ice-breaking",
    categoryLabel: gameCategoryLabels["ice-breaking"],
    shortDescription: "Permainan ritme dan respons cepat untuk memecah kekakuan.",
    description:
      "Peserta mengikuti pola ritme dan komando yang berubah-ubah. Permainan ini membutuhkan konsentrasi, koordinasi, dan komunikasi non-verbal antar anggota tim.",
    teamBuildingBenefits: [
      "Melatih fokus dan respons kolektif.",
      "Mencairkan suasana sebelum aktivitas berat.",
      "Membangun energi positif di awal sesi.",
    ],
  },
  {
    slug: "hujan-badai",
    name: "Hujan Badai",
    category: "ice-breaking",
    categoryLabel: gameCategoryLabels["ice-breaking"],
    shortDescription: "Simulasi gerakan mengikuti cuaca untuk menghangatkan tubuh dan semangat.",
    description:
      "Dipandu fasilitator, tim menirukan gerakan sesuai intensitas 'hujan' hingga 'badai'. Cocok sebagai energizer singkat yang melibatkan seluruh peserta.",
    teamBuildingBenefits: [
      "Mengurangi jarak sosial antar peserta.",
      "Melatih mengikuti instruksi bersama-sama.",
      "Meningkatkan partisipasi aktif seluruh anggota.",
    ],
  },
  {
    slug: "making-melody",
    name: "Making Melody",
    category: "ice-breaking",
    categoryLabel: gameCategoryLabels["ice-breaking"],
    shortDescription: "Membentuk irama atau lagu sederhana bersama sebagai satu kelompok.",
    description:
      "Tim membagi peran suara atau ketukan untuk menghasilkan satu 'melodi' bersama. Butuh mendengarkan satu sama lain agar hasilnya selaras.",
    teamBuildingBenefits: [
      "Melatih kolaborasi dan harmoni tim.",
      "Mengasah pendengaran aktif.",
      "Menciptakan pengalaman menyenangkan yang mudah diingat.",
    ],
  },
  {
    slug: "tonji-tonji",
    name: "Tonji-tonji",
    category: "ice-breaking",
    categoryLabel: gameCategoryLabels["ice-breaking"],
    shortDescription: "Permainan interaksi cepat dengan aturan lucu untuk membangun keakraban.",
    description:
      "Peserta saling berinteraksi mengikuti aturan permainan yang ringan dan seringkali lucu. Efektif untuk mempercepat proses saling mengenal.",
    teamBuildingBenefits: [
      "Mempercepat breaking the ice antar divisi.",
      "Meningkatkan kenyamanan berkomunikasi di kelompok.",
      "Cocok untuk grup yang baru pertama kali outbound.",
    ],
  },
  {
    slug: "burung-terbang",
    name: "Burung Terbang",
    category: "ice-breaking",
    categoryLabel: gameCategoryLabels["ice-breaking"],
    shortDescription: "Reaksi cepat mengikuti isyarat 'burung terbang' dan variasinya.",
    description:
      "Fasilitator memberi isyarat; peserta harus bereaksi benar atau 'tertangkap' salah. Melatih konsentrasi sambil tetap riang.",
    teamBuildingBenefits: [
      "Melatih atensi dan disiplin ringan.",
      "Menciptakan tawa dan relaksasi mental.",
      "Mengisi jeda antar sesi dengan energi positif.",
    ],
  },
  {
    slug: "dum-dum-dah-dah",
    name: "Dum Dum Dah Dah",
    category: "ice-breaking",
    categoryLabel: gameCategoryLabels["ice-breaking"],
    shortDescription: "Permainan ritme kelompok dengan pola dum dan dah.",
    description:
      "Seluruh tim mengikuti pola bunyi bersama. Kesalahan kecil menjadi sumber humor dan pembelajaran tentang sinkronisasi.",
    teamBuildingBenefits: [
      "Membangun sense of unity melalui ritme bersama.",
      "Melatih mendengar dan menyesuaikan diri dengan tempo tim.",
      "Ringan secara fisik, cocok untuk pembuka sesi.",
    ],
  },
  {
    slug: "bim-bum",
    name: "Bim Bum",
    category: "ice-breaking",
    categoryLabel: gameCategoryLabels["ice-breaking"],
    shortDescription: "Call and response sederhana untuk fokus kolektif.",
    description:
      "Peserta merespons komando 'bim' atau 'bum' secara bersamaan. Variasi kecepatan menguji konsentrasi tim.",
    teamBuildingBenefits: [
      "Menyelaraskan perhatian ke satu titik (fasilitator).",
      "Cepat dan mudah untuk grup besar.",
      "Transisi halus dari formal ke suasana outbound.",
    ],
  },
  {
    slug: "satu-dua-tangkap",
    name: "1,2 tangkap",
    category: "ice-breaking",
    categoryLabel: gameCategoryLabels["ice-breaking"],
    shortDescription: "Permainan refleks dan posisi tubuh antar peserta.",
    description:
      "Berdasarkan hitungan atau komando, peserta harus bereaksi cepat—misalnya menangkap atau menghindari pasangan. Melatih refleks dan interaksi langsung.",
    teamBuildingBenefits: [
      "Meningkatkan kewaspadaan dan respons terhadap rekan.",
      "Mempererat kontak fisik non-intensif yang aman.",
      "Menurunkan kekakuan formal antar rekan kerja.",
    ],
  },
  {
    slug: "tupai-dan-pemburu",
    name: "Tupai dan Pemburu",
    category: "ice-breaking",
    categoryLabel: gameCategoryLabels["ice-breaking"],
    shortDescription: "Permainan peran tupai dan pemburu dengan gerakan dan strategi sederhana.",
    description:
      "Peserta dibagi peran dan bergerak sesuai aturan untuk 'menangkap' atau 'melarikan diri'. Dinamis dan cocok untuk outdoor.",
    teamBuildingBenefits: [
      "Melatih strategi cepat dan komunikasi singkat.",
      "Meningkatkan kepercayaan dalam situasi permainan.",
      "Aktivitas fisik ringan yang menyatukan tim.",
    ],
  },
  {
    slug: "angin-ribut",
    name: "Angin Ribut",
    category: "ice-breaking",
    categoryLabel: gameCategoryLabels["ice-breaking"],
    shortDescription: "Variasi energizer dengan tema angin dan badai.",
    description:
      "Gerakan tubuh dan suara mengikuti narasi fasilitator tentang cuaca. Membangun energi kolektif tanpa peralatan khusus.",
    teamBuildingBenefits: [
      "Membangun ritme dan semangat bersama.",
      "Semua level jabatan bisa berpartisipasi setara.",
      "Membuka sesi dengan suasana ceria.",
    ],
  },
  {
    slug: "people-to-people",
    name: "People to people",
    category: "ice-breaking",
    categoryLabel: gameCategoryLabels["ice-breaking"],
    shortDescription: "Interaksi cepat antar peserta untuk saling bertukar pasangan atau posisi.",
    description:
      "Saat komando berbunyi, peserta harus segera mencari pasangan atau membentuk kelompok sesuai aturan. Melatih adaptasi sosial cepat.",
    teamBuildingBenefits: [
      "Memperluas interaksi di luar lingkaran kerja biasa.",
      "Mengurangi rasa canggung antar individu.",
      "Dasar yang baik sebelum games yang lebih struktural.",
    ],
  },
  {
    slug: "menara-pisa",
    name: "Menara Pisa",
    category: "leadership",
    categoryLabel: gameCategoryLabels.leadership,
    shortDescription: "Membangun struktur tim yang stabil dan seimbang.",
    description:
      "Tim bekerja sama membangun 'menara' dari material yang diberikan dengan keterbatasan tertentu. Butuh perencanaan, komunikasi, dan peran jelas.",
    teamBuildingBenefits: [
      "Melatih perencanaan dan eksekusi bersama.",
      "Mengidentifikasi peran pemimpin dan pendukung.",
      "Mengajarkan trial-error dalam lingkungan aman.",
    ],
  },
  {
    slug: "scream-machine",
    name: "Scream Machine",
    category: "leadership",
    categoryLabel: gameCategoryLabels.leadership,
    shortDescription: "Koordinasi suara atau gerakan dalam ritme tim.",
    description:
      "Kelompok menyelaraskan aksi atau suara dengan intensitas yang naik turun sesuai aturan. Melatih kontrol dan semangat kolektif.",
    teamBuildingBenefits: [
      "Membangun keberanian tampil di depan tim.",
      "Menyatukan energi tanpa kompetisi individual berlebihan.",
      "Cocok setelah ice breaking untuk naikkan intensitas.",
    ],
  },
  {
    slug: "silent-line-up",
    name: "Silent Line Up",
    category: "leadership",
    categoryLabel: gameCategoryLabels.leadership,
    shortDescription: "Berbaris berdasarkan kriteria tanpa berbicara.",
    description:
      "Peserta harus menyusun diri misalnya berdasarkan tanggal lahir atau tinggi badan tanpa suara. Hanya isyarat non-verbal yang diperbolehkan.",
    teamBuildingBenefits: [
      "Melatih komunikasi non-verbal dan empati.",
      "Mengasah problem solving tanpa diskusi verbal.",
      "Membangun rasa pencapaian bersama saat berhasil.",
    ],
  },
  {
    slug: "dragon-tail",
    name: "Dragon Tail",
    category: "leadership",
    categoryLabel: gameCategoryLabels.leadership,
    shortDescription: "Rantai tim yang bergerak menangkap 'ekor' lawan.",
    description:
      "Tim membentuk barisan memegang pinggang depan; kepala naga berusaha menyentuh ekor tim lawan. Butuh koordinasi gerak dan strategi.",
    teamBuildingBenefits: [
      "Melatih koordinasi fisik dan komunikasi cepat.",
      "Memperkuat rasa 'satu tubuh' dalam tim.",
      "Kompetisi sehat antar kelompok.",
    ],
  },
  {
    slug: "blind-follow",
    name: "Blind Follow",
    category: "goal-trust",
    categoryLabel: gameCategoryLabels["goal-trust"],
    shortDescription: "Memandu rekan yang menutup mata melewati rintangan.",
    description:
      "Sebagian peserta menjadi 'pemimpin' verbal atau fisik bagi rekan yang tidak melihat. Fokus pada kepercayaan dan instruksi jelas.",
    teamBuildingBenefits: [
      "Membangun trust antar rekan kerja.",
      "Melatih kejelasan komunikasi dan empati.",
      "Relevan untuk tim yang harus saling mengandalkan.",
    ],
  },
  {
    slug: "hear-the-sound",
    name: "Hear the Sound",
    category: "goal-trust",
    categoryLabel: gameCategoryLabels["goal-trust"],
    shortDescription: "Mengandalkan pendengaran untuk menyelesaikan tantangan tim.",
    description:
      "Tim menyelesaikan tugas dengan pembatasan visual atau dengan fokus pada petunjuk auditori. Mengasah konsentrasi bersama.",
    teamBuildingBenefits: [
      "Meningkatkan sensitivitas terhadap rekan tim.",
      "Melatih kolaborasi dalam kondisi tidak biasa.",
      "Mengajarkan pentingnya detail dalam komunikasi.",
    ],
  },
  {
    slug: "trust-fall",
    name: "Trust Fall",
    category: "goal-trust",
    categoryLabel: gameCategoryLabels["goal-trust"],
    shortDescription: "Jatuh ke belakang dengan keyakinan tim akan menangkap.",
    description:
      "Dilakukan dengan prosedur keselamatan ketat oleh fasilitator berpengalaman. Simbol kuat untuk kepercayaan dan tanggung jawab kolektif.",
    teamBuildingBenefits: [
      "Milestone emosional untuk kepercayaan tim.",
      "Setiap anggota merasakan dukungan literal dari tim.",
      "Harus didampingi profesional agar aman.",
    ],
  },
  {
    slug: "save-island",
    name: "Save Island",
    category: "goal-trust",
    categoryLabel: gameCategoryLabels["goal-trust"],
    shortDescription: "Bersama-sama 'menyelamatkan' anggota di area terbatas.",
    description:
      "Tim harus memindahkan semua orang ke 'pulau' kecil tanpa jatuh. Membutuhkan strategi, urutan, dan saling membantu.",
    teamBuildingBenefits: [
      "Prioritisasi siapa bergerak dulu dan bagaimana.",
      "Melatih negosiasi dan empati dalam tekanan waktu.",
      "Closing games yang kuat untuk refleksi tim.",
    ],
  },
  {
    slug: "all-stand-up",
    name: "All Stand Up",
    category: "low-team-building",
    categoryLabel: gameCategoryLabels["low-team-building"],
    shortDescription: "Seluruh tim berdiri bersama dari posisi duduk berpegangan.",
    description:
      "Anggota tim duduk berjajar saling berpegangan tangan dan harus bangun bersama. Butuh sinkronisasi gerakan dan dorongan tim.",
    teamBuildingBenefits: [
      "Kesadaran bahwa gerakan satu orang memengaruhi lain.",
      "Latihan koordinasi fisik sederhana namun powerful.",
      "Membangun momentum sebelum games lebih kompleks.",
    ],
  },
  {
    slug: "hoolla-hop",
    name: "Hoolla Hop",
    category: "low-team-building",
    categoryLabel: gameCategoryLabels["low-team-building"],
    shortDescription: "Lintasan atau tantangan dengan hula hoop secara tim.",
    description:
      "Tim memindahkan hula hoop atau melewati tantangan tanpa memutus rangkaian pegangan atau dengan aturan transfer tertentu.",
    teamBuildingBenefits: [
      "Melatih koordinasi dan kesabaran.",
      "Kompetisi antar tim yang tetap menyenangkan.",
      "Aktivitas ringan untuk berbagai usia.",
    ],
  },
  {
    slug: "human-chair",
    name: "Human Chair",
    category: "low-team-building",
    categoryLabel: gameCategoryLabels["low-team-building"],
    shortDescription: "Berpegangan membentuk 'kursi' manusia yang menyangga tubuh.",
    description:
      "Peserta saling bersandar dalam formasi lingkaran sehingga bisa 'duduk' di udara. Membutuhkan kepercayaan dan timing bersama.",
    teamBuildingBenefits: [
      "Demonstrasi fisik dari saling mendukung.",
      "Memperkuat rasa tim yang literal.",
      "Momen foto dan bonding yang kuat.",
    ],
  },
  {
    slug: "human-bridge",
    name: "Human Bridge",
    category: "low-team-building",
    categoryLabel: gameCategoryLabels["low-team-building"],
    shortDescription: "Membentuk jembatan atau lintasan dengan tubuh tim.",
    description:
      "Variasi permainan di mana tim menggunakan posisi tubuh untuk rekan melewati area tertentu dengan aman sesuai briefing fasilitator.",
    teamBuildingBenefits: [
      "Literal 'menjembatani' antar anggota.",
      "Koordinasi dan komunikasi untuk keselamatan bersama.",
      "Cocok untuk tim yang sudah sedikit hangat.",
    ],
  },
  {
    slug: "transfer-stick",
    name: "Transfer Stick",
    category: "low-team-building",
    categoryLabel: gameCategoryLabels["low-team-building"],
    shortDescription: "Memindahkan tongkat atau objek tanpa jatuh, dengan aturan tim.",
    description:
      "Tongkat harus diletakkan atau dipindahkan dengan jari yang tidak boleh lepas kontak. Tampak mudah, butuh fokus kolektif.",
    teamBuildingBenefits: [
      "Pelajaran tentang ekspektasi vs realitas kerja tim.",
      "Melatih penyesuaian mikro dan komunikasi tenang.",
      "Diskusi refleksi pasca-game sangat kaya.",
    ],
  },
  {
    slug: "caterpillar",
    name: "Catterpillar",
    category: "low-team-building",
    categoryLabel: gameCategoryLabels["low-team-building"],
    shortDescription: "Bergerak bersama seperti ulat dengan kaki terbatas di tanah.",
    description:
      "Tim bergerak maju dengan peralatan atau aturan yang mengharuskan gerakan serempak. Lucu dan menantang secara koordinasi.",
    teamBuildingBenefits: [
      "Semua harus satu irama—mirip dinamika proyek nyata.",
      "Membangun tawa bersama saat 'macet'.",
      "Fisik moderat, teamwork tinggi.",
    ],
  },
  {
    slug: "maze",
    name: "Maze",
    category: "initiative",
    categoryLabel: gameCategoryLabels.initiative,
    shortDescription: "Menemukan jalan keluar labirin bersama dengan aturan komunikasi.",
    description:
      "Tim menavigasi labirin fisik atau logika dengan batasan siapa boleh berbicara atau melangkah. Mengasah strategi kolektif.",
    teamBuildingBenefits: [
      "Problem solving terstruktur.",
      "Peran pengamat vs pelaksana jelas.",
      "Transferable ke proyek kompleks di kantor.",
    ],
  },
  {
    slug: "mines-field",
    name: "Mines Field",
    category: "initiative",
    categoryLabel: gameCategoryLabels.initiative,
    shortDescription: "Memandu rekan melewati 'ranjau' tanpa melanggar pola yang benar.",
    description:
      "Hanya satu atau beberapa orang yang tahu pola aman; yang lain harus diarahkan. Klasik untuk trust dan komunikasi presisi.",
    teamBuildingBenefits: [
      "Memperjelas pentingnya instruksi yang jelas.",
      "Sabaran dan tidak menyalahkan saat salah langkah.",
      "Sangat cocok untuk tim operasional.",
    ],
  },
  {
    slug: "star-pyramid",
    name: "Star Pyramid",
    category: "initiative",
    categoryLabel: gameCategoryLabels.initiative,
    shortDescription: "Membangun struktur bintang atau piramida dari material tim.",
    description:
      "Batasan waktu dan material memaksa tim memutuskan desain dan peran dengan cepat. Hasil visual memuaskan saat berhasil.",
    teamBuildingBenefits: [
      "Kreativitas + eksekusi dalam tekanan.",
      "Celebration bersama saat struktur berdiri.",
      "Diskusi tentang siapa memimpin tanpa gelar formal.",
    ],
  },
  {
    slug: "ball-challenge",
    name: "Ball Challenge",
    category: "initiative",
    categoryLabel: gameCategoryLabels.initiative,
    shortDescription: "Mengoper bola dengan aturan dan target waktu atau jumlah.",
    description:
      "Variasi: semua harus menyentuh bola, atau tidak boleh jatuh, atau urutan tertentu. Sederhana namun bisa dimaksimalkan untuk continuous improvement.",
    teamBuildingBenefits: [
      "Iterasi cepat: coba, ukur, perbaiki.",
      "Analogi langsung untuk proses agile.",
      "Ringkas dan bisa diulang dengan target lebih tinggi.",
    ],
  },
  {
    slug: "performing",
    name: "Performing",
    category: "initiative",
    categoryLabel: gameCategoryLabels.initiative,
    shortDescription: "Adegan atau penampilan singkat tim sesuai tema.",
    description:
      "Kelompok menyiapkan performa singkat—kadang tanpa persiapan lama. Melatih keberanian, kreativitas, dan dukungan antar anggota.",
    teamBuildingBenefits: [
      "Safe space untuk ekspresi di luar meeting formal.",
      "Memperkuat chemistry dan inside joke tim.",
      "Cocok untuk tim sales atau kreatif.",
    ],
  },
  {
    slug: "warm-up-opposite",
    name: "Warm Up Opposite",
    category: "initiative",
    categoryLabel: gameCategoryLabels.initiative,
    shortDescription: "Pemanasan dengan gerakan atau jawaban berlawanan.",
    description:
      "Fasilitator memberi komando; peserta melakukan yang berlawanan untuk melatih konsentrasi dan kelincahan mental sebelum games berat.",
    teamBuildingBenefits: [
      "Mengaktifkan otak sebelum problem solving.",
      "Tawa dan kesalahan kecil membangun psychological safety.",
      "Transisi dari istirahat ke sesi fokus.",
    ],
  },
  {
    slug: "find-the-perfect-star",
    name: "Find the Perfect Star",
    category: "initiative",
    categoryLabel: gameCategoryLabels.initiative,
    shortDescription: "Mencari atau menyusun bentuk bintang sempurna dari clue tim.",
    description:
      "Digunakan dalam variasi Amazing Race atau initiative: tim harus menemukan atau merakit elemen untuk membentuk 'bintang' sesuai brief.",
    teamBuildingBenefits: [
      "Kolaborasi berorientasi detail.",
      "Berbagi peran observasi vs eksekusi.",
      "Cocok dipadukan dengan kompetisi antar pos.",
    ],
  },
  {
    slug: "nuclear-bomb",
    name: "Nuclear Bomb",
    category: "initiative",
    categoryLabel: gameCategoryLabels.initiative,
    shortDescription: "Memindahkan objek 'berbahaya' tanpa menyentuh langsung.",
    description:
      "Tim diberi alat terbatas untuk memindahkan bola atau objek dari zona terlarang. Klasik untuk perencanaan dan eksekusi hati-hati.",
    teamBuildingBenefits: [
      "Analogi risiko dan prosedur di tempat kerja.",
      "Semua kontribusi diperlukan—tidak ada satu orang yang bisa sendiri.",
      "Diskusi pasca-game tentang bottleneck.",
    ],
  },
  {
    slug: "moving-ball",
    name: "Moving Ball",
    category: "initiative",
    categoryLabel: gameCategoryLabels.initiative,
    shortDescription: "Memindahkan bola di sepanjang barisan dengan aturan ketat.",
    description:
      "Bola harus melewati semua anggota tanpa jatuh atau dengan urutan tertentu. Variasi kecepatan menambah tantangan.",
    teamBuildingBenefits: [
      "Flow dan handoff antar peran—mirip alur kerja.",
      "Kesabaran saat gagal di tengah jalan.",
      "Mudah diukur waktu untuk spirit perbaikan.",
    ],
  },
  {
    slug: "mission-impossible",
    name: "Mission Impossible",
    category: "initiative",
    categoryLabel: gameCategoryLabels.initiative,
    shortDescription: "Serangkaian misi terbatas waktu yang harus diselesaikan tim.",
    description:
      "Beberapa stasiun tantangan; tim membagi sumber daya dan orang. Butuh prioritas, komunikasi, dan delegasi.",
    teamBuildingBenefits: [
      "Simulasi tekanan deadline proyek.",
      "Latihan delegasi dan trust antar sub-tim.",
      "High engagement untuk grup yang kompetitif.",
    ],
  },
  {
    slug: "flag-hunting",
    name: "Flag Hunting",
    category: "amazing-race",
    categoryLabel: gameCategoryLabels["amazing-race"],
    shortDescription: "Berburu bendera atau checkpoint di medan offroad atau area luas.",
    description:
      "Tim mengikuti petunjuk untuk menemukan bendera tersembunyi, sering digabung dengan perjalanan offroad atau puzzle.",
    teamBuildingBenefits: [
      "Kolaborasi dalam eksplorasi dan navigasi.",
      "Semangat kompetisi sehat antar kelompok.",
      "Pengalaman memorable di alam terbuka.",
    ],
  },
  {
    slug: "hulla-hoop-relay",
    name: "Hulla Hoop Relay",
    category: "amazing-race",
    categoryLabel: gameCategoryLabels["amazing-race"],
    shortDescription: "Estafet memindahkan hula hoop tanpa putus rangkaian tim.",
    description:
      "Digunakan di pos Amazing Race: transfer hoop dari satu anggota ke lain dengan aturan tubuh atau pegangan tertentu.",
    teamBuildingBenefits: [
      "Koordinasi tubuh dan komunikasi singkat.",
      "Cepat dan cocok untuk rotasi banyak peserta.",
      "Energi tinggi di tengah rute panjang.",
    ],
  },
  {
    slug: "stick-transfer",
    name: "Stick Transfer",
    category: "amazing-race",
    categoryLabel: gameCategoryLabels["amazing-race"],
    shortDescription: "Memindahkan stick atau ring dengan aturan tim di pos tantangan.",
    description:
      "Variasi transfer stick dalam konteks relay atau obstacle; mirip Transfer Stick namun dalam format kompetisi antar pos.",
    teamBuildingBenefits: [
      "Fokus dan ketenangan di bawah tekanan waktu.",
      "Handoff antar anggota yang jelas.",
      "Mudah diadaptasi untuk indoor atau outdoor.",
    ],
  },
  {
    slug: "water-transfer",
    name: "Water Transfer",
    category: "amazing-race",
    categoryLabel: gameCategoryLabels["amazing-race"],
    shortDescription: "Memindahkan air dengan peralatan terbatas ke wadah target.",
    description:
      "Tim harus memindahkan volume air maksimal dengan alat yang tidak efisien—komedi dan strategi bersatu.",
    teamBuildingBenefits: [
      "Kreativitas dalam keterbatasan sumber daya.",
      "Toleransi terhadap 'spill' dan error.",
      "Visual dan seru untuk dokumentasi acara.",
    ],
  },
  {
    slug: "toxic-waste",
    name: "Toxic Waste",
    category: "amazing-race",
    categoryLabel: gameCategoryLabels["amazing-race"],
    shortDescription: "Memindahkan 'limbah beracun' (objek simulasi) tanpa kontaminasi.",
    description:
      "Mirip Nuclear Bomb dengan narasi risiko. Tim menggunakan tali atau alat untuk memindahkan objek dari zona terlarang.",
    teamBuildingBenefits: [
      "Komunikasi di bawah aturan ketat.",
      "Perencanaan sebelum eksekusi menyentuh objek.",
      "Cocok untuk pelatihan prosedur dan compliance.",
    ],
  },
  {
    slug: "half-pipe",
    name: "Half Pipe",
    category: "amazing-race",
    categoryLabel: gameCategoryLabels["amazing-race"],
    shortDescription: "Menggelindingkan bola melalui jalur setengah pipa secara tim.",
    description:
      "Tim memegang potongan pipa atau track agar bola mencapai tujuan tanpa jatuh. Butuh sinkronisasi sudut dan kecepatan.",
    teamBuildingBenefits: [
      "Penyelarasan literal antar anggota.",
      "Frustrasi dan sukses bersama memperkuat bonding.",
      "Cocok di pos offroad dengan medan menantang.",
    ],
  },
  {
    slug: "two-line-bridges",
    name: "Two Line Bridges",
    category: "highrope",
    categoryLabel: gameCategoryLabels.highrope,
    shortDescription: "Jembatan dua tali di ketinggian dengan pengaman profesional.",
    description:
      "Aktivitas highrope yang menguji keseimbangan dan keberanian melintasi struktur dua tali. Wajib harness dan instruktur bersertifikat.",
    teamBuildingBenefits: [
      "Mendorong keluar dari zona nyaman dengan dukungan tim.",
      "Kepercayaan pada peralatan dan prosedur keselamatan.",
      "Pencapaian personal yang dibagikan ke seluruh kelompok.",
    ],
  },
  {
    slug: "rappelling",
    name: "Rappelling",
    category: "highrope",
    categoryLabel: gameCategoryLabels.highrope,
    shortDescription: "Turun tebing atau struktur dengan tali dan teknik rappel.",
    description:
      "Dibimbing instruktur, peserta menuruni permukaan vertikal. Pengalaman adrenalin yang membangun kepercayaan diri.",
    teamBuildingBenefits: [
      "Bukti bahwa tim mendukung dari bawah (cheering, safety).",
      "Mental resilience dan mengatasi ketakutan.",
      "Cerita kuat untuk dibawa pulang ke kantor.",
    ],
  },
  {
    slug: "flying-fox",
    name: "Flying Fox",
    category: "highrope",
    categoryLabel: gameCategoryLabels.highrope,
    shortDescription: "Meluncur di atas tali zip line dengan pengaman penuh.",
    description:
      "Salah satu aktivitas highrope paling populer: meluncur dari titik tinggi ke rendah. Sensasi bebas yang aman dengan peralatan standar.",
    teamBuildingBenefits: [
      "Shared excitement—saling mendorong untuk mencoba.",
      "Cocok untuk highlight penutup hari outbound.",
      "Foto dan video tim yang kuat untuk employer branding.",
    ],
  },
  {
    slug: "treasure-hunt-games",
    name: "Treasure Hunt Games",
    category: "program-khusus",
    categoryLabel: gameCategoryLabels["program-khusus"],
    shortDescription: "Berburu 'harta' dengan peta, clue, dan kerja sama tim.",
    description:
      "Tim mencari bendera, batu, atau objek tersembunyi di area tertentu menggunakan peta buta dan petunjuk. Sering menjadi agenda hari pertama paket 3D2N.",
    teamBuildingBenefits: [
      "Kolaborasi lintas peran dalam satu misi besar.",
      "Melatih pemetaan masalah dan pemecahan clue.",
      "Eksplorasi area venue yang menyenangkan.",
    ],
  },
  {
    slug: "construction-building-games",
    name: "Construction Building Games",
    category: "program-khusus",
    categoryLabel: gameCategoryLabels["program-khusus"],
    shortDescription: "Membangun struktur dari material yang dibatasi.",
    description:
      "Tim merancang dan membangun konstruksi (misalnya dari pipa, tali, atau karton) yang harus memenuhi kriteria ketinggian atau kekuatan.",
    teamBuildingBenefits: [
      "Engineering thinking dan prototyping cepat.",
      "Diskusi peran: siapa desain, siapa eksekusi.",
      "Hasil nyata yang bisa dievaluasi objektif.",
    ],
  },
  {
    slug: "paintball-war-game",
    name: "Paintball War Game",
    category: "program-khusus",
    categoryLabel: gameCategoryLabels["program-khusus"],
    shortDescription: "Simulasi pertempuran dengan peluru cat dan prosedur safety.",
    description:
      "Setelah safety talk dan simulasi, tim bertanding dalam skenario perang permainan. Mengasah strategi, komunikasi lapangan, dan disiplin aturan.",
    teamBuildingBenefits: [
      "Leadership di bawah tekanan dan noise.",
      "Koordinasi pergerakan seperti tim lapangan.",
      "Adrenalin sehat dengan batasan safety jelas.",
    ],
  },
  {
    slug: "building-crossing",
    name: "Building Crossing",
    category: "program-khusus",
    categoryLabel: gameCategoryLabels["program-khusus"],
    shortDescription: "Persiapan atau simulasi sebelum rafting bambu—membangun atau menyeberangi struktur.",
    description:
      "Bagian dari rangkaian Bamboe Rafting: tim membangun atau menyeberangi elemen dengan peralatan terbatas sebelum aktivitas air.",
    teamBuildingBenefits: [
      "Persiapan mental untuk tantangan berikutnya.",
      "Kerja fisik bersama yang membangun kepercayaan.",
      "Keterkaitan erat dengan aktivitas alam (sungai).",
    ],
  },
  {
    slug: "fun-games-malam-keakraban",
    name: "Fun Games (Malam keakraban)",
    category: "program-khusus",
    categoryLabel: gameCategoryLabels["program-khusus"],
    shortDescription: "Sing a Song, Dancing Together, dan games ringan bersama MC.",
    description:
      "Sesi malam dengan hiburan MC, akustik, lagu bersama, dan tarian. Bukan game struktural berat, tapi aktivitas sosial yang memperdalam relasi.",
    teamBuildingBenefits: [
      "Relaksasi setelah hari penuh aktivitas fisik.",
      "Kesempatan manajemen dan staf tampil informal bersama.",
      "Memperkuat budaya kebersamaan dan apresiasi.",
    ],
  },
];

export function getGameBySlug(slug: string): OutboundGame | undefined {
  return outboundGames.find((g) => g.slug === slug);
}

export function getAllGameSlugs(): string[] {
  return outboundGames.map((g) => g.slug);
}

export function getGameCategories(): GameCategory[] {
  return [
    "ice-breaking",
    "leadership",
    "goal-trust",
    "low-team-building",
    "initiative",
    "amazing-race",
    "highrope",
    "program-khusus",
  ];
}
