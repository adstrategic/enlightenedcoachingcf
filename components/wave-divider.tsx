type WaveDividerProps = {
  fill?: string;
  /** Brand yellow rim peeking above the wave. Default true. */
  accent?: boolean;
  flip?: boolean;
  className?: string;
};

const WAVE =
  "M0,32 C240,48 480,0 720,16 C960,32 1200,48 1440,24 L1440,48 L0,48 Z";

export function WaveDivider({
  fill = "var(--bg)",
  accent = true,
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`pointer-events-none leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className="block h-[clamp(1.75rem,4.5vw,3.25rem)] w-full"
      >
        {accent ? (
          <path
            fill="var(--brand-yellow)"
            d="M0,24 C240,40 480,-8 720,8 C960,24 1200,40 1440,16 L1440,56 L0,56 Z"
          />
        ) : null}
        <path fill={fill} d={WAVE} />
      </svg>
    </div>
  );
}
