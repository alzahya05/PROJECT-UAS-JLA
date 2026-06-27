"use client";

import { useState } from "react";
import { Mic, Volume2, Camera, BookOpen, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { QUICK_ACTIONS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
  Mic: <Mic className="h-5 w-5" />,
  Volume2: <Volume2 className="h-5 w-5" />,
  Camera: <Camera className="h-5 w-5" />,
  BookOpen: <BookOpen className="h-5 w-5" />,
};

export default function FAB() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-3 flex flex-col gap-2"
          >
            {QUICK_ACTIONS.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "glass flex items-center gap-3 rounded-full px-4 py-3 text-sm font-medium shadow-lg transition-all duration-200",
                  "hover:bg-white/[0.08] hover:border-white/[0.12]"
                )}
              >
                {iconMap[action.icon]}
                {action.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300",
          isOpen
            ? "glass text-white hover:bg-white/[0.08]"
            : "btn-primary-glow text-white glow-blue-hover"
        )}
        aria-label={isOpen ? "Tutup quick actions" : "Buka quick actions"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
      </button>
    </div>
  );
}
