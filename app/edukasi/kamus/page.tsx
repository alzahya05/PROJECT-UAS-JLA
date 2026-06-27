"use client";

import { useState } from "react";
import { Search, Hand, Globe, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "@/lib/context";
import { cn } from "@/lib/utils";
import type { SignLanguage } from "@/types";

const categories = ["Semua", "Huruf", "Angka", "Kata", "Ungkapan"];

const kamusData: Record<
  SignLanguage,
  {
    title: string;
    description: string;
    icon: React.ReactNode;
    entries: { id: string; word: string; category: string; description: string }[];
  }
> = {
  SIBINDO: {
    title: "Kamus SIBINDO",
    description:
      "Sistem Isyarat Bahasa Indonesia - Komunikasi sehari-hari",
    icon: <Hand className="h-6 w-6 text-blue-400" />,
    entries: [
      { id: "1", word: "Halo", category: "Ungkapan", description: "Sapaan umum dalam SIBINDO" },
      { id: "2", word: "Terima Kasih", category: "Ungkapan", description: "Ungkapan berterima kasih" },
      { id: "3", word: "A", category: "Huruf", description: "Huruf A dalam SIBINDO" },
      { id: "4", word: "B", category: "Huruf", description: "Huruf B dalam SIBINDO" },
      { id: "5", word: "1", category: "Angka", description: "Angka satu" },
      { id: "6", word: "2", category: "Angka", description: "Angka dua" },
    ],
  },
  SIBI: {
    title: "Kamus SIBI",
    description: "Sistem Isyarat Bahasa Indonesia - Formal & baku",
    icon: <Globe className="h-6 w-6 text-emerald-400" />,
    entries: [
      { id: "1", word: "Selamat Pagi", category: "Ungkapan", description: "Sapaan pagi dalam SIBI" },
      { id: "2", word: "Perkenalkan", category: "Ungkapan", description: "Ungkapan perkenalan diri" },
      { id: "3", word: "A", category: "Huruf", description: "Huruf A dalam SIBI (formal)" },
      { id: "4", word: "B", category: "Huruf", description: "Huruf B dalam SIBI (formal)" },
      { id: "5", word: "1", category: "Angka", description: "Angka satu dalam SIBI" },
      { id: "6", word: "2", category: "Angka", description: "Angka dua dalam SIBI" },
    ],
  },
  ASL: {
    title: "Kamus ASL",
    description: "American Sign Language - Bahasa isyarat internasional",
    icon: <Languages className="h-6 w-6 text-pink-400" />,
    entries: [
      { id: "1", word: "Hello", category: "Ungkapan", description: "Sapaan umum dalam ASL" },
      { id: "2", word: "Thank You", category: "Ungkapan", description: "Ungkapan berterima kasih" },
      { id: "3", word: "A", category: "Huruf", description: "Huruf A dalam ASL" },
      { id: "4", word: "B", category: "Huruf", description: "Huruf B dalam ASL" },
      { id: "5", word: "1", category: "Angka", description: "Angka satu dalam ASL" },
      { id: "6", word: "2", category: "Angka", description: "Angka dua dalam ASL" },
    ],
  },
};

const languageColors: Record<SignLanguage, string> = {
  SIBINDO: "from-blue-500/20 to-indigo-500/20",
  SIBI: "from-emerald-500/20 to-cyan-500/20",
  ASL: "from-pink-500/20 to-purple-500/20",
};

export default function KamusPage() {
  const { selectedLanguage } = useAppContext();
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const currentKamus = kamusData[selectedLanguage];

  const filteredEntries = currentKamus.entries.filter((entry) => {
    const matchesCategory =
      activeCategory === "Semua" || entry.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      entry.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedLanguage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="mb-6 flex items-center gap-3">
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br",
                languageColors[selectedLanguage]
              )}
            >
              {currentKamus.icon}
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                {currentKamus.title}
              </h2>
              <p className="text-sm text-slate-400">
                {currentKamus.description}
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="search"
              placeholder={`Cari isyarat ${selectedLanguage}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-glow h-12 w-full rounded-xl pl-10 pr-4 text-sm text-white placeholder-slate-500"
              aria-label="Cari kamus isyarat"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                  activeCategory === cat
                    ? "border-blue-500/30 bg-blue-500/15 text-blue-400"
                    : "border-white/[0.08] bg-white/[0.03] text-slate-400 hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/20"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEntries.map((entry) => (
              <div key={entry.id} className="group card-premium p-4">
                <div className="mb-3 aspect-video rounded-lg bg-gradient-to-br from-white/[0.03] to-white/[0.01]" />
                <h3 className="font-semibold text-white">{entry.word}</h3>
                <p className="text-sm text-slate-400">{entry.description}</p>
                <span className="mt-2 inline-block rounded-full bg-gradient-to-r from-blue-500/15 to-pink-500/15 px-2.5 py-1 text-xs text-blue-400">
                  {entry.category}
                </span>
              </div>
            ))}
          </div>

          {filteredEntries.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-slate-400">
                Tidak ada isyarat yang cocok dengan pencarian Anda.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
