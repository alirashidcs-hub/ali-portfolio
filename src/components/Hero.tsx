import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { profile, projects, certificates, publications } from '../data'
import { useTypewriter } from '../hooks/useTypewriter'
import Counter from './ui/Counter'

const FALLBACK_REPO_COUNT = 17

export default function Hero() {
  const typed = useTypewriter(profile.roles)
  const { socials } = profile
  const [repoCount, setRepoCount] = useState(FALLBACK_REPO_COUNT)

  useEffect(() => {
    let cancelled = false

    fetch(`https://api.github.com/users/${socials.githubUsername}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((user) => {
        if (!cancelled && user?.public_repos) {
          setRepoCount(user.public_repos)
        }
      })
      .catch(() => {})

    return () => {
      cancelled = true
    }
  }, [socials.githubUsername])

  const stats = [
    {
      label: 'Projects Shipped',
      value: projects.length,
      href: '/projects',
    },
    {
      label: 'Certificates',
      value: certificates.length,
      href: '/certificates',
    },
    {
      label: 'GitHub Repositories',
      value: repoCount,
      href: socials.github,
      external: true,
    },
    {
      label: 'Publications',
      value: publications.length,
      href: '/publications',
    },
  ]

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-5xl text-center">
        {/* Education / University */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-sky-300/80"
        >
          {profile.degree} · UET Taxila
        </motion.p>

        {/* Main Name */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.7,
            ease: 'easeOut',
          }}
          className="font-display text-5xl font-semibold tracking-tight text-slate-50 sm:text-7xl md:text-8xl"
        >
          Ali <span className="text-gradient">Rashid</span>
        </motion.h1>

        {/* Professional Identity */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mx-auto mt-5 max-w-2xl font-body text-base font-medium text-slate-300 sm:text-lg"
        >
          {profile.tagline}
        </motion.h2>

        {/* Professional Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl font-body text-sm leading-7 text-slate-400 sm:text-base"
        >
          Building intelligent products, AI agents, full-stack applications,
          and interactive 3D web experiences.
        </motion.p>

        {/* Dynamic Professional Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 flex h-7 items-center justify-center font-mono text-sm text-cyan-300 sm:text-base"
          aria-label="Current professional focus"
        >
          <span className="mr-2 text-slate-500">const focus =</span>

          <span>"{typed}</span>

          <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-cyan-300" />

          <span>"</span>
        </motion.div>

        {/* Main Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            data-cursor-hover
            to="/projects"
            className="rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-400 px-8 py-3.5 font-body text-sm font-semibold text-slate-950 shadow-lg shadow-violet-950/50 transition-all hover:scale-105 hover:shadow-xl"
          >
            View Projects
          </Link>

          <a
            data-cursor-hover
            href={profile.resumeUrl}
            download
            className="glass glow-border rounded-full px-8 py-3.5 font-body text-sm font-medium text-slate-200 transition-all hover:scale-105"
          >
            Download Resume
          </a>

          <a
            data-cursor-hover
            href="#contact"
            className="rounded-full border border-slate-700 px-8 py-3.5 font-body text-sm font-medium text-slate-300 transition-all hover:border-sky-400 hover:text-sky-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="mt-8 flex items-center justify-center gap-6"
        >
          {[
            {
              icon: Linkedin,
              href: socials.linkedin,
              label: 'LinkedIn',
            },
            {
              icon: Github,
              href: socials.github,
              label: 'GitHub',
            },
            {
              icon: Mail,
              href: `mailto:${socials.email}`,
              label: 'Email',
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              data-cursor-hover
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noreferrer' : undefined}
              aria-label={label}
              className="text-slate-400 transition-colors hover:text-sky-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Portfolio Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8"
        >
          {stats.map((s) => {
            const content = (
              <div className="text-center">
                <p className="font-display text-3xl text-gradient sm:text-4xl">
                  <Counter to={s.value} />
                  <span>+</span>
                </p>

                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-500 sm:text-xs">
                  {s.label}
                </p>
              </div>
            )

            if (s.external) {
              return (
                <a
                  key={s.label}
                  data-cursor-hover
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl p-3 transition-transform hover:scale-105"
                >
                  {content}
                </a>
              )
            }

            return (
              <Link
                key={s.label}
                data-cursor-hover
                to={s.href}
                className="rounded-2xl p-3 transition-transform hover:scale-105"
              >
                {content}
              </Link>
            )
          })}
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.a
        href="#about"
        data-cursor-hover
        aria-label="Scroll down to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-sky-300"
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  )
}