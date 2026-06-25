"use client";

import { useAudioContext } from "@/hooks/useAudioContext";
import { cn } from "@/lib/utils";
import { Mic, MicOff, AlertTriangle } from "lucide-react";

interface AudioVisualizerProps {
  className?: string;
  threshold?: number;
}

export default function AudioVisualizer({ className, threshold = 100 }: AudioVisualizerProps) {
  const { isListening, frequencyData, volume, startListening, stopListening, isSupported } =
    useAudioContext();

  const isLoud = volume > threshold;
  const barCount = 32;

  if (!isSupported) {
    return (
      <div className={cn("rounded-xl border border-dashed p-8 text-center", className)}>
        <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
        <p className="text-lg font-medium">Browser tidak mendukung</p>
        <p className="text-sm text-muted-foreground">
          Web Audio API tidak tersedia di browser ini
        </p>
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      {/* Visualizer */}
      <div className="flex h-48 items-end justify-center gap-1 rounded-xl border bg-muted/30 p-6">
        {Array.from({ length: barCount }).map((_, i) => {
          const value = frequencyData[i * Math.floor(frequencyData.length / barCount)] || 0;
          const height = (value / 255) * 100;
          return (
            <div
              key={i}
              className={cn(
                "w-3 rounded-t-md transition-all duration-75",
                isLoud ? "bg-red-500" : "bg-primary"
              )}
              style={{ height: `${Math.max(height, 4)}%` }}
            />
          );
        })}
      </div>

      {/* Volume Level */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Volume</span>
          <span className="font-medium">{Math.round(volume)} dB</span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
          <div
            className={cn(
              "h-full transition-all duration-75",
              isLoud ? "bg-red-500" : "bg-primary"
            )}
            style={{ width: `${Math.min(volume, 100)}%` }}
          />
        </div>
      </div>

      {/* Alert */}
      {isLoud && isListening && (
        <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/30">
          <AlertTriangle className="h-5 w-5 text-red-500" />
          <span className="font-medium text-red-700 dark:text-red-400">
            Suara keras terdeteksi!
          </span>
        </div>
      )}

      {/* Controls */}
      <div className="flex justify-center">
        <button
          onClick={isListening ? stopListening : startListening}
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-full transition-all",
            isListening
              ? "bg-red-500 text-white animate-pulse"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
          aria-label={isListening ? "Hentikan deteksi" : "Mulai deteksi"}
        >
          {isListening ? <MicOff className="h-7 w-7" /> : <Mic className="h-7 w-7" />}
        </button>
      </div>
    </div>
  );
}
