import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  ArrowUpRight,
} from 'lucide-react'
import { profile, projects, certificates, publications } from '../data'
import { useTypewriter } from '../hooks/useTypewriter'
import Counter from './ui/Counter'

const FALLBACK_REPO_COUNT = 17

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut' as const,
    },
  },
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)
  const { socials } = profile
  const [repoCount, setRepoCount] = useState(FALLBACK_REPO_COUNT)

  useEffect(() => {
    let cancelled = false

    fetch(`https://api.github.com/users/${socials.githubUsername}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((user) => {
        if (!cancelled && typeof user?.public_repos === 'number') {
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
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pt-28"
    >
      {/* Background Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)',
          backgroundSize: 'clamp(32px, 4vw, 48px) clamp(32px, 4vw, 48px)',
        }}
      />

      {/* Central Glow */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.8,
          ease: 'easeOut',
        }}
        className="pointer-events-none absolute left-1/2 top-[48%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/[0.07] blur-[90px] sm:h-[450px] sm:w-[450px] lg:h-[600px] lg:w-[600px]"
      />

      {/* Left Glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.32, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute left-[-5%] top-[18%] h-28 w-28 rounded-full bg-violet-500/10 blur-3xl sm:left-[8%] sm:h-40 sm:w-40 lg:h-48 lg:w-48"
      />

      {/* Right Glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="pointer-events-none absolute bottom-[12%] right-[-5%] h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl sm:right-[8%] sm:h-44 sm:w-44 lg:h-52 lg:w-52"
      />

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center"
      >
        {/* University */}
        <motion.div
          variants={itemVariants}
          className="mb-5 flex justify-center sm:mb-6"
        >
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-sky-400/15 bg-slate-900/45 px-3 py-2 shadow-lg shadow-sky-950/10 backdrop-blur-md sm:px-4 sm:py-2.5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />

            <span className="truncate font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-sky-200/80 sm:text-[11px] sm:tracking-[0.22em]">
              {profile.degree} · UET Taxila
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          id="hero-heading"
          variants={itemVariants}
          className="font-display text-[3.25rem] font-semibold leading-[0.95] tracking-[-0.055em] text-slate-50 sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Ali{' '}
          <span className="text-gradient drop-shadow-[0_0_28px_rgba(56,189,248,0.12)]">
            Rashid
          </span>
        </motion.h1>

        {/* Professional Identity */}
        <motion.div
          variants={itemVariants}
          className="mx-auto mt-5 w-full max-w-3xl sm:mt-6"
        >
          <h2 className="font-body text-lg font-semibold tracking-tight text-slate-200 sm:text-xl md:text-2xl">
            AI & Full-Stack Developer
          </h2>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:mt-4 sm:gap-2.5">
            {['AI Agents', '3D Web', 'Software Engineering'].map(
              (item, index) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700/70 bg-slate-900/45 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.08em] text-slate-400 backdrop-blur-sm sm:px-3 sm:text-[10px] sm:tracking-wider md:text-xs"
                >
                  {index === 0 && (
                    <span className="mr-1.5 text-cyan-300">✦</span>
                  )}
                  {item}
                </span>
              ),
            )}
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-5 max-w-[680px] px-2 font-body text-[13px] leading-6 text-slate-400 sm:mt-6 sm:px-0 sm:text-sm sm:leading-7 md:text-base"
        >
          Building intelligent products, AI agents, full-stack applications,
          and interactive 3D web experiences.
        </motion.p>

        {/* Dynamic Professional Focus */}
        <motion.div
          variants={itemVariants}
          className="mt-7 w-full max-w-xl sm:mt-8"
          aria-label="Current professional focus"
        >
          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/15 bg-slate-950/75 px-4 py-3 shadow-[0_0_40px_rgba(34,211,238,0.06)] backdrop-blur-xl sm:px-5 sm:py-3.5">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-cyan-400/[0.05] to-transparent"
            />

            <div className="relative flex min-h-6 items-center justify-center overflow-hidden font-mono text-[10px] sm:text-xs md:text-sm">
              <span className="shrink-0 text-slate-500">
                const focus =
              </span>

              <span className="ml-1.5 min-w-0 truncate font-medium text-cyan-300 drop-shadow-[0_0_10px_rgba(103,232,249,0.25)] sm:ml-2">
                "{typed}"
              </span>

              <span
                aria-hidden="true"
                className="ml-0.5 h-4 w-[2px] shrink-0 animate-pulse bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]"
              />

              <span className="text-cyan-300">"</span>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex w-full flex-col items-center justify-center gap-2 sm:mt-9 sm:flex-row sm:gap-3"
        >
          <Link
            data-cursor-hover
            to="/projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-400 px-7 py-3.5 font-body text-sm font-semibold text-slate-950 shadow-lg shadow-violet-950/50 transition-all duration-300 hover:scale-[1.04] hover:shadow-xl hover:shadow-violet-500/20 sm:w-auto sm:px-8"
          >
            View Projects
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <a
            data-cursor-hover
            href={profile.resumeUrl}
            download
            className="glass glow-border inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 font-body text-sm font-medium text-slate-200 transition-all duration-300 hover:scale-[1.04] hover:border-sky-400/40 hover:text-sky-200 sm:w-auto sm:px-8"
          >
            Download Resume
          </a>

          <a
            data-cursor-hover
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 font-body text-sm font-medium text-slate-400 transition-all duration-300 hover:text-sky-300 sm:w-auto"
          >
            Contact Me →
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="mt-7 flex items-center justify-center gap-2.5 sm:mt-8 sm:gap-3"
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
          ].map(({ icon: Icon, href, label }, index) => (
            <motion.a
              key={label}
              data-cursor-hover
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noreferrer' : undefined}
              aria-label={label}
              initial={{ opacity: 0, y: 12, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 1 + index * 0.1,
                duration: 0.45,
              }}
              whileHover={{
                y: -4,
                scale: 1.12,
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800/80 bg-slate-950/40 text-slate-400 backdrop-blur-sm transition-all duration-300 hover:border-sky-400/30 hover:bg-sky-400/5 hover:text-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.08)] sm:h-10 sm:w-10"
            >
              <Icon size={17} />
            </motion.a>
          ))}
        </motion.div>

        {/* Selected Activity */}
        <motion.div
          variants={itemVariants}
          className="mx-auto mt-8 w-full max-w-4xl sm:mt-10"
        >
          <p className="mb-3 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
            Selected Activity
          </p>

          <div className="grid w-full grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3.5">
            {stats.map((s, index) => {
              const content = (
                <motion.div
                  whileHover={{
                    y: -4,
                    scale: 1.025,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="h-full rounded-2xl border border-slate-800/70 bg-slate-950/35 p-3.5 backdrop-blur-md transition-colors duration-300 hover:border-sky-400/15 hover:bg-slate-900/45 sm:p-4"
                >
                  <p className="font-display text-2xl font-medium text-gradient sm:text-3xl">
                    <Counter to={s.value} />
                    <span>+</span>
                  </p>

                  <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.12em] text-slate-500 sm:mt-1.5 sm:text-[9px] sm:tracking-[0.16em] md:text-[10px]">
                    {s.label}
                  </p>
                </motion.div>
              )

              if (s.external) {
                return (
                  <motion.a
                    key={s.label}
                    data-cursor-hover
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1.15 + index * 0.08,
                      duration: 0.5,
                    }}
                    className="block rounded-2xl"
                  >
                    {content}
                  </motion.a>
                )
              }

              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.15 + index * 0.08,
                    duration: 0.5,
                  }}
                >
                  <Link
                    data-cursor-hover
                    to={s.href}
                    className="block h-full rounded-2xl"
                  >
                    {content}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down */}
      <motion.a
        href="#about"
        data-cursor-hover
        aria-label="Scroll down to About section"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 7, 0],
        }}
        transition={{
          opacity: {
            delay: 1.8,
            duration: 0.6,
          },
          y: {
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-slate-600 transition-colors hover:text-sky-300 sm:bottom-5"
      >
        <ChevronDown size={20} />
      </motion.a>
    </section>
  )
}