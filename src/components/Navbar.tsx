import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const sectionLinks = [
  { hash: '#about', label: 'About' },
  { hash: '#skills', label: 'Skills' },
  { hash: '#projects', label: 'Projects' },
  { hash: '#certificates', label: 'Certificates' },
  { hash: '#leadership', label: 'Timeline' },
  { hash: '#github', label: 'GitHub' },
  { hash: '#resume', label: 'Resume' },
  { hash: '#contact', label: 'Contact' },
]

const pageLinks = [
  { to: '/projects', label: 'All Projects' },
  { to: '/certificates', label: 'All Certificates' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link to="/" data-cursor-hover className="font-display text-sm tracking-[0.25em] text-slate-100">
          AR<span className="text-sky-400">.</span>
        </Link>

        <ul className="hidden gap-5 lg:flex">
          {sectionLinks.map((l) => (
            <li key={l.hash}>
              <Link
                data-cursor-hover
                to={`/${l.hash}`}
                className="font-mono text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-sky-300"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          data-cursor-hover
          onClick={() => setOpen((o) => !o)}
          className="text-slate-200 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="glass mt-3 flex flex-col gap-1 px-6 py-4 lg:hidden"
        >
          {sectionLinks.map((l) => (
            <Link
              key={l.hash}
              to={`/${l.hash}`}
              onClick={() => setOpen(false)}
              className="block py-2 font-mono text-xs uppercase tracking-widest text-slate-300"
            >
              {l.label}
            </Link>
          ))}
          <div className="my-2 border-t border-slate-800" />
          {pageLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 font-mono text-xs uppercase tracking-widest ${
                  isActive ? 'text-sky-300' : 'text-violet-300'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}
