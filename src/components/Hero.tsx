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

    fetch(
      `https://api.github.com/users/${socials.githubUsername}`,
    )
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
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#FFF7F9] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pt-28"
    >
      {/* Background Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(183,110,121,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(183,110,121,0.45) 1px, transparent 1px)',
          backgroundSize:
            'clamp(32px, 4vw, 48px) clamp(32px, 4vw, 48px)',
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
        className="pointer-events-none absolute left-1/2 top-[48%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D99AA5]/[0.14] blur-[90px] sm:h-[450px] sm:w-[450px] lg:h-[600px] lg:w-[600px]"
      />

      {/* Left Glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute left-[-5%] top-[18%] h-28 w-28 rounded-full bg-[#B76E79]/[0.10] blur-3xl sm:left-[8%] sm:h-40 sm:w-40 lg:h-48 lg:w-48"
      />

      {/* Right Glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.10, 0.20, 0.10],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="pointer-events-none absolute bottom-[12%] right-[-5%] h-32 w-32 rounded-full bg-[#C97887]/[0.10] blur-3xl sm:right-[8%] sm:h-44 sm:w-44 lg:h-52 lg:w-52"
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
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#B76E79]/20 bg-white/70 px-3 py-2 shadow-lg shadow-[#B76E79]/[0.06] backdrop-blur-md sm:px-4 sm:py-2.5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B76E79] shadow-[0_0_10px_rgba(183,110,121,0.35)]" />

            <span className="truncate font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[#8D6068] sm:text-[11px] sm:tracking-[0.22em]">
              {profile.degree} · UET Taxila
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          id="hero-heading"
          variants={itemVariants}
          className="font-display text-[3.25rem] font-semibold leading-[0.95] tracking-[-0.055em] text-[#171416] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Ali{' '}
          <span className="text-[#1F1B1D]">
            Rashid
          </span>
        </motion.h1>

        {/* Professional Identity */}
        <motion.div
          variants={itemVariants}
          className="mx-auto mt-5 w-full max-w-3xl sm:mt-6"
        >
          <h2 className="font-body text-lg font-semibold tracking-tight text-[#40383B] sm:text-xl md:text-2xl">
            AI & Full-Stack Developer
          </h2>

          <div className="relative mt-3 flex flex-wrap items-center justify-center gap-2 sm:mt-4 sm:gap-2.5">
            <div aria-hidden="true" className="hero-tag-constellation" />
            {['AI Agents', '3D Web', 'Software Engineering'].map(
              (item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.62,
                    delay: 0.56 + index * 0.12,
                    ease: 'easeOut',
                  }}
                  whileHover={{ y: -3, scale: 1.03 }}
                  className="relative z-10"
                >
                  <span
                    className="hero-tech-tag"
                    style={{
                      animationDelay: `${index * -1.35}s`,
                      animationDuration: `${5.4 + index * 0.65}s`,
                    }}
                  >
                    {index === 0 && (
                      <span className="mr-1.5 text-[#9F5262]">✦</span>
                    )}
                    {item}
                  </span>
                </motion.span>
              ),
            )}
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-5 max-w-[680px] px-2 font-body text-[13px] leading-6 text-[#252023] sm:mt-6 sm:px-0 sm:text-sm sm:leading-7 md:text-base"
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
          <div className="relative overflow-hidden rounded-2xl border border-[#B76E79]/20 bg-white/70 px-4 py-3 shadow-[0_0_40px_rgba(183,110,121,0.07)] backdrop-blur-xl sm:px-5 sm:py-3.5">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#D99AA5]/[0.08] to-transparent"
            />

            <div className="relative flex min-h-6 items-center justify-center overflow-hidden font-mono text-[10px] sm:text-xs md:text-sm">
              <span className="shrink-0 text-[#8B7D80]">
                const focus =
              </span>

              <span className="ml-1.5 min-w-0 truncate font-medium text-[#A35F6A] drop-shadow-[0_0_10px_rgba(183,110,121,0.15)] sm:ml-2">
                "{typed}"
              </span>

              <span
                aria-hidden="true"
                className="ml-0.5 h-4 w-[2px] shrink-0 animate-pulse bg-[#B76E79] shadow-[0_0_8px_rgba(183,110,121,0.35)]"
              />

              <span className="text-[#B76E79]">"</span>
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
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#B76E79] via-[#C97887] to-[#D99AA5] px-7 py-3.5 font-body text-sm font-semibold text-white shadow-lg shadow-[#B76E79]/20 transition-all duration-300 hover:scale-[1.04] hover:shadow-xl hover:shadow-[#B76E79]/25 sm:w-auto sm:px-8"
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
            className="glass glow-border inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 font-body text-sm font-medium text-[#4D4447] transition-all duration-300 hover:scale-[1.04] hover:border-[#B76E79]/40 hover:text-[#A35F6A] sm:w-auto sm:px-8"
          >
            Download Resume
          </a>

          <a
            data-cursor-hover
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 font-body text-sm font-medium text-[#40383B] transition-all duration-300 hover:text-[#A35F6A] sm:w-auto"
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
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8B8BE]/60 bg-white/65 text-[#756B6E] backdrop-blur-sm transition-all duration-300 hover:border-[#B76E79]/35 hover:bg-[#B76E79]/[0.06] hover:text-[#A35F6A] hover:shadow-[0_0_20px_rgba(183,110,121,0.10)] sm:h-10 sm:w-10"
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
          <p className="mb-3 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-[#9B8E91]">
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
                  className="h-full rounded-2xl border border-[#D8B8BE]/60 bg-white/60 p-3.5 backdrop-blur-md transition-colors duration-300 hover:border-[#B76E79]/25 hover:bg-white/80 sm:p-4"
                >
                  <p className="font-display text-2xl font-medium text-[#B76E79] sm:text-3xl">
                    <Counter to={s.value} />
                    <span>+</span>
                  </p>

                  <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.12em] text-[#8B7D80] sm:mt-1.5 sm:text-[9px] sm:tracking-[0.16em] md:text-[10px]">
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
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[#9B8E91] transition-colors hover:text-[#B76E79] sm:bottom-5"
      >
        <ChevronDown size={20} />
      </motion.a>
    </section>
  )
}
