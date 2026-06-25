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
      <div className={cn("rounded-xl border border-dashed p-8 text-center", className)}>
        <MicOff className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
        <p className="text-lg font-medium">Browser tidak mendukung</p>
        <p className="text-sm text-muted-foreground">
          Web Speech API tidak tersedia di browser ini
        </p>
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      <div className="min-h-[200px] rounded-xl border bg-muted/30 p-6">
        {transcript ? (
          <p className="text-lg leading-relaxed">{transcript}</p>
        ) : (
          <p className="text-muted-foreground">
            {isListening ? "Mendengarkan..." : "Tekan tombol untuk mulai berbicara"}
          </p>
        )}
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={isListening ? stopListening : startListening}
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-full transition-all",
            isListening
              ? "bg-red-500 text-white animate-pulse"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
          aria-label={isListening ? "Hentikan transkripsi" : "Mulai transkripsi"}
        >
          {isListening ? <MicOff className="h-7 w-7" /> : <Mic className="h-7 w-7" />}
        </button>

        <button
          onClick={handleCopy}
          disabled={!transcript}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted disabled:opacity-50"
          aria-label="Salin teks"
        >
          <Copy className="h-5 w-5" />
        </button>

        <button
          onClick={() => window.location.reload()}
          disabled={!transcript}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted disabled:opacity-50"
          aria-label="Hapus transkripsi"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <span
          className={cn(
            "h-2 w-2 rounded-full",
            isListening ? "bg-green-500 animate-pulse" : "bg-gray-400"
          )}
        />
        {isListening ? "Sedang merekam" : "Tidak aktif"}
      </div>
    </div>
  );
}
