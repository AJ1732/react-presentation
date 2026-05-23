import { Slide } from "@/components/slide";

const questions = [
  "What confused you?",
  "What would you use immediately?",
  "What would you avoid until necessary?",
  "Where have you overused 'use client' before?",
];

export function Slide18() {
  return (
    <Slide.Root>
      <Slide.Header>
        <Slide.Eyebrow>Slide 18</Slide.Eyebrow>
        <Slide.Title>Q&A</Slide.Title>
      </Slide.Header>

      <Slide.Body className="py-8">
        <h3 className="font-founders-grotesk text-2xl text-stone-900">
          Prompt Questions
        </h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700">
          {questions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Slide.Body>
    </Slide.Root>
  );
}
