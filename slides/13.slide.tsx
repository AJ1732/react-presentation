import { CodeWindow } from "@/components/code-window";
import { Slide } from "@/components/slide";
import { SlideReferences } from "@/components/slide-references";

const metadataExample = `export default function ProductPage() {
  return (
    <>
      <title>Inventory Dashboard</title>
      <meta
        name="description"
        content="Track products, stock levels, and analytics."
      />
    </>
  );
}`;

export function Slide13() {
  return (
    <Slide.Root className="grid-rows-[auto_1fr_auto] pb-8">
      <Slide.Header>
        <Slide.Eyebrow>Slide 13</Slide.Eyebrow>
        <Slide.Title>Assets and Metadata</Slide.Title>
      </Slide.Header>

      <Slide.Body className="grid gap-8 py-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <section>
            <h3 className="font-founders-grotesk text-2xl text-stone-900">
              Production Concerns
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700">
              <li>Metadata: `&lt;title&gt;`, `&lt;meta&gt;`</li>
              <li>Stylesheets</li>
              <li>Scripts</li>
              <li>Document-level resource ordering</li>
            </ul>
          </section>
        </div>

        <CodeWindow
          title="product-page.tsx"
          language="tsx"
          code={metadataExample}
          caption="React 19 supports rendering document metadata from components."
        />
      </Slide.Body>

      <SlideReferences
        items={[
          {
            href: "https://react.dev/blog/2024/12/05/react-19",
            label: "react.dev/blog/2024/12/05/react-19",
          },
        ]}
      />
    </Slide.Root>
  );
}
