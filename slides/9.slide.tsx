import { CodeWindow } from "@/components/code-window";
import { Slide } from "@/components/slide";

const compilerConfigExample = `// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;`;

export function Slide9() {
  return (
    <Slide.Root className="grid-rows-[auto_1fr_auto] pb-8">
      <Slide.Header>
        <Slide.Eyebrow>Slide 9</Slide.Eyebrow>
        <Slide.Title>React Compiler: Opt-in and Limits</Slide.Title>
      </Slide.Header>

      <Slide.Body className="grid gap-8 py-8 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <CodeWindow
          title="next.config.ts"
          language="ts"
          code={compilerConfigExample}
          caption="One way to enable the compiler in a Next.js app."
        />

        <div className="grid gap-6">
          <div className="bg-stone-100 p-4 pb-3">
            <h3 className="font-founders-grotesk text-2xl text-stone-900">
              Compiler Helps With
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-stone-700">
              <li>Re-render optimization</li>
              <li>Automatic memoization</li>
              <li>Less manual performance code</li>
            </ul>
          </div>

          <div>
            <h3 className="font-founders-grotesk text-2xl text-stone-900">
              Compiler <span className="text-red-500">Does Not</span> Fix
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-stone-700">
              <li>Bad data fetching</li>
              <li>Too much client JavaScript</li>
              <li>Poor component boundaries</li>
              <li>Slow APIs</li>
              <li>Inaccessible UI</li>
            </ul>
          </div>
        </div>
      </Slide.Body>

      <Slide.References
        items={[
          {
            href: "https://react.dev/learn/react-compiler",
            label: "react.dev/learn/react-compiler",
          },
        ]}
      />
    </Slide.Root>
  );
}
