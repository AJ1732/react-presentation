import Link from "next/link";

import { Slide } from "@/components/slide";

const requirements = [
  "Public landing page",
  "Authenticated dashboard",
  "Product table with filters",
  "Create product form",
  "Analytics chart",
  "Admin-only route",
];

export function Slide16() {
  return (
    <Slide.Root>
      <Slide.Header>
        <Slide.Eyebrow>Slide 16</Slide.Eyebrow>
        <Slide.Title>Class Activity: Design the Architecture</Slide.Title>
      </Slide.Header>

      <Slide.Body className="py-8">
        <h3 className="font-founders-grotesk text-2xl text-stone-900">
          Scenario
        </h3>
        <p className="mt-3 text-stone-600">
          You are building an inventory dashboard.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700">
          {requirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/quiz"
            className="bg-brand-500 hover:bg-brand-600 inline-flex h-10 items-center justify-center rounded-full px-5 leading-none font-medium text-white transition-[transform,background-color] duration-200 ease-out active:scale-[0.96]"
          >
            <span className="text-trim">Open quiz</span>
          </Link>
          <p className="text-trim leading-none text-stone-500">
            10 multiple-choice questions with instant feedback.
          </p>
        </div>
      </Slide.Body>
    </Slide.Root>
  );
}
