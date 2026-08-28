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
    margin: '-60px',
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={
        inView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 14 }
      }
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeOut',
      }}
      className="group"
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="min-w-0 truncate text-sm font-medium text-slate-300 transition-colors duration-300 group-hover:text-white">
          {name}
        </span>

        <span className="shrink-0 font-mono text-[10px] text-slate-500 transition-colors duration-300 group-hover:text-cyan-300 sm:text-xs">
          {level}%
        </span>
      </div>

      <div className="relative h-1.5 overflow-hidden rounded-full bg-slate-900/90">
        <motion.div
          initial={{ width: 0 }}
          animate={
            inView
              ? { width: `${level}%` }
              : { width: 0 }
          }
          transition={{
            duration: 1,
            delay: delay + 0.1,
            ease: 'easeOut',
          }}
          className="relative h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-300"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              inView
                ? {
                    opacity: [0, 0.8, 0],
                    x: ['-100%', '180%'],
                  }
                : { opacity: 0 }
            }
            transition={{
              duration: 1.2,
              delay: delay + 0.45,
              ease: 'easeInOut',
            }}
            className="absolute inset-y-0 left-0 w-10 bg-white/50 blur-sm"
          />
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
      {/* Background grid */}

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

      {/* Ambient glow */}

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute left-[-8%] top-24 -z-10 h-64 w-64 rounded-full bg-violet-500/[0.07] blur-3xl sm:h-80 sm:w-80"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.07, 0.14, 0.07],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="pointer-events-none absolute bottom-16 right-[-8%] -z-10 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-3xl sm:h-96 sm:w-96"
      />

      {/* Heading */}

      <SectionHeading
        eyebrow="Skills"
        title="A toolkit built for"
        highlight="modern products"
        description="A practical stack spanning software engineering, AI, full-stack development, and interactive 3D experiences."
      />

      {/* Skill cards */}

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
          <motion.article
            key={group.category}
            variants={{
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
            }}
            whileHover={{ y: -4 }}
            transition={{
              type: 'spring',
              stiffness: 180,
              damping: 20,
            }}
            className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950/45 p-5 backdrop-blur-xl transition-colors duration-300 hover:border-sky-400/20 hover:bg-slate-900/50 sm:p-7"
          >
            {/* Card accent */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-sky-400/[0.035] blur-3xl transition-opacity duration-500 group-hover:opacity-100"
            />

            {/* Header */}

            <div className="relative flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/30" />

                  <span className="relative h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 shadow-[0_0_12px_2px_rgba(56,189,248,0.35)]" />
                </span>

                <h3 className="truncate font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-300 sm:text-xs sm:tracking-widest">
                  {group.category}
                </h3>
              </div>

              <span className="shrink-0 font-mono text-[8px] uppercase tracking-wider text-slate-600 sm:text-[9px]">
                {String(groupIndex + 1).padStart(2, '0')} /{' '}
                {String(skillGroups.length).padStart(2, '0')}
              </span>
            </div>

            {/* Divider */}

            <div className="relative mt-5 h-px bg-gradient-to-r from-slate-700/70 via-slate-800/30 to-transparent" />

            {/* Skills */}

            <div className="relative mt-6 space-y-5">
              {group.items.map((item, itemIndex) => (
                <SkillBar
                  key={item.name}
                  name={item.name}
                  level={item.level}
                  delay={
                    groupIndex * 0.08 +
                    itemIndex * 0.08
                  }
                />
              ))}
            </div>

            {/* Footer */}

            <div className="relative mt-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-sky-400/20 to-transparent" />

              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-slate-700">
                {group.items.length}{' '}
                {group.items.length === 1
                  ? 'skill'
                  : 'skills'}
              </span>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Supporting statement */}

      <motion.div
        initial={{
          opacity: 0,
          y: 16,
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
        }}
        className="mx-auto mt-10 max-w-3xl text-center sm:mt-12"
      >
        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-600 sm:text-[10px]">
          AI · FULL-STACK · 3D · SOFTWARE ENGINEERING
        </p>
      </motion.div>
    </section>
  )
}