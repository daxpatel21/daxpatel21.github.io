import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import { fadeUp, popIn, staticVariants } from '../lib/motion'

const SKILL_GROUPS = [
  {
    addr: '0x0000',
    label: 'LANGUAGES',
    items: ['C', '8051 Assembly'],
  },
  {
    addr: '0x0010',
    label: 'EMBEDDED_LINUX',
    items: [
      'Linux Kernel Configuration',
      'Device Tree',
      'Driver Integration & Porting',
      'Yocto Project (BitBake)',
      'Xilinx OSL Flow',
      'DRM/KMS (modetest)',
      'Cross-compilation',
      'IPC',
      'TCP/IP',
    ],
  },
  {
    addr: '0x0020',
    label: 'PLATFORMS_TOOLS',
    items: [
      'AMD/Xilinx ZCU102',
      'Zynq UltraScale+ MPSoC',
      'RISC-V',
      'ARM Cortex-A53',
      'AXI',
      'DDR',
      'Vitis',
      'Vivado',
      'XSCT/JTAG',
      'Git',
    ],
  },
  {
    addr: '0x0030',
    label: 'HARDWARE',
    items: [
      'Microcontroller Peripherals (GPIO, LCD, Keypad, Timers)',
      'Analog Circuit Design',
      'PCB Design & Bring-up',
      'Multisim',
      'Proteus',
    ],
  },
  {
    addr: '0x0040',
    label: 'MULTIMEDIA',
    tag: 'beginner',
    items: ['GStreamer', 'Linux Multimedia Pipeline Fundamentals'],
  },
]

function Skills() {
  const reduced = useReducedMotion()

  return (
    <AnimatedSection id="skills" className="bg-surface/40">
      <SectionHeading index="04" title="skills" />

      <div className="rounded-lg border border-border bg-surface/70 divide-y divide-border overflow-hidden">
        {SKILL_GROUPS.map((group) => (
          <motion.div
            key={group.label}
            variants={reduced ? staticVariants : fadeUp}
            className="p-5 md:p-6 md:flex md:gap-8"
          >
            <div className="flex items-center gap-3 mb-4 md:mb-0 md:w-56 md:shrink-0 md:self-start md:pt-1.5">
              <span className="font-mono text-xs text-accent-dim">{group.addr}</span>
              <span className="font-mono text-xs font-semibold tracking-wider text-text">
                {group.label}
              </span>
              {group.tag && (
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted border border-border rounded px-1.5 py-0.5">
                  {group.tag}
                </span>
              )}
            </div>

            <ul className="flex flex-wrap gap-2 flex-1">
              {group.items.map((item) => (
                <motion.li
                  key={item}
                  variants={reduced ? staticVariants : popIn}
                  className="text-sm text-text bg-surface-alt border border-border rounded-md px-3 py-1.5 transition-colors hover:border-accent hover:text-accent-light"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  )
}

export default Skills
