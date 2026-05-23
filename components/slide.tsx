import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SlideRootProps = ComponentProps<"section">;
type SlideSlotProps = ComponentProps<"div">;
type SlideTextProps = ComponentProps<"p">;
type SlideTitleProps = ComponentProps<"h2">;

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
        "font-founders-grotesk-condensed text-sm tracking-[0.2em] text-stone-500 uppercase",
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

export const Slide = {
  Root,
  Header,
  Eyebrow,
  Title,
  Body,
  Footer,
};
