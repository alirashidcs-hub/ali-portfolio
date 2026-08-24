import { motion, type Variants } from 'framer-motion'
import { profile } from '../../data'
import SectionHeading from '../ui/SectionHeading'

const points = [
  {
    title: 'Ali Rashid — BS Computer Science',
    detail:
      'Computer Science student at the University of Engineering and Technology (UET) Taxila, Pakistan.',
  },
  {
    title: 'Artificial Intelligence',
    detail:
      'Exploring Artificial Intelligence, machine learning, AI-powered applications, and practical AI product development.',
  },
  {
    title: 'AI & Full-Stack Developer',
    detail:
      'Building modern full-stack applications with React, Node.js, APIs, databases, and AI integrations.',
  },
  {
    title: 'Modern Web Development',
    detail:
      'Working with React, TypeScript, Three.js, responsive interfaces, and modern web technologies.',
  },
  {
    title: 'Open-Source Learning',
    detail:
      'Learning from real-world codebases, building GitHub projects, and continuously improving software engineering skills.',
  },
]

const leadership = [
  'UHP Engineering Team Coordinator — 2026–2027',
  'Hostel Mess Secretary & Price Controller — Quaid-e-Azam Hostel, UET Taxila',
  'Member, Wall of Hope (WOH) Society',
  'Member, UET Adventure Club (UETAC)',
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
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
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-500/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -z-10 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl"
      />

      <SectionHeading
        eyebrow="About Me"
        title="Ali Rashid"
        highlight="AI & Full-Stack Developer"
        description="Learn more about Ali Rashid, a BS Computer Science student at the University of Engineering and Technology (UET) Taxila, focused on Artificial Intelligence, Full-Stack Development, and modern software engineering."
      />

      <div className="mt-16 grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        {/* Profile */}
        <motion.div
          initial={{
            opacity: 0,
            x: -60,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
          className="relative mx-auto w-full max-w-xs"
        >
          {/* Outer glow */}
          <motion.div
            animate={{
              scale: [1, 1.04, 1],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-sky-400/10 blur-2xl"
          />

          <motion.div
            whileHover={{
              y: -6,
              rotateY: 3,
              rotateX: -2,
            }}
            transition={{
              type: 'spring',
              stiffness: 180,
              damping: 15,
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
            className="glass glow-border relative overflow-hidden rounded-3xl p-3"
          >
            <img
              src="/assets/profile.jpg"
              alt="Ali Rashid — AI & Full-Stack Developer and BS Computer Science student at UET Taxila"
              className="aspect-square w-full rounded-2xl object-cover grayscale-[10%]"
            />

            {/* Image overlay */}
            <div className="pointer-events-none absolute inset-3 rounded-2xl bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
          </motion.div>

          {/* Floating status card */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="glass absolute -right-6 -top-6 rounded-2xl border border-cyan-400/10 px-4 py-3 font-mono text-xs text-cyan-300 shadow-lg shadow-cyan-500/5"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            status: shipping
          </motion.div>

          {/* University card */}
          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="glass absolute -bottom-6 -left-6 rounded-2xl border border-violet-400/10 px-4 py-3 font-mono text-xs text-violet-300 shadow-lg shadow-violet-500/5"
          >
            UET Taxila
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {/* Introduction */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 text-slate-400"
          >
            <p>
              <strong className="text-slate-200">
                Ali Rashid
              </strong>{' '}
              is a BS Computer Science student at the{' '}
              <strong className="text-slate-200">
                University of Engineering and Technology (UET) Taxila
              </strong>{' '}
              in Pakistan.
            </p>

            <p>
              Ali Rashid is focused on{' '}
              <strong className="text-slate-200">
                Artificial Intelligence and Full-Stack Development
              </strong>
              , with an interest in building practical AI-powered
              applications and modern web experiences.
            </p>

            <p>
              His work combines frontend development, backend engineering,
              APIs, databases, AI technologies, and interactive web
              experiences. He enjoys turning ideas into complete,
              user-focused software products.
            </p>
          </motion.div>

          {/* Career Goal */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -3,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 18,
            }}
            className="glass glow-border mt-6 rounded-2xl p-5"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-sky-300/80">
              Career Goal / Mission
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              {profile.careerGoal}
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative mt-10 ml-3 space-y-8 border-l border-slate-800 pl-8">
            {points.map((point, index) => (
              <motion.div
                key={point.title}
                variants={itemVariants}
                className="group relative"
              >
                {/* Timeline dot */}
                <motion.span
                  whileHover={{
                    scale: 1.5,
                  }}
                  className="absolute -left-[38px] top-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 shadow-[0_0_12px_2px_rgba(56,189,248,0.6)] transition-shadow group-hover:shadow-[0_0_18px_4px_rgba(56,189,248,0.75)]"
                />

                {/* Connector glow */}
                {index < points.length - 1 && (
                  <div className="pointer-events-none absolute -left-[34px] top-4 h-8 w-px bg-gradient-to-b from-sky-400/20 to-transparent" />
                )}

                <h3 className="font-display text-base text-slate-100 transition-colors duration-300 group-hover:text-sky-300">
                  {point.title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                  {point.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Leadership */}
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
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
        }}
        whileHover={{
          y: -3,
        }}
        className="glass glow-border mt-16 rounded-2xl p-8"
      >
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_10px_2px_rgba(167,139,250,0.5)]" />

          <h3 className="font-display text-lg text-slate-100">
            Leadership & University Activities
          </h3>
        </div>

        <ul className="mt-5 space-y-3">
          {leadership.map((item, index) => (
            <motion.li
              key={item}
              initial={{
                opacity: 0,
                x: -12,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              className="group flex items-start gap-3 text-sm text-slate-400"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400 transition-transform duration-300 group-hover:scale-150" />

              <span className="transition-colors duration-300 group-hover:text-slate-200">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}