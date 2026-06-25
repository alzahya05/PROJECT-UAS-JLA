import { Search } from "lucide-react";

const categories = ["Semua", "Huruf", "Angka", "Kata", "Ungkapan"];

const entries = [
  { id: "1", word: "Halo", category: "Ungkapan", description: "Sapaan umum" },
  { id: "2", word: "Terima Kasih", category: "Ungkapan", description: "Ungkapan berterima kasih" },
  { id: "3", word: "A", category: "Huruf", description: "Huruf A dalam ABI" },
  { id: "4", word: "B", category: "Huruf", description: "Huruf B dalam ABI" },
  { id: "5", word: "1", category: "Angka", description: "Angka satu" },
  { id: "6", word: "2", category: "Angka", description: "Angka dua" },
];

export default function KamusPage() {
  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Cari isyarat..."
          className="h-12 w-full rounded-xl border bg-background pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label="Cari kamus isyarat"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className="whitespace-nowrap rounded-full border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="group rounded-xl border bg-card p-4 transition-all hover:shadow-md"
          >
            <div className="mb-3 aspect-video rounded-lg bg-muted" />
            <h3 className="font-semibold">{entry.word}</h3>
            <p className="text-sm text-muted-foreground">{entry.description}</p>
            <span className="mt-2 inline-block rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
              {entry.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
