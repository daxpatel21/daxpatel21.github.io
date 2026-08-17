import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import { fadeUp, staticVariants } from '../lib/motion'
import { GraduationCap } from 'lucide-react'

function Education() {
  const reduced = useReducedMotion()

  return (
    <AnimatedSection id="education">
      <SectionHeading index="05" title="education" />

      <motion.div
        variants={reduced ? staticVariants : fadeUp}
        className="card-glow rounded-lg border border-border bg-surface/70 p-6 md:p-7 flex gap-5"
      >
        <span
          className="flex items-center justify-center h-11 w-11 rounded-md border border-accent/30 bg-accent/10 shrink-0"
          aria-hidden="true"
        >
          <GraduationCap size={22} className="text-accent-light" />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-text leading-snug">
            B.Tech, Electronics &amp; Communication Engineering
          </h3>
          <p className="text-text-muted mt-1">Dharmsinh Desai University, Nadiad</p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-4 font-mono text-xs">
            <span className="text-text-muted">May 2026</span>
            <span className="text-border-bright" aria-hidden="true">
              |
            </span>
            <span className="text-accent-light">CGPA 8.47 / 10</span>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

export default Education
