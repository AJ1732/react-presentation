"use client";

import { PatternPanel } from "@/components/pattern-panel";
import { Slide } from "@/components/slide";
import { cn } from "@/lib/utils";
import { motion, type Variants } from "motion/react";

const nodeEase = [0.215, 0.61, 0.355, 1] as const;

const nodeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 8,
  },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.22,
      ease: nodeEase,
    },
  }),
};

export function Slide1() {
  return (
    <Slide.Root className="grid-rows-[auto_1fr_auto] pb-8">
      <Slide.Header>
        <Slide.Eyebrow>Slide 1</Slide.Eyebrow>
        <Slide.Title>
          The BIG{" "}
          <motion.span
            className="text-brand-500 inline-block"
            initial={{ x: 4 }}
            whileInView={{ x: 112 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Shift
          </motion.span>
        </Slide.Title>
      </Slide.Header>

      <Slide.Body className="mb-4 flex flex-col p-4 text-stone-600">
        <p className="max-w-xl">
          Modern React is about the where the code runs, when the UI renders,
          and how much JavaScript reaches the browser.
        </p>
        <br />
        <p>Now we ask 4 questions</p>

        <ul className="text-foreground mb-6 list-disc bg-stone-100 p-4 pl-6">
          <li>Should this run on the server?</li>
          <li>Should this run in the browser</li>
          <li>can this stream?</li>
          <li>can this be optimized by the compiler?</li>
        </ul>

        <div className={cn("grid flex-1 grid-cols-2")}>
          <motion.div
            custom={0.85}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={nodeVariants}
            className="origin-center"
            transition={{
              scale: { duration: 0.16, ease: "easeOut" },
              y: { duration: 0.16, ease: "easeOut" },
            }}
          >
            <PatternPanel
              tileSize={16}
              lineColor="#e6ecfe"
              className="border-brand-100 grid aspect-square w-32 place-content-center rounded-full"
            >
              <motion.span
                initial={{ opacity: 0.72, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1.02 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{
                  delay: 1.05,
                  duration: 0.18,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className="text-brand-300"
              >
                Browser
              </motion.span>
            </PatternPanel>
          </motion.div>

          <motion.div
            custom={0.96}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={nodeVariants}
            className="mt-auto ml-auto origin-center"
            transition={{
              scale: { duration: 0.16, ease: "easeOut" },
              y: { duration: 0.16, ease: "easeOut" },
            }}
          >
            <PatternPanel
              tileSize={16}
              lineColor="oklch(95.4% 0.038 75.164)"
              className="mt-auto ml-auto grid aspect-square w-40 place-content-center rounded-full border-orange-200"
            >
              <motion.span
                initial={{ opacity: 0.72, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1.02 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{
                  delay: 1.16,
                  duration: 0.18,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className="text-orange-400"
              >
                Server
              </motion.span>
            </PatternPanel>
          </motion.div>
        </div>
      </Slide.Body>

      <Slide.Footer className="mt-auto flex items-center gap-4 font-light">
        <h3>References</h3>
        <ul className="text-sm-expand flex gap-4 font-mono">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i}>[{i}]</li>
          ))}
        </ul>
      </Slide.Footer>
    </Slide.Root>
  );
}
