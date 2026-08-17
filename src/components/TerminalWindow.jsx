/**
 * Terminal/console chrome. The three dots read as a window control cluster and
 * double as status LEDs — decorative, so they stay out of the a11y tree.
 */
function TerminalWindow({ title, children, className = '', bodyClassName = '' }) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface/80 backdrop-blur-sm overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface-alt/70">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
        <p className="ml-2 font-mono text-xs text-text-muted truncate">{title}</p>
      </div>
      <div className={bodyClassName || 'p-5 md:p-7'}>{children}</div>
    </div>
  )
}

export default TerminalWindow
