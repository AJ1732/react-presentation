import { CodeWindow } from "@/components/code-window";
import { Slide } from "@/components/slide";

const beforeCompilerExample = `const ProductCard = memo(function ProductCard({ product }) {
  const price = useMemo(() => {
    return formatPrice(product.price);
  }, [product.price]);

  return <p>{price}</p>;
});`;

const compilerMindsetExample = `function ProductCard({ product }) {
  const price = formatPrice(product.price);

  return <p>{price}</p>;
}`;

export function Slide8() {
  return (
    <Slide.Root className="grid-rows-[auto_1fr_auto] pb-8">
      <Slide.Header>
        <Slide.Eyebrow>Slide 8</Slide.Eyebrow>
        <Slide.Title>React Compiler: What It Does</Slide.Title>
      </Slide.Header>

      <Slide.Body className="grid gap-8 py-8">
        <p className="max-w-3xl text-stone-600">
          React Compiler reduces some manual memoization work. The main shift is
          from hand-optimizing obvious re-renders toward writing clearer code
          and letting the compiler remove some noise.
        </p>

        <div className="grid gap-6 xl:grid-cols-2">
          <CodeWindow
            title="before-compiler.tsx"
            language="tsx"
            code={beforeCompilerExample}
            caption="Manual memoization and optimization scaffolding."
          />
          <CodeWindow
            title="compiler-mindset.tsx"
            language="tsx"
            code={compilerMindsetExample}
            caption="Cleaner component code when the compiler handles optimization."
          />
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
