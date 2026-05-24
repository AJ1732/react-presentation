import { AnimatedDivider } from "@/components/animated-divider";
import { CodeWindow } from "@/components/code-window";
import { Slide } from "@/components/slide";

const useClientExample = `"use client";

import { useState } from "react";

export function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button onClick={() => setLikes(likes + 1)}>
      Likes: {likes}
    </button>
  );
}`;

const useServerExample = `"use server";

export async function createProduct(formData: FormData) {
  const name = String(formData.get("name"));

  if (!name) {
    throw new Error("Product name is required");
  }

  await db.product.create({
    data: { name },
  });
}`;

export function Slide2() {
  return (
    <Slide.Root className="grid-rows-[auto_1fr_auto] pb-8">
      <Slide.Header className="max-w-full">
        <Slide.Eyebrow>Slide 2</Slide.Eyebrow>
        <Slide.Title className="flex flex-wrap items-center">
          <span className="text-3xl-expand lg:text-5xl-expand rounded-xl bg-stone-100 p-1 pr-1.5 font-mono whitespace-nowrap">
            &quot;use client&quot;
          </span>
          <AnimatedDivider />
          <span className="text-3xl-expand lg:text-5xl-expand ml-auto rounded-xl bg-stone-100 p-1 pr-1.5 font-mono whitespace-nowrap">
            &quot;use server&quot;
          </span>
        </Slide.Title>
      </Slide.Header>

      <Slide.Body className="grid gap-8 py-8">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr className="bg-stone-50">
                <th className="font-founders-grotesk-condensed text-sm-expand px-6 py-4 tracking-[0.18em] text-stone-500 uppercase">
                  Feature
                </th>
                <th className="font-founders-grotesk-condensed text-brand-600 text-sm-expand px-6 py-4 tracking-[0.18em] uppercase">
                  use client
                </th>
                <th className="font-founders-grotesk-condensed text-sm-expand px-6 py-4 tracking-[0.18em] text-orange-600 uppercase">
                  use server
                </th>
              </tr>
            </thead>
            <tbody className="align-top text-stone-700">
              <tr className="border-t border-stone-200">
                <td className="px-6 py-4 font-medium">Purpose</td>
                <td className="px-6 py-4">
                  Marks a component or file to run in the browser.
                </td>
                <td className="px-6 py-4">
                  Marks an async function to run on the server as a Server
                  Action.
                </td>
              </tr>
              <tr className="border-t border-stone-200">
                <td className="px-6 py-4 font-medium">Placement</td>
                <td className="px-6 py-4">Top of the file.</td>
                <td className="px-6 py-4">
                  Top of a file or top of an async function body.
                </td>
              </tr>
              <tr className="border-t border-stone-200">
                <td className="px-6 py-4 font-medium">Capabilities</td>
                <td className="px-6 py-4">
                  Hooks, browser APIs, lifecycle effects, and event handlers.
                </td>
                <td className="px-6 py-4">
                  Database access, auth checks, secrets, and server-side
                  validation.
                </td>
              </tr>
              <tr className="border-t border-stone-200">
                <td className="px-6 py-4 font-medium">Rendering</td>
                <td className="px-6 py-4">
                  Pre-rendered on the server, then hydrated on the client.
                </td>
                <td className="px-6 py-4">
                  Executes only on the server and is invoked from client-side
                  code.
                </td>
              </tr>
              <tr className="border-t border-stone-200">
                <td className="px-6 py-4 font-medium">Mental model</td>
                <td className="px-6 py-4">
                  The interactivity switch for browser-owned UI.
                </td>
                <td className="px-6 py-4">
                  The mutation/security switch for server-owned logic.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <section>
            <h3 className="font-founders-grotesk text-brand-700 text-2xl">
              &quot;use client&quot;
            </h3>
            <p className="mt-3 text-stone-600">
              Use it when a component needs browser-side interactivity.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700">
              <li>`useState`</li>
              <li>`useEffect`</li>
              <li>event handlers</li>
              <li>browser APIs</li>
              <li>client-only libraries</li>
            </ul>
            <p className="my-5 leading-7 text-balance text-stone-600">
              It creates a server-client boundary in the module tree. Everything
              imported into that client subtree becomes part of the client side.
            </p>

            <CodeWindow
              title="like-button.tsx"
              language="tsx"
              code={useClientExample}
              caption="Interactive component rendered in the browser."
              theme={{
                panel: "#eef4ff",
                surface: "#f8fbff",
                border: "rgba(1, 69, 242, 0.12)",
                accent: "#0145f2",
                glow: "rgba(1, 69, 242, 0.18)",
                text: "#0f172a",
                muted: "#64748b",
              }}
            />
          </section>

          <section className="">
            <h3 className="font-founders-grotesk text-2xl text-orange-600">
              &quot;use server&quot;
            </h3>
            <p className="mt-3 text-stone-600">
              Use it for secure server-side actions and mutations.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-700">
              <li>database writes</li>
              <li>auth checks</li>
              <li>secure mutations</li>
              <li>secret/API access</li>
              <li>server-side validation</li>
            </ul>
            <p className="my-5 leading-7 text-balance text-stone-600">
              It marks server-side functions that can be called from client-side
              code, acting as a doorway back to the server.
            </p>

            <CodeWindow
              title="actions.ts"
              language="ts"
              code={useServerExample}
              caption="Server Action for validation and persistence."
              theme={{
                panel: "#fff6ed",
                surface: "#fffaf5",
                border: "rgba(234, 88, 12, 0.14)",
                accent: "#f97316",
                glow: "rgba(249, 115, 22, 0.16)",
                text: "#431407",
                muted: "#9a3412",
              }}
            />
          </section>
        </div>
      </Slide.Body>

      <Slide.References
        items={[
          {
            href: "https://nextjs.org/learn/react-foundations/server-and-client-components",
            label:
              "nextjs.org/learn/react-foundations/server-and-client-components",
          },
          {
            href: "https://nextjs.org/docs/app/getting-started/server-and-client-components",
            label:
              "nextjs.org/docs/app/getting-started/server-and-client-components",
          },
          {
            href: "https://www.reddit.com/r/nextjs/comments/1k0bddg/using_use_server_when_youre_not_supposed_to/",
            label:
              "reddit.com/r/nextjs/comments/1k0bddg/using_use_server_when_youre_not_supposed_to",
          },
        ]}
      />
    </Slide.Root>
  );
}
