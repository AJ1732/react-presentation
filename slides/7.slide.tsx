import { CodeWindow } from "@/components/code-window";
import { Slide } from "@/components/slide";

const prerenderExample = `import { prerender } from "react-dom/static";
import { resume } from "react-dom/server";

const { prelude, postponed } = await prerender(<App />, {
  signal,
  bootstrapScripts: ["/main.js"],
});

const stream = await resume(<App />, postponed);`;

export function Slide7() {
  return (
    <Slide.Root className="grid-rows-[auto_1fr_auto] pb-8">
      <Slide.Header>
        <Slide.Eyebrow>Slide 7</Slide.Eyebrow>
        <Slide.Title>prerender and resume</Slide.Title>
      </Slide.Header>

      <Slide.Body className="grid gap-8 py-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <CodeWindow
          title="ppr-flow.ts"
          language="ts"
          code={prerenderExample}
          caption="The framework can pre-render a shell and resume postponed work later."
        />

        <div className="space-y-6">
          <p className="mt-3 text-stone-600">
            Most teams will not call these APIs directly. They matter because
            they explain the lower-level capability that meta-frameworks can
            build on.
          </p>

          <section>
            <h3 className="font-founders-grotesk text-2xl text-stone-900">
              Framing
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-stone-700">
              <li>`prerender` creates a prelude and postponed state</li>
              <li>`resume` continues the postponed rendering work later</li>
              <li>This is a framework-level performance capability</li>
            </ul>
          </section>
        </div>
      </Slide.Body>

      <Slide.References
        items={[
          {
            href: "https://react.dev/blog/2025/10/01/react-19-2",
            label: "react.dev/blog/2025/10/01/react-19-2",
          },
        ]}
      />
    </Slide.Root>
  );
}
