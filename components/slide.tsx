import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SlideRootProps = ComponentProps<"section">;
type SlideSlotProps = ComponentProps<"div">;
type SlideTextProps = ComponentProps<"p">;
type SlideTitleProps = ComponentProps<"h2">;
type SlideReference = {
  href: string;
  label: string;
};
type SlideReferencesProps = {
  items: SlideReference[];
};

function Root({ className, ...props }: SlideRootProps) {
  return (
    <section
      className={cn(
        "content-grid min-h-dvh snap-start place-content-start py-16",
        className,
      )}
      {...props}
    />
  );
}

function Header({ className, ...props }: SlideSlotProps) {
  return <header className={cn("max-w-3xl", className)} {...props} />;
}

function Eyebrow({ className, ...props }: SlideTextProps) {
  return (
    <p
      className={cn(
        "font-founders-grotesk-condensed text-sm-expand tracking-[0.2em] text-stone-500 uppercase",
        className,
      )}
      {...props}
    />
  );
}

function Title({ className, ...props }: SlideTitleProps) {
  return (
    <h2
      className={cn(
        "font-founders-grotesk mt-4 text-5xl leading-none tracking-[-0.04em] sm:text-7xl",
        className,
      )}
      {...props}
    />
  );
}

function Body({ className, ...props }: SlideSlotProps) {
  return <article className={className} {...props} />;
}

function Footer({ className, ...props }: SlideSlotProps) {
  return <footer className={className} {...props} />;
}

function References({ items }: SlideReferencesProps) {
  return (
    <Footer className="mt-auto flex max-w-full flex-col gap-3 font-light sm:flex-row sm:items-start">
      <h3 className="shrink-0">References</h3>
      <ul className="text-sm-expand flex min-w-0 flex-col gap-2 font-mono [&_a]:min-w-0 [&_a]:underline-offset-4 [&_a]:[wrap:anywhere] [&_a]:hover:underline">
        {items.map((item, index) => (
          <li key={item.href}>
            <a href={item.href} target="_blank" rel="noreferrer">
              <span className="text-brand-500">[{index}]</span> {item.label}
            </a>
          </li>
        ))}
      </ul>
    </Footer>
  );
}

export const Slide = {
  Root,
  Header,
  Eyebrow,
  Title,
  Body,
  Footer,
  References,
};
