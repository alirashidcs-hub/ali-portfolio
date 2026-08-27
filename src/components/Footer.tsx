import { Link, useNavigate } from 'react-router-dom'
import {
  Linkedin,
  Github,
  Mail,
  ArrowUp,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'
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

const focusAreas = [
  'Artificial Intelligence',
  'AI Agents',
  'Full-Stack Development',
  '3D Web Experiences',
]

export default function Footer() {
  const navigate = useNavigate()

  const handleSectionLink = (to: string) => {
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

  const socialLinks = [
    {
      href: profile.socials.linkedin,
      label: 'LinkedIn',
      icon: Linkedin,
    },
    {
      href: profile.socials.github,
      label: 'GitHub',
      icon: Github,
    },
    {
      href: `mailto:${profile.socials.email}`,
      label: 'Email',
      icon: Mail,
    },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-slate-800/80 bg-slate-950 px-6 pb-6 pt-16">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[15%] top-0 h-72 w-72 rounded-full bg-sky-500/[0.04] blur-3xl" />
        <div className="absolute right-[15%] top-20 h-72 w-72 rounded-full bg-violet-500/[0.04] blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* CTA */}
        <div className="group relative mb-14 overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/40 p-7 backdrop-blur-xl sm:p-9">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-sky-400/[0.06] blur-3xl transition-all duration-700 group-hover:bg-sky-400/[0.10]"
          />

          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/10">
                  <Sparkles
                    size={13}
                    className="text-sky-300"
                    aria-hidden="true"
                  />
                </span>

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-300">
                  Let&apos;s build something
                </span>
              </div>

              <h2 className="max-w-2xl font-display text-2xl font-medium tracking-tight text-slate-100 sm:text-3xl">
                Turning ideas into intelligent digital experiences.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                AI agents, full-stack applications, and immersive 3D
                experiences built with purpose.
              </p>
            </div>

            <Link
              to="/#contact"
              data-cursor-hover
              onClick={(event) => {
                if (window.location.pathname === '/') {
                  event.preventDefault()
                  handleSectionLink('/#contact')
                }
              }}
              className="group/button inline-flex shrink-0 items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-5 py-3 text-sm font-medium text-sky-200 transition-all duration-300 hover:border-sky-300/40 hover:bg-sky-400/15 hover:text-sky-100"
            >
              Get in touch

              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Link
              to="/"
              aria-label="Ali Rashid home"
              className="group inline-flex"
            >
              <span className="font-display text-lg font-semibold tracking-[0.25em] text-slate-100 transition-colors duration-300 group-hover:text-white">
                AR<span className="text-sky-400">.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              {profile.degree} at {profile.university}.{' '}
              {profile.tagline}.
            </p>

            {/* Status */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/60 px-3 py-2">
              <span
                className="relative flex h-2 w-2"
                aria-hidden="true"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                Building with AI
              </span>
            </div>

            {/* Social Links */}
            <div className="mt-7 flex flex-wrap gap-2">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  data-cursor-hover
                  href={href}
                  target={
                    href.startsWith('mailto:')
                      ? undefined
                      : '_blank'
                  }
                  rel={
                    href.startsWith('mailto:')
                      ? undefined
                      : 'noreferrer'
                  }
                  aria-label={label}
                  className="group/social inline-flex items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-900/40 px-3 py-2 text-xs text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/20 hover:bg-sky-400/5 hover:text-sky-300"
                >
                  <Icon
                    size={14}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover/social:scale-110"
                  />

                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Navigation
            </p>

            <ul className="mt-5 grid grid-cols-2 gap-x-7 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  {link.to.startsWith('/#') ? (
                    <button
                      type="button"
                      data-cursor-hover
                      onClick={() => handleSectionLink(link.to)}
                      className="group/link inline-flex items-center gap-1.5 text-left text-sm text-slate-500 transition-colors duration-300 hover:text-sky-300"
                    >
                      <span>{link.label}</span>

                      <ArrowUpRight
                        size={11}
                        aria-hidden="true"
                        className="opacity-0 transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:opacity-100"
                      />
                    </button>
                  ) : (
                    <Link
                      data-cursor-hover
                      to={link.to}
                      className="group/link inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors duration-300 hover:text-sky-300"
                    >
                      <span>{link.label}</span>

                      <ArrowUpRight
                        size={11}
                        aria-hidden="true"
                        className="opacity-0 transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Focus */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Focus
            </p>

            <div className="mt-5 space-y-3">
              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="group/focus flex items-center gap-3 text-sm text-slate-500 transition-colors duration-300 hover:text-slate-300"
                >
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-sky-400/60 transition-all duration-300 group-hover/focus:h-1.5 group-hover/focus:w-1.5 group-hover/focus:bg-sky-300"
                  />

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-slate-800/80 pt-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            {/* Copyright + Credit */}
            <div className="flex flex-col gap-1">
              <p className="font-mono text-[11px] text-slate-600">
                © {new Date().getFullYear()} {profile.name}. All rights reserved.
              </p>

              <p className="font-mono text-[10px] text-slate-700">
                Developed with{' '}
                <span
                  className="text-violet-400"
                  aria-label="love"
                >
                  ♥
                </span>{' '}
                by {profile.name}
              </p>
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
              className="group/top inline-flex w-fit items-center gap-2 rounded-full border border-slate-800 bg-slate-900/40 px-4 py-2 text-xs font-medium text-slate-500 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/30 hover:bg-sky-400/5 hover:text-sky-300"
            >
              <span>Back to top</span>

              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-800 transition-all duration-300 group-hover/top:border-sky-400/30 group-hover/top:bg-sky-400/10">
                <ArrowUp
                  size={12}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/top:-translate-y-0.5"
                />
              </span>
            </button>

          </div>
        </div>
      </div>
    </footer>
  )
}