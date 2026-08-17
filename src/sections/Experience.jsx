import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import TerminalWindow from '../components/TerminalWindow'
import { fadeUp, staticVariants } from '../lib/motion'
import { MapPin } from 'lucide-react'

const PHASES = [
  {
    stamp: '12.480032',
    range: 'Dec 2025 – Feb 2026',
    text: 'Completed structured C, Linux kernel internals, device driver models, and BSP training',
  },
  {
    stamp: '48.221904',
    range: 'Feb 2026 – Jun 2026',
    text: 'Executed Linux display pipeline bring-up project on AMD ZCU102',
  },
  {
    stamp: '96.774610',
    range: 'Jun 2026 – Present',
    text: 'Transitioned to Multimedia team, focusing on GStreamer and multimedia pipeline integration',
    live: true,
  },
]

function Experience() {
  const reduced = useReducedMotion()
  const item = reduced ? staticVariants : fadeUp

  return (
    <AnimatedSection id="experience" className="bg-surface/40">
      <SectionHeading index="02" title="experience" />

      <motion.div variants={item}>
        <TerminalWindow title="dmesg | grep career">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-7">
            <h3 className="font-semibold text-text">
              Intern, System Software
              <span className="text-text-muted font-normal"> @ MosChip</span>
            </h3>
            <p className="flex items-center gap-1.5 font-mono text-xs text-text-muted">
              <MapPin size={13} aria-hidden="true" />
              Ahmedabad, India
            </p>
          </div>

          <ol className="relative space-y-7">
            {/* vertical bus line */}
            <span
              aria-hidden="true"
              className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-border to-transparent"
            />

            {PHASES.map((phase) => (
              <motion.li key={phase.range} variants={item} className="relative pl-7">
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-bg ${
                    phase.live ? 'bg-led text-led led-live' : 'bg-accent-light'
                  }`}
                />
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
                  <span className="font-mono text-[11px] text-accent-dim">
                    [{phase.stamp}]
                  </span>
                  <span className="font-mono text-sm text-accent-light">
                    {phase.range}
                  </span>
                  {phase.live && (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-led border border-led/30 rounded px-1.5 py-0.5">
                      active
                    </span>
                  )}
                </div>
                <p className="text-text-muted leading-relaxed">{phase.text}</p>
              </motion.li>
            ))}
          </ol>
        </TerminalWindow>
      </motion.div>
    </AnimatedSection>
  )
}

export default Experience
