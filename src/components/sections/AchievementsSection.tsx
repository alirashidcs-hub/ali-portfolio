import { motion } from 'framer-motion'
import { Rocket, Award, Users, BookOpen } from 'lucide-react'
import { projects, certificates, timeline, skillGroups } from '../../data'
import SectionHeading from '../ui/SectionHeading'
import Counter from '../ui/Counter'

const learningTopics = skillGroups.find((g) => g.category === 'Currently Learning')?.items.length ?? 0
const leadershipCount = timeline.filter((t) => t.type === 'leadership').length

const stats = [
  { icon: Rocket, label: 'Projects Shipped', value: projects.length },
  { icon: Award, label: 'Certificates Earned', value: certificates.length },
  { icon: Users, label: 'Leadership Roles', value: leadershipCount },
  { icon: BookOpen, label: 'Topics In Progress', value: learningTopics },
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative mx-auto max-w-5xl px-6 py-32">
      <SectionHeading
        eyebrow="Achievements"
        title="The work, in"
        highlight="numbers"
        align="center"
      />

      <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass glow-border rounded-2xl p-6 text-center"
          >
            <s.icon size={20} className="mx-auto text-sky-300" />
            <p className="mt-3 font-display text-3xl text-gradient">
              <Counter to={s.value} />
              <span>+</span>
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-500">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
