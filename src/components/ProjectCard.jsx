import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { fadeUp, staticVariants } from '../lib/motion'

function ProjectCard({ project, featured = false }) {
  const [expanded, setExpanded] = useState(false)
  const reduced = useReducedMotion()
  const panelId = `project-details-${project.id}`

  return (
    <motion.article
      variants={reduced ? staticVariants : fadeUp}
      className={`card-glow rounded-lg border border-border bg-surface/70 overflow-hidden flex flex-col ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* window chrome doubles as the file header */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface-alt/70">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
        <p className="ml-2 font-mono text-xs text-text-muted truncate">
          {project.file}
        </p>
        {featured && (
          <span className="ml-auto shrink-0 font-mono text-[10px] uppercase tracking-wider text-accent-light border border-accent/40 rounded px-1.5 py-0.5">
            featured
          </span>
        )}
      </div>

      <div className={`flex flex-col flex-1 ${featured ? 'p-6 md:p-7' : 'p-6'}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className={`font-semibold text-text leading-snug ${
                featured ? 'text-xl' : 'text-lg'
              }`}
            >
              {project.title}
            </h3>
            <p className="font-mono text-xs text-text-muted mt-1.5">{project.meta}</p>
          </div>
          <div className="flex gap-3 text-text-muted shrink-0">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                aria-label={`${project.title} repository`}
                className="hover:text-accent-light transition-colors"
              >
                <GithubIcon size={18} aria-hidden="true" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                aria-label={`${project.title} live link`}
                className="hover:text-accent-light transition-colors"
              >
                <ExternalLink size={18} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <p className="text-text-muted text-sm leading-relaxed mt-4">{project.summary}</p>

        <ul className="flex flex-wrap gap-2 mt-5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="font-mono text-[11px] text-accent-light bg-accent/10 border border-accent/20 rounded px-2 py-1"
            >
              {tag}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          aria-controls={panelId}
          className="mt-6 inline-flex items-center gap-1.5 font-mono text-sm text-text-muted hover:text-accent-light transition-colors self-start"
        >
          <span className="text-accent-light">$</span>
          {expanded ? 'less --quit' : 'cat contributions'}
          <ChevronDown
            size={15}
            aria-hidden="true"
            className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={panelId}
              key="details"
              className="overflow-hidden"
              initial={reduced ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="mt-4 space-y-2 border-t border-border pt-4">
                {project.contributions.map((line) => (
                  <li
                    key={line}
                    className="relative pl-5 text-sm text-text-muted leading-relaxed"
                  >
                    <span
                      className="absolute left-0 font-mono text-accent-light"
                      aria-hidden="true"
                    >
                      ›
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}

export default ProjectCard
