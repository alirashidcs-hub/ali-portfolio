import { motion } from 'framer-motion'
import {
  Award,
  Users,
  BriefcaseBusiness,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import TimelineList from '../Timeline'

const highlights = [
  {
    icon: Users,
    label: 'Leadership',
    text: 'University & team responsibilities',
  },
  {
    icon: Award,
    label: 'Recognition',
    text: 'Certificates & achievements',
  },
  {
    icon: BriefcaseBusiness,
    label: 'Experience',
    text: 'Projects & practical development',
  },
]

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
          ========================================================= */}

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.06, 0.14, 0.06],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -left-40 top-24 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl sm:h-[28rem] sm:w-[28rem]"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="pointer-events-none absolute -right-40 bottom-24 -z-10 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl sm:h-[28rem] sm:w-[28rem]"
      />

      {/* Subtle grid */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.015]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)',
          backgroundSize:
            'clamp(32px, 4vw, 48px) clamp(32px, 4vw, 48px)',
        }}
      />

      {/* =========================================================
          SECTION HEADING
          ========================================================= */}

      <SectionHeading
        eyebrow="Leadership & Experience"
        title="Beyond"
        highlight="the classroom"
        description="Leadership roles, university activities, recognition, and practical experience that reflect responsibility, continuous growth, and hands-on development."
      />

      {/* =========================================================
          TOP STATUS
          ========================================================= */}

      <motion.div
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
          amount: 0.2,
        }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        className="mt-8 flex justify-center sm:justify-start"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/40 px-3 py-1.5 backdrop-blur-md">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-violet-400 opacity-40" />

            <span className="relative h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.7)]" />
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">
            Building • Leading • Learning
          </span>

          <Sparkles
            size={11}
            className="text-violet-300"
          />
        </div>
      </motion.div>

      {/* =========================================================
          HIGHLIGHT CARDS
          ========================================================= */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3"
      >
        {highlights.map((item, index) => {
          const Icon = item.icon

          return (
            <motion.div
              key={item.label}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 28,
                  scale: 0.97,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: 'easeOut',
                  },
                },
              }}
              whileHover={{
                y: -6,
              }}
              className="group glass glow-border relative overflow-hidden rounded-3xl"
            >
              {/* Card glow */}

              <motion.div
                aria-hidden="true"
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.06, 0.14, 0.06],
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.5,
                }}
                className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-violet-400/10 blur-3xl"
              />

              {/* Top gradient */}

              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative p-5 sm:p-6">
                {/* Icon + index */}

                <div className="flex items-start justify-between">
                  <motion.div
                    whileHover={{
                      rotate: 6,
                      scale: 1.08,
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-400/10 via-violet-400/5 to-transparent transition-all duration-300 group-hover:border-violet-400/40 group-hover:bg-violet-400/10"
                  >
                    <Icon
                      size={18}
                      className="text-violet-300"
                    />
                  </motion.div>

                  <span className="font-mono text-[9px] tracking-[0.2em] text-slate-700">
                    0{index + 1}
                  </span>
                </div>

                {/* Text */}

                <div className="mt-6">
                  <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-slate-500 transition-colors duration-300 group-hover:text-violet-300">
                    {item.label}
                  </p>

                  <h3 className="mt-2 font-display text-base font-medium text-slate-100 sm:text-lg">
                    {item.text}
                  </h3>
                </div>

                {/* Bottom line */}

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-violet-400/40 to-transparent" />

                  <ArrowUpRight
                    size={13}
                    className="text-slate-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
                  />
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* =========================================================
          EXPERIENCE TIMELINE HEADER
          ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 18,
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
          duration: 0.6,
          delay: 0.15,
        }}
        className="mt-16 sm:mt-20"
      >
        <div className="flex flex-col gap-3 border-b border-slate-800/70 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-violet-300/70 sm:text-[10px]">
              Leadership Timeline
            </p>

            <h3 className="mt-2 font-display text-xl font-medium text-slate-100 sm:text-2xl">
              Roles, Responsibility & Growth
            </h3>
          </div>

          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700 sm:text-[9px]">
            UNIVERSITY / COMMUNITY / EXPERIENCE
          </span>
        </div>
      </motion.div>

      {/* =========================================================
          TIMELINE
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
          amount: 0.08,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: 'easeOut',
        }}
        className="mt-8 sm:mt-10"
      >
        <TimelineList />
      </motion.div>

      {/* =========================================================
          BOTTOM STATEMENT
          ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 18,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
          delay: 0.25,
        }}
        className="mx-auto mt-14 max-w-2xl text-center sm:mt-16"
      >
        <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-slate-800/70 bg-slate-950/30 px-4 py-2 backdrop-blur-sm">
          <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-slate-600 sm:text-[9px]">
            BEYOND CODE
          </span>

          <span className="h-1 w-1 rounded-full bg-violet-400/60" />

          <span className="font-mono text-[8px] text-slate-500 sm:text-[9px]">
            LEADERSHIP
          </span>

          <span className="text-slate-700">·</span>

          <span className="font-mono text-[8px] text-slate-500 sm:text-[9px]">
            RESPONSIBILITY
          </span>

          <span className="text-slate-700">·</span>

          <span className="font-mono text-[8px] text-slate-500 sm:text-[9px]">
            COMMUNITY
          </span>
        </div>
      </motion.div>

      {/* Bottom decorative line */}

      <motion.div
        initial={{
          width: 0,
          opacity: 0,
        }}
        whileInView={{
          width: 96,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.35,
        }}
        className="mx-auto mt-16 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent"
      />
    </section>
  )
}