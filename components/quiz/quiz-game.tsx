"use client";

import { AnimatePresence, motion } from "motion/react";
import { startTransition, useState } from "react";

import { cn } from "@/lib/utils";
import type { QuizQuestion } from "@/lib/quiz-data";

type QuizGameProps = {
  questions: QuizQuestion[];
};

function getOptionState(
  index: number,
  selectedIndex: number | null,
  correctIndex: number,
) {
  const isSelected = selectedIndex === index;
  const isCorrect = index === correctIndex;
  const isLocked = selectedIndex !== null;

  if (!isLocked) {
    return {
      isSelected,
      className:
        "border-stone-300 text-stone-800 hover:border-brand-500 hover:bg-brand-50/50",
    };
  }

  if (isCorrect) {
    return {
      isSelected,
      className:
        "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-[0_0_0_1px_rgba(16,185,129,0.12)]",
    };
  }

  if (isSelected) {
    return {
      isSelected,
      className:
        "border-red-400 bg-red-50 text-red-900 shadow-[0_0_0_1px_rgba(248,113,113,0.14)]",
    };
  }

  return {
    isSelected,
    className: "border-stone-200 text-stone-500",
  };
}

export function QuizGame({ questions }: QuizGameProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];
  const isLocked = selectedIndex !== null;
  const isCorrect = selectedIndex === currentQuestion.correctIndex;
  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  const scorePercent = Math.round((score / totalQuestions) * 100);

  function handleStart() {
    startTransition(() => {
      setHasStarted(true);
      setIsComplete(false);
      setCurrentIndex(0);
      setSelectedIndex(null);
      setScore(0);
    });
  }

  function handleAnswer(index: number) {
    if (isLocked) {
      return;
    }

    setSelectedIndex(index);

    if (index === currentQuestion.correctIndex) {
      setScore((currentScore) => currentScore + 1);
    }
  }

  function handleNext() {
    startTransition(() => {
      if (currentIndex === totalQuestions - 1) {
        setIsComplete(true);
        setSelectedIndex(null);
        return;
      }

      setCurrentIndex((index) => index + 1);
      setSelectedIndex(null);
    });
  }

  function handleRestart() {
    startTransition(() => {
      setHasStarted(false);
      setIsComplete(false);
      setCurrentIndex(0);
      setSelectedIndex(null);
      setScore(0);
    });
  }

  if (!hasStarted) {
    return (
      <section className="grid gap-8 py-12">
        <div className="max-w-4xl space-y-4">
          <p className="font-founders-grotesk-condensed text-sm-expand tracking-[0.2em] text-stone-500 uppercase">
            Quiz Activity
          </p>
          <h1 className="font-founders-grotesk text-5xl-expand sm:text-7xl-expand leading-none tracking-[-0.04em] text-balance">
            Test your knowledge of the presentation
          </h1>
          <p className="max-w-2xl text-pretty text-stone-600">
            You will get 10 multiple-choice questions drawn from the lecture.
            Each answer shows instant feedback before you move on.
          </p>
        </div>

        <div className="grid gap-3 text-stone-700 sm:grid-cols-3">
          <p>10 questions</p>
          <p>4 options each</p>
          <p>Immediate feedback</p>
        </div>

        <div>
          <button
            type="button"
            onClick={handleStart}
            className="bg-brand-500 hover:bg-brand-600 inline-flex h-10 items-center justify-center rounded-full px-6 font-medium text-white transition-[transform,background-color] duration-200 ease-out active:scale-[0.96]"
          >
            <span className="text-trim">Start quiz</span>
          </button>
        </div>
      </section>
    );
  }

  if (isComplete) {
    return (
      <section className="grid gap-8 py-12">
        <div className="max-w-3xl space-y-4">
          <p className="font-founders-grotesk-condensed text-sm-expand tracking-[0.2em] text-stone-500 uppercase">
            Results
          </p>
          <h1 className="font-founders-grotesk text-5xl-expand sm:text-7xl-expand leading-none tracking-[-0.04em] text-balance">
            {scorePercent >= 70
              ? "Strong grasp of the architecture"
              : "Good review point for the class"}
          </h1>
          <p className="max-w-2xl text-pretty text-stone-600">
            You scored{" "}
            <span className="font-mono [font-variant-numeric:tabular-nums]">
              {score}
            </span>{" "}
            out of{" "}
            <span className="font-mono [font-variant-numeric:tabular-nums]">
              {totalQuestions}
            </span>{" "}
            questions correctly.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <p className="font-founders-grotesk-condensed text-sm-expand tracking-[0.18em] text-stone-500 uppercase">
              Score
            </p>
            <p className="text-4xl-expand mt-2 font-mono [font-variant-numeric:tabular-nums]">
              {score}/{totalQuestions}
            </p>
          </div>
          <div>
            <p className="font-founders-grotesk-condensed text-sm-expand tracking-[0.18em] text-stone-500 uppercase">
              Accuracy
            </p>
            <p className="text-4xl-expand mt-2 font-mono [font-variant-numeric:tabular-nums]">
              {scorePercent}%
            </p>
          </div>
          <div>
            <p className="font-founders-grotesk-condensed text-sm-expand tracking-[0.18em] text-stone-500 uppercase">
              Status
            </p>
            <p className="text-2xl-expand mt-2 text-stone-800">
              {scorePercent >= 70 ? "Pass" : "Review again"}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={handleRestart}
            className="bg-brand-500 hover:bg-brand-600 inline-flex min-h-10 items-center justify-center rounded-full px-6 py-3 font-medium text-white transition-[transform,background-color] duration-200 ease-out active:scale-[0.96]"
          >
            <span className="text-trim">Restart quiz</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="grid gap-8 py-12">
      <div className="grid gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-founders-grotesk-condensed text-sm-expand tracking-[0.2em] text-stone-500 uppercase">
            Question {currentIndex + 1} of {totalQuestions}
          </p>
          <p className="text-sm-expand font-mono text-stone-600 [font-variant-numeric:tabular-nums]">
            Score: {score}
          </p>
        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-stone-200">
          <motion.div
            className="bg-brand-500 h-full origin-left rounded-full"
            initial={false}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8"
        >
          <div className="max-w-7xl space-y-4">
            <h1 className="font-founders-grotesk text-4xl-expand sm:text-6xl-expand leading-none tracking-[-0.02em] text-pretty">
              {currentQuestion.prompt}
            </h1>
            <p className="text-sm-expand font-mono text-stone-500">
              Slides {currentQuestion.sourceSlides.join(", ")}
            </p>
          </div>

          <div className="grid gap-3">
            {currentQuestion.options.map((option, index) => {
              const optionState = getOptionState(
                index,
                selectedIndex,
                currentQuestion.correctIndex,
              );

              return (
                <motion.button
                  key={option}
                  type="button"
                  onClick={() => handleAnswer(index)}
                  whileHover={isLocked ? undefined : { y: -1 }}
                  whileTap={isLocked ? undefined : { scale: 0.96 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  disabled={isLocked}
                  aria-pressed={optionState.isSelected}
                  className={cn(
                    "min-h-12 rounded-2xl border px-5 py-4 text-left transition-[transform,background-color,border-color,color,box-shadow] duration-200 ease-out",
                    optionState.className,
                  )}
                >
                  <span className="flex items-start gap-4">
                    <span className="text-sm-expand text-trim font-mono text-stone-500">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-trim text-pretty">{option}</span>
                  </span>
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence initial={false}>
            {isLocked ? (
              <motion.div
                key="feedback"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-4"
                role="status"
                aria-live="polite"
              >
                <p
                  className={cn(
                    "font-founders-grotesk text-2xl-expand",
                    isCorrect ? "text-emerald-700" : "text-red-700",
                  )}
                >
                  {isCorrect ? "Correct" : "Not quite"}
                </p>
                <p className="max-w-3xl text-pretty text-stone-600">
                  {currentQuestion.explanation}
                </p>
                <div>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="hover:border-brand-500 hover:bg-brand-50 inline-flex h-10 items-center justify-center rounded-full border border-stone-300 px-5 text-stone-800 transition-[transform,background-color,border-color] duration-200 ease-out active:scale-[0.96]"
                  >
                    <span className="text-trim">
                      {currentIndex === totalQuestions - 1
                        ? "See results"
                        : "Next question"}
                    </span>
                  </button>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
