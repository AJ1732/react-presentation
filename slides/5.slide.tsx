import { CodeWindow } from "@/components/code-window";
import { Slide } from "@/components/slide";
import { SlideReferences } from "@/components/slide-references";

const badSuspenseExample = `<Suspense fallback={<FullPageLoader />}>
  <EntireDashboard />
</Suspense>`;

const betterSuspenseExample = `<DashboardShell>
  <Suspense fallback={<StatsSkeleton />}>
    <Stats />
  </Suspense>

  <Suspense fallback={<ChartSkeleton />}>
    <Chart />
  </Suspense>
</DashboardShell>`;

export function Slide5() {
  return (
    <Slide.Root className="grid-rows-[auto_1fr_auto] pb-8">
      <Slide.Header>
        <Slide.Eyebrow>Slide 5</Slide.Eyebrow>
        <Slide.Title>Suspense Boundaries on the Server</Slide.Title>
      </Slide.Header>

      <Slide.Body className="grid gap-8 py-8">
        <p className="max-w-3xl text-stone-600">
          Suspense boundaries should wrap slow sections, not entire routes.
          Each boundary is a performance gate that decides what can show first.
        </p>

        <div className="grid gap-6 xl:grid-cols-2">
          <CodeWindow
            title="too-broad-boundary.tsx"
            language="tsx"
            code={badSuspenseExample}
            caption="One broad boundary delays too much of the page."
          />
          <CodeWindow
            title="section-boundaries.tsx"
            language="tsx"
            code={betterSuspenseExample}
            caption="Separate boundaries let slow sections resolve independently."
          />
        </div>

        <section>
          <h3 className="font-founders-grotesk text-2xl text-stone-900">
            Key Idea
          </h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700">
            <li>Place boundaries around slow sections</li>
            <li>Keep the dashboard shell available early</li>
            <li>Do not wrap the whole page by default</li>
          </ul>
        </section>
      </Slide.Body>

      <SlideReferences
        items={[
          {
            href: "https://nextjs.org/docs/app/getting-started/server-and-client-components",
            label: "nextjs.org/docs/app/getting-started/server-and-client-components",
          },
        ]}
      />
    </Slide.Root>
  );
}
