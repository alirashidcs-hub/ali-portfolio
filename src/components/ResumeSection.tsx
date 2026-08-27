import { motion, AnimatePresence } from 'framer-motion'
import {
  Download,
  FileText,
  Eye,
  X,
  ExternalLink,
  Sparkles,
} from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data'
import SectionHeading from './ui/SectionHeading'

export default function ResumeSection() {
  const [preview, setPreview] = useState(false)

  return (
    <section
      id="resume"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* =========================================================
          BACKGROUND GRID
          ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.018]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)',
          backgroundSize:
            'clamp(32px, 4vw, 48px) clamp(32px, 4vw, 48px)',
        }}
      />

      {/* =========================================================
          AMBIENT GLOWS
          ========================================================= */}

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute left-[5%] top-20 -z-10 h-64 w-64 rounded-full bg-sky-500/[0.06] blur-3xl sm:h-80 sm:w-80"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="pointer-events-none absolute bottom-10 right-[5%] -z-10 h-72 w-72 rounded-full bg-violet-500/[0.06] blur-3xl sm:h-96 sm:w-96"
      />

      {/* =========================================================
          HEADING
          ========================================================= */}

      <SectionHeading
        eyebrow="Resume"
        title="A concise look at"
        highlight="my journey"
        description="A one-page overview of my education, technical skills, projects, leadership experience, and current direction."
        align="center"
      />

      {/* =========================================================
          RESUME CARD
          ========================================================= */}

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
          amount: 0.15,
        }}
        transition={{
          duration: 0.7,
          ease: 'easeOut',
        }}
        className="mx-auto mt-14 w-full max-w-5xl"
      >
        <motion.div
          whileHover={{
            y: -5,
          }}
          transition={{
            type: 'spring',
            stiffness: 180,
            damping: 20,
          }}
          className="glass glow-border group relative overflow-hidden rounded-[2rem]"
        >
          {/* =====================================================
              CARD TOP GLOW
              ===================================================== */}

          <motion.div
            aria-hidden="true"
            animate={{
              opacity: [0.08, 0.18, 0.08],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
          />

          <motion.div
            aria-hidden="true"
            animate={{
              opacity: [0.05, 0.12, 0.05],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"
          />

          {/* =====================================================
              TOP ACCENT
              ===================================================== */}

          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
          />

          <div className="relative grid gap-0 lg:grid-cols-[1fr_0.85fr]">
            {/* ===================================================
                LEFT CONTENT
                =================================================== */}

            <div className="p-6 sm:p-8 lg:p-10">
              {/* Status */}

              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                </span>

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-300/80 sm:text-[10px]">
                  Currently Building
                </span>
              </div>

              {/* Title */}

              <div className="mt-7">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{
                      rotate: 6,
                      scale: 1.05,
                    }}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-sky-400/10 via-violet-500/10 to-cyan-400/10 text-cyan-300 shadow-[0_0_35px_rgba(34,211,238,0.08)]"
                  >
                    <FileText size={25} />
                  </motion.div>

                  <div className="min-w-0">
                    <h3 className="font-display text-2xl font-medium tracking-tight text-slate-100 sm:text-3xl">
                      Ali Rashid
                    </h3>

                    <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-cyan-300/70 sm:text-[10px]">
                      AI · Full-Stack · 3D
                    </p>
                  </div>
                </div>

                <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  A concise professional snapshot covering my education,
                  technical skills, projects, leadership experience, and
                  development journey.
                </p>
              </div>

              {/* =================================================
                  METADATA
                  ================================================= */}

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  '1 PAGE',
                  'PDF',
                  'TECHNICAL PROFILE',
                  '2026',
                ].map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.25 + index * 0.06,
                    }}
                    className="rounded-full border border-slate-800/80 bg-slate-950/50 px-3 py-1.5 font-mono text-[8px] uppercase tracking-wider text-slate-500"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>

              {/* =================================================
                  DIVIDER
                  ================================================= */}

              <div className="mt-8 h-px w-full bg-gradient-to-r from-slate-700/70 via-slate-800/50 to-transparent" />

              {/* =================================================
                  ACTIONS
                  ================================================= */}

              <div className="mt-7 flex flex-wrap gap-3">
                <motion.button
                  type="button"
                  data-cursor-hover
                  onClick={() => setPreview(true)}
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group/btn flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/40 px-5 py-2.5 text-sm text-slate-300 backdrop-blur-sm transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  <Eye size={15} />

                  <span>Preview Resume</span>

                  <ExternalLink
                    size={12}
                    className="opacity-40 transition-transform duration-300 group-hover/btn:translate-x-0.5"
                  />
                </motion.button>

                <motion.a
                  data-cursor-hover
                  href={profile.resumeUrl}
                  download
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-[0_0_25px_rgba(56,189,248,0.12)]"
                >
                  <Download size={15} />
                  Download Resume
                </motion.a>
              </div>
            </div>

            {/* ===================================================
                RIGHT — DOCUMENT VISUAL
                =================================================== */}

            <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden border-t border-slate-800/70 p-6 lg:border-l lg:border-t-0 sm:p-8 lg:p-10">
              {/* Decorative grid */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(148,163,184,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.6) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />

              {/* Document */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-[210px] sm:w-[240px]"
              >
                {/* Document glow */}

                <div
                  aria-hidden="true"
                  className="absolute inset-6 rounded-3xl bg-cyan-400/10 blur-3xl"
                />

                <div className="relative overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900/90 p-3 shadow-[0_25px_70px_rgba(0,0,0,0.5)]">
                  {/* Paper */}

                  <div className="relative aspect-[0.707] overflow-hidden rounded-lg bg-slate-100 p-4">
                    {/* Fake resume lines */}

                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-md bg-slate-300" />

                      <div className="space-y-1.5">
                        <div className="h-1.5 w-20 rounded-full bg-slate-400" />
                        <div className="h-1 w-14 rounded-full bg-slate-300" />
                      </div>
                    </div>

                    <div className="mt-5 h-1.5 w-full rounded-full bg-slate-300" />

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <div className="h-1 w-16 rounded-full bg-slate-300" />
                        <div className="h-1 w-full rounded-full bg-slate-200" />
                        <div className="h-1 w-[85%] rounded-full bg-slate-200" />
                        <div className="h-1 w-[70%] rounded-full bg-slate-200" />
                      </div>

                      <div className="space-y-2">
                        <div className="h-1 w-16 rounded-full bg-slate-300" />
                        <div className="h-1 w-full rounded-full bg-slate-200" />
                        <div className="h-1 w-[80%] rounded-full bg-slate-200" />
                        <div className="h-1 w-[65%] rounded-full bg-slate-200" />
                      </div>
                    </div>

                    <div className="mt-5 h-1.5 w-20 rounded-full bg-slate-300" />

                    <div className="mt-3 space-y-2">
                      <div className="h-1 w-full rounded-full bg-slate-200" />
                      <div className="h-1 w-[92%] rounded-full bg-slate-200" />
                      <div className="h-1 w-[82%] rounded-full bg-slate-200" />
                      <div className="h-1 w-[88%] rounded-full bg-slate-200" />
                    </div>

                    {/* Scan effect */}

                    <motion.div
                      aria-hidden="true"
                      animate={{
                        y: ['-100%', '300%'],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatDelay: 2,
                      }}
                      className="pointer-events-none absolute left-0 right-0 top-0 h-20 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
                    />
                  </div>

                  {/* File footer */}

                  <div className="flex items-center justify-between px-1 pb-1 pt-3">
                    <span className="font-mono text-[7px] uppercase tracking-widest text-slate-500">
                      resume.pdf
                    </span>

                    <Sparkles
                      size={11}
                      className="text-cyan-400/70"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating label */}

              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.7,
                }}
                className="absolute right-5 top-7 rounded-full border border-cyan-400/15 bg-slate-950/70 px-3 py-1.5 backdrop-blur-md sm:right-8"
              >
                <span className="font-mono text-[8px] uppercase tracking-wider text-cyan-300/80">
                  professional profile
                </span>
              </motion.div>
            </div>
          </div>

          {/* =====================================================
              BOTTOM STATUS
              ===================================================== */}

          <div className="relative flex flex-col items-center justify-between gap-3 border-t border-slate-800/70 px-6 py-4 sm:flex-row sm:px-8">
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-600">
              PROFILE / DOCUMENT / 01
            </span>

            <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.15em] text-slate-600">
              <span className="h-1 w-1 rounded-full bg-cyan-400/70" />
              Available for opportunities
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* =========================================================
          RESUME PREVIEW MODAL
          ========================================================= */}

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setPreview(false)}
            className="fixed inset-0 z-[95] flex items-center justify-center bg-black/85 p-3 backdrop-blur-md sm:p-6"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950 shadow-[0_30px_100px_rgba(0,0,0,0.7)]"
            >
              {/* Modal Header */}

              <div className="flex shrink-0 items-center justify-between border-b border-slate-800/80 bg-slate-950/95 px-4 py-3 backdrop-blur-xl sm:px-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/5 text-cyan-300">
                    <FileText size={15} />
                  </div>

                  <div>
                    <p className="font-display text-sm text-slate-200">
                      Ali Rashid — Resume
                    </p>

                    <p className="font-mono text-[7px] uppercase tracking-widest text-slate-600">
                      Professional Profile
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    data-cursor-hover
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open resume in new tab"
                    className="hidden rounded-full border border-slate-700 p-2 text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300 sm:block"
                  >
                    <ExternalLink size={15} />
                  </a>

                  <button
                    type="button"
                    data-cursor-hover
                    onClick={() => setPreview(false)}
                    aria-label="Close resume preview"
                    className="rounded-full border border-slate-700 p-2 text-slate-400 transition-colors hover:border-red-400/30 hover:text-white"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Resume */}

              <div className="min-h-0 flex-1 bg-slate-900">
                <iframe
                  src={profile.resumeUrl}
                  title="Ali Rashid Resume Preview"
                  className="h-full w-full border-0"
                />
              </div>

              {/* Modal Footer */}

              <div className="flex shrink-0 items-center justify-between border-t border-slate-800/80 bg-slate-950/95 px-4 py-2.5 sm:px-5">
                <span className="font-mono text-[7px] uppercase tracking-widest text-slate-600">
                  PDF DOCUMENT
                </span>

                <a
                  href={profile.resumeUrl}
                  download
                  className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-wider text-cyan-300 transition-colors hover:text-white"
                >
                  <Download size={12} />
                  Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          BOTTOM DECORATIVE LINE
          ========================================================= */}

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
        className="mx-auto mt-16 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
      />
    </section>
  )
}