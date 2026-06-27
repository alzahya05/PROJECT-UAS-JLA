"use client";

import Link from "next/link";
import {
  BookOpen,
  Accessibility,
  Users,
  Mic,
  Volume2,
  Camera,
  ArrowRight,
  GraduationCap,
  MessageSquare,
} from "lucide-react";
import { useAppContext } from "@/lib/context";
import OnboardingFlow from "@/components/onboarding/OnboardingFlow";

const modules = [
  {
    title: "Edukasi",
    description: "Pelajari bahasa isyarat melalui modul interaktif",
    href: "/edukasi/kelas",
    icon: <BookOpen className="h-8 w-8" />,
    color: "from-blue-500/20 to-indigo-500/20 text-blue-400",
    features: ["Kelas Huruf & Angka", "Kamus Isyarat", "Latihan Kuis"],
  },
  {
    title: "Aksesibilitas",
    description: "Alat bantu komunikasi dan deteksi suara",
    href: "/aksesibilitas/speech-to-text",
    icon: <Accessibility className="h-8 w-8" />,
    color: "from-emerald-500/20 to-cyan-500/20 text-emerald-400",
    features: ["Speech to Text", "Sound Detector", "Scanner Isyarat"],
  },
  {
    title: "Komunitas",
    description: "Terhubung dengan komunitas tunarungu & tunawicara",
    href: "/komunitas/artikel",
    icon: <Users className="h-8 w-8" />,
    color: "from-pink-500/20 to-purple-500/20 text-pink-400",
    features: ["Artikel Edukasi", "Forum Diskusi", "Tips Komunikasi"],
  },
];

const quickAccess = [
  {
    title: "Speech to Text",
    description: "Ubah suara menjadi teks real-time",
    href: "/aksesibilitas/speech-to-text",
    icon: <Mic className="h-6 w-6" />,
  },
  {
    title: "Sound Detector",
    description: "Deteksi dan visualisasi suara",
    href: "/aksesibilitas/sound-detector",
    icon: <Volume2 className="h-6 w-6" />,
  },
  {
    title: "Scanner",
    description: "Pindai isyarat dengan kamera",
    href: "/aksesibilitas/scanner",
    icon: <Camera className="h-6 w-6" />,
  },
  {
    title: "Kamus Isyarat",
    description: "Direktori bahasa isyarat",
    href: "/edukasi/kamus",
    icon: <GraduationCap className="h-6 w-6" />,
  },
];

function HomeContent() {
  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 py-12">
      <section className="relative mb-20 text-center">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute left-1/2 top-10 h-[400px] w-[500px] -translate-x-1/3 rounded-full bg-pink-500/8 blur-[100px]" />
        </div>
        <div className="relative">
          <h1 className="mb-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="gradient-text">Tenang</span>
            <span className="text-white">Access</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Aplikasi aksesibilitas komprehensif untuk Penyandang Tunarungu
            &amp; Tunawicara. Belajar bahasa isyarat, gunakan alat bantu
            komunikasi, dan terhubung dengan komunitas.
          </p>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-bold text-white">Modul Utama</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => (
            <Link
              key={mod.href}
              href={mod.href}
              className="group card-premium p-6"
            >
              <div
                className={`mb-4 inline-flex rounded-xl bg-gradient-to-br p-3 ${mod.color}`}
              >
                {mod.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                {mod.title}
              </h3>
              <p className="mb-4 text-sm text-slate-400">{mod.description}</p>
              <ul className="space-y-2">
                {mod.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <ArrowRight className="h-3 w-3 text-pink-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-bold text-white">Akses Cepat</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickAccess.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group card-premium flex items-center gap-4 p-4"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-pink-500/20 text-blue-400 group-hover:from-blue-500/30 group-hover:to-pink-500/30 transition-all">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="card-premium relative overflow-hidden p-8 text-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5" />
        <div className="relative">
          <MessageSquare className="mx-auto mb-4 h-12 w-12 text-pink-400" />
          <h2 className="mb-2 text-2xl font-bold text-white">
            Bergabung dengan Komunitas
          </h2>
          <p className="mb-6 text-slate-400">
            Terhubung dengan sesama pengguna, berbagi pengalaman, dan belajar
            bersama.
          </p>
          <Link
            href="/komunitas/forum"
            className="btn-primary-glow inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium"
          >
            Mulai Diskusi
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  const { hasOnboarded, mounted } = useAppContext();

  if (!mounted) {
    return <OnboardingFlow />;
  }

  if (!hasOnboarded) {
    return <OnboardingFlow />;
  }

  return <HomeContent />;
}
