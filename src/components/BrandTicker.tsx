import { tickerBrands } from "@/data/brands";
import BrandLogo from "./BrandLogo";

export default function BrandTicker() {
  const sequence = [...tickerBrands, ...tickerBrands];

  return (
    <div className="dark-section border-y border-off-white/10 py-7 overflow-hidden">
      <div className="flex w-max animate-[ticker_48s_linear_infinite] items-center gap-10">
        {sequence.map((brand, i) => (
          <div key={`${brand.name}-${i}`} className="flex items-center gap-10 shrink-0">
            <div className="h-7 flex items-center opacity-90 grayscale hover:grayscale-0 transition-[filter]">
              <BrandLogo name={brand.name} domain={brand.domain} theme="dark" imgClassName="h-7" />
            </div>
            <span className="text-royal-soft/50 text-sm" aria-hidden>
              →
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
