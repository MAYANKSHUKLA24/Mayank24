const variants = {
  rings: (
    <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="160" cy="160" r="150" stroke="currentColor" strokeOpacity="0.18" />
      <circle cx="160" cy="160" r="105" stroke="currentColor" strokeOpacity="0.28" />
      <circle cx="160" cy="160" r="60" className="text-royal" stroke="currentColor" strokeOpacity="0.9" strokeWidth="1.5" />
      <circle cx="160" cy="160" r="3" className="text-royal" fill="currentColor" />
      <circle cx="265" cy="95" r="3" className="text-royal" fill="currentColor" />
      <circle cx="60" cy="230" r="2" fill="currentColor" fillOpacity="0.5" />
    </svg>
  ),
  waveform: (
    <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 80 C 40 20, 80 140, 120 80 S 200 20, 240 80 S 320 140, 360 80 S 400 60, 400 80"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1.5"
      />
      <path
        d="M0 100 C 50 150, 90 30, 150 100 S 260 160, 310 90 S 380 40, 400 100"
        className="text-royal"
        stroke="currentColor"
        strokeOpacity="0.8"
        strokeWidth="1.5"
      />
    </svg>
  ),
  grid: (
    <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 6 }).map((_, col) => {
          const isAccent = (row + col) % 7 === 0;
          return (
            <circle
              key={`${row}-${col}`}
              cx={25 + col * 50}
              cy={25 + row * 50}
              r={isAccent ? 4 : 2}
              className={isAccent ? "text-royal" : "text-current"}
              fill="currentColor"
              fillOpacity={isAccent ? 0.9 : 0.15}
            />
          );
        })
      )}
    </svg>
  ),
};

export default function AbstractArt({
  variant = "rings",
  className = "",
}: {
  variant?: keyof typeof variants;
  className?: string;
}) {
  return <div className={className}>{variants[variant]}</div>;
}
