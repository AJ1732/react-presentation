import { CodeWindow } from "@/components/code-window";
import { Slide } from "@/components/slide";

const middlewareExample = `import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("session")?.value;
  const isDashboard = request.nextUrl.pathname.startsWith("/dashboard");

  if (isDashboard && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};`;

export function Slide12() {
  return (
    <Slide.Root className="grid-rows-[auto_1fr_auto] pb-8">
      <Slide.Header>
        <Slide.Eyebrow>Slide 12</Slide.Eyebrow>
        <Slide.Title>Middleware</Slide.Title>
      </Slide.Header>

      <Slide.Body className="grid gap-8 py-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <CodeWindow
          title="middleware.ts"
          language="ts"
          code={middlewareExample}
          caption="A simple auth redirect before the dashboard route resolves."
        />

        <div className="h-fit bg-stone-100 p-4 pb-3">
          <h3 className="font-founders-grotesk text-2xl text-stone-900">
            What Middleware Shapes
          </h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700">
            <li>Redirects</li>
            <li>Rewrites</li>
            <li>Headers</li>
            <li>Auth entry checks</li>
          </ul>
        </div>
      </Slide.Body>

      <Slide.References
        items={[
          {
            href: "https://nextjs.org/docs/14/app/building-your-application/routing/middleware",
            label:
              "nextjs.org/docs/14/app/building-your-application/routing/middleware",
          },
        ]}
      />
    </Slide.Root>
  );
}
