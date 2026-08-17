// Shared motion variants. Everything animates transform/opacity only, so the
// compositor can handle it without layout thrash.

export const EASE_OUT = [0.22, 1, 0.36, 1]

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.055, delayChildren: 0.08 },
  },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45, ease: EASE_OUT } },
}

export const popIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.32, ease: EASE_OUT },
  },
}

// Applied when the visitor prefers reduced motion: no movement, no delay.
export const staticVariants = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0 } },
}

export const VIEWPORT = { once: true, amount: 0.2 }
