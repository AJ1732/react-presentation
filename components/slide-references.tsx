import { Slide } from "@/components/slide";

type SlideReference = {
  href: string;
  label: string;
};

type SlideReferencesProps = {
  items: SlideReference[];
};

export function SlideReferences({ items }: SlideReferencesProps) {
  return (
    <Slide.Footer className="mt-auto flex max-w-full flex-col gap-3 font-light sm:flex-row sm:items-start">
      <h3 className="shrink-0">References</h3>
      <ul className="text-sm-expand flex min-w-0 flex-col gap-2 font-mono [&_a]:min-w-0 [&_a]:[overflow-wrap:anywhere] [&_a]:underline-offset-4 [&_a]:hover:underline">
        {items.map((item, index) => (
          <li key={item.href}>
            <a href={item.href} target="_blank" rel="noreferrer">
              [{index}] {item.label}
            </a>
          </li>
        ))}
      </ul>
    </Slide.Footer>
  );
}
