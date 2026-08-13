import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillGroups } from '../../data'
import SectionHeading from '../ui/SectionHeading'

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between">
        <span className="font-body text-sm text-slate-200">{name}</span>
        <span className="font-mono text-xs text-sky-300">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800/80">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-400"
        />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-6 py-32">
      <SectionHeading
        eyebrow="Skills"
        title="A toolkit across the"
        highlight="whole stack"
        description="Self-rated proficiency across the languages, frameworks, and tools I work with most — from everyday frontend work to AI and 3D experiments."
      />

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.05 }}
            className="glass glow-border rounded-2xl p-7"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-300">{group.category}</h3>
            <div className="mt-6 space-y-5">
              {group.items.map((item, i) => (
                <SkillBar key={item.name} name={item.name} level={item.level} delay={i * 0.08} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
