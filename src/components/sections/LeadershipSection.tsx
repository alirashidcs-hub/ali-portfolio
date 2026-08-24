import { motion } from 'framer-motion'
import { Award, Users, BriefcaseBusiness } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import TimelineList from '../Timeline'

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="relative mx-auto max-w-6xl px-6 py-28 md:py-32"
    >
      <SectionHeading
        eyebrow="Leadership & Experience"
        title="Beyond"
        highlight="the classroom"
        description="Leadership roles, university activities, certifications, and milestones that reflect continuous growth, responsibility, and hands-on experience."
      />

      {/* Leadership highlights */}
      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {[
          {
            icon: Users,
            label: 'Leadership',
            text: 'University & team roles',
          },
          {
            icon: Award,
            label: 'Recognition',
            text: 'Certificates & achievements',
          },
          {
            icon: BriefcaseBusiness,
            label: 'Experience',
            text: 'Projects & practical work',
          },
        ].map((item, index) => {
          const Icon = item.icon

          return (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-60px',
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -4,
              }}
              className="glass glow-border rounded-2xl p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10">
                  <Icon
                    size={17}
                    className="text-violet-300"
                  />
                </span>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    {item.label}
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Timeline */}
      <motion.div
        initial={{
          opacity: 0,
          y: 24,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: '-80px',
        }}
        transition={{
          duration: 0.7,
          delay: 0.15,
        }}
        className="mt-16"
      >
        <TimelineList />
      </motion.div>
    </section>
  )
}