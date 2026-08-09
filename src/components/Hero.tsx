import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { profile, projects, certificates } from '../data'
import { useTypewriter } from '../hooks/useTypewriter'
import Counter from './ui/Counter'

const FALLBACK_REPO_COUNT = 32

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
    { label: 'Projects Shipped', value: projects.length },
    { label: 'Certificates', value: certificates.length },
    { label: 'GitHub Repositories', value: repoCount },
  ]

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">

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
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-5 max-w-xl font-body text-base text-slate-400 sm:text-lg"
        >
          {profile.degree} — {profile.tagline}
        </motion.p>

        {/* Dynamic Professional Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 flex h-7 items-center font-mono text-sm text-cyan-300 sm:text-base"
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
            className="rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-400 px-7 py-3 font-body text-sm font-medium text-slate-950 shadow-lg shadow-violet-950/50 transition-transform hover:scale-105"
          >
            View Projects
          </Link>

          <a
            data-cursor-hover
            href={profile.resumeUrl}
            download
            className="glass glow-border rounded-full px-7 py-3 font-body text-sm font-medium text-slate-200 transition-transform hover:scale-105"
          >
            Download Resume
          </a>

          <Link
            data-cursor-hover
            to="/#contact"
            className="rounded-full border border-slate-700 px-7 py-3 font-body text-sm font-medium text-slate-300 transition-colors hover:border-sky-400 hover:text-sky-300"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* GitHub / LinkedIn Links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            data-cursor-hover
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-sky-300"
          >
            <Github size={15} />
            View GitHub
          </a>

          <a
            data-cursor-hover
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-sky-300"
          >
            <Linkedin size={15} />
            Connect on LinkedIn
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10 flex items-center gap-6"
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
              target="_blank"
              rel="noreferrer"
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
          className="mt-10 grid grid-cols-3 gap-4 sm:gap-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl text-gradient sm:text-4xl">
                <Counter to={s.value} />
                <span>+</span>
              </p>

              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-500 sm:text-xs">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.a
        href="#about"
        data-cursor-hover
        aria-label="Scroll down"
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