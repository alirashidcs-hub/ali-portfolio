import { motion } from 'framer-motion'
import { GraduationCap, CalendarDays, BookOpen, Sparkles } from 'lucide-react'
import { profile, skillGroups } from '../../data'
import SectionHeading from '../ui/SectionHeading'

const currentlyLearning =
  skillGroups.find((g) => g.category === 'Currently Learning')?.items ?? []

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative mx-auto max-w-6xl px-6 py-28 md:py-32"
    >
      <SectionHeading
        eyebrow="Education"
        title="Where the"
        highlight="foundation was built"
        description="Academic foundations in computer science combined with continuous learning across artificial intelligence, software engineering, and modern technologies."
      />

      <div className="relative mt-16">
        {/* Timeline glow */}
        <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-sky-400/60 via-violet-500/40 to-transparent md:block" />

        {/* Timeline node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/30 bg-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.12)] md:flex"
        >
          <GraduationCap
            size={21}
            className="text-sky-300"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
          }}
          className="md:ml-16"
        >
          <div className="glass glow-border overflow-hidden rounded-3xl">
            {/* Top accent */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />

            <div className="p-7 sm:p-10">
              {/* Header */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  {/* Mobile icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-400/20 bg-gradient-to-br from-sky-400/10 via-violet-500/10 to-cyan-400/10 md:hidden">
                    <GraduationCap
                      size={21}
                      className="text-sky-300"
                    />
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sky-300/80">
                      Academic Journey
                    </p>

                    <h3 className="mt-2 font-display text-xl text-slate-100 sm:text-2xl">
                      {profile.degree}
                    </h3>

                    <p className="mt-2 text-sm text-violet-300">
                      {profile.university}
                    </p>
                  </div>
                </div>

                {/* Date */}
                <div className="flex w-fit items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/50 px-3.5 py-2">
                  <CalendarDays
                    size={13}
                    className="text-sky-400"
                  />

                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                    2023 — Present
                  </span>
                </div>
              </div>

              {/* Current status */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-7 flex items-center gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-300">
                  Currently Studying
                </span>
              </motion.div>

              {/* Divider */}
              <div className="my-8 h-px bg-slate-800/80" />

              {/* Two columns */}
              <div className="grid gap-10 md:grid-cols-2">
                {/* Coursework */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <div className="flex items-center gap-2">
                    <BookOpen
                      size={15}
                      className="text-cyan-300"
                    />

                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-300">
                      Relevant Coursework
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {profile.coursework.map((course, index) => (
                      <motion.span
                        key={course}
                        initial={{
                          opacity: 0,
                          scale: 0.95,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.2 + index * 0.04,
                        }}
                        className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-200"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Currently Learning */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                >
                  <div className="flex items-center gap-2">
                    <Sparkles
                      size={15}
                      className="text-violet-300"
                    />

                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet-300">
                      Currently Learning
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {currentlyLearning.map((item, index) => (
                      <motion.span
                        key={item.name}
                        initial={{
                          opacity: 0,
                          scale: 0.95,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3 + index * 0.04,
                        }}
                        className="rounded-full border border-violet-400/30 bg-violet-400/5 px-3 py-1.5 text-xs text-violet-200 transition-all hover:border-violet-400/50 hover:bg-violet-400/10"
                      >
                        {item.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}