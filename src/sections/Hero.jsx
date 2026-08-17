import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Download, ChevronRight } from 'lucide-react'
import TerminalWindow from '../components/TerminalWindow'
import CircuitTraces from '../components/CircuitTraces'

const BOOT_LINES = [
  'Booting Linux on physical CPU 0x0',
  'Linux version 6.6.0-xilinx-zynqmp (aarch64)',
  'DDR ECC: 4096 MB @ 0x00000000 initialised',
  'zynqmp-display fd4a0000.display: DRM device registered',
  'riscv-subsystem: soft-core online @ 100 MHz',
  'hdmi-tx: link training complete — 1920x1080@60',
  'init: mounting rootfs ... done',
]

const TIMESTAMPS = [
  '0.000000',
  '0.104512',
  '0.184320',
  '0.291840',
  '0.412160',
  '0.508928',
  '0.612352',
]

// Boot lines, then: name, tagline, subline, actions.
const REVEAL_STEPS = BOOT_LINES.length + 4
const IDX_NAME = BOOT_LINES.length
const IDX_TAGLINE = IDX_NAME + 1
const IDX_SUBLINE = IDX_TAGLINE + 1
const IDX_ACTIONS = IDX_SUBLINE + 1

function Hero() {
  const reduced = useReducedMotion()
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (reduced) {
      setStep(REVEAL_STEPS)
      return
    }
    if (step >= REVEAL_STEPS) return

    const delay = step < BOOT_LINES.length ? 95 : 230
    const timer = setTimeout(() => setStep((prev) => prev + 1), delay)
    return () => clearTimeout(timer)
  }, [step, reduced])

  const shown = (index) => step > index
  const booted = step >= REVEAL_STEPS

  const reveal = (index) => ({
    initial: reduced ? false : { opacity: 0, y: 8 },
    animate: shown(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 },
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20"
    >
      <CircuitTraces />

      <div className="relative z-10 w-full max-w-3xl">
        <TerminalWindow title="dax@zcu102: ~/portfolio — serial console">
          {/* Kernel boot log */}
          <div className="font-mono text-[11px] sm:text-xs leading-relaxed space-y-0.5">
            {BOOT_LINES.map((line, i) => (
              <motion.p key={line} {...reveal(i)} className="text-text-muted">
                <span className="text-accent-dim">
                  [{TIMESTAMPS[i].padStart(11, ' ')}]
                </span>{' '}
                {line}
              </motion.p>
            ))}
          </div>

          {/* whoami */}
          <motion.div {...reveal(IDX_NAME)} className="mt-6">
            <p className="font-mono text-xs sm:text-sm text-text-muted mb-3">
              <span className="text-led">dax@zcu102</span>
              <span className="text-text-muted">:</span>
              <span className="text-accent-light">~</span>
              <span className="text-text-muted">$ </span>
              <span className="text-text">whoami</span>
            </p>
            <h1 className="font-mono text-3xl sm:text-5xl md:text-6xl font-bold text-text tracking-tight">
              Dax Patel
            </h1>
          </motion.div>

          <motion.p
            {...reveal(IDX_TAGLINE)}
            className="font-mono text-xs sm:text-base text-accent-light mt-3"
          >
            Embedded Software Engineer
            <span className="text-text-muted mx-1.5">|</span>
            Embedded Linux
            <span className="text-text-muted mx-1.5">|</span>
            System Software
          </motion.p>

          {/* cat ./about */}
          <motion.div {...reveal(IDX_SUBLINE)} className="mt-6">
            <p className="font-mono text-xs sm:text-sm text-text-muted mb-2">
              <span className="text-led">dax@zcu102</span>
              <span className="text-text-muted">:</span>
              <span className="text-accent-light">~</span>
              <span className="text-text-muted">$ </span>
              <span className="text-text">cat ./mission.txt</span>
            </p>
            <p className="text-text-muted leading-relaxed max-w-2xl text-sm sm:text-base">
              Building the bridge between silicon and software — Linux kernel, device
              drivers, and hardware bring-up on real FPGA/SoC platforms.
            </p>
          </motion.div>

          {/* live prompt */}
          <p className="font-mono text-xs sm:text-sm text-text-muted mt-6">
            <span className="text-led">dax@zcu102</span>
            <span className="text-text-muted">:</span>
            <span className="text-accent-light">~</span>
            <span className="text-text-muted">$ </span>
            {booted && <span className="caret" aria-hidden="true" />}
          </p>
        </TerminalWindow>

        {/* Actions */}
        <motion.div
          {...reveal(IDX_ACTIONS)}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-8"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent-light transition-colors"
          >
            View Projects
            <ChevronRight
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="resume.pdf"
            download="Dax_Patel_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-border text-text font-medium hover:border-accent hover:text-accent-light transition-colors"
          >
            <Download size={16} aria-hidden="true" />
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 z-10 text-text-muted hover:text-accent-light transition-colors"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.span
          className="block"
          animate={reduced ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={22} aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  )
}

export default Hero
