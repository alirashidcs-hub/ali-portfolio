import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const sectionLinks = [
  { hash: '#about', label: 'About' },
  { hash: '#skills', label: 'Skills' },
  { hash: '#projects', label: 'Projects' },
  { hash: '#certificates', label: 'Certificates' },
  { hash: '#publications', label: 'Publications' },
  { hash: '#leadership', label: 'Timeline' },
  { hash: '#github', label: 'GitHub' },
  { hash: '#resume', label: 'Resume' },
  { hash: '#contact', label: 'Contact' },
]

const pageLinks = [
  { to: '/projects', label: 'All Projects' },
  { to: '/certificates', label: 'All Certificates' },
  { to: '/publications', label: 'All Publications' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    hash: string,
  ) => {
    event.preventDefault()

    if (location.pathname !== '/') {
      navigate(`/${hash}`)
      return
    }

    const element = document.querySelector(hash)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    window.history.replaceState(null, '', hash)
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-800/60 bg-slate-950/70 py-3 shadow-lg shadow-black/10 backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <Link
          to="/"
          data-cursor-hover
          className="group relative flex items-center gap-2"
          aria-label="Ali Rashid — Home"
        >
          <span className="font-display text-sm font-semibold tracking-[0.25em] text-slate-100 transition-colors group-hover:text-sky-300">
            AR
            <span className="text-sky-400">.</span>
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)] sm:block" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center lg:flex">
          <ul className="flex items-center gap-1">
            {sectionLinks.map((link) => (
              <li key={link.hash}>
                <a
                  data-cursor-hover
                  href={link.hash}
                  onClick={(event) =>
                    handleSectionClick(event, link.hash)
                  }
                  className="group relative block rounded-full px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400 transition-colors duration-200 hover:text-sky-300"
                >
                  {link.label}

                  <span className="absolute inset-x-3 bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-sky-400 to-violet-400 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mx-3 h-5 w-px bg-slate-800" />

          <NavLink
            to="/projects"
            data-cursor-hover
            className={({ isActive }) =>
              `group inline-flex items-center gap-1.5 rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-all duration-300 ${
                isActive
                  ? 'border-sky-400/30 bg-sky-400/10 text-sky-300'
                  : 'border-slate-700/70 bg-slate-950/30 text-slate-300 hover:border-sky-400/30 hover:bg-sky-400/5 hover:text-sky-300'
              }`
            }
          >
            All Projects
            <ArrowUpRight
              size={12}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          data-cursor-hover
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800/80 bg-slate-950/40 text-slate-200 transition-all duration-300 hover:border-sky-400/30 hover:text-sky-300 lg:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden lg:hidden"
          >
            <div className="mx-4 mt-3 rounded-2xl border border-slate-800/70 bg-slate-950/85 p-3 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:mx-6">
              <div className="grid grid-cols-2 gap-1">
                {sectionLinks.map((link) => (
                  <a
                    key={link.hash}
                    href={link.hash}
                    onClick={(event) =>
                      handleSectionClick(event, link.hash)
                    }
                    className="rounded-xl px-3 py-3 font-mono text-[10px] uppercase tracking-[0.1em] text-slate-400 transition-colors hover:bg-slate-900 hover:text-sky-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="my-3 h-px bg-slate-800" />

              <div className="grid grid-cols-1 gap-1">
                {pageLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl px-3 py-3 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors ${
                        isActive
                          ? 'bg-sky-400/10 text-sky-300'
                          : 'text-violet-300 hover:bg-slate-900 hover:text-sky-300'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}