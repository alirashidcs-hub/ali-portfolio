import { motion, type Variants, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { profile } from '../../data'
import SectionHeading from '../ui/SectionHeading'

const points = [
  {
    title: 'BS Computer Science',
    detail:
      'Computer Science student at the University of Engineering and Technology (UET) Taxila, Pakistan.',
    tag: 'EDUCATION',
  },
  {
    title: 'Artificial Intelligence',
    detail:
      'Exploring Artificial Intelligence, machine learning, AI-powered applications, and practical AI product development.',
    tag: 'AI',
  },
  {
    title: 'AI & Full-Stack Development',
    detail:
      'Building modern full-stack applications with React, Node.js, APIs, databases, and AI integrations.',
    tag: 'FULL-STACK',
  },
  {
    title: 'Modern Web & 3D',
    detail:
      'Working with React, TypeScript, Three.js, responsive interfaces, and interactive modern web experiences.',
    tag: 'WEB / 3D',
  },
  {
    title: 'Open-Source Learning',
    detail:
      'Learning from real-world codebases, building GitHub projects, and continuously improving software engineering skills.',
    tag: 'LEARNING',
  },
]

const leadership = [
  'UHP Engineering Team Coordinator — 2026–2027',
  'Hostel Mess Secretary & Price Controller — Quaid-e-Azam Hostel, UET Taxila',
  'Member, Wall of Hope (WOH) Society',
  'Member, UET Adventure Club (UETAC)',
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function AboutSection() {
  const profileRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-7, 7]),
    {
      stiffness: 120,
      damping: 18,
      mass: 0.5,
    },
  )

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [7, -7]),
    {
      stiffness: 120,
      damping: 18,
      mass: 0.5,
    },
  )

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (!profileRef.current) return

    const rect = profileRef.current.getBoundingClientRect()

    const x =
      (event.clientX - rect.left) / rect.width - 0.5

    const y =
      (event.clientY - rect.top) / rect.height - 0.5

    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* =========================================================
          BACKGROUND
          ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)',
          backgroundSize:
            'clamp(32px, 4vw, 48px) clamp(32px, 4vw, 48px)',
        }}
      />

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute left-[5%] top-20 -z-10 h-56 w-56 rounded-full bg-sky-500/[0.06] blur-3xl sm:h-72 sm:w-72"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="pointer-events-none absolute bottom-20 right-[5%] -z-10 h-64 w-64 rounded-full bg-violet-500/[0.06] blur-3xl sm:h-80 sm:w-80"
      />

      {/* =========================================================
          SECTION HEADING
          ========================================================= */}

      <SectionHeading
        eyebrow="About Me"
        title="More Than"
        highlight="Just Code"
        description="A Computer Science student and developer focused on Artificial Intelligence, full-stack engineering, and interactive digital experiences."
      />

      {/* =========================================================
          MAIN CONTENT
          ========================================================= */}

      <div className="mx-auto mt-14 grid w-full max-w-6xl gap-14 sm:mt-16 lg:mt-20 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-16">

        {/* =======================================================
            3D PROFILE SPACE
            ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
          className="relative mx-auto w-full max-w-sm"
          style={{
            perspective: 1200,
          }}
        >
          <div
            ref={profileRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative mx-auto h-[390px] w-full sm:h-[440px]"
          >

            {/* =================================================
                LARGE AMBIENT GLOW
                ================================================= */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[80px] sm:h-80 sm:w-80"
            />

            {/* =================================================
                ORBIT RINGS
                ================================================= */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.08] sm:h-[330px] sm:w-[330px]"
            >
              <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_3px_rgba(103,232,249,0.7)]" />
            </motion.div>

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] rounded-full border border-violet-400/[0.07] sm:h-[380px] sm:w-[380px]"
            >
              <span className="absolute bottom-[8%] left-[8%] h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_12px_3px_rgba(167,139,250,0.6)]" />
            </motion.div>

            {/* =================================================
                FLOATING PARTICLES
                ================================================= */}

            <motion.span
              animate={{
                y: [0, -18, 0],
                x: [0, 8, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute left-[10%] top-[25%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_3px_rgba(103,232,249,0.5)]"
            />

            <motion.span
              animate={{
                y: [0, 15, 0],
                x: [0, -7, 0],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="absolute right-[8%] top-[38%] h-1 w-1 rounded-full bg-violet-300 shadow-[0_0_10px_2px_rgba(167,139,250,0.5)]"
            />

            <motion.span
              animate={{
                y: [0, -12, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute bottom-[25%] left-[12%] h-1 w-1 rounded-full bg-sky-300 shadow-[0_0_10px_2px_rgba(56,189,248,0.5)]"
            />

            <motion.span
              animate={{
                y: [0, 10, 0],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5,
              }}
              className="absolute bottom-[22%] right-[12%] h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_12px_3px_rgba(167,139,250,0.5)]"
            />

            {/* =================================================
                3D IMAGE CARD
                ================================================= */}

            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="absolute left-1/2 top-1/2 z-20 w-[78%] -translate-x-1/2 -translate-y-1/2 sm:w-[76%]"
            >
              <div className="relative rounded-[2rem] border border-white/[0.08] bg-slate-950/55 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-3">

                {/* Top shine */}

                <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />

                {/* Image */}

                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src="/assets/profile.jpg"
                    alt="Ali Rashid — AI & Full-Stack Developer and BS Computer Science student at UET Taxila"
                    className="aspect-square w-full object-cover grayscale-[8%]"
                  />

                  {/* Image overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/10" />

                  {/* Scan line */}

                  <motion.div
                    animate={{
                      y: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'linear',
                      repeatDelay: 2,
                    }}
                    className="pointer-events-none absolute left-0 right-0 top-0 h-16 bg-gradient-to-b from-transparent via-cyan-300/[0.06] to-transparent"
                  />

                  {/* Bottom information */}

                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-300/80 sm:text-[9px]">
                      Current Focus
                    </p>

                    <p className="mt-1 font-display text-base font-medium text-white sm:text-lg">
                      Building intelligent products.
                    </p>
                  </div>
                </div>

                {/* Bottom status line */}

                <div className="flex items-center justify-between px-2 pb-1 pt-3 sm:px-3">
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-slate-600 sm:text-[9px]">
                    AI / FULL-STACK / 3D
                  </span>

                  <span className="flex items-center gap-1.5 font-mono text-[8px] text-emerald-400/70 sm:text-[9px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                    ONLINE
                  </span>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                FLOATING STATUS CARD
                ================================================= */}

            <motion.div
              animate={{
                y: [0, -9, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="glass absolute right-0 top-4 z-30 rounded-2xl border border-cyan-400/15 px-3 py-2.5 shadow-xl shadow-cyan-500/5 sm:-right-3 sm:top-8 sm:px-4 sm:py-3"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_9px_rgba(52,211,153,0.8)]" />

                <span className="font-mono text-[8px] text-cyan-300 sm:text-xs">
                  status: shipping
                </span>
              </div>
            </motion.div>

            {/* =================================================
                UNIVERSITY CARD
                ================================================= */}

            <motion.div
              animate={{
                y: [0, 9, 0],
                rotate: [0, -1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="glass absolute bottom-5 left-0 z-30 rounded-2xl border border-violet-400/15 px-3 py-2.5 shadow-xl shadow-violet-500/5 sm:-left-3 sm:bottom-8 sm:px-4 sm:py-3"
            >
              <p className="font-mono text-[8px] uppercase tracking-wider text-violet-300 sm:text-xs">
                UET Taxila
              </p>
            </motion.div>

            {/* =================================================
                CODE BADGE
                ================================================= */}

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="glass absolute bottom-2 right-3 z-30 hidden rounded-xl border border-slate-700/70 px-3 py-2 font-mono text-[9px] text-slate-500 sm:block"
            >
              {'<build />'}
            </motion.div>
          </div>
        </motion.div>

        {/* =======================================================
            CONTENT
            ======================================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="min-w-0"
        >
          {/* Introduction */}

          <motion.div
            variants={itemVariants}
            className="space-y-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8"
          >
            <p>
              <strong className="font-medium text-slate-100">
                Ali Rashid
              </strong>{' '}
              is a BS Computer Science student at the{' '}
              <strong className="font-medium text-sky-200">
                University of Engineering and Technology (UET) Taxila
              </strong>{' '}
              in Pakistan.
            </p>

            <p>
              His main focus is{' '}
              <strong className="font-medium text-slate-200">
                Artificial Intelligence and Full-Stack Development
              </strong>
              , with a growing interest in building practical AI-powered
              products and intelligent software systems.
            </p>

            <p>
              From{' '}
              <strong className="font-medium text-slate-200">
                frontend interfaces
              </strong>{' '}
              to backend APIs, databases, AI integrations, and{' '}
              <strong className="font-medium text-slate-200">
                interactive 3D experiences
              </strong>
              , he enjoys turning ideas into complete, user-focused products.
            </p>
          </motion.div>

          {/* Mission */}

          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -3,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 18,
            }}
            className="glass glow-border mt-7 overflow-hidden rounded-2xl"
          >
            <div className="relative p-5 sm:p-6">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-sky-400/[0.06] blur-2xl" />

              <div className="relative">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />

                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-300/80 sm:text-[10px]">
                    Career Goal / Mission
                  </p>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                  {profile.careerGoal}
                </p>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              DEVELOPMENT JOURNEY
              ===================================================== */}

          <motion.div
            variants={itemVariants}
            className="mt-12 sm:mt-14"
          >
            <div className="mb-7 flex items-end justify-between">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-sky-300/70 sm:text-[10px]">
                  Development Journey
                </p>

                <h3 className="mt-2 font-display text-xl font-medium text-slate-100 sm:text-2xl">
                  What I&apos;m Building Toward
                </h3>
              </div>

              <span className="hidden font-mono text-[9px] text-slate-600 sm:block">
                01 — 05
              </span>
            </div>

            {/* Timeline */}

            <div className="relative ml-2 border-l border-slate-800/80 pl-6 sm:ml-3 sm:pl-8">
              {points.map((point, index) => (
                <motion.div
                  key={point.title}
                  variants={itemVariants}
                  className="group relative pb-8 last:pb-0"
                >
                  {/* Dot */}

                  <motion.span
                    whileHover={{
                      scale: 1.5,
                    }}
                    className="absolute -left-[30px] top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 shadow-[0_0_12px_2px_rgba(56,189,248,0.5)] transition-all duration-300 group-hover:shadow-[0_0_18px_4px_rgba(56,189,248,0.7)] sm:-left-[39px]"
                  />

                  {/* Connector */}

                  {index < points.length - 1 && (
                    <div className="pointer-events-none absolute -left-[26px] top-5 h-[calc(100%-10px)] w-px bg-gradient-to-b from-sky-400/15 via-violet-400/10 to-transparent sm:-left-[35px]" />
                  )}

                  {/* Content */}

                  <div className="rounded-xl border border-transparent p-1 transition-all duration-300 group-hover:border-slate-800/70 group-hover:bg-slate-950/30 sm:p-2">
                    <div className="mb-1.5 flex flex-wrap items-center gap-2">
                      <h4 className="font-display text-sm font-medium text-slate-100 transition-colors duration-300 group-hover:text-sky-300 sm:text-base">
                        {point.title}
                      </h4>

                      <span className="rounded-full border border-slate-800 bg-slate-950/40 px-2 py-0.5 font-mono text-[7px] uppercase tracking-wider text-slate-600 sm:text-[8px]">
                        {point.tag}
                      </span>
                    </div>

                    <p className="text-xs leading-5 text-slate-500 transition-colors duration-300 group-hover:text-slate-400 sm:text-sm sm:leading-6">
                      {point.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* =========================================================
          LEADERSHIP
          ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.7,
        }}
        className="mx-auto mt-14 w-full max-w-6xl sm:mt-16"
      >
        <div className="glass glow-border overflow-hidden rounded-3xl">
          <div className="p-5 sm:p-7 lg:p-8">

            {/* Header */}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/5">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_10px_rgba(167,139,250,0.7)]" />
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-violet-300/70">
                    Beyond Development
                  </p>

                  <h3 className="mt-1 font-display text-lg font-medium text-slate-100 sm:text-xl">
                    Leadership & University Activities
                  </h3>
                </div>
              </div>

              <span className="font-mono text-[9px] text-slate-600">
                EXPERIENCE / COMMUNITY
              </span>
            </div>

            {/* Leadership cards */}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {leadership.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.4,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="group rounded-2xl border border-slate-800/70 bg-slate-950/25 p-4 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-400/[0.03]"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400 transition-transform duration-300 group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(167,139,250,0.7)]" />

                    <p className="text-xs leading-5 text-slate-400 transition-colors duration-300 group-hover:text-slate-200 sm:text-sm sm:leading-6">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom decorative line */}

      <div
        aria-hidden="true"
        className="mx-auto mt-16 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
      />
    </section>
  )
}