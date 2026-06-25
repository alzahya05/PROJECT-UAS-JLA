import Link from "next/link";
import { BookOpen, Hash, Calculator, PenTool } from "lucide-react";

const classes = [
  {
    title: "Huruf",
    description: "Pelajari isyarat huruf A-Z dalam Bahasa Isyarat Indonesia",
    href: "/edukasi/kelas/huruf",
    icon: <BookOpen className="h-8 w-8" />,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Angka",
    description: "Kuasai isyarat angka 0-9 dan cara menghitung",
    href: "/edukasi/kelas/angka",
    icon: <Calculator className="h-8 w-8" />,
    color: "bg-green-500/10 text-green-600",
  },
  {
    title: "Kata Dasar",
    description: "Pelajari isyarat kata-kata dasar sehari-hari",
    href: "/edukasi/kelas/kata-dasar",
    icon: <PenTool className="h-8 w-8" />,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Kalimat",
    description: "Belajar menyusun kalimat dalam bahasa isyarat",
    href: "/edukasi/kelas/kalimat",
    icon: <Hash className="h-8 w-8" />,
    color: "bg-orange-500/10 text-orange-600",
  },
];

export default function KelasPage() {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        Pilih modul belajar yang ingin Anda pelajari
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {classes.map((cls) => (
          <Link
            key={cls.href}
            href={cls.href}
            className="group rounded-xl border bg-card p-6 transition-all hover:shadow-md hover:border-primary/50"
          >
            <div className={`mb-4 inline-flex rounded-lg p-3 ${cls.color}`}>
              {cls.icon}
            </div>
            <h3 className="mb-2 text-lg font-semibold group-hover:text-primary">
              {cls.title}
            </h3>
            <p className="text-sm text-muted-foreground">{cls.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
