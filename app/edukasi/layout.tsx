import { BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edukasi | SignAccess",
  description: "Modul edukasi bahasa isyarat untuk Penyandang Tunarungu & Tunawicara",
};

export default function EdukasiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
          <BookOpen className="h-6 w-6 text-blue-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Edukasi</h1>
          <p className="text-slate-400">
            Pelajari bahasa isyarat melalui modul interaktif
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
