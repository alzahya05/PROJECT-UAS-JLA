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
    <div className={cn("rounded-xl border bg-card p-6", className)}>
      <div className="mb-4 flex items-center gap-2">
        <Trophy className="h-5 w-5 text-primary" />
        <h3 className="font-semibold">Progress Belajar</h3>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold text-primary">{progress.answered}</p>
          <p className="text-xs text-muted-foreground">Dijawab</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-green-500">{progress.correct}</p>
          <p className="text-xs text-muted-foreground">Benar</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-red-500">{progress.answered - progress.correct}</p>
          <p className="text-xs text-muted-foreground">Salah</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Akurasi</span>
          <span className="font-medium">{Math.round(percentage)}%</span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {progress.lastAttempt && (
        <p className="mt-4 text-xs text-muted-foreground">
          Terakhir: {new Date(progress.lastAttempt).toLocaleDateString("id-ID")}
        </p>
      )}

      <button
        onClick={() =>
          setProgress({ answered: 0, correct: 0, lastAttempt: "" })
        }
        className="mt-4 text-xs text-muted-foreground hover:text-foreground"
      >
        Reset Progress
      </button>
    </div>
  );
}
