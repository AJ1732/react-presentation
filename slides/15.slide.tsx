import { Slide } from "@/components/slide";
import { SlideReferences } from "@/components/slide-references";

export function Slide15() {
  return (
    <Slide.Root className="grid-rows-[auto_1fr_auto] pb-8">
      <Slide.Header>
        <Slide.Eyebrow>Slide 15</Slide.Eyebrow>
        <Slide.Title>Scale: Monorepo or Micro-frontends?</Slide.Title>
      </Slide.Header>

      <Slide.Body className="grid gap-8 py-8">
        <p className="max-w-3xl text-stone-600">
          Scaling React architecture is not only about components and routes. It
          is also about how teams share code, coordinate releases, and split
          ownership.
        </p>

        <section className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr className="bg-stone-50">
                <th className="font-founders-grotesk-condensed text-sm-expand px-5 py-4 tracking-[0.18em] text-stone-500 uppercase">
                  Decision
                </th>
                <th className="font-founders-grotesk-condensed text-sm-expand px-5 py-4 tracking-[0.18em] text-stone-500 uppercase">
                  Monorepo
                </th>
                <th className="font-founders-grotesk-condensed text-sm-expand px-5 py-4 tracking-[0.18em] text-stone-500 uppercase">
                  Micro-frontends
                </th>
              </tr>
            </thead>
            <tbody className="align-top text-stone-700">
              <tr className="border-t border-stone-200">
                <td className="px-5 py-4 font-medium">Best for</td>
                <td className="px-5 py-4">
                  Shared UI packages and coordinated teams
                </td>
                <td className="px-5 py-4">
                  Independently deployed product surfaces
                </td>
              </tr>
              <tr className="border-t border-stone-200">
                <td className="px-5 py-4 font-medium">Tradeoff</td>
                <td className="px-5 py-4">
                  More centralized tooling and coordination
                </td>
                <td className="px-5 py-4">
                  More deployment flexibility, more integration complexity
                </td>
              </tr>
              <tr className="border-t border-stone-200">
                <td className="px-5 py-4 font-medium">Class default</td>
                <td className="px-5 py-4">Shared UI package in a monorepo</td>
                <td className="px-5 py-4">
                  Use only when independent deployment is worth the cost
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </Slide.Body>

      <SlideReferences
        items={[
          {
            href: "https://vercel.com/docs/microfrontends",
            label: "vercel.com/docs/microfrontends",
          },
        ]}
      />
    </Slide.Root>
  );
}
