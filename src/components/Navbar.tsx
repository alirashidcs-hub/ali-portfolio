import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          data-cursor-hover
          onClick={closeMenu}
          className="font-display text-sm tracking-[0.25em] text-slate-100"
        >
          AR<span className="text-sky-400">.</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-5 lg:flex">
          {sectionLinks.map((link) => (
            <li key={link.hash}>
              <Link
                data-cursor-hover
                to={`/${link.hash}`}
                className="font-mono text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-sky-300"
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li>
            <NavLink
              data-cursor-hover
              to="/projects"
              className={({ isActive }) =>
                `font-mono text-xs uppercase tracking-widest transition-colors ${
                  isActive
                    ? 'text-sky-300'
                    : 'text-slate-400 hover:text-sky-300'
                }`
              }
            >
              Projects
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          data-cursor-hover
          onClick={() => setOpen((value) => !value)}
          className="text-slate-200 lg:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="glass mt-3 flex flex-col gap-1 px-6 py-4 lg:hidden"
        >
          {sectionLinks.map((link) => (
            <Link
              key={link.hash}
              to={`/${link.hash}`}
              onClick={closeMenu}
              className="block py-2 font-mono text-xs uppercase tracking-widest text-slate-300 transition-colors hover:text-sky-300"
            >
              {link.label}
            </Link>
          ))}

          <div className="my-2 border-t border-slate-800" />

          {pageLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                  isActive
                    ? 'text-sky-300'
                    : 'text-violet-300 hover:text-sky-300'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}