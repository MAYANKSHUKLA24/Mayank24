import Reveal from "./Reveal";

export default function SectionHeader({
  index,
  title,
  dark = false,
  className = "",
}: {
  index: string;
  title: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <div
        className={`section-rule ${dark ? "text-off-white" : "text-black"}`}
      >
        <span className="text-eyebrow text-xs shrink-0 text-royal">[{index}]</span>
        <span className="text-eyebrow text-sm sm:text-base flex-1">{title}</span>
        <span
          className={`circle-btn h-9 w-9 border ${
            dark ? "border-off-white/25 text-off-white" : "border-black/20 text-black"
          }`}
          aria-hidden
        >
          ↗
        </span>
      </div>
    </Reveal>
  );
}
