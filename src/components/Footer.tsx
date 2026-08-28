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

  /*
   * Handles links such as:
   * /#about
   * /#skills
   * /#leadership
   * /#resume
   * /#contact
   */
  const handleSectionLink = (to: string) => {
    const id = to.replace('/#', '')

    // Already on homepage
    if (window.location.pathname === '/') {
      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }

      // Keep URL clean
      window.history.replaceState(null, '', `/#${id}`)
      return
    }

    // Navigate to homepage first
    navigate(`/#${id}`)

    // Give React Router time to render Home
    window.setTimeout(() => {
      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 150)
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
    <footer className="relative overflow-hidden border-t border-slate-800/80 bg-slate-950 px-4 pb-6 pt-16 sm:px-6 sm:pt-20">
      {/* =========================================================
          AMBIENT BACKGROUND
          ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Left glow */}
        <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-sky-500/[0.04] blur-3xl" />

        {/* Right glow */}
        <div className="absolute right-[10%] top-20 h-72 w-72 rounded-full bg-violet-500/[0.04] blur-3xl" />

        {/* Center glow */}
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.02] blur-3xl" />

        {/* Top line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
          ========================================================= */}

      <div className="relative mx-auto max-w-6xl">

        {/* =======================================================
            CTA
            ======================================================= */}

        <div className="group relative mb-14 overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-xl sm:p-9">

          {/* CTA glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-sky-400/[0.06] blur-3xl transition-all duration-700 group-hover:bg-sky-400/[0.10]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-violet-500/[0.05] blur-3xl"
          />

          {/* CTA top accent */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent opacity-70" />

          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">

            {/* CTA content */}
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

            {/* CTA button */}
            <button
              type="button"
              data-cursor-hover
              onClick={() => handleSectionLink('/#contact')}
              className="group/button inline-flex shrink-0 items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-5 py-3 text-sm font-medium text-sky-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300/40 hover:bg-sky-400/15 hover:text-sky-100"
            >
              <span>Get in touch</span>

              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
              />
            </button>
          </div>
        </div>

        {/* =======================================================
            MAIN FOOTER GRID
            ======================================================= */}

        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">

          {/* =====================================================
              BRAND
              ===================================================== */}

          <div>

            {/* Logo */}
            <Link
              to="/"
              aria-label="Ali Rashid home"
              className="group inline-flex"
            >
              <span className="font-display text-lg font-semibold tracking-[0.25em] text-slate-100 transition-colors duration-300 group-hover:text-white">
                AR<span className="text-sky-400">.</span>
              </span>
            </Link>

            {/* Description */}
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

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
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

          {/* =====================================================
              NAVIGATION
              ===================================================== */}

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
                      onClick={() =>
                        handleSectionLink(link.to)
                      }
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

          {/* =====================================================
              FOCUS
              ===================================================== */}

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

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM BAR
            ======================================================= */}

        <div className="mt-10 border-t border-slate-800/80 pt-5">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            {/* Copyright */}
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

        {/* =======================================================
            FINAL DECORATIVE LINE
            ======================================================= */}

        <div className="mt-8 flex items-center justify-center gap-3">

          <div className="h-px w-16 bg-gradient-to-r from-transparent to-sky-400/20" />

          <span className="h-1 w-1 rounded-full bg-sky-400/40" />

          <div className="h-px w-16 bg-gradient-to-l from-transparent to-violet-400/20" />

        </div>

      </div>
    </footer>
  )
}