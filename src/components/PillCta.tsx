import Link from "next/link";
import type { ReactNode } from "react";

type PillCtaProps = {
  href: string;
  children: ReactNode;
  variant?: "light" | "dark" | "royal" | "outline";
  className?: string;
};

const variants = {
  light: "bg-off-white text-black",
  dark: "bg-transparent text-off-white border border-off-white/30",
  royal: "bg-royal text-off-white",
  outline: "bg-transparent text-black border border-black/15",
};

const circleVariants = {
  light: "bg-black text-off-white",
  dark: "bg-off-white/10 text-off-white",
  royal: "bg-off-white text-royal",
  outline: "bg-black text-off-white",
};

export default function PillCta({ href, children, variant = "light", className = "" }: PillCtaProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`pill-btn group ${variants[variant]} hover:opacity-85 ${className}`}
    >
      <span className="text-sm font-medium">{children}</span>
      <span
        className={`circle-btn h-9 w-9 ${circleVariants[variant]} group-hover:rotate-45`}
      >
        ↗
      </span>
    </Link>
  );
}
