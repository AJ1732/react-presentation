import { CodeWindow } from "@/components/code-window";
import { Slide } from "@/components/slide";

const ciExample = `name: CI

on: [pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm typecheck
      - run: pnpm test
      - run: pnpm build`;

export function Slide14() {
  return (
    <Slide.Root className="grid-rows-[auto_1fr_auto] pb-8">
      <Slide.Header>
        <Slide.Eyebrow>Slide 14</Slide.Eyebrow>
        <Slide.Title>Profiling, CI/CD, and Accessibility</Slide.Title>
      </Slide.Header>

      <Slide.Body className="grid gap-8 py-8">
        <div className="grid gap-6 xl:grid-cols-3 [&_section]:bg-stone-100 [&_section]:p-4">
          <section>
            <h3 className="font-founders-grotesk text-2xl text-stone-900">
              Profiling
            </h3>
            <p className="mt-3 text-stone-600">
              Use React Performance Tracks to see React-specific work alongside
              network activity, JavaScript execution, and the event loop.
            </p>
          </section>

          <section>
            <h3 className="font-founders-grotesk text-2xl text-stone-900">
              Accessibility
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700">
              <li>Keyboard navigation</li>
              <li>Screen reader support</li>
              <li>Automated checks with axe</li>
            </ul>
          </section>

          <section>
            <h3 className="font-founders-grotesk text-2xl text-stone-900">
              CI/CD
            </h3>
            <p className="mt-3 text-stone-600">
              Keep linting, type checking, tests, and builds in pull-request
              validation so architectural mistakes are caught before deploys.
            </p>
          </section>
        </div>

        <CodeWindow
          title="ci.yml"
          language="yml"
          code={ciExample}
          caption="A minimal validation pipeline for pull requests."
        />
      </Slide.Body>

      <Slide.References
        items={[
          {
            href: "https://react.dev/reference/dev-tools/react-performance-tracks",
            label: "react.dev/reference/dev-tools/react-performance-tracks",
          },
          {
            href: "https://nextjs.org/docs/pages/guides/ci-build-caching",
            label: "nextjs.org/docs/pages/guides/ci-build-caching",
          },
        ]}
      />
    </Slide.Root>
  );
}
