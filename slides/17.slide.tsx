import { Slide } from "@/components/slide";

const checklist = [
  "Can it stay on the server?",
  "Does it need browser interactivity?",
  "Is the mutation secure?",
  "Can the UI stream?",
  "Can part of it be pre-rendered?",
  "Can the Compiler optimize it?",
  "Does the route structure match the product?",
  "Can CI catch mistakes?",
  "Is it accessible?",
  "Does the team need monorepo or micro-frontends?",
];

export function Slide17() {
  return (
    <Slide.Root>
      <Slide.Header>
        <Slide.Eyebrow>Slide 17</Slide.Eyebrow>
        <Slide.Title>The Senior React Checklist</Slide.Title>
      </Slide.Header>

      <Slide.Body className="grid gap-8 py-8">
        <ul className="list-disc space-y-2 pl-5 text-stone-700">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Slide.Body>
    </Slide.Root>
  );
}
