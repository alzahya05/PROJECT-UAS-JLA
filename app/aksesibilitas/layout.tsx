import { Accessibility } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aksesibilitas | TenangAccess",
  description: "Alat bantu aksesibilitas untuk Penyandang Tunarungu & Tunawicara",
};

export default function AksesibilitasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
          <Accessibility className="h-6 w-6 text-emerald-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Aksesibilitas</h1>
          <p className="text-slate-400">
            Alat bantu komunikasi dan deteksi suara
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
