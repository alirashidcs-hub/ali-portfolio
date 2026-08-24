import { Link, useNavigate } from 'react-router-dom'
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react'
import { profile } from '../data'

const quickLinks = [
  { to: '/#about', label: 'About' },
  { to: '/#skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/publications', label: 'Publications' },
  { to: '/#leadership', label: 'Timeline' },
  { to: '/#resume', label: 'Resume' },
  { to: '/#contact', label: 'Contact' },
]

export default function Footer() {
  const navigate = useNavigate()

  const handleSectionLink = (to: string) => {
    if (!to.startsWith('/#')) {
      navigate(to)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const id = to.replace('/#', '')

    if (window.location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    } else {
      navigate(to)
    }
  }

  return (
    <footer className="relative border-t border-slate-800/80 px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-start justify-between gap-10">
          {/* Brand */}
          <div>
            <Link
              to="/"
              aria-label="Ali Rashid home"
              className="font-display text-sm tracking-[0.25em] text-slate-100"
            >
              AR<span className="text-sky-400">.</span>
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
              {profile.degree} at {profile.university}. {profile.tagline}.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-5">
              <a
                data-cursor-hover
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 transition-colors hover:text-sky-300"
              >
                <Linkedin size={16} />
              </a>

              <a
                data-cursor-hover
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-slate-500 transition-colors hover:text-sky-300"
              >
                <Github size={16} />
              </a>

              <a
                data-cursor-hover
                href={`mailto:${profile.socials.email}`}
                aria-label="Email"
                className="text-slate-500 transition-colors hover:text-sky-300"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
              Quick Links
            </p>

            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  {link.to.startsWith('/#') ? (
                    <button
                      type="button"
                      data-cursor-hover
                      onClick={() => handleSectionLink(link.to)}
                      className="text-left text-sm text-slate-400 transition-colors hover:text-sky-300"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      data-cursor-hover
                      to={link.to}
                      className="text-sm text-slate-400 transition-colors hover:text-sky-300"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Back To Top */}
          <button
            type="button"
            data-cursor-hover
            aria-label="Back to top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              })
            }
            className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-slate-400 transition-colors hover:text-sky-300"
          >
            <ArrowUp size={14} />
            Back to top
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-800/80 pt-6 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-xs text-slate-500">
            Developed with{' '}
            <span className="text-violet-400" aria-label="love">
              ♥
            </span>{' '}
            by {profile.name}
          </p>

          <p className="font-mono text-xs text-slate-600">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}