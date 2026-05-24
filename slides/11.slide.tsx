import { CodeWindow } from "@/components/code-window";
import { Slide } from "@/components/slide";

const dashboardLayoutExample = `export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Sidebar />
      <main>{children}</main>
    </section>
  );
}`;

const routeGroupTree = `app/
  (marketing)/
    page.tsx
  (dashboard)/
    dashboard/
      page.tsx`;

export function Slide11() {
  return (
    <Slide.Root className="grid-rows-[auto_1fr_auto] pb-8">
      <Slide.Header>
        <Slide.Eyebrow>Slide 11</Slide.Eyebrow>
        <Slide.Title>Layouts, Loading States, and Route Groups</Slide.Title>
      </Slide.Header>

      <Slide.Body className="grid gap-8 py-8">
        <p className="max-w-3xl text-stone-600">
          Layouts define what persists across navigation. Route groups organize
          sections of the app without affecting the URL path.
        </p>

        <div className="grid gap-6 xl:grid-cols-2">
          <CodeWindow
            title="app/(dashboard)/layout.tsx"
            language="tsx"
            code={dashboardLayoutExample}
            caption="A layout wraps a route section and keeps shared UI in place."
          />
          <CodeWindow
            title="route-groups.txt"
            language="text"
            code={routeGroupTree}
            caption="Route groups organize the app for humans, not URLs."
          />
        </div>
      </Slide.Body>

      <Slide.References
        items={[
          {
            href: "https://nextjs.org/docs/app/getting-started/layouts-and-pages",
            label: "nextjs.org/docs/app/getting-started/layouts-and-pages",
          },
          {
            href: "https://nextjs.org/docs/14/app/building-your-application/routing/route-groups",
            label: "nextjs.org/docs/14/app/building-your-application/routing/route-groups",
          },
        ]}
      />
    </Slide.Root>
  );
}
