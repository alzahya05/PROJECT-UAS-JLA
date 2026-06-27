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
      <div className={cn("rounded-xl border border-dashed border-white/[0.08] p-8 text-center", className)}>
        <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-slate-500" />
        <p className="text-lg font-medium text-white">Browser tidak mendukung</p>
        <p className="text-sm text-slate-400">
          Web Audio API tidak tersedia di browser ini
        </p>
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      {/* Visualizer */}
      <div className="glass flex h-48 items-end justify-center gap-1 rounded-xl p-6">
        {Array.from({ length: barCount }).map((_, i) => {
          const value = frequencyData[i * Math.floor(frequencyData.length / barCount)] || 0;
          const height = (value / 255) * 100;
          return (
            <div
              key={i}
              className={cn(
                "w-3 rounded-t-md transition-all duration-75",
                isLoud
                  ? "bg-gradient-to-t from-red-500 to-pink-400"
                  : "bg-gradient-to-t from-blue-600 to-pink-500"
              )}
              style={{ height: `${Math.max(height, 4)}%` }}
            />
          );
        })}
      </div>

      {/* Volume Level */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Volume</span>
          <span className="font-medium text-white">{Math.round(volume)} dB</span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-75",
              isLoud
                ? "bg-gradient-to-r from-red-500 to-pink-500"
                : "bg-gradient-to-r from-blue-500 to-pink-500"
            )}
            style={{ width: `${Math.min(volume, 100)}%` }}
          />
        </div>
      </div>

      {/* Alert */}
      {isLoud && isListening && (
        <div className="flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4">
          <AlertTriangle className="h-5 w-5 text-red-400" />
          <span className="font-medium text-red-400">
            Suara keras terdeteksi!
          </span>
        </div>
      )}

      {/* Controls */}
      <div className="flex justify-center">
        <button
          onClick={isListening ? stopListening : startListening}
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300",
            isListening
              ? "bg-red-500 text-white animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.3)]"
              : "btn-primary-glow glow-blue-hover"
          )}
          aria-label={isListening ? "Hentikan deteksi" : "Mulai deteksi"}
        >
          {isListening ? <MicOff className="h-7 w-7" /> : <Mic className="h-7 w-7" />}
        </button>
      </div>
    </div>
  );
}
