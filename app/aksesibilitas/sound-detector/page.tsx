"use client";

import AudioVisualizer from "@/components/shared/AudioVisualizer";

export default function SoundDetectorPage() {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        Deteksi suara sekitar dan lihat visualisasi frekuensi audio secara real-time.
      </p>
      <AudioVisualizer threshold={100} />
    </div>
  );
}
