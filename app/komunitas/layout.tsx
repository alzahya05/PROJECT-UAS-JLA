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
        <Users className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-2xl font-bold">Komunitas</h1>
          <p className="text-muted-foreground">
            Terhubung dengan komunitas tunarungu & tunawicara
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
