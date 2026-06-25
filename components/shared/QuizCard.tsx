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
      <div className="mb-6 flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Soal {questionNumber} dari {totalQuestions}
        </span>
        <div className="flex items-center gap-1">
          <Trophy className="h-4 w-4" />
          <span>{Math.round((questionNumber / totalQuestions) * 100)}%</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Question */}
      <h2 className="mb-6 text-xl font-semibold">{question.question}</h2>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            disabled={isAnswered}
            className={cn(
              "flex w-full items-center gap-3 rounded-xl border-2 p-4 text-left transition-all",
              !isAnswered && selectedAnswer === index
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50 hover:bg-muted/50",
              isAnswered && index === question.correctAnswer
                ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                : "",
              isAnswered && selectedAnswer === index && !isCorrect
                ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                : ""
            )}
          >
            <span
              className={cn(
                "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-sm font-medium",
                selectedAnswer === index ? "border-primary bg-primary text-primary-foreground" : "border-border"
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
            <span className="flex-1">{option}</span>
          </button>
        ))}
      </div>

      {/* Explanation */}
      {isAnswered && question.explanation && (
        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
          <p className="text-sm text-muted-foreground">{question.explanation}</p>
        </div>
      )}

      {/* Submit / Next */}
      <div className="mt-8 flex justify-end">
        {!isAnswered ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
          >
            Submit Jawaban
          </button>
        ) : (
          <button
            onClick={() => {
              setSelectedAnswer(null);
              setIsAnswered(false);
            }}
            className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Soal Berikutnya
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
