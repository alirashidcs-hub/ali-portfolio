import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
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
      {/* Ambient Background Glow */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.8,
          ease: 'easeOut',
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/5 blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute left-[15%] top-[20%] h-40 w-40 rounded-full bg-violet-500/10 blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="pointer-events-none absolute bottom-[15%] right-[12%] h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-5xl text-center"
      >
        {/* Education / University */}
        <motion.p
          variants={itemVariants}
          className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-sky-300/80"
        >
          {profile.degree} · UET Taxila
        </motion.p>

        {/* Main Name */}
        <motion.h1
          id="hero-heading"
          variants={itemVariants}
          className="font-display text-5xl font-semibold tracking-tight text-slate-50 sm:text-7xl md:text-8xl"
        >
          Ali <span className="text-gradient">Rashid</span>
        </motion.h1>

        {/* Professional Identity */}
        <motion.h2
          variants={itemVariants}
          className="mx-auto mt-5 max-w-2xl font-body text-base font-medium text-slate-300 sm:text-lg"
        >
          {profile.tagline}
        </motion.h2>

        {/* Professional Description */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-4 max-w-2xl font-body text-sm leading-7 text-slate-400 sm:text-base"
        >
          Building intelligent products, AI agents, full-stack applications,
          and interactive 3D web experiences.
        </motion.p>

        {/* Dynamic Professional Roles */}
        <motion.div
          variants={itemVariants}
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
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            data-cursor-hover
            to="/projects"
            className="rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-400 px-8 py-3.5 font-body text-sm font-semibold text-slate-950 shadow-lg shadow-violet-950/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/20"
          >
            View Projects
          </Link>

          <a
            data-cursor-hover
            href={profile.resumeUrl}
            download
            className="glass glow-border rounded-full px-8 py-3.5 font-body text-sm font-medium text-slate-200 transition-all duration-300 hover:scale-105 hover:border-sky-400/40"
          >
            Download Resume
          </a>

          <a
            data-cursor-hover
            href="#contact"
            className="rounded-full border border-slate-700 px-8 py-3.5 font-body text-sm font-medium text-slate-300 transition-all duration-300 hover:scale-105 hover:border-sky-400 hover:text-sky-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
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
                scale: 1.15,
              }}
              className="text-slate-400 transition-colors hover:text-sky-300"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Portfolio Statistics */}
        <motion.div
          variants={itemVariants}
          className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8"
        >
          {stats.map((s, index) => {
            const content = (
              <motion.div
                whileHover={{
                  y: -4,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="text-center"
              >
                <p className="font-display text-3xl text-gradient sm:text-4xl">
                  <Counter to={s.value} />
                  <span>+</span>
                </p>

                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-500 sm:text-xs">
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
                  className="rounded-2xl p-3"
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
                  className="block rounded-2xl p-3"
                >
                  {content}
                </Link>
              </motion.div>
            )
          })}
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
          y: [0, 8, 0],
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-sky-300"
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  )
}