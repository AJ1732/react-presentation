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

      <Slide.Body className="grid gap-8 py-8">
        <section>
          <h3 className="font-founders-grotesk text-2xl text-stone-900">
            Prompt Questions
          </h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700">
            {questions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="font-founders-grotesk text-2xl text-stone-900">
            Closing Line
          </h3>
          <p className="mt-3 text-stone-600">
            Modern React is boundary design: server boundary, client boundary,
            streaming boundary, compiler boundary, and deployment boundary.
          </p>
        </section>
      </Slide.Body>
    </Slide.Root>
  );
}
