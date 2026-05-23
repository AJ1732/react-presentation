import { CodeWindow } from "@/components/code-window";
import {
  TitleSlide,
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
  Slide17,
  Slide18,
} from "@/slides";

const tsExample = `export function updateIssueTitle(issueId: string, title: string) {
  return mutate(
    ["/api/issues", issueId],
    async (current) => {
      const optimistic = { ...current, title };

      await fetch(\`/api/issues/\${issueId}\`, {
        method: "PATCH",
        body: JSON.stringify({ title }),
      });

      return optimistic;
    },
    { revalidate: false },
  );
}`;

export default function Home() {
  return (
    <main className="h-dvh snap-y snap-mandatory divide-y overflow-y-auto overscroll-y-contain scroll-smooth bg-stone-50 text-stone-950">
      <TitleSlide />
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 />
      <Slide7 />
      <Slide8 />
      <Slide9 />
      <Slide10 />
      <Slide11 />
      <Slide12 />
      <Slide13 />
      <Slide14 />
      <Slide15 />
      <Slide16 />
      <Slide17 />
      <Slide18 />
      <section className="content-grid snap-start space-y-8 py-16">
        <div className="max-w-3xl">
          <p className="font-founders-grotesk-condensed text-sm-expand tracking-[0.2em] text-stone-500 uppercase">
            Reusable Code Window
          </p>
          <h1 className="font-founders-grotesk mt-4 text-5xl leading-none tracking-[-0.04em] sm:text-7xl">
            Static editor styling without shipping an editor.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            A presentation-first code component that accepts any language label,
            custom colors, captions, and optional line numbers.
          </p>
        </div>

        <CodeWindow title="sync-engine.ts" language="tsx" code={tsExample} />
      </section>
    </main>
  );
}
