import { CodeWindow } from "@/components/code-window";
import { Slide } from "@/components/slide";

const streamingExample = `import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <main>
      <h1>Dashboard</h1>

      <Suspense fallback={<p>Loading chart...</p>}>
        <RevenueChart />
      </Suspense>
    </main>
  );
}`;

export function Slide4() {
  return (
    <Slide.Root className="grid-rows-[auto_1fr_auto] pb-8">
      <Slide.Header>
        <Slide.Eyebrow>Slide 4</Slide.Eyebrow>
        <Slide.Title>Streaming SSR</Slide.Title>
      </Slide.Header>

      <Slide.Body className="grid gap-8 py-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="space-y-6">
          <p className="max-w-2xl text-stone-600">
            Streaming SSR means the server can send the page in pieces instead
            of waiting for the slowest child before responding.
          </p>

          <section className="bg-stone-100 p-4">
            <h3 className="font-founders-grotesk text-2xl text-stone-900">
              Mental Model
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700">
              <li>Fast shell first</li>
              <li>Slow data later</li>
              <li>Better perceived performance</li>
            </ul>
          </section>
        </div>

        <CodeWindow
          title="dashboard-page.tsx"
          language="tsx"
          code={streamingExample}
          caption="A Suspense boundary lets the route shell appear before the chart resolves."
        />
      </Slide.Body>

      <Slide.References
        items={[
          {
            href: "https://nextjs.org/docs/app/getting-started/server-and-client-components",
            label:
              "nextjs.org/docs/app/getting-started/server-and-client-components",
          },
        ]}
      />
    </Slide.Root>
  );
}
