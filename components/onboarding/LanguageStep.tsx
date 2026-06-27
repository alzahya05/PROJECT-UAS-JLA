"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Hand, Globe, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { SIGN_LANGUAGES } from "@/lib/constants";
import type { SignLanguage } from "@/types";

interface LanguageStepProps {
  selected: SignLanguage;
  onSelect: (lang: SignLanguage) => void;
  onNext: () => void;
  onBack: () => void;
}

const iconMap: Record<SignLanguage, React.ReactNode> = {
  SIBINDO: <Hand className="h-8 w-8" />,
  SIBI: <Globe className="h-8 w-8" />,
  ASL: <Languages className="h-8 w-8" />,
};

export default function LanguageStep({
  selected,
  onSelect,
  onNext,
  onBack,
}: LanguageStepProps) {
  const [local, setLocal] = useState<SignLanguage>(selected);

  const handleNext = () => {
    onSelect(local);
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl"
    >
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-bold text-white">
          Pilih Bahasa Isyarat
        </h2>
        <p className="text-slate-400">
          Pilih bahasa isyarat yang ingin Anda pelajari atau gunakan
        </p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        {SIGN_LANGUAGES.map((lang) => (
          <button
            key={lang.value}
            onClick={() => setLocal(lang.value)}
            className={cn(
              "card-premium flex flex-col items-center p-6 text-center transition-all duration-300",
              local === lang.value
                ? "border-blue-500/40 bg-blue-500/10 shadow-[0_0_30px_rgba(99,102,241,0.15)]"
                : "hover:border-white/[0.12]"
            )}
          >
            <div
              className={cn(
                "mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br transition-all duration-300",
                local === lang.value
                  ? "from-blue-500/30 to-pink-500/30 text-blue-400"
                  : "from-white/[0.05] to-white/[0.02] text-slate-400"
              )}
            >
              {iconMap[lang.value]}
            </div>
            <h3
              className={cn(
                "mb-1 text-lg font-semibold transition-colors",
                local === lang.value ? "text-white" : "text-slate-300"
              )}
            >
              {lang.label}
            </h3>
            <p className="text-sm text-slate-400">{lang.description}</p>
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-3 font-medium text-slate-400 transition-all hover:bg-white/[0.06] hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali
        </button>
        <button
          onClick={handleNext}
          className="btn-primary-glow inline-flex items-center gap-2 rounded-xl px-8 py-3 font-medium"
        >
          Lanjut
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}
