"use client";

import { useState } from "react";
import { buildLogoUrl } from "@/lib/logo";

type BrandLogoProps = {
  name: string;
  domain?: string;
  theme?: "light" | "dark";
  className?: string;
  imgClassName?: string;
};

export default function BrandLogo({
  name,
  domain,
  theme = "light",
  className = "",
  imgClassName = "",
}: BrandLogoProps) {
  const [stage, setStage] = useState<"primary" | "fallback" | "failed">("primary");

  if (!domain || stage === "failed") {
    return (
      <span
        className={`font-sans text-sm tracking-[0.18em] uppercase whitespace-nowrap ${className}`}
      >
        {name}
      </span>
    );
  }

  const activeTheme = stage === "primary" ? theme : theme === "light" ? "dark" : "light";

  return (
    <img
      key={activeTheme}
      src={buildLogoUrl(domain, { type: "logo", theme: activeTheme, width: 320 })}
      alt={name}
      className={`h-full w-auto object-contain ${imgClassName}`}
      loading="lazy"
      onError={() => setStage((s) => (s === "primary" ? "fallback" : "failed"))}
    />
  );
}
