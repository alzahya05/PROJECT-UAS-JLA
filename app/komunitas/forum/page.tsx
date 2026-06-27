import { MessageSquare, Users, Clock } from "lucide-react";

const threads = [
  {
    id: "1",
    title: "Tips belajar ABI untuk pemula",
    author: "Andi",
    replies: 12,
    lastActivity: "2 jam lalu",
    category: "Diskusi",
  },
  {
    id: "2",
    title: "Rekomendasi tempat kursus isyarat di Jakarta",
    author: "Sari",
    replies: 8,
    lastActivity: "5 jam lalu",
    category: "Rekomendasi",
  },
  {
    id: "3",
    title: "Pengalaman menggunakan fitur Speech to Text",
    author: "Budi",
    replies: 15,
    lastActivity: "1 hari lalu",
    category: "Pengalaman",
  },
  {
    id: "4",
    title: "Cara mengatasi kesulitan komunikasi di tempat kerja",
    author: "Rina",
    replies: 20,
    lastActivity: "2 hari lalu",
    category: "Diskusi",
  },
];

export default function ForumPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-slate-400">
          Ruang diskusi dan berbagi pengalaman antar pengguna.
        </p>
        <button className="btn-primary-glow rounded-xl px-4 py-2 text-sm font-medium">
          Buat Thread Baru
        </button>
      </div>

      <div className="space-y-3">
        {threads.map((thread) => (
          <div
            key={thread.id}
            className="group card-premium flex items-start gap-4 p-4"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-pink-500/20 text-blue-400">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">{thread.title}</h3>
              <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                <span className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {thread.author}
                </span>
                <span>{thread.replies} balasan</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {thread.lastActivity}
                </span>
                <span className="rounded-full bg-white/[0.05] px-2 py-0.5 text-xs text-slate-400">
                  {thread.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
