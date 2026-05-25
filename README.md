# Modern React Architecture Presentation

A slide-based presentation built with Next.js App Router for teaching modern React architecture.

The project contains:

- the presentation deck at `/`
- a multiple-choice class activity quiz at `/quiz`

## Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS v4
- Motion
- Shiki
- TypeScript

## Routes

- `/` - presentation deck
- `/quiz` - 10-question multiple-choice quiz with instant feedback

## Local Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Run linting:

```bash
pnpm lint
```

## Project Structure

```txt
app/
  layout.tsx
  page.tsx
  quiz/
    page.tsx

components/
  quiz/
    quiz-game.tsx
  animated-divider.tsx
  code-window.tsx
  pattern-panel.tsx
  slide.tsx

slides/
  title.slide.tsx
  1.slide.tsx ... 18.slide.tsx
  index.ts

lib/
  quiz-data.ts
  utils.ts

assets/
  fonts/
```

## How It Is Organized

### Presentation

The presentation deck is rendered from `app/page.tsx` using reusable slide primitives from `components/slide.tsx` and individual slide files in `slides/`.

### Quiz

The quiz is a standalone route at `app/quiz/page.tsx`.

- question content lives in `lib/quiz-data.ts`
- interactive quiz state and UI live in `components/quiz/quiz-game.tsx`

## Notes

- The deck uses server-rendered slides by default.
- Small interactive islands are isolated into client components when needed.
- Code examples use Shiki-based syntax highlighting via `components/code-window.tsx`.
