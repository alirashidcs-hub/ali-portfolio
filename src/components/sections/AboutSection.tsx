import {
  motion,
  type Variants,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Brain, Code2, GraduationCap, Layers3 } from 'lucide-react'
import { profile } from '../../data'
import SectionHeading from '../ui/SectionHeading'

const points = [
  {
    title: 'Computer Science',
    detail:
      'BS Computer Science student at the University of Engineering and Technology (UET) Taxila, building a strong foundation in software engineering and computing.',
    tag: 'EDUCATION',
    icon: GraduationCap,
  },
  {
    title: 'Artificial Intelligence',
    detail:
      'Exploring AI systems, intelligent applications, machine learning concepts, and practical AI product development.',
    tag: 'AI',
    icon: Brain,
  },
  {
    title: 'Full-Stack Engineering',
    detail:
      'Building complete applications across frontend interfaces, backend APIs, databases, authentication, and AI integrations.',
    tag: 'FULL-STACK',
    icon: Code2,
  },
  {
    title: 'Interactive 3D Web',
    detail:
      'Creating immersive browser experiences with React, TypeScript, Three.js, responsive design, and modern UI systems.',
    tag: '3D / WEB',
    icon: Layers3,
  },
]

const leadership = [
  {
    title: 'UHP Engineering Team Coordinator',
    detail: '2026–2027',
  },
  {
    title: 'Hostel Mess Secretary & Price Controller',
    detail: 'Quaid-e-Azam Hostel, UET Taxila',
  },
  {
    title: 'Wall of Hope (WOH)',
    detail: 'Society Member',
  },
  {
    title: 'UET Adventure Club (UETAC)',
    detail: 'Club Member',
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
}

export default function AboutSection() {
  const profileRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-6, 6]),
    {
      stiffness: 120,
      damping: 18,
      mass: 0.5,
    },
  )

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [6, -6]),
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

    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

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
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute left-[5%] top-32 -z-10 h-56 w-56 rounded-full bg-sky-500/[0.05] blur-3xl sm:h-72 sm:w-72"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="pointer-events-none absolute bottom-24 right-[5%] -z-10 h-64 w-64 rounded-full bg-violet-500/[0.05] blur-3xl sm:h-80 sm:w-80"
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

      <div className="mx-auto mt-14 grid w-full max-w-6xl gap-14 sm:mt-16 lg:mt-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">

        {/* =======================================================
            PROFILE
            ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
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
            duration: 0.75,
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
            className="relative h-[390px] w-full sm:h-[440px]"
          >
            {/* Ambient glow */}

            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                opacity: [0.18, 0.32, 0.18],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[80px] sm:h-80 sm:w-80"
            />

            {/* Orbit */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.07] sm:h-[350px] sm:w-[350px]"
            >
              <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_3px_rgba(103,232,249,0.65)]" />
            </motion.div>

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 38,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[325px] w-[325px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/[0.055] sm:h-[390px] sm:w-[390px]"
            />

            {/* Profile card */}

            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="absolute left-1/2 top-1/2 z-20 w-[78%] -translate-x-1/2 -translate-y-1/2 sm:w-[76%]"
            >
              <div className="relative rounded-[2rem] border border-white/[0.08] bg-slate-950/65 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-3">

                <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.07] via-transparent to-transparent" />

                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src="/assets/profile.jpg"
                    alt="Ali Rashid — AI & Full-Stack Developer and BS Computer Science student at UET Taxila"
                    className="aspect-square w-full object-cover grayscale-[8%]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/10" />

                  <motion.div
                    animate={{
                      y: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'linear',
                      repeatDelay: 3,
                    }}
                    className="pointer-events-none absolute left-0 right-0 top-0 h-16 bg-gradient-to-b from-transparent via-cyan-300/[0.05] to-transparent"
                  />

                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-300/80 sm:text-[9px]">
                      Current Focus
                    </p>

                    <p className="mt-1 font-display text-base font-medium text-white sm:text-lg">
                      Building intelligent products.
                    </p>
                  </div>
                </div>

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

            {/* Status */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="glass absolute right-0 top-5 z-30 rounded-2xl border border-cyan-400/15 px-3 py-2.5 shadow-xl shadow-cyan-500/5 sm:-right-3 sm:top-8 sm:px-4 sm:py-3"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_9px_rgba(52,211,153,0.8)]" />

                <span className="font-mono text-[8px] text-cyan-300 sm:text-xs">
                  status: shipping
                </span>
              </div>
            </motion.div>

            {/* University */}

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="glass absolute bottom-6 left-0 z-30 rounded-2xl border border-violet-400/15 px-3 py-2.5 shadow-xl shadow-violet-500/5 sm:-left-3 sm:bottom-8 sm:px-4 sm:py-3"
            >
              <p className="font-mono text-[8px] uppercase tracking-wider text-violet-300 sm:text-xs">
                UET Taxila
              </p>
            </motion.div>

            {/* Code */}

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="glass absolute bottom-3 right-3 z-30 hidden rounded-xl border border-slate-700/70 px-3 py-2 font-mono text-[9px] text-slate-500 sm:block"
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
              His work focuses on{' '}
              <strong className="font-medium text-slate-200">
                Artificial Intelligence and Full-Stack Development
              </strong>
              , with an emphasis on turning ideas into practical,
              user-focused software products.
            </p>

            <p>
              He enjoys working across the stack — from{' '}
              <strong className="font-medium text-slate-200">
                frontend interfaces
              </strong>{' '}
              and backend APIs to databases, AI integrations, and{' '}
              <strong className="font-medium text-slate-200">
                interactive 3D experiences
              </strong>
              .
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
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-sky-400/[0.05] blur-2xl" />

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

          {/* Development Journey */}

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
                01 — 04
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {points.map((point) => {
                const Icon = point.icon

                return (
                  <motion.div
                    key={point.title}
                    variants={itemVariants}
                    whileHover={{
                      y: -4,
                    }}
                    className="group rounded-2xl border border-slate-800/70 bg-slate-950/25 p-4 transition-all duration-300 hover:border-sky-400/20 hover:bg-slate-900/35"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-sky-400/10 bg-sky-400/[0.04] text-sky-300 transition-colors duration-300 group-hover:border-sky-400/25 group-hover:bg-sky-400/[0.08]">
                        <Icon size={16} />
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-display text-sm font-medium text-slate-100 transition-colors duration-300 group-hover:text-sky-300 sm:text-base">
                            {point.title}
                          </h4>

                          <span className="rounded-full border border-slate-800 bg-slate-950/50 px-2 py-0.5 font-mono text-[7px] uppercase tracking-wider text-slate-600 sm:text-[8px]">
                            {point.tag}
                          </span>
                        </div>

                        <p className="mt-2 text-xs leading-5 text-slate-500 transition-colors duration-300 group-hover:text-slate-400 sm:text-sm sm:leading-6">
                          {point.detail}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
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
          y: 25,
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

            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_10px_rgba(167,139,250,0.7)]" />

                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-violet-300/70">
                    Beyond Development
                  </p>
                </div>

                <h3 className="mt-2 font-display text-xl font-medium text-slate-100 sm:text-2xl">
                  Leadership & University Activities
                </h3>
              </div>

              <span className="font-mono text-[9px] text-slate-600">
                EXPERIENCE / COMMUNITY
              </span>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {leadership.map((item, index) => (
                <motion.div
                  key={item.title}
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
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400 transition-transform duration-300 group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(167,139,250,0.7)]" />

                    <div>
                      <p className="font-display text-sm font-medium text-slate-200 transition-colors duration-300 group-hover:text-violet-200 sm:text-base">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <a
                href="#leadership"
                data-cursor-hover
                className="group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-slate-500 transition-colors hover:text-violet-300 sm:text-[10px]"
              >
                View Timeline
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
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