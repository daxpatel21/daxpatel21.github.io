import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import TerminalWindow from '../components/TerminalWindow'
import { fadeUp, popIn, staticVariants } from '../lib/motion'
import { Cpu, CircuitBoard, HardDrive, Binary } from 'lucide-react'

const FOCUS_AREAS = [
  { Icon: Cpu, label: 'SoC bring-up' },
  { Icon: CircuitBoard, label: 'Device drivers' },
  { Icon: HardDrive, label: 'Yocto / BSP' },
  { Icon: Binary, label: 'Kernel internals' },
]

function About() {
  const reduced = useReducedMotion()
  const item = reduced ? staticVariants : fadeUp

  return (
    <AnimatedSection id="about">
      <SectionHeading index="01" title="about" />

      <motion.div variants={item}>
        <TerminalWindow title="about.txt">
          <p className="text-text-muted leading-relaxed">
            Embedded software engineer with hands-on expertise in C, Linux kernel
            customization, Device Tree configuration, driver integration, and Yocto
            Project builds. Proven track record in hardware/software co-design and
            system bring-up on an AMD ZCU102 (Zynq UltraScale+ MPSoC) integrated with a
            custom RISC-V subsystem. Strong foundation in Electronics &amp;
            Communication Engineering, bridging low-level boot flow, driver integration,
            and system-level debugging on real hardware.
          </p>
        </TerminalWindow>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
        {FOCUS_AREAS.map(({ Icon, label }) => (
          <motion.div
            key={label}
            variants={reduced ? staticVariants : popIn}
            className="card-glow flex items-center gap-2.5 rounded-md border border-border bg-surface-alt/60 px-3 py-3"
          >
            <Icon size={16} className="text-accent-light shrink-0" aria-hidden="true" />
            <span className="font-mono text-xs text-text-muted">{label}</span>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  )
}

export default About
