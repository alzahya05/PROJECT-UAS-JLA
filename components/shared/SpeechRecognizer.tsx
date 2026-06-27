"use client";

import { Mic, MicOff, Copy, Trash2 } from "lucide-react";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { cn } from "@/lib/utils";

interface SpeechRecognizerProps {
  className?: string;
}

export default function SpeechRecognizer({ className }: SpeechRecognizerProps) {
  const { isListening, transcript, startListening, stopListening, isSupported } =
    useSpeechRecognition();

  const handleCopy = async () => {
    if (transcript) {
      await navigator.clipboard.writeText(transcript);
    }
  };

  if (!isSupported) {
    return (
      <div className={cn("rounded-xl border border-dashed border-white/[0.08] p-8 text-center", className)}>
        <MicOff className="mx-auto mb-4 h-12 w-12 text-slate-500" />
        <p className="text-lg font-medium text-white">Browser tidak mendukung</p>
        <p className="text-sm text-slate-400">
          Web Speech API tidak tersedia di browser ini
        </p>
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      <div className="glass min-h-[200px] rounded-xl p-6">
        {transcript ? (
          <p className="text-lg leading-relaxed text-white">{transcript}</p>
        ) : (
          <p className="text-slate-500">
            {isListening ? "Mendengarkan..." : "Tekan tombol untuk mulai berbicara"}
          </p>
        )}
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={isListening ? stopListening : startListening}
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300",
            isListening
              ? "bg-red-500 text-white animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.3)]"
              : "btn-primary-glow glow-blue-hover"
          )}
          aria-label={isListening ? "Hentikan transkripsi" : "Mulai transkripsi"}
        >
          {isListening ? <MicOff className="h-7 w-7" /> : <Mic className="h-7 w-7" />}
        </button>

        <button
          onClick={handleCopy}
          disabled={!transcript}
          className="glass flex h-12 w-12 items-center justify-center rounded-full transition-all duration-200 hover:bg-white/[0.08] disabled:opacity-50"
          aria-label="Salin teks"
        >
          <Copy className="h-5 w-5 text-slate-400" />
        </button>

        <button
          onClick={() => window.location.reload()}
          disabled={!transcript}
          className="glass flex h-12 w-12 items-center justify-center rounded-full transition-all duration-200 hover:bg-white/[0.08] disabled:opacity-50"
          aria-label="Hapus transkripsi"
        >
          <Trash2 className="h-5 w-5 text-slate-400" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
        <span
          className={cn(
            "h-2 w-2 rounded-full",
            isListening ? "bg-emerald-500 animate-pulse" : "bg-slate-600"
          )}
        />
        {isListening ? "Sedang merekam" : "Tidak aktif"}
      </div>
    </div>
  );
}
