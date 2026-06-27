"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Hand, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { ROLES } from "@/lib/constants";
import type { Role } from "@/types";

interface RoleStepProps {
  selected: Role | null;
  onSelect: (role: Role) => void;
  onBack: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Hand: <Hand className="h-8 w-8" />,
  BookOpen: <BookOpen className="h-8 w-8" />,
};

export default function RoleStep({ selected, onSelect, onBack }: RoleStepProps) {
  const [local, setLocal] = useState<Role | null>(selected);

  const handleSelect = (role: Role) => {
    setLocal(role);
    setTimeout(() => onSelect(role), 300);
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
        <h2 className="mb-2 text-3xl font-bold text-white">Siapa Anda?</h2>
        <p className="text-slate-400">
          Pilih peran Anda untuk menyesuaikan pengalaman
        </p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        {ROLES.map((role) => (
          <button
            key={role.value}
            onClick={() => handleSelect(role.value)}
            className={cn(
              "card-premium flex flex-col items-center p-8 text-center transition-all duration-300",
              local === role.value
                ? "border-blue-500/40 bg-blue-500/10 shadow-[0_0_30px_rgba(99,102,241,0.15)]"
                : "hover:border-white/[0.12]"
            )}
          >
            <div
              className={cn(
                "mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br transition-all duration-300",
                local === role.value
                  ? "from-blue-500/30 to-pink-500/30 text-blue-400"
                  : "from-white/[0.05] to-white/[0.02] text-slate-400"
              )}
            >
              {iconMap[role.icon]}
            </div>
            <h3
              className={cn(
                "mb-1 text-lg font-semibold transition-colors",
                local === role.value ? "text-white" : "text-slate-300"
              )}
            >
              {role.label}
            </h3>
            <p className="text-sm text-slate-400">{role.description}</p>
          </button>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-3 font-medium text-slate-400 transition-all hover:bg-white/[0.06] hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali
        </button>
      </div>
    </motion.div>
  );
}
