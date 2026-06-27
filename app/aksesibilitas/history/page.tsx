"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Clock, Mic, Volume2, Camera } from "lucide-react";
import type { HistoryEntry } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  "Speech to Text": <Mic className="h-4 w-4" />,
  "Sound Detector": <Volume2 className="h-4 w-4" />,
  Scanner: <Camera className="h-4 w-4" />,
};

export default function HistoryPage() {
  const { value: history } = useLocalStorage<HistoryEntry[]>("tool-history", [
    {
      id: "1",
      tool: "Speech to Text",
      timestamp: new Date("2025-01-15T10:30:00"),
      summary: "Transkripsi rapat tim",
    },
    {
      id: "2",
      tool: "Sound Detector",
      timestamp: new Date("2025-01-14T14:20:00"),
      summary: "Deteksi suara alarm",
    },
    {
      id: "3",
      tool: "Scanner",
      timestamp: new Date("2025-01-13T09:15:00"),
      summary: "Pindai isyarat sapaan",
    },
  ]);

  return (
    <div className="space-y-6">
      <p className="text-slate-400">Riwayat penggunaan alat bantu Anda.</p>

      {history.length === 0 ? (
        <div className="flex h-48 items-center justify-center rounded-xl border border-dashed border-white/[0.08]">
          <p className="text-sm text-slate-500">Belum ada riwayat</p>
        </div>
      ) : (
        <div className="space-y-3">
          {history.map((entry) => (
            <div
              key={entry.id}
              className="card-premium flex items-center gap-4 p-4"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-pink-500/20 text-blue-400">
                {iconMap[entry.tool] || <Clock className="h-4 w-4" />}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-white">{entry.tool}</h3>
                <p className="text-sm text-slate-400">{entry.summary}</p>
              </div>
              <time className="text-xs text-slate-500">
                {new Date(entry.timestamp).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
