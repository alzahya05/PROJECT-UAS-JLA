"use client";

import { useState } from "react";
import { Check, X, ArrowRight, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuizQuestion } from "@/types";

interface QuizCardProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
}

export default function QuizCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setIsAnswered(true);
    onAnswer(selectedAnswer === question.correctAnswer);
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="mx-auto w-full max-w-2xl">
      {/* Progress */}
      <div className="mb-6 flex items-center justify-between text-sm text-slate-400">
        <span>
          Soal {questionNumber} dari {totalQuestions}
        </span>
        <div className="flex items-center gap-1">
          <Trophy className="h-4 w-4 text-blue-400" />
          <span>{Math.round((questionNumber / totalQuestions) * 100)}%</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-300"
          style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Question */}
      <h2 className="mb-6 text-xl font-semibold text-white">{question.question}</h2>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            disabled={isAnswered}
            className={cn(
              "flex w-full items-center gap-3 rounded-xl border p-4 text-left transition-all duration-200",
              !isAnswered && selectedAnswer === index
                ? "border-blue-500/40 bg-blue-500/10"
                : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15] hover:bg-white/[0.04]",
              isAnswered && index === question.correctAnswer
                ? "border-emerald-500/40 bg-emerald-500/10"
                : "",
              isAnswered && selectedAnswer === index && !isCorrect
                ? "border-red-500/40 bg-red-500/10"
                : ""
            )}
          >
            <span
              className={cn(
                "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-sm font-medium transition-all",
                selectedAnswer === index
                  ? "border-blue-500 bg-blue-500/20 text-blue-400"
                  : "border-white/[0.12] text-slate-400",
                isAnswered && index === question.correctAnswer
                  ? "!border-emerald-500 !bg-emerald-500/20 !text-emerald-400"
                  : "",
                isAnswered && selectedAnswer === index && !isCorrect
                  ? "!border-red-500 !bg-red-500/20 !text-red-400"
                  : ""
              )}
            >
              {isAnswered && index === question.correctAnswer ? (
                <Check className="h-4 w-4" />
              ) : isAnswered && selectedAnswer === index && !isCorrect ? (
                <X className="h-4 w-4" />
              ) : (
                String.fromCharCode(65 + index)
              )}
            </span>
            <span className="flex-1 text-slate-300">{option}</span>
          </button>
        ))}
      </div>

      {/* Explanation */}
      {isAnswered && question.explanation && (
        <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
          <p className="text-sm text-slate-400">{question.explanation}</p>
        </div>
      )}

      {/* Submit / Next */}
      <div className="mt-8 flex justify-end">
        {!isAnswered ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="btn-primary-glow flex items-center gap-2 rounded-xl px-6 py-3 font-medium disabled:opacity-50"
          >
            Submit Jawaban
          </button>
        ) : (
          <button
            onClick={() => {
              setSelectedAnswer(null);
              setIsAnswered(false);
            }}
            className="btn-primary-glow flex items-center gap-2 rounded-xl px-6 py-3 font-medium"
          >
            Soal Berikutnya
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
