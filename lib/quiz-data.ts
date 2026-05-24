export type QuizQuestion = {
  id: string;
  prompt: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  sourceSlides: number[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "mental-model",
    prompt:
      "Which set of questions best matches the modern React mental model from the presentation?",
    options: [
      "Should this run on the server? Should this run in the browser? Can this stream? Can this be optimized by the compiler?",
      "Should this use Redux? Should this be static? Should this be serverless? Should this be memoized?",
      "Should this use CSS Modules? Should this be client-only? Should this be edge-rendered? Should this be tested?",
      "Should this use context? Should this use local state? Should this use GraphQL? Should this use a monorepo?",
    ],
    correctIndex: 0,
    explanation:
      "The lecture frames modern React architecture around runtime placement, streaming, and compiler optimization.",
    sourceSlides: [1],
  },
  {
    id: "use-client",
    prompt: "When should you add 'use client' to a component file?",
    options: [
      "When the component needs database access or secret keys",
      "When the component needs useState, event handlers, or browser APIs",
      "When the component is rendered inside app/page.tsx",
      "When the component fetches data on the server",
    ],
    correctIndex: 1,
    explanation:
      "'use client' is the browser boundary for interactivity, local state, effects, and browser-only APIs.",
    sourceSlides: [2],
  },
  {
    id: "use-server",
    prompt: "What is the main role of 'use server' in this architecture?",
    options: [
      "It marks an async server function that can handle secure mutations",
      "It turns a whole route into a Server Component tree",
      "It enables client-side hydration for forms",
      "It replaces middleware for auth checks",
    ],
    correctIndex: 0,
    explanation:
      "'use server' marks server-side functions, especially for mutations like writes, auth checks, and validation.",
    sourceSlides: [2, 3],
  },
  {
    id: "mutation-flow",
    prompt:
      "Which step should happen immediately after a Server Action starts in the mutation flow shown in class?",
    options: [
      "Write to DB",
      "Revalidate UI/cache",
      "Validate input",
      "Redirect to the dashboard",
    ],
    correctIndex: 2,
    explanation:
      "The mutation flow is: submit form, run Server Action, validate input, check auth, write to DB, then revalidate.",
    sourceSlides: [3],
  },
  {
    id: "streaming-ssr",
    prompt: "What is the core benefit of streaming SSR?",
    options: [
      "The whole page waits so all content arrives at once",
      "The page shell can appear before the slowest child finishes",
      "It removes the need for Suspense boundaries",
      "It forces all routes to be prerendered at build time",
    ],
    correctIndex: 1,
    explanation:
      "Streaming SSR improves perceived performance by sending ready parts of the page first.",
    sourceSlides: [4],
  },
  {
    id: "suspense-boundaries",
    prompt: "Where should Suspense boundaries usually be placed?",
    options: [
      "Around the entire route by default",
      "Only inside client components",
      "Around slow sections that can load independently",
      "Only around charts and tables",
    ],
    correctIndex: 2,
    explanation:
      "The lecture calls Suspense boundaries performance gates around slow sections, not random wrappers.",
    sourceSlides: [5],
  },
  {
    id: "partial-prerendering",
    prompt:
      "What is the plain-language mental model for partial pre-rendering?",
    options: [
      "Render everything twice and keep the faster result",
      "Pre-render stable parts and resume dynamic parts later",
      "Hydrate everything before sending HTML",
      "Move all personalized UI into client components",
    ],
    correctIndex: 1,
    explanation:
      "Partial pre-rendering serves a stable shell quickly, then resumes postponed dynamic work later.",
    sourceSlides: [6, 7],
  },
  {
    id: "react-compiler",
    prompt: "What problem does React Compiler primarily reduce?",
    options: [
      "Manual memoization noise like useMemo, useCallback, and React.memo",
      "The need for server-side data fetching",
      "The need for middleware and route groups",
      "Bundle size caused by CSS",
    ],
    correctIndex: 0,
    explanation:
      "React Compiler helps with re-render optimization, but it does not solve architecture or data-boundary mistakes.",
    sourceSlides: [8, 9],
  },
  {
    id: "route-groups",
    prompt: "What is true about route groups in the Next.js App Router?",
    options: [
      "They change the public URL path to match the folder name",
      "They organize routes without changing the URL path",
      "They only work inside middleware.ts",
      "They are required for nested layouts",
    ],
    correctIndex: 1,
    explanation:
      "Route groups are for organizing the application and sharing layouts without affecting the URL.",
    sourceSlides: [10, 11],
  },
  {
    id: "middleware",
    prompt: "Which responsibility best fits middleware in the presentation?",
    options: [
      "Rendering dashboard charts",
      "Managing local form state",
      "Redirecting unauthenticated users before the route completes",
      "Replacing server actions for database writes",
    ],
    correctIndex: 2,
    explanation:
      "Middleware shapes the request before UI renders, which makes it a good fit for auth redirects and rewrites.",
    sourceSlides: [12, 15],
  },
];
