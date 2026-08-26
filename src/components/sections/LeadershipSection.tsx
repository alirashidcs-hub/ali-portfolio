import { motion } from 'framer-motion'
import { Award, Users, BriefcaseBusiness } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import TimelineList from '../Timeline'

const highlights = [
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
]

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-28 md:py-32"
    >
      {/* Ambient background */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -left-32 top-32 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.06, 0.14, 0.06],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="pointer-events-none absolute -right-32 bottom-20 -z-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"
      />

      <SectionHeading
        eyebrow="Leadership & Experience"
        title="Beyond"
        highlight="the classroom"
        description="Leadership roles, university activities, certifications, and milestones that reflect continuous growth, responsibility, and hands-on experience."
      />

      {/* Leadership Highlights */}
      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {highlights.map((item, index) => {
          const Icon = item.icon

          return (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 28,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                margin: '-60px',
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              whileHover={{
                y: -7,
                scale: 1.02,
              }}
              className="group glass glow-border relative overflow-hidden rounded-2xl p-5 transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.12)]"
            >
              {/* Card glow */}
              <motion.div
                aria-hidden="true"
                animate={{
                  opacity: [0.08, 0.18, 0.08],
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.5,
                }}
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-400/10 blur-3xl"
              />

              {/* Top accent */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex items-center gap-3">
                <motion.span
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 transition-colors duration-300 group-hover:border-violet-400/40 group-hover:bg-violet-400/15"
                >
                  <Icon
                    size={17}
                    className="text-violet-300"
                  />
                </motion.span>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 transition-colors duration-300 group-hover:text-violet-300">
                    {item.label}
                  </p>

                  <p className="mt-1 text-sm text-slate-300 transition-colors duration-300 group-hover:text-white">
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '35%' }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + index * 0.1,
                }}
                className="relative mt-5 h-px bg-gradient-to-r from-violet-400/50 to-transparent"
              />
            </motion.div>
          )
        })}
      </div>

      {/* Timeline */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
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
          delay: 0.2,
          ease: 'easeOut',
        }}
        className="mt-16"
      >
        <TimelineList />
      </motion.div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{
          width: 0,
          opacity: 0,
        }}
        whileInView={{
          width: 96,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
        className="mx-auto mt-16 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent"
      />
    </section>
  )
}