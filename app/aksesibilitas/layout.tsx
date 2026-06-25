import { Accessibility } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aksesibilitas | SignAccess",
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
        <Accessibility className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-2xl font-bold">Aksesibilitas</h1>
          <p className="text-muted-foreground">
            Alat bantu komunikasi dan deteksi suara
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
