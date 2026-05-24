import { CodeWindow } from "@/components/code-window";
import { Slide } from "@/components/slide";

const appRouterTree = `app/
  layout.tsx
  page.tsx
  loading.tsx
  error.tsx
  (marketing)/
  (dashboard)/
  middleware.ts`;

export function Slide10() {
  return (
    <Slide.Root className="grid-rows-[auto_1fr_auto] pb-8">
      <Slide.Header>
        <Slide.Eyebrow>Slide 10</Slide.Eyebrow>
        <Slide.Title>Meta-frameworks: Next.js App Router</Slide.Title>
      </Slide.Header>

      <Slide.Body className="grid gap-8 py-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <p className="max-w-2xl text-stone-600">
          The App Router organizes routing through file conventions. The
          structure itself teaches where pages, layouts, loading states, and
          route groups live.
        </p>

        <CodeWindow
          title="app-router-tree.txt"
          language="text"
          code={appRouterTree}
          caption="Route segments and special files define the UI tree."
        />
      </Slide.Body>

      <Slide.References
        items={[
          {
            href: "https://nextjs.org/docs/app/getting-started/layouts-and-pages",
            label: "nextjs.org/docs/app/getting-started/layouts-and-pages",
          },
        ]}
      />
    </Slide.Root>
  );
}
