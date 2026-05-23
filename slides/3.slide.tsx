import { CodeWindow } from "@/components/code-window";
import { Slide } from "@/components/slide";
import { SlideReferences } from "@/components/slide-references";

const mutationFlow = `User submits form
→ Server Action runs
→ Validate input
→ Check auth
→ Write to DB
→ Revalidate UI/cache`;

const formExample = `import { createProduct } from "./actions";

export function ProductForm() {
  return (
    <form action={createProduct}>
      <input name="name" placeholder="Product name" />
      <button type="submit">Create</button>
    </form>
  );
}`;

export function Slide3() {
  return (
    <Slide.Root className="grid-rows-[auto_1fr_auto] pb-8">
      <Slide.Header>
        <Slide.Eyebrow>Slide 3</Slide.Eyebrow>
        <Slide.Title>Server Actions and Mutations</Slide.Title>
      </Slide.Header>

      <Slide.Body className="grid gap-8 py-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="space-y-6">
          <p className="max-w-2xl text-stone-600">
            Server Actions let forms and client interactions call server-side
            mutation logic. In practice, the mutation starts in the browser,
            crosses the server boundary, then moves through validation,
            authorization, persistence, and revalidation.
          </p>

          <section>
            <h3 className="font-founders-grotesk text-2xl text-stone-900">
              Mutation Flow
            </h3>
            <pre className="text-sm-expand mt-4 overflow-x-auto font-mono leading-8 text-stone-700">
              <code>{mutationFlow}</code>
            </pre>
          </section>

          <section>
            <h3 className="font-founders-grotesk text-2xl text-stone-900">
              Key Point
            </h3>
            <p className="mt-3 text-stone-600">
              React 19 improves async action handling for pending states,
              errors, forms, and optimistic updates, so the mutation model is
              cleaner than wiring every form through a separate API route by
              hand.
            </p>
          </section>
        </div>

        <CodeWindow
          title="product-form.tsx"
          language="tsx"
          code={formExample}
          caption="A form calling a Server Action through the action prop."
        />
      </Slide.Body>

      <SlideReferences
        items={[
          {
            href: "https://react.dev/reference/rsc/use-server",
            label: "react.dev/reference/rsc/use-server",
          },
          {
            href: "https://react.dev/blog/2024/12/05/react-19",
            label: "react.dev/blog/2024/12/05/react-19",
          },
        ]}
      />
    </Slide.Root>
  );
}
