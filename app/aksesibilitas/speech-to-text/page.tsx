"use client";

import SpeechRecognizer from "@/components/shared/SpeechRecognizer";

export default function SpeechToTextPage() {
  return (
    <div className="space-y-6">
      <p className="text-slate-400">
        Fitur ini mengubah suara menjadi teks secara real-time menggunakan Web Speech API.
      </p>
      <SpeechRecognizer />
    </div>
  );
}
