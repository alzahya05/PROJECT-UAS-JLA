import Link from "next/link";
import { BookOpen, Hash, Calculator, PenTool } from "lucide-react";

const classes = [
  {
    title: "Huruf",
    description: "Pelajari isyarat huruf A-Z dalam Bahasa Isyarat Indonesia",
    href: "/edukasi/kelas/huruf",
    icon: <BookOpen className="h-8 w-8" />,
    color: "from-blue-500/20 to-indigo-500/20 text-blue-400",
  },
  {
    title: "Angka",
    description: "Kuasai isyarat angka 0-9 dan cara menghitung",
    href: "/edukasi/kelas/angka",
    icon: <Calculator className="h-8 w-8" />,
    color: "from-emerald-500/20 to-cyan-500/20 text-emerald-400",
  },
  {
    title: "Kata Dasar",
    description: "Pelajari isyarat kata-kata dasar sehari-hari",
    href: "/edukasi/kelas/kata-dasar",
    icon: <PenTool className="h-8 w-8" />,
    color: "from-purple-500/20 to-pink-500/20 text-purple-400",
  },
  {
    title: "Kalimat",
    description: "Belajar menyusun kalimat dalam bahasa isyarat",
    href: "/edukasi/kelas/kalimat",
    icon: <Hash className="h-8 w-8" />,
    color: "from-orange-500/20 to-amber-500/20 text-orange-400",
  },
];

export default function KelasPage() {
  return (
    <div className="space-y-6">
      <p className="text-slate-400">
        Pilih modul belajar yang ingin Anda pelajari
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {classes.map((cls) => (
          <Link
            key={cls.href}
            href={cls.href}
            className="group card-premium p-6"
          >
            <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br p-3 ${cls.color}`}>
              {cls.icon}
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
              {cls.title}
            </h3>
            <p className="text-sm text-slate-400">{cls.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
