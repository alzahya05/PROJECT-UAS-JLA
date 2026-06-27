import { Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Komunitas | SignAccess",
  description: "Komunitas dan forum diskusi Penyandang Tunarungu & Tunawicara",
};

export default function KomunitasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20">
          <Users className="h-6 w-6 text-pink-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Komunitas</h1>
          <p className="text-slate-400">
            Terhubung dengan komunitas tunarungu & tunawicara
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
