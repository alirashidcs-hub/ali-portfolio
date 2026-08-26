import { motion } from 'framer-motion'
import { Rocket, Award, Users, BookOpen } from 'lucide-react'
import { projects, certificates, timeline, skillGroups } from '../../data'
import SectionHeading from '../ui/SectionHeading'
import Counter from '../ui/Counter'

const learningTopics =
  skillGroups.find((g) => g.category === 'Currently Learning')?.items.length ?? 0

const leadershipCount = timeline.filter(
  (t) => t.type === 'leadership',
).length

const stats = [
  {
    icon: Rocket,
    label: 'Projects Shipped',
    value: projects.length,
    accent: 'sky',
  },
  {
    icon: Award,
    label: 'Certificates Earned',
    value: certificates.length,
    accent: 'violet',
  },
  {
    icon: Users,
    label: 'Leadership Roles',
    value: leadershipCount,
    accent: 'cyan',
  },
  {
    icon: BookOpen,
    label: 'Topics In Progress',
    value: learningTopics,
    accent: 'indigo',
  },
]

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
          ========================================================= */}

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.05, 0.11, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl sm:h-96 sm:w-96"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.04, 0.1, 0.04],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="pointer-events-none absolute -bottom-20 -right-32 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"
      />

      {/* =========================================================
          HEADING
          ========================================================= */}

      <SectionHeading
        eyebrow="Achievements"
        title="The work, in"
        highlight="numbers"
        align="center"
      />

      {/* =========================================================
          STATS GRID
          ========================================================= */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.1,
            },
          },
        }}
        className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-4"
      >
        {stats.map((s, i) => {
          const Icon = s.icon

          return (
            <motion.div
              key={s.label}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  scale: 0.95,
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
                scale: 1.025,
              }}
              transition={{
                type: 'spring',
                stiffness: 180,
                damping: 18,
              }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/50 p-4 text-center backdrop-blur-xl shadow-xl shadow-black/10 sm:p-6"
            >
              {/* Card glow */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-400/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Top accent */}

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1 + 0.2,
                }}
                className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 origin-center bg-gradient-to-r from-transparent via-sky-400/60 to-transparent"
              />

              {/* Icon */}

              <motion.div
                whileHover={{
                  rotate: 5,
                  scale: 1.08,
                }}
                className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/15 bg-sky-400/5 shadow-[0_0_25px_rgba(56,189,248,0.06)] sm:h-11 sm:w-11"
              >
                <Icon
                  size={19}
                  className="text-sky-300"
                />
              </motion.div>

              {/* Counter */}

              <p className="mt-3 font-display text-2xl leading-none text-gradient sm:mt-4 sm:text-3xl">
                <Counter to={s.value} />
                <span>+</span>
              </p>

              {/* Label */}

              <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.12em] text-slate-500 sm:text-[10px] sm:tracking-widest">
                {s.label}
              </p>

              {/* Bottom indicator */}

              <div className="mx-auto mt-4 h-px w-8 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent transition-all duration-300 group-hover:w-14" />
            </motion.div>
          )
        })}
      </motion.div>

      {/* =========================================================
          SMALL STATUS LINE
          ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
          delay: 0.45,
        }}
        className="mt-8 flex items-center justify-center gap-2"
      >
        <motion.span
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]"
        />

        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600 sm:text-[10px] sm:tracking-[0.25em]">
          Building • Learning • Shipping
        </p>
      </motion.div>
    </section>
  )
}