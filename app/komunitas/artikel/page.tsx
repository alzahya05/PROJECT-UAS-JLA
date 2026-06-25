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
  Pemula: "bg-blue-500/10 text-blue-600",
  Tips: "bg-green-500/10 text-green-600",
  Budaya: "bg-purple-500/10 text-purple-600",
  Teknologi: "bg-orange-500/10 text-orange-600",
};

export default function ArtikelPage() {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        Artikel edukasi, tips komunikasi, dan literatur seputar tunarungu & tunawicara.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/komunitas/artikel/${article.id}`}
            className="group rounded-xl border bg-card p-6 transition-all hover:shadow-md hover:border-primary/50"
          >
            <div className="mb-3 flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${categoryColors[article.category] || ""}`}
              >
                <Tag className="h-3 w-3" />
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {article.readTime}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-semibold group-hover:text-primary">
              {article.title}
            </h3>
            <p className="text-sm text-muted-foreground">{article.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
