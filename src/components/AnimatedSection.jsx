import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer, staticVariants, VIEWPORT } from '../lib/motion'

/**
 * Section wrapper that reveals its children once, on first scroll into view.
 * Children opt into the stagger by using the `fadeUp` / `popIn` variants.
 */
function AnimatedSection({ id, className = '', children }) {
  const reduced = useReducedMotion()

  return (
    <motion.section
      id={id}
      className={`scroll-mt-20 py-20 md:py-28 px-6 ${className}`}
      variants={reduced ? staticVariants : staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      <div className="max-w-5xl mx-auto">{children}</div>
    </motion.section>
  )
}

export default AnimatedSection
