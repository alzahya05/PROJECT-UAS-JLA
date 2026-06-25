"use client";

import CameraFeed from "@/components/shared/CameraFeed";
import { useState } from "react";

export default function ScannerPage() {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        Arahkan kamera ke isyarat tangan untuk menerjemahkan secara visual.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        <CameraFeed onCapture={setCapturedImage} />

        <div className="space-y-4">
          <h3 className="font-semibold">Hasil Pindai</h3>
          {capturedImage ? (
            <div className="space-y-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={capturedImage}
                alt="Hasil pindai"
                className="w-full rounded-xl border"
              />
              <div className="rounded-xl border bg-card p-4">
                <p className="text-sm text-muted-foreground">
                  Analisis isyarat akan ditampilkan di sini setika integrasi model ML.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex h-48 items-center justify-center rounded-xl border border-dashed">
              <p className="text-sm text-muted-foreground">
                Belum ada gambar yang dipindai
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
