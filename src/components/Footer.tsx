import { Link } from 'react-router-dom'
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react'
import { profile } from '../data'

const quickLinks = [
  { to: '/#about', label: 'About' },
  { to: '/#skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/#leadership', label: 'Timeline' },
  { to: '/#resume', label: 'Resume' },
  { to: '/#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/80 px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div>
            <Link to="/" className="font-display text-sm tracking-[0.25em] text-slate-100">
              AR<span className="text-sky-400">.</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-slate-500">
              {profile.degree} at {profile.university}. {profile.tagline}.
            </p>
            <div className="mt-5 flex items-center gap-5">
              <a data-cursor-hover href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-sky-300">
                <Linkedin size={16} />
              </a>
              <a data-cursor-hover href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-500 hover:text-sky-300">
                <Github size={16} />
              </a>
              <a data-cursor-hover href={`mailto:${profile.socials.email}`} aria-label="Email" className="text-slate-500 hover:text-sky-300">
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Quick Links</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link data-cursor-hover to={l.to} className="text-sm text-slate-400 hover:text-sky-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <button
            data-cursor-hover
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-slate-400 hover:text-sky-300"
          >
            <ArrowUp size={14} /> Back to top
          </button>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-800/80 pt-6 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-xs text-slate-500">
            Developed with <span className="text-violet-400">❤</span> by {profile.name}
          </p>
          <p className="font-mono text-xs text-slate-600">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
