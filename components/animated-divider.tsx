"use client";

import { motion } from "motion/react";

export function AnimatedDivider() {
  return (
    <motion.div
      className="bg-brand-500 flex1 my-1 h-0.5 w-full"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
      style={{ transformOrigin: "left center" }}
    />
  );
}
