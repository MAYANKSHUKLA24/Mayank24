"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

function parseValue(raw: string): { prefix: string; numeric: number; suffix: string } {
  const match = raw.match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!match) return { prefix: "", numeric: 0, suffix: raw };
  const [, prefix, numStr, suffix] = match;
  return { prefix, numeric: parseFloat(numStr), suffix };
}

export default function AnimatedNumber({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const { prefix, numeric, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const decimals = numeric % 1 !== 0 ? 1 : 0;

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, numeric, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, numeric]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </motion.span>
  );
}
