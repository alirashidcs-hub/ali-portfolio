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
    margin: '-40px',
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -15 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
      transition={{
        duration: 0.45,
        delay,
        ease: 'easeOut',
      }}
      className="group"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="font-body text-sm text-slate-200 transition-colors duration-300 group-hover:text-white">
          {name}
        </span>

        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + 0.2,
          }}
          className="font-mono text-xs text-sky-300"
        >
          {level}%
        </motion.span>
      </div>

      <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-800/80">
        {/* Glow behind progress */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={
            inView
              ? {
                  width: `${level}%`,
                  opacity: 0.35,
                }
              : {
                  width: 0,
                  opacity: 0,
                }
          }
          transition={{
            duration: 1,
            delay: delay + 0.1,
            ease: 'easeOut',
          }}
          className="absolute inset-y-0 left-0 rounded-full bg-sky-400 blur-md"
        />

        {/* Progress bar */}
        <motion.div
          initial={{ width: 0 }}
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
            duration: 1,
            delay,
            ease: 'easeOut',
          }}
          className="relative h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-400"
        />

        {/* Moving highlight */}
        {inView && (
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{
              x: '100%',
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 1.2,
              delay: delay + 0.5,
              ease: 'easeInOut',
            }}
            className="absolute inset-y-0 left-0 w-16 bg-white/30 blur-sm"
          />
        )}
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-5xl overflow-hidden px-6 py-32"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-0 -z-10 h-56 w-56 rounded-full bg-cyan-500/5 blur-3xl"
      />

      <SectionHeading
        eyebrow="Skills"
        title="A toolkit across the"
        highlight="whole stack"
        description="Self-rated proficiency across the languages, frameworks, and tools I work with most — from everyday frontend development to AI systems and immersive 3D experiences."
      />

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
        className="mt-14 grid gap-8 md:grid-cols-2"
      >
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
                scale: 0.98,
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
              y: -5,
            }}
            transition={{
              type: 'spring',
              stiffness: 180,
              damping: 18,
            }}
            className="glass glow-border group/card relative overflow-hidden rounded-2xl p-7"
          >
            {/* Card glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-sky-400/5 blur-3xl transition-opacity duration-500 group-hover/card:opacity-100"
            />

            {/* Category header */}
            <div className="relative flex items-center justify-between">
              <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-300">
                {group.category}
              </h3>

              <span className="rounded-full border border-slate-700/70 bg-slate-900/40 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-slate-500">
                {group.items.length}{' '}
                {group.items.length === 1 ? 'Skill' : 'Skills'}
              </span>
            </div>

            {/* Skills */}
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

            {/* Bottom accent */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '35%' }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: groupIndex * 0.1 + 0.3,
                ease: 'easeOut',
              }}
              className="mt-7 h-px bg-gradient-to-r from-sky-400/50 via-violet-400/30 to-transparent"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}