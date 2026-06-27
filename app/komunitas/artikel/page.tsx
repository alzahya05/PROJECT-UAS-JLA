import { Clock, Tag } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    id: "1",
    title: "Pengenalan Bahasa Isyarat Indonesia (ABI)",
    excerpt: "Pelajari dasar-dasar bahasa isyarat yang digunakan di Indonesia.",
    category: "Pemula",
    readTime: "5 menit",
    date: "2025-01-15",
  },
  {
    id: "2",
    title: "Tips Komunikasi dengan Tunarungu",
    excerpt: "Cara efektif berkomunikasi dengan teman atau keluarga yang tunarungu.",
    category: "Tips",
    readTime: "3 menit",
    date: "2025-01-14",
  },
  {
    id: "3",
    title: "Etika dalam Komunitas Tunarungu",
    excerpt: "Memahami norma dan etika yang berlaku dalam komunitas tunarungu.",
    category: "Budaya",
    readTime: "4 menit",
    date: "2025-01-13",
  },
  {
    id: "4",
    title: "Teknologi Aksesibilitas Terkini",
    excerpt: "Perkembangan terbaru dalam teknologi untuk tunarungu dan tunawicara.",
    category: "Teknologi",
    readTime: "6 menit",
    date: "2025-01-12",
  },
];

const categoryColors: Record<string, string> = {
  Pemula: "from-blue-500/15 to-indigo-500/15 text-blue-400",
  Tips: "from-emerald-500/15 to-cyan-500/15 text-emerald-400",
  Budaya: "from-purple-500/15 to-pink-500/15 text-purple-400",
  Teknologi: "from-orange-500/15 to-amber-500/15 text-orange-400",
};

export default function ArtikelPage() {
  return (
    <div className="space-y-6">
      <p className="text-slate-400">
        Artikel edukasi, tips komunikasi, dan literatur seputar tunarungu & tunawicara.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/komunitas/artikel/${article.id}`}
            className="group card-premium p-6"
          >
            <div className="mb-3 flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r px-2.5 py-1 text-xs font-medium ${categoryColors[article.category] || ""}`}
              >
                <Tag className="h-3 w-3" />
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-500">
                <Clock className="h-3 w-3" />
                {article.readTime}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
              {article.title}
            </h3>
            <p className="text-sm text-slate-400">{article.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
