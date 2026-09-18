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
          ? 'border-b border-rose-200/70 bg-white/75 py-3 shadow-lg shadow-rose-900/5 backdrop-blur-xl'
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
          <span className="font-display text-sm font-semibold tracking-[0.25em] text-[#2A2527] transition-colors group-hover:text-[#B76E79]">
            AR
            <span className="text-[#B76E79]">.</span>
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-[#D99AA5] shadow-[0_0_8px_rgba(217,154,165,0.55)] sm:block" />
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
                  className="group relative block rounded-full px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#6F6467] transition-colors duration-200 hover:text-[#B76E79]"
                >
                  {link.label}

                  <span className="absolute inset-x-3 bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-[#B76E79] to-[#D99AA5] transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mx-3 h-5 w-px bg-rose-200/70" />

          <NavLink
            to="/projects"
            data-cursor-hover
            className={({ isActive }) =>
              `group inline-flex items-center gap-1.5 rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-all duration-300 ${
                isActive
                  ? 'border-[#B76E79]/30 bg-[#B76E79]/10 text-[#A35F6A]'
                  : 'border-rose-200/80 bg-white/45 text-[#554B4E] hover:border-[#B76E79]/30 hover:bg-[#B76E79]/5 hover:text-[#B76E79]'
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
          className="flex h-10 w-10 items-center justify-center rounded-full border border-rose-200/80 bg-white/60 text-[#3A3335] transition-all duration-300 hover:border-[#B76E79]/30 hover:text-[#B76E79] lg:hidden"
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
            <div className="mx-4 mt-3 rounded-2xl border border-rose-200/80 bg-white/90 p-3 shadow-2xl shadow-rose-900/10 backdrop-blur-2xl sm:mx-6">
              <div className="grid grid-cols-2 gap-1">
                {sectionLinks.map((link) => (
                  <a
                    key={link.hash}
                    href={link.hash}
                    onClick={(event) =>
                      handleSectionClick(event, link.hash)
                    }
                    className="rounded-xl px-3 py-3 font-mono text-[10px] uppercase tracking-[0.1em] text-[#6F6467] transition-colors hover:bg-[#FBECEF] hover:text-[#B76E79]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="my-3 h-px bg-rose-200/70" />

              <div className="grid grid-cols-1 gap-1">
                {pageLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl px-3 py-3 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors ${
                        isActive
                          ? 'bg-[#B76E79]/10 text-[#A35F6A]'
                          : 'text-[#80666C] hover:bg-[#FBECEF] hover:text-[#B76E79]'
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