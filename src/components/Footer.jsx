function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-text-muted">
        <p>
          <span className="text-accent-light" aria-hidden="true">
            $
          </span>{' '}
          &copy; {new Date().getFullYear()} Dax Patel
        </p>
        <p>built with React · Vite · Tailwind CSS · framer-motion</p>
      </div>
    </footer>
  )
}

export default Footer
