"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface WelcomeStepProps {
  onNext: () => void;
}

export default function WelcomeStep({ onNext }: WelcomeStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center text-center"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute left-1/2 top-10 h-[400px] w-[500px] -translate-x-1/3 rounded-full bg-pink-500/8 blur-[100px]" />
      </div>

      <div className="relative">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-pink-500/20">
          <Sparkles className="h-10 w-10 text-blue-400" />
        </div>

        <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl">
          <span className="gradient-text">Tenang</span>
          <span className="text-white">Access</span>
        </h1>

        <p className="mx-auto mb-8 max-w-md text-lg text-slate-400 leading-relaxed">
          Aplikasi aksesibilitas komprehensif untuk Penyandang Tunarungu &amp;
          Tunawicara.
        </p>

        <button
          onClick={onNext}
          className="btn-primary-glow inline-flex items-center gap-2 rounded-xl px-8 py-3 text-lg font-medium"
        >
          Mulai
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </motion.div>
  );
}
