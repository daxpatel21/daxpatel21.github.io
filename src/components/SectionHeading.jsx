import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staticVariants } from '../lib/motion'

/**
 * Section header styled as a memory address label, with a signal trace that
 * draws out to the right edge as the section enters view.
 */
function SectionHeading({ index, title }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className="flex items-center gap-4 mb-10"
      variants={reduced ? staticVariants : fadeUp}
    >
      {/* The 0xNN index and :: separator are decorative numbering — hidden from
          assistive tech so the heading announces just the section name. */}
      <h2 className="font-mono text-2xl md:text-3xl font-bold text-text whitespace-nowrap">
        <span className="text-accent-light" aria-hidden="true">
          0x{index}
        </span>
        <span className="text-text-muted mx-2" aria-hidden="true">
          ::
        </span>
        {title}
      </h2>

      <motion.span
        aria-hidden="true"
        className="h-px flex-1 origin-left bg-gradient-to-r from-accent via-accent/40 to-transparent"
        initial={reduced ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      />
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full bg-accent-light shrink-0"
      />
    </motion.div>
  )
}

export default SectionHeading
