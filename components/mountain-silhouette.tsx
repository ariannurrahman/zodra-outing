/** Mountain silhouette for nature/adventure feel (matches CTA banner). */
export function MountainSilhouette() {
  return (
    <svg
      className="absolute bottom-0 left-0 right-0 h-24 w-full text-emerald-900/30 sm:h-32"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M0 120 L0 60 L150 100 L300 40 L450 80 L600 20 L750 70 L900 35 L1050 60 L1200 50 L1200 120 Z"
      />
      <path
        fill="currentColor"
        opacity="0.7"
        d="M0 120 L0 80 L200 100 L400 60 L600 90 L800 50 L1000 70 L1200 60 L1200 120 Z"
      />
    </svg>
  );
}
