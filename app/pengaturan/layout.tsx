import { Settings } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pengaturan | SignAccess",
  description: "Pengaturan akun dan preferensi",
};

export default function PengaturanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-500/20 to-zinc-500/20">
          <Settings className="h-6 w-6 text-slate-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Pengaturan</h1>
          <p className="text-slate-400">Kelola akun dan preferensi Anda</p>
        </div>
      </div>
      {children}
    </div>
  );
}
