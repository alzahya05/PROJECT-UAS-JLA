export const APP_NAME = "SignAccess";
export const APP_DESCRIPTION =
  "Aplikasi aksesibilitas untuk Penyandang Tunarungu & Tunawicara";

export const NAV_ITEMS = [
  {
    label: "Edukasi",
    href: "/edukasi/kelas",
    icon: "BookOpen",
    children: [
      { label: "Kelas", href: "/edukasi/kelas" },
      { label: "Kamus Isyarat", href: "/edukasi/kamus" },
      { label: "Latihan", href: "/edukasi/latihan" },
    ],
  },
  {
    label: "Aksesibilitas",
    href: "/aksesibilitas/speech-to-text",
    icon: "Accessibility",
    children: [
      { label: "Speech to Text", href: "/aksesibilitas/speech-to-text" },
      { label: "Sound Detector", href: "/aksesibilitas/sound-detector" },
      { label: "Scanner", href: "/aksesibilitas/scanner" },
      { label: "Riwayat", href: "/aksesibilitas/history" },
    ],
  },
  {
    label: "Komunitas",
    href: "/komunitas/artikel",
    icon: "Users",
    children: [
      { label: "Artikel", href: "/komunitas/artikel" },
      { label: "Forum", href: "/komunitas/forum" },
    ],
  },
  {
    label: "Pengaturan",
    href: "/pengaturan/profil",
    icon: "Settings",
    children: [
      { label: "Profil", href: "/pengaturan/profil" },
      { label: "Notifikasi", href: "/pengaturan/notifikasi" },
    ],
  },
];

export const QUICK_ACTIONS = [
  { label: "Speech to Text", href: "/aksesibilitas/speech-to-text", icon: "Mic" },
  { label: "Sound Detector", href: "/aksesibilitas/sound-detector", icon: "Volume2" },
  { label: "Scanner", href: "/aksesibilitas/scanner", icon: "Camera" },
  { label: "Kamus Isyarat", href: "/edukasi/kamus", icon: "BookOpen" },
];
