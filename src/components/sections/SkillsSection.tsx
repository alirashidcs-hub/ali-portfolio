import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillGroups } from '../../data'
import SectionHeading from '../ui/SectionHeading'

function SkillBar({
  name,
  level,
  delay,
}: {
  name: string
  level: number
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  const inView = useInView(ref, {
    once: true,
    margin: '-50px',
  })

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: -18,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              x: 0,
            }
          : {
              opacity: 0,
              x: -18,
            }
      }
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeOut',
      }}
      className="group"
    >
      {/* Skill name + percentage */}

      <div className="mb-2.5 flex items-center justify-between gap-3">
        <span className="min-w-0 truncate font-body text-sm font-medium text-slate-300 transition-colors duration-300 group-hover:text-white">
          {name}
        </span>

        <motion.span
          initial={{
            opacity: 0,
            x: 6,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  x: 0,
                }
              : {
                  opacity: 0,
                  x: 6,
                }
          }
          transition={{
            duration: 0.4,
            delay: delay + 0.25,
          }}
          className="shrink-0 font-mono text-[10px] font-medium text-cyan-300 sm:text-xs"
        >
          {level}%
        </motion.span>
      </div>

      {/* Progress track */}

      <div className="relative h-2 overflow-hidden rounded-full border border-slate-800/60 bg-slate-950/80 shadow-inner">
        {/* Glow */}

        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={
            inView
              ? {
                  width: `${level}%`,
                  opacity: 0.45,
                }
              : {
                  width: 0,
                  opacity: 0,
                }
          }
          transition={{
            duration: 1.15,
            delay: delay + 0.1,
            ease: 'easeOut',
          }}
          className="absolute inset-y-0 left-0 rounded-full bg-cyan-400 blur-md"
        />

        {/* Main progress */}

        <motion.div
          initial={{
            width: 0,
          }}
          animate={
            inView
              ? {
                  width: `${level}%`,
                }
              : {
                  width: 0,
                }
          }
          transition={{
            duration: 1.15,
            delay,
            ease: 'easeOut',
          }}
          className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-300"
        >
          {/* Moving energy */}

          {inView && (
            <motion.div
              initial={{
                x: '-120%',
                opacity: 0,
              }}
              animate={{
                x: '180%',
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 1.4,
                delay: delay + 0.55,
                ease: 'easeInOut',
              }}
              className="absolute inset-y-0 left-0 w-12 bg-white/40 blur-sm"
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* =========================================================
          BACKGROUND GRID
          ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.018]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)',
          backgroundSize:
            'clamp(32px, 4vw, 48px) clamp(32px, 4vw, 48px)',
        }}
      />

      {/* =========================================================
          AMBIENT GLOWS
          ========================================================= */}

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
        className="pointer-events-none absolute left-[5%] top-16 -z-10 h-56 w-56 rounded-full bg-violet-500/[0.07] blur-3xl sm:h-72 sm:w-72"
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
        className="pointer-events-none absolute bottom-10 right-[5%] -z-10 h-64 w-64 rounded-full bg-cyan-500/[0.06] blur-3xl sm:h-80 sm:w-80"
      />

      {/* =========================================================
          HEADING
          ========================================================= */}

      <SectionHeading
        eyebrow="Skills"
        title="A toolkit across the"
        highlight="whole stack"
        description="Self-rated proficiency across the languages, frameworks, and tools I work with most — from everyday frontend development to AI systems and immersive 3D experiences."
      />

      {/* =========================================================
          SKILL GRID
          ========================================================= */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2"
      >
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
                scale: 0.97,
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.65,
                  ease: 'easeOut',
                },
              },
            }}
            whileHover={{
              y: -6,
            }}
            transition={{
              type: 'spring',
              stiffness: 180,
              damping: 18,
            }}
            className="glass glow-border group/card relative overflow-hidden rounded-3xl p-5 sm:p-7"
          >
            {/* ===================================================
                CARD GLOW
                =================================================== */}

            <motion.div
              aria-hidden="true"
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.08, 0.16, 0.08],
              }}
              transition={{
                duration: 5 + groupIndex,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-sky-400/10 blur-3xl transition-opacity duration-500 group-hover/card:opacity-100"
            />

            {/* Bottom gradient */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-sky-400/[0.025] to-transparent"
            />

            {/* ===================================================
                CATEGORY HEADER
                =================================================== */}

            <div className="relative flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                {/* Category indicator */}

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: groupIndex * 0.2,
                  }}
                  className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 shadow-[0_0_12px_3px_rgba(56,189,248,0.35)]"
                />

                <h3 className="truncate font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-300 sm:text-xs sm:tracking-widest">
                  {group.category}
                </h3>
              </div>

              <span className="shrink-0 rounded-full border border-slate-700/70 bg-slate-950/50 px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider text-slate-500 sm:text-[9px]">
                {group.items.length}{' '}
                {group.items.length === 1 ? 'Skill' : 'Skills'}
              </span>
            </div>

            {/* ===================================================
                DIVIDER
                =================================================== */}

            <div className="relative mt-5 h-px w-full bg-gradient-to-r from-slate-700/70 via-slate-800/40 to-transparent" />

            {/* ===================================================
                SKILLS
                =================================================== */}

            <div className="relative mt-6 space-y-5">
              {group.items.map((item, itemIndex) => (
                <SkillBar
                  key={item.name}
                  name={item.name}
                  level={item.level}
                  delay={groupIndex * 0.08 + itemIndex * 0.08}
                />
              ))}
            </div>

            {/* ===================================================
                CARD FOOTER
                =================================================== */}

            <div className="relative mt-7 flex items-center justify-between">
              <div className="h-px flex-1 bg-gradient-to-r from-sky-400/40 via-violet-400/20 to-transparent" />

              <span className="ml-4 font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
                proficiency
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* =========================================================
          BOTTOM TECH STATEMENT
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
          delay: 0.2,
        }}
        className="mx-auto mt-10 max-w-3xl text-center sm:mt-12"
      >
        <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-slate-800/70 bg-slate-950/30 px-4 py-2 backdrop-blur-sm">
          <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-slate-600 sm:text-[9px]">
            BUILDING WITH
          </span>

          <span className="h-1 w-1 rounded-full bg-cyan-400/60" />

          <span className="font-mono text-[8px] text-slate-500 sm:text-[9px]">
            AI
          </span>

          <span className="text-slate-700">·</span>

          <span className="font-mono text-[8px] text-slate-500 sm:text-[9px]">
            FULL-STACK
          </span>

          <span className="text-slate-700">·</span>

          <span className="font-mono text-[8px] text-slate-500 sm:text-[9px]">
            3D WEB
          </span>

          <span className="text-slate-700">·</span>

          <span className="font-mono text-[8px] text-slate-500 sm:text-[9px]">
            MODERN SOFTWARE
          </span>
        </div>
      </motion.div>
    </section>
  )
}