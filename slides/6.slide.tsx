import { Slide } from "@/components/slide";

export function Slide6() {
  return (
    <Slide.Root className="grid-rows-[auto_1fr_auto] pb-8">
      <Slide.Header>
        <Slide.Eyebrow>Slide 6</Slide.Eyebrow>
        <Slide.Title>Partial Pre-rendering</Slide.Title>
      </Slide.Header>

      <Slide.Body className="grid gap-8 py-8 xl:grid-cols-2">
        <section>
          <h3 className="font-founders-grotesk text-2xl text-stone-900">
            Mental Model
          </h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700">
            <li>Pre-render stable parts</li>
            <li>Postpone dynamic parts</li>
            <li>Serve the shell quickly</li>
            <li>Resume rendering later</li>
          </ul>
        </section>

        <section>
          <h3 className="font-founders-grotesk text-2xl text-stone-900">
            Good Fits
          </h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700">
            <li>Dashboards</li>
            <li>E-commerce pages</li>
            <li>Marketing pages</li>
            <li>Personalized sections</li>
          </ul>
        </section>
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
