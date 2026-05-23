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
      </Slide.Body>
    </Slide.Root>
  );
}
