import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import { fadeUp, staticVariants } from '../lib/motion'
import { Award } from 'lucide-react'

const CERTIFICATIONS = [
  { title: 'Digital Design with Verilog', issuer: 'NPTEL' },
  {
    title: 'Digital System Design and Verification using CPLD Board (Krypton)',
    issuer: 'NPTEL',
  },
]

function Certifications() {
  const reduced = useReducedMotion()

  return (
    <AnimatedSection id="certifications" className="bg-surface/40">
      <SectionHeading index="06" title="certifications" />

      <ul className="grid sm:grid-cols-2 gap-5">
        {CERTIFICATIONS.map((cert) => (
          <motion.li
            key={cert.title}
            variants={reduced ? staticVariants : fadeUp}
            className="card-glow rounded-lg border border-border bg-surface/70 p-6 flex gap-4"
          >
            <span
              className="flex items-center justify-center h-10 w-10 rounded-md border border-accent/30 bg-accent/10 shrink-0"
              aria-hidden="true"
            >
              <Award size={19} className="text-accent-light" />
            </span>
            <div>
              <h3 className="font-semibold text-text leading-snug">{cert.title}</h3>
              <p className="font-mono text-xs text-text-muted mt-2">{cert.issuer}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </AnimatedSection>
  )
}

export default Certifications
