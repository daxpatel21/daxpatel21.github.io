import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin data-bus style progress bar pinned above the nav. */
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 40,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 inset-x-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-accent via-accent-bright to-signal"
    />
  )
}

export default ScrollProgress
