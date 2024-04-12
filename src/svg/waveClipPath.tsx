

export function WaveClipPath() {
  return (
    <svg width="0" height="0">
    <defs>
      <clipPath id="wave" clipPathUnits="objectBoundingBox">
        <path
            d="M 0,0
            L 0,0.95
            C 0.1,0.98 0.3,0.98 0.5,0.95
            C 0.7,0.92 0.9,0.92 1,0.95
            L 1,0
            L 0,0
            Z"
        />
      </clipPath>
    </defs>
  </svg>
  )
}