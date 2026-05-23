import { Slide } from "@/components/slide";

const requirements = [
  "Public landing page",
  "Authenticated dashboard",
  "Product table with filters",
  "Create product form",
  "Analytics chart",
  "Admin-only route",
];

const prompts = [
  "Which parts should be Server Components?",
  "Which parts need 'use client'?",
  "Where would you use Server Actions?",
  "Where would Suspense boundaries go?",
  "Where would middleware help?",
  "Would you use monorepo or micro-frontend?",
];

const expectedAnswers = [
  "Landing page: mostly Server Components",
  "Product table filters: Client Component",
  "Create product: Server Action",
  "Analytics chart: Suspense boundary",
  "Admin-only route: Middleware/auth check",
  "Shared UI package: monorepo",
];

export function Slide16() {
  return (
    <Slide.Root>
      <Slide.Header>
        <Slide.Eyebrow>Slide 16</Slide.Eyebrow>
        <Slide.Title>Class Activity: Design the Architecture</Slide.Title>
      </Slide.Header>

      <Slide.Body className="grid gap-8 py-8">
        <section>
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
        </section>

        <div className="grid gap-6 xl:grid-cols-2">
          <section>
            <h3 className="font-founders-grotesk text-2xl text-stone-900">
              Ask the Class
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700">
              {prompts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-founders-grotesk text-2xl text-stone-900">
              Expected Answers
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700">
              {expectedAnswers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </Slide.Body>
    </Slide.Root>
  );
}
