"use client";

import { useEffect } from "react";
import { Camera, CameraOff, Scan } from "lucide-react";
import { useCamera } from "@/hooks/useCamera";
import { cn } from "@/lib/utils";

interface CameraFeedProps {
  onCapture?: (imageData: string) => void;
  className?: string;
}

export default function CameraFeed({ onCapture, className }: CameraFeedProps) {
  const { isActive, videoRef, startCamera, stopCamera, captureFrame, isSupported } =
    useCamera();

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  const handleCapture = () => {
    const frame = captureFrame();
    if (frame && onCapture) {
      onCapture(frame);
    }
  };

  if (!isSupported) {
    return (
      <div className={cn("rounded-xl border border-dashed border-white/[0.08] p-8 text-center", className)}>
        <CameraOff className="mx-auto mb-4 h-12 w-12 text-slate-500" />
        <p className="text-lg font-medium text-white">Kamera tidak tersedia</p>
        <p className="text-sm text-slate-400">
          Browser ini tidak mendukung akses kamera
        </p>
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Video Feed */}
      <div className="glass relative overflow-hidden rounded-xl">
        <video
          ref={videoRef}
          className="aspect-video w-full object-contain"
          playsInline
          muted
        />
        {!isActive && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60">
            <Camera className="mb-4 h-12 w-12 text-slate-500" />
            <p className="text-slate-400">Kamera belum aktif</p>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={isActive ? stopCamera : startCamera}
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300",
            isActive
              ? "bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.3)]"
              : "btn-primary-glow glow-blue-hover"
          )}
          aria-label={isActive ? "Matikan kamera" : "Nyalakan kamera"}
        >
          {isActive ? <CameraOff className="h-7 w-7" /> : <Camera className="h-7 w-7" />}
        </button>

        {isActive && (
          <button
            onClick={handleCapture}
            className="glass flex h-16 w-16 items-center justify-center rounded-full transition-all duration-200 hover:bg-white/[0.08]"
            aria-label="Ambil gambar"
          >
            <Scan className="h-7 w-7 text-slate-300" />
          </button>
        )}
      </div>
    </div>
  );
}
