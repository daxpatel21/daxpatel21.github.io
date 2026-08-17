import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { id: 'hero', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'education', label: 'education' },
  { id: 'certifications', label: 'certs' },
  { id: 'contact', label: 'contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('hero')
  const reduced = useReducedMotion()

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      Boolean,
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-bg/85 backdrop-blur">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="font-mono text-sm font-semibold tracking-tight text-text"
        >
          <span className="text-accent-light">[</span>
          dax.patel
          <span className="text-accent-light">]</span>
        </a>

        <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.id} className="relative">
              <a
                href={`#${link.id}`}
                aria-current={activeId === link.id ? 'true' : undefined}
                className={`text-sm font-mono whitespace-nowrap transition-colors ${
                  activeId === link.id
                    ? 'text-accent-light'
                    : 'text-text-muted hover:text-accent-light'
                }`}
              >
                {link.label}
              </a>
              {activeId === link.id && (
                <motion.span
                  layoutId="nav-active-trace"
                  aria-hidden="true"
                  className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent-bright"
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { type: 'spring', stiffness: 420, damping: 34 }
                  }
                />
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="lg:hidden text-text"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            key="mobile-nav"
            className="lg:hidden overflow-hidden flex flex-col gap-1 px-6 pb-4"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  className={`block py-2 font-mono text-sm transition-colors ${
                    activeId === link.id
                      ? 'text-accent-light'
                      : 'text-text-muted hover:text-accent-light'
                  }`}
                >
                  <span className="text-accent-light/60 mr-2" aria-hidden="true">
                    {activeId === link.id ? '▸' : ' '}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
