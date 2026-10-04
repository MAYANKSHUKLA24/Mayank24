"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
};

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * strength, y: y * strength });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  const motionProps = {
    animate: { x: pos.x, y: pos.y },
    transition: { type: "spring" as const, stiffness: 150, damping: 12, mass: 0.2 },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className,
  };

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
