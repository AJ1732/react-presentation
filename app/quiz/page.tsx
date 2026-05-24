import type { Metadata } from "next";
import Link from "next/link";

import { QuizGame } from "@/components/quiz/quiz-game";
import { quizQuestions } from "@/lib/quiz-data";

export const metadata: Metadata = {
  title: "Quiz | Modern React Architecture",
  description:
    "A multiple-choice quiz for the Modern React Architecture presentation.",
  alternates: {
    canonical: "/quiz",
  },
  openGraph: {
    url: "https://react.ejemeniboi.com/quiz",
    title: "Quiz | Modern React Architecture",
    description:
      "Test your knowledge of Server Components, Server Actions, streaming SSR, the React Compiler, and Next.js architecture.",
  },
  twitter: {
    title: "Quiz | Modern React Architecture",
    description:
      "Test your knowledge of Server Components, Server Actions, streaming SSR, the React Compiler, and Next.js architecture.",
  },
};

export default function QuizPage() {
  return (
    <main className="min-h-dvh bg-stone-50 text-stone-950">
      <section className="content-grid py-12">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-founders-grotesk-condensed text-sm-expand tracking-[0.18em] text-stone-500 uppercase transition-colors duration-200 ease-out hover:text-brand-600"
          >
            Back to presentation
          </Link>
          <p className="font-mono text-sm-expand text-stone-500">/quiz</p>
        </div>

        <QuizGame questions={quizQuestions} />
      </section>
    </main>
  );
}
