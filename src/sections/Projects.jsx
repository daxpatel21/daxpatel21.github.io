import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'

const PROJECTS = [
  {
    id: 'display-bringup',
    file: 'zcu102-display-bringup/',
    title: 'Display Bring-Up on AMD ZCU102 (Custom RISC-V Subsystem)',
    meta: 'MosChip | Feb 2026 – Jun 2026',
    summary:
      'End-to-end bring-up of a DDR-to-HDMI display pipeline under Linux on an AMD ZCU102 (Zynq UltraScale+ MPSoC). Validated Linux on ARM Cortex-A53 before targeting the display path to a custom RISC-V subsystem in FPGA programmable logic.',
    contributions: [
      'Achieved Linux boot validation on ARM Cortex-A53 using dual-boot topologies (SD card and JTAG+TFTP)',
      'Configured and generated custom kernel images using Yocto Project and Xilinx OSL build environments',
      'Programmed FPGA bitstreams to instantiate RISC-V soft-core; integrated OpenSBI, U-Boot, Kernel, Rootfs stack',
      'Diagnosed non-functional display pipelines; integrated Linux driver modifications and authored Device Tree nodes for video IP block registration',
      'Debugged kernel panic logs; validated with DRM/modetest to achieve active HDMI color-bar output on physical hardware',
      'Authored reproducible BSP and kernel build documentation',
    ],
    tags: [
      'Linux Kernel',
      'Device Tree',
      'Yocto Project',
      'Xilinx OSL',
      'U-Boot/OpenSBI',
      'DRM/modetest',
      'RISC-V',
      'ARM Cortex-A53',
      'AXI',
      'Vitis',
      'XSCT/JTAG',
    ],
    featured: true,
  },
  {
    id: '8051-devboard',
    file: '8051-devboard/',
    title: '8051 Microcontroller Development Board',
    meta: 'Academic Project',
    summary:
      'Designed and assembled a reusable plug-and-play 8051 dev board from scratch; wrote bare-metal Assembly firmware for peripherals to verify hardware integrity.',
    contributions: [
      'Architected and soldered the board for modular reuse across projects',
      'Wrote Assembly drivers for GPIO LED control and 16x2 LCD interfacing',
      'Implemented 4x4 matrix keypad scanning with software debouncing',
      'Configured Timer0 registers for a precise 10 Hz square wave',
    ],
    tags: [
      '8051 Assembly',
      'Bare-metal Firmware',
      'GPIO',
      'LCD Interfacing',
      'Keypad Scanning',
      'Timer Programming',
    ],
  },
  {
    id: 'variable-power-supply',
    file: 'variable-psu/',
    title: 'Variable Power Supply with Battery Backup',
    meta: 'Academic Project',
    summary:
      'Designed a 12V power supply with LM317-based adjustable output and automatic relay-based switchover to battery backup on mains failure.',
    contributions: [
      'Schematic capture/simulation in Multisim and Proteus',
      'Prototyped rectifier/filter/LM317 stages on breadboard before PCB migration',
      'Designed relay-based auto backup/charging system',
      'Debugged relay, ammeter, and PCB routing faults',
      'Achieved 1.19–13.3V adjustable output with seamless battery transition',
    ],
    tags: [
      'Analog Circuit Design',
      'LM317',
      'PCB Design',
      'Relay Switching',
      'Multisim',
      'Proteus',
    ],
  },
]

function Projects() {
  return (
    <AnimatedSection id="projects">
      <SectionHeading index="03" title="projects" />
      <div className="grid lg:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} featured={project.featured} />
        ))}
      </div>
    </AnimatedSection>
  )
}

export default Projects
