import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import TerminalWindow from '../components/TerminalWindow'
import { fadeUp, staticVariants } from '../lib/motion'
import { Mail, Send } from 'lucide-react'
import { LinkedinIcon } from '../components/BrandIcons'

const CONTACT_EMAIL = 'daxbpatel22@gmail.com'
const LINKEDIN_URL = 'https://linkedin.com/in/daxpatel06'

const CONTACT_METHODS = [
  {
    key: 'email',
    label: 'email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    Icon: Mail,
  },
  {
    key: 'linkedin',
    label: 'linkedin',
    value: 'linkedin.com/in/daxpatel06',
    href: LINKEDIN_URL,
    Icon: LinkedinIcon,
  },
]

const FIELD_CLASS =
  'w-full rounded-md border border-border bg-surface-alt px-3 py-2 text-text font-mono text-sm placeholder:text-text-muted transition-colors focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/40'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const reduced = useReducedMotion()
  const item = reduced ? staticVariants : fadeUp

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name || 'a visitor'}`,
    )
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <AnimatedSection id="contact">
      <SectionHeading index="07" title="contact" />

      <motion.p variants={item} className="text-text-muted max-w-xl mb-10 leading-relaxed">
        Open to embedded software and systems roles. Reach out directly, or compose a
        message below — it opens in your mail client, ready to send.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.ul variants={item} className="space-y-3">
          {CONTACT_METHODS.map(({ key, label, value, href, Icon }) => (
            <li key={key}>
              <a
                href={href}
                {...(href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="card-glow group flex items-center gap-4 rounded-lg border border-border bg-surface/70 px-4 py-3.5"
              >
                <span
                  className="flex items-center justify-center h-10 w-10 rounded-md border border-border bg-surface-alt shrink-0 text-text-muted transition-colors group-hover:border-accent group-hover:text-accent-light"
                  aria-hidden="true"
                >
                  <Icon size={17} />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-text-muted">
                    {label}
                  </span>
                  <span className="block text-text truncate transition-colors group-hover:text-accent-light">
                    {value}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.div variants={item}>
          <TerminalWindow title="compose --to=dax" bodyClassName="p-5">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-xs text-text-muted mb-1.5"
                >
                  <span className="text-accent-light" aria-hidden="true">
                    $
                  </span>{' '}
                  name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={FIELD_CLASS}
                  placeholder="your name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-xs text-text-muted mb-1.5"
                >
                  <span className="text-accent-light" aria-hidden="true">
                    $
                  </span>{' '}
                  email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={FIELD_CLASS}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs text-text-muted mb-1.5"
                >
                  <span className="text-accent-light" aria-hidden="true">
                    $
                  </span>{' '}
                  message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className={`${FIELD_CLASS} resize-none`}
                  placeholder="what would you like to talk about?"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent-light transition-colors"
              >
                Send Message
                <Send size={15} aria-hidden="true" />
              </button>
            </form>
          </TerminalWindow>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default Contact
