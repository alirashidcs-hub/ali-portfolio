import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { profile, skillGroups } from '../../data'
import SectionHeading from '../ui/SectionHeading'

const currentlyLearning = skillGroups.find((g) => g.category === 'Currently Learning')?.items ?? []

export default function EducationSection() {
  return (
    <section id="education" className="relative mx-auto max-w-5xl px-6 py-32">
      <SectionHeading eyebrow="Education" title="Where the" highlight="foundation was built" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass glow-border mt-14 rounded-3xl p-8 sm:p-10"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="rounded-2xl bg-gradient-to-br from-sky-400/20 via-violet-500/20 to-cyan-400/20 p-3 text-sky-300">
              <GraduationCap size={24} />
            </span>
            <div>
              <h3 className="font-display text-lg text-slate-100">{profile.degree}</h3>
              <p className="font-mono text-xs text-slate-500">{profile.university}</p>
            </div>
          </div>
          <span className="rounded-full border border-slate-700 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-slate-400">
            2023 — Present
          </span>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-cyan-300">Relevant Coursework</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.coursework.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 text-xs text-slate-300"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-violet-300">Currently Learning</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {currentlyLearning.map((item) => (
                <span
                  key={item.name}
                  className="rounded-full border border-violet-400/30 bg-violet-400/5 px-3 py-1 text-xs text-violet-200"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
