import { motion } from 'framer-motion'
import {
  GraduationCap,
  CalendarDays,
  BookOpen,
  Sparkles,
  ArrowDown,
} from 'lucide-react'
import { profile, skillGroups } from '../../data'
import SectionHeading from '../ui/SectionHeading'

const currentlyLearning =
  skillGroups.find((g) => g.category === 'Currently Learning')?.items ?? []

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
          ========================================================= */}

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -left-40 top-10 -z-10 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl sm:h-[26rem] sm:w-[26rem]"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.11, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl sm:h-[26rem] sm:w-[26rem]"
      />

      {/* =========================================================
          SECTION HEADING
          ========================================================= */}

      <SectionHeading
        eyebrow="Education"
        title="Where the"
        highlight="foundation was built"
        description="Academic foundations in computer science combined with continuous learning across artificial intelligence, software engineering, and modern technologies."
      />

      {/* =========================================================
          EDUCATION TIMELINE
          ========================================================= */}

      <div className="relative mt-12 sm:mt-16">
        {/* Desktop timeline */}

        <div
          aria-hidden="true"
          className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-sky-400/70 via-violet-500/40 to-transparent md:block"
        />

        {/* Timeline glow */}

        <motion.div
          aria-hidden="true"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-[21px] top-[52px] hidden h-3 w-3 rounded-full bg-sky-400 blur-md md:block"
        />

        {/* Timeline node */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            rotate: -8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          whileHover={{
            scale: 1.08,
            rotate: 3,
          }}
          className="absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/30 bg-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.15)] md:flex"
        >
          <GraduationCap
            size={21}
            className="text-sky-300"
          />
        </motion.div>

        {/* =======================================================
            MAIN CARD
            ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: '-80px',
          }}
          transition={{
            duration: 0.75,
            ease: 'easeOut',
          }}
          whileHover={{
            y: -4,
          }}
          className="md:ml-16"
        >
          <div className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/50 shadow-2xl shadow-black/20 backdrop-blur-xl">
            {/* Animated top accent */}

            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
              }}
              className="h-px origin-left bg-gradient-to-r from-transparent via-sky-400/80 to-transparent"
            />

            {/* Internal glow */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-sky-400/5 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-violet-500/5 blur-3xl"
            />

            <div className="relative p-6 sm:p-8 lg:p-10">
              {/* =================================================
                  HEADER
                  ================================================= */}

              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  {/* Mobile icon */}

                  <motion.div
                    whileHover={{
                      rotate: 5,
                      scale: 1.05,
                    }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-400/20 bg-gradient-to-br from-sky-400/10 via-violet-500/10 to-cyan-400/10 md:hidden"
                  >
                    <GraduationCap
                      size={21}
                      className="text-sky-300"
                    />
                  </motion.div>

                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-sky-300/80 sm:text-[10px] sm:tracking-[0.3em]">
                      Academic Journey
                    </p>

                    <h3 className="mt-2 font-display text-xl leading-tight text-slate-100 sm:text-2xl">
                      {profile.degree}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-violet-300">
                      {profile.university}
                    </p>
                  </div>
                </div>

                {/* Date */}

                <motion.div
                  whileHover={{
                    y: -2,
                  }}
                  className="flex w-fit items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/60 px-3.5 py-2"
                >
                  <CalendarDays
                    size={13}
                    className="text-sky-400"
                  />

                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 sm:text-[10px]">
                    2023 — Present
                  </span>
                </motion.div>
              </div>

              {/* =================================================
                  CURRENT STATUS
                  ================================================= */}

              <motion.div
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
                  delay: 0.25,
                  duration: 0.5,
                }}
                className="mt-7 flex items-center gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                </span>

                <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-300 sm:text-[10px]">
                  Currently Studying
                </span>
              </motion.div>

              {/* Divider */}

              <div className="my-7 h-px bg-gradient-to-r from-slate-800 via-slate-700/70 to-transparent sm:my-8" />

              {/* =================================================
                  TWO COLUMN CONTENT
                  ================================================= */}

              <div className="grid gap-8 md:grid-cols-2 md:gap-10">
                {/* Coursework */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 0.55,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <BookOpen
                      size={15}
                      className="text-cyan-300"
                    />

                    <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-300 sm:text-[10px] sm:tracking-[0.25em]">
                      Relevant Coursework
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {profile.coursework.map((course, index) => (
                      <motion.span
                        key={course}
                        initial={{
                          opacity: 0,
                          scale: 0.92,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: 0.2 + index * 0.04,
                          duration: 0.3,
                        }}
                        whileHover={{
                          y: -2,
                          scale: 1.03,
                        }}
                        className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1.5 text-[11px] text-slate-300 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-200 sm:text-xs"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Currently Learning */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.25,
                    duration: 0.55,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{
                        rotate: [0, 8, -8, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <Sparkles
                        size={15}
                        className="text-violet-300"
                      />
                    </motion.div>

                    <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-violet-300 sm:text-[10px] sm:tracking-[0.25em]">
                      Currently Learning
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {currentlyLearning.map((item, index) => (
                      <motion.span
                        key={item.name}
                        initial={{
                          opacity: 0,
                          scale: 0.92,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: 0.3 + index * 0.04,
                          duration: 0.3,
                        }}
                        whileHover={{
                          y: -2,
                          scale: 1.03,
                        }}
                        className="rounded-full border border-violet-400/30 bg-violet-400/5 px-3 py-1.5 text-[11px] text-violet-200 transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-400/10 sm:text-xs"
                      >
                        {item.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* =================================================
                  BOTTOM VISUAL ACCENT
                  ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scaleX: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                }}
                className="mt-9 flex origin-left items-center gap-3"
              >
                <div className="h-px flex-1 bg-gradient-to-r from-sky-400/30 to-transparent" />

                <motion.div
                  animate={{
                    y: [0, 4, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="text-slate-700"
                >
                  <ArrowDown size={14} />
                </motion.div>

                <div className="h-px flex-1 bg-gradient-to-l from-violet-400/30 to-transparent" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}