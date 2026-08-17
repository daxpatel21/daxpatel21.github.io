import { useEffect, useRef, useState } from 'react'

/**
 * Decorative PCB routing behind the hero. Traces use 45° bends like real
 * board layout; a short bright dash travels each route as a "data pulse".
 *
 * Every path carries pathLength="1" so the dash pattern in CSS is normalized
 * and independent of the actual geometry length.
 */

const TRACES = [
  { d: 'M -20 96 H 214 L 274 156 H 520 L 572 104 H 792', dur: 9, delay: 0 },
  { d: 'M 1460 168 H 1246 L 1186 228 H 942 L 892 178 H 700', dur: 11, delay: 2.4 },
  { d: 'M -20 306 H 118 L 188 376 H 392 L 442 426 H 618', dur: 10, delay: 1.2 },
  { d: 'M 1460 486 H 1292 L 1232 426 H 1014 L 964 476 H 742', dur: 12, delay: 3.6 },
  { d: 'M 64 920 V 764 L 134 694 H 356 L 416 754 H 648', dur: 10.5, delay: 4.8 },
  { d: 'M 1384 920 V 706 L 1314 636 H 1082 L 1022 696 H 828', dur: 9.5, delay: 1.8 },
  { d: 'M -20 628 H 184 L 244 568 H 438', dur: 8, delay: 6 },
]

const VIAS = [
  { cx: 214, cy: 96 },
  { cx: 520, cy: 156 },
  { cx: 1246, cy: 168 },
  { cx: 942, cy: 228 },
  { cx: 188, cy: 376 },
  { cx: 618, cy: 426 },
  { cx: 1292, cy: 486 },
  { cx: 1014, cy: 426 },
  { cx: 134, cy: 694 },
  { cx: 648, cy: 754 },
  { cx: 1314, cy: 636 },
  { cx: 828, cy: 696 },
  { cx: 244, cy: 568 },
]

function CircuitTraces() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none ${
        visible ? '' : 'traces-idle'
      }`}
      style={{
        maskImage:
          'radial-gradient(ellipse 75% 65% at 50% 45%, transparent 30%, #000 78%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 75% 65% at 50% 45%, transparent 30%, #000 78%)',
      }}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* base copper */}
        <g
          stroke="var(--color-accent)"
          strokeWidth="1.25"
          strokeOpacity="0.16"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {TRACES.map((trace) => (
            <path key={`base-${trace.d}`} d={trace.d} />
          ))}
        </g>

        {/* vias / pads */}
        <g fill="var(--color-bg)" stroke="var(--color-accent)" strokeOpacity="0.28">
          {VIAS.map((via, i) => (
            <circle
              key={`via-${via.cx}-${via.cy}`}
              cx={via.cx}
              cy={via.cy}
              r="3.5"
              strokeWidth="1.25"
              className="via-breathe"
              style={{
                '--via-dur': `${4.5 + (i % 4)}s`,
                '--via-delay': `${(i % 5) * 0.9}s`,
              }}
            />
          ))}
        </g>

        {/* travelling data pulses — wide soft pass + narrow bright core */}
        <g strokeLinecap="round" strokeLinejoin="round" fill="none">
          {TRACES.map((trace) => (
            <path
              key={`glow-${trace.d}`}
              d={trace.d}
              pathLength="1"
              stroke="var(--color-accent-bright)"
              strokeOpacity="0.28"
              strokeWidth="4"
              className="trace-pulse"
              style={{
                '--trace-dur': `${trace.dur}s`,
                '--trace-delay': `${trace.delay}s`,
              }}
            />
          ))}
          {TRACES.map((trace) => (
            <path
              key={`core-${trace.d}`}
              d={trace.d}
              pathLength="1"
              stroke="var(--color-signal)"
              strokeOpacity="0.85"
              strokeWidth="1.5"
              className="trace-pulse"
              style={{
                '--trace-dur': `${trace.dur}s`,
                '--trace-delay': `${trace.delay}s`,
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  )
}

export default CircuitTraces
