import { cache } from "react";
import type { CSSProperties, ReactNode } from "react";
import type { BundledLanguage, BundledTheme } from "shiki";
import { codeToHtml } from "shiki";

import { cn } from "@/lib/utils";

type CodeWindowTheme = {
  panel: string;
  surface: string;
  border: string;
  accent: string;
  glow: string;
  text: string;
  muted: string;
};

type CodeWindowProps = {
  code: string;
  language: string;
  title?: string;
  caption?: ReactNode;
  showLineNumbers?: boolean;
  className?: string;
  theme?: Partial<CodeWindowTheme>;
  syntaxTheme?: {
    light: BundledTheme;
    dark: BundledTheme;
  };
};

const defaultSyntaxTheme: { light: BundledTheme; dark: BundledTheme } = {
  light: "github-light",
  dark: "github-dark",
};

const defaultTheme: CodeWindowTheme = {
  panel: "#f5f7fb",
  surface: "#fbfcfe",
  border: "rgba(27, 31, 59, 0.12)",
  accent: "#3b82f6",
  glow: "rgba(59, 130, 246, 0.16)",
  text: "#1f2937",
  muted: "#8b95a7",
};

const languageAliases: Record<string, BundledLanguage> = {
  ts: "typescript",
  tsx: "tsx",
  js: "javascript",
  jsx: "jsx",
  html: "html",
  css: "css",
  json: "json",
  shell: "bash",
  sh: "bash",
  yml: "yaml",
};

function normalizeLanguage(language: string) {
  return languageAliases[language.toLowerCase()] ?? "text";
}

const highlightCode = cache(
  async (
    code: string,
    language: BundledLanguage,
    syntaxTheme: { light: BundledTheme; dark: BundledTheme },
  ) => {
    return codeToHtml(code, {
      lang: language,
      theme: syntaxTheme.light,
    });
  },
);

export async function CodeWindow({
  code,
  language,
  title = "editor",
  caption,
  showLineNumbers = true,
  className,
  theme,
  syntaxTheme = defaultSyntaxTheme,
}: CodeWindowProps) {
  const palette = { ...defaultTheme, ...theme };
  const normalizedLanguage = normalizeLanguage(language);
  const lineCount = code.replace(/\n$/, "").split("\n").length;
  const highlighted = await highlightCode(
    code,
    normalizedLanguage,
    syntaxTheme,
  );

  const style = {
    "--code-panel": palette.panel,
    "--code-surface": palette.surface,
    "--code-border": palette.border,
    "--code-accent": palette.accent,
    "--code-glow": palette.glow,
    "--code-text": palette.text,
    "--code-muted": palette.muted,
  } as CSSProperties;

  return (
    <figure
      style={style}
      className={cn(
        "group relative h-fit overflow-hidden rounded-4xl border",
        "border-(--code-border) bg-(--code-panel) text-(--code-text)",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-10 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_70%)]" />

      <div className="relative grid grid-cols-[1fr_auto_1fr] items-center border-b border-(--code-border) px-5 pt-3 pb-2">
        <div className="flex w-fit items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-(--code-accent) shadow-[0_0_18px_var(--code-glow)]" />
          <span className="h-3 w-3 rounded-full bg-[color-mix(in_srgb,var(--code-accent)_60%,white)] opacity-70" />
          <span className="h-3 w-3 rounded-full bg-[color-mix(in_srgb,var(--code-accent)_28%,white)] opacity-55" />
        </div>

        <div className="font-founders-grotesk-condensed text-center text-sm tracking-[0.28em] text-(--code-muted) uppercase">
          {title}
        </div>

        <div className="my-aut ml-auto w-fit rounded-full border border-(--code-border) bg-white/70 px-3 py-1 text-[10px] font-semibold tracking-[0.24em] text-(--code-accent) uppercase">
          {language}
        </div>
      </div>

      <div className="code-window bg-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
        <div className="code-window__body">
          {showLineNumbers ? (
            <div className="code-window__gutter" aria-hidden="true">
              {Array.from({ length: lineCount }, (_, index) => (
                <span key={index} className="code-window__line-number">
                  {index + 1}
                </span>
              ))}
            </div>
          ) : null}

          <div
            className="code-window__scroll overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: highlighted }}
          />
        </div>
      </div>

      {caption ? (
        <figcaption className="border-t border-(--code-border) px-5 py-4 text-sm text-(--code-muted)">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
