import type { SignLanguage, Role } from "@/types";

export const APP_NAME = "TenangAccess";
export const APP_DESCRIPTION =
  "Aplikasi aksesibilitas untuk Penyandang Tunarungu & Tunawicara";

export const SIGN_LANGUAGES: {
  value: SignLanguage;
  label: string;
  description: string;
}[] = [
  {
    value: "SIBINDO",
    label: "SIBINDO",
    description: "Sistem Isyarat Bahasa Indonesia - Komunikasi sehari-hari",
  },
  {
    value: "SIBI",
    label: "SIBI",
    description: "Sistem Isyarat Bahasa Indonesia - Formal & baku",
  },
  {
    value: "ASL",
    label: "ASL",
    description: "American Sign Language - Bahasa isyarat internasional",
  },
];

export const ROLES: {
  value: Role;
  label: string;
  description: string;
  icon: string;
  redirect: string;
}[] = [
  {
    value: "tuli",
    label: "Teman Tuli",
    description: "Saya adalah penyandang tunarungu",
    icon: "Hand",
    redirect: "/aksesibilitas/speech-to-text",
  },
  {
    value: "dengar",
    label: "Teman Dengar",
    description: "Saya ingin belajar bahasa isyarat",
    icon: "BookOpen",
    redirect: "/edukasi/kelas",
  },
];

type NavTranslation = Record<SignLanguage, { label: string; children?: Record<string, string> }>;

export const NAV_TRANSLATIONS: NavTranslation = {
  SIBINDO: {
    label: "Edukasi",
    children: {
      "/edukasi/kelas": "Kelas",
      "/edukasi/kamus": "Kamus Isyarat",
      "/edukasi/latihan": "Latihan",
      "/aksesibilitas/speech-to-text": "Suara ke Teks",
      "/aksesibilitas/sound-detector": "Deteksi Suara",
      "/aksesibilitas/scanner": "Pemindai",
      "/aksesibilitas/history": "Riwayat",
      "/komunitas/artikel": "Artikel",
      "/komunitas/forum": "Forum",
      "/pengaturan/profil": "Profil",
      "/pengaturan/notifikasi": "Notifikasi",
    },
  },
  SIBI: {
    label: "Edukasi",
    children: {
      "/edukasi/kelas": "Kelas",
      "/edukasi/kamus": "Kamus Isyarat",
      "/edukasi/latihan": "Latihan",
      "/aksesibilitas/speech-to-text": "Speech to Text",
      "/aksesibilitas/sound-detector": "Sound Detector",
      "/aksesibilitas/scanner": "Scanner",
      "/aksesibilitas/history": "Riwayat",
      "/komunitas/artikel": "Artikel",
      "/komunitas/forum": "Forum",
      "/pengaturan/profil": "Profil",
      "/pengaturan/notifikasi": "Notifikasi",
    },
  },
  ASL: {
    label: "Education",
    children: {
      "/edukasi/kelas": "Classes",
      "/edukasi/kamus": "Sign Dictionary",
      "/edukasi/latihan": "Practice",
      "/aksesibilitas/speech-to-text": "Speech to Text",
      "/aksesibilitas/sound-detector": "Sound Detector",
      "/aksesibilitas/scanner": "Scanner",
      "/aksesibilitas/history": "History",
      "/komunitas/artikel": "Articles",
      "/komunitas/forum": "Forum",
      "/pengaturan/profil": "Profile",
      "/pengaturan/notifikasi": "Notifications",
    },
  },
};

export const NAV_ITEMS = [
  { label: "Edukasi", href: "/edukasi/kelas", icon: "BookOpen" },
  { label: "Aksesibilitas", href: "/aksesibilitas/speech-to-text", icon: "Accessibility" },
  { label: "Komunitas", href: "/komunitas/artikel", icon: "Users" },
  { label: "Pengaturan", href: "/pengaturan/profil", icon: "Settings" },
];

export const QUICK_ACTIONS = [
  { label: "Speech to Text", href: "/aksesibilitas/speech-to-text", icon: "Mic" },
  { label: "Sound Detector", href: "/aksesibilitas/sound-detector", icon: "Volume2" },
  { label: "Scanner", href: "/aksesibilitas/scanner", icon: "Camera" },
  { label: "Kamus Isyarat", href: "/edukasi/kamus", icon: "BookOpen" },
];
