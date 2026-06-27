"use client";

import { cn } from "@/lib/utils";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Trophy } from "lucide-react";

interface ProgressTrackerProps {
  quizId: string;
  totalQuestions: number;
  className?: string;
}

interface StoredProgress {
  answered: number;
  correct: number;
  lastAttempt: string;
}

export default function ProgressTracker({
  quizId,
  totalQuestions,
  className,
}: ProgressTrackerProps) {
  const { value: progress, setValue: setProgress } = useLocalStorage<StoredProgress>(
    `quiz-${quizId}`,
    { answered: 0, correct: 0, lastAttempt: "" }
  );

  const percentage = totalQuestions > 0 ? (progress.correct / totalQuestions) * 100 : 0;

  return (
    <div className={cn("card-premium p-6", className)}>
      <div className="mb-4 flex items-center gap-2">
        <Trophy className="h-5 w-5 text-blue-400" />
        <h3 className="font-semibold text-white">Progress Belajar</h3>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold text-blue-400">{progress.answered}</p>
          <p className="text-xs text-slate-500">Dijawab</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-emerald-400">{progress.correct}</p>
          <p className="text-xs text-slate-500">Benar</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-pink-400">{progress.answered - progress.correct}</p>
          <p className="text-xs text-slate-500">Salah</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Akurasi</span>
          <span className="font-medium text-white">{Math.round(percentage)}%</span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {progress.lastAttempt && (
        <p className="mt-4 text-xs text-slate-500">
          Terakhir: {new Date(progress.lastAttempt).toLocaleDateString("id-ID")}
        </p>
      )}

      <button
        onClick={() =>
          setProgress({ answered: 0, correct: 0, lastAttempt: "" })
        }
        className="mt-4 text-xs text-slate-500 transition-colors hover:text-slate-300"
      >
        Reset Progress
      </button>
    </div>
  );
}
