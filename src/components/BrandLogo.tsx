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
  const [failed, setFailed] = useState(!domain);

  if (failed || !domain) {
    return (
      <span
        className={`font-sans text-sm tracking-[0.18em] uppercase whitespace-nowrap ${className}`}
      >
        {name}
      </span>
    );
  }

  return (
    <img
      src={buildLogoUrl(domain, { type: "logo", theme, width: 320 })}
      alt={name}
      className={`h-full w-auto object-contain ${imgClassName}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
