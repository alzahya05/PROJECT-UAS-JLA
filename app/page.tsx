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

const modules = [
  {
    title: "Edukasi",
    description: "Pelajari bahasa isyarat melalui modul interaktif",
    href: "/edukasi/kelas",
    icon: <BookOpen className="h-8 w-8" />,
    color: "bg-blue-500/10 text-blue-600",
    features: ["Kelas Huruf & Angka", "Kamus Isyarat", "Latihan Kuis"],
  },
  {
    title: "Aksesibilitas",
    description: "Alat bantu komunikasi dan deteksi suara",
    href: "/aksesibilitas/speech-to-text",
    icon: <Accessibility className="h-8 w-8" />,
    color: "bg-green-500/10 text-green-600",
    features: ["Speech to Text", "Sound Detector", "Scanner Isyarat"],
  },
  {
    title: "Komunitas",
    description: "Terhubung dengan komunitas tunarungu & tunawicara",
    href: "/komunitas/artikel",
    icon: <Users className="h-8 w-8" />,
    color: "bg-purple-500/10 text-purple-600",
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

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12">
      {/* Hero */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          <span className="text-primary">Sign</span>Access
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Aplikasi aksesibilitas komprehensif untuk Penyandang Tunarungu &amp; Tunawicara.
          Belajar bahasa isyarat, gunakan alat bantu komunikasi, dan terhubung dengan komunitas.
        </p>
      </section>

      {/* Main Modules */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Modul Utama</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => (
            <Link
              key={mod.href}
              href={mod.href}
              className="group rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50"
            >
              <div className={`mb-4 inline-flex rounded-xl p-3 ${mod.color}`}>
                {mod.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">
                {mod.title}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">{mod.description}</p>
              <ul className="space-y-2">
                {mod.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Access */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Akses Cepat</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickAccess.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-4 rounded-xl border bg-card p-4 transition-all hover:shadow-md hover:border-primary/50"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold group-hover:text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-primary/5 p-8 text-center">
        <MessageSquare className="mx-auto mb-4 h-12 w-12 text-primary" />
        <h2 className="mb-2 text-2xl font-bold">Bergabung dengan Komunitas</h2>
        <p className="mb-6 text-muted-foreground">
          Terhubung dengan sesama pengguna, berbagi pengalaman, dan belajar bersama.
        </p>
        <Link
          href="/komunitas/forum"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Mulai Diskusi
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
