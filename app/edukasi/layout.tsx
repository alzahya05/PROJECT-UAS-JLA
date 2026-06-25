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
        <BookOpen className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-2xl font-bold">Edukasi</h1>
          <p className="text-muted-foreground">
            Pelajari bahasa isyarat melalui modul interaktif
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
