import { motion } from 'framer-motion'
import { profile } from '../../data'
import SectionHeading from '../ui/SectionHeading'

const points = [
  { title: profile.degree, detail: profile.university },
  { title: 'AI Enthusiast', detail: 'Exploring applied ML and prompt-driven product features' },
  { title: 'Full-Stack Developer', detail: 'React front ends backed by Node.js / Express APIs' },
  { title: 'Open-Source Learning', detail: 'Reading, contributing to, and learning from real-world codebases' },
  { title: 'Continuous Improvement', detail: 'Always picking up the next tool, framework, or concept' },
]

const leadership = [
  'Hostel Mess Secretary & Price Controller — UET Taxila',
  'Member, Wall of Hope (WOH) Society',
  'Member, UET Adventure Club',
]

export default function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-32">
      <SectionHeading eyebrow="About Me" title="Building at the edge of" highlight="AI and software craft" />

      <div className="mt-16 grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-xs"
        >
          <div className="glass glow-border relative overflow-hidden rounded-3xl p-3">
            <img
              src="/assets/profile.jpg"
              alt={profile.name}
              className="aspect-square w-full rounded-2xl object-cover grayscale-[10%]"
            />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="glass absolute -right-6 -top-6 rounded-2xl px-4 py-3 font-mono text-xs text-cyan-300"
          >
            status: shipping
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="glass absolute -bottom-6 -left-6 rounded-2xl px-4 py-3 font-mono text-xs text-violet-300"
          >
            UET Taxila
          </motion.div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="glass mt-6 rounded-2xl p-5"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-sky-300/80">Career Goal / Mission</p>
            <p className="mt-2 text-sm text-slate-300">{profile.careerGoal}</p>
          </motion.div>

          <div className="relative mt-10 ml-3 space-y-8 border-l border-slate-800 pl-8">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
              >
                <span className="absolute -left-[38px] top-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 shadow-[0_0_12px_2px_rgba(56,189,248,0.6)]" />
                <h3 className="font-display text-base text-slate-100">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{p.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass glow-border mt-16 rounded-2xl p-8"
      >
        <h3 className="font-display text-lg text-slate-100">Leadership</h3>
        <ul className="mt-4 space-y-3">
          {leadership.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
