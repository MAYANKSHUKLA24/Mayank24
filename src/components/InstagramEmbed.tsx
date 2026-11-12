"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstagramEmbed({ url, className = "" }: { url: string; className?: string }) {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div
      className={`relative aspect-[9/16] w-full overflow-y-auto overflow-x-hidden rounded-xl bg-black ${className}`}
    >
      <div className="flex min-h-full items-center justify-center">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{ margin: 0, width: "100%" }}
        />
      </div>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => window.instgrm?.Embeds.process()}
        onReady={() => window.instgrm?.Embeds.process()}
      />
    </div>
  );
}
