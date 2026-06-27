"use client";

import QuizCard from "@/components/shared/QuizCard";
import ProgressTracker from "@/components/shared/ProgressTracker";
import { useState } from "react";
import type { QuizQuestion } from "@/types";

const sampleQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "Isyarat untuk huruf 'A' dalam ABI adalah?",
    options: [
      "Tangan terbuka, jari-jari merapat",
      "Tangan mengepal, ibu jari di samping",
      "Tangan terbuka, jari terentang",
      "Tangan menunjuk ke atas",
    ],
    correctAnswer: 1,
    explanation: "Huruf A dijabarkan dengan tangan mengepal dan ibu jari di samping telunjuk.",
  },
  {
    id: "q2",
    question: "Angka '5' dalam bahasa isyarat ditunjukkan dengan?",
    options: [
      "Satu jari terentang",
      "Dua jari terentang",
      "Lima jari terentang terbuka",
      "Tangan mengepal",
    ],
    correctAnswer: 2,
    explanation: "Angka 5 ditunjukkan dengan lima jari terentang terbuka.",
  },
  {
    id: "q3",
    question: "Sapaan 'Halo' dalam bahasa isyarat dilakukan dengan?",
    options: [
      "Mengangkat tangan ke atas",
      "Melambaikan tangan ke samping",
      "Mengetuk dada",
      "Menunjuk ke orang lain",
    ],
    correctAnswer: 1,
    explanation: "Halo dilakukan dengan melambaikan tangan ke samping seperti saat menyapa.",
  },
];

export default function LatihanPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        {currentQuestion < sampleQuestions.length ? (
          <QuizCard
            key={sampleQuestions[currentQuestion].id}
            question={sampleQuestions[currentQuestion]}
            questionNumber={currentQuestion + 1}
            totalQuestions={sampleQuestions.length}
            onAnswer={(isCorrect) => {
              handleAnswer(isCorrect);
              setTimeout(handleNext, 1500);
            }}
          />
        ) : (
          <div className="card-premium p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">Selesai! 🎉</h2>
            <p className="text-lg text-slate-400">
              Skor Anda: {score} dari {sampleQuestions.length}
            </p>
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
              }}
              className="btn-primary-glow mt-6 rounded-xl px-6 py-3 font-medium"
            >
              Ulangi Latihan
            </button>
          </div>
        )}
      </div>

      <div>
        <ProgressTracker
          quizId="huruf-angka-dasar"
          totalQuestions={sampleQuestions.length}
        />
      </div>
    </div>
  );
}
