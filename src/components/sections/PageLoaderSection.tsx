import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const loadingSteps = [
  'Initializing portfolio',
  'Loading experiences',
  'Preparing interface',
]

export default function PageLoaderSection() {
  const [showLoader, setShowLoader] = useState(true)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const stepTimer = window.setInterval(() => {
      setStep((current) => {
        if (current >= loadingSteps.length - 1) {
          return current
        }

        return current + 1
      })
    }, 500)

    const loaderTimer = window.setTimeout(() => {
      setShowLoader(false)
    }, 1900)

    return () => {
      window.clearInterval(stepTimer)
      window.clearTimeout(loaderTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 0.7,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#020617]"
        >
          {/* Background grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(148,163,184,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.7) 1px, transparent 1px)',
              backgroundSize: '42px 42px',
            }}
          />

          {/* Ambient glow */}
          <motion.div
            aria-hidden="true"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.12, 0.22, 0.12],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="pointer-events-none absolute h-72 w-72 rounded-full bg-sky-400/10 blur-[90px]"
          />

          <motion.div
            aria-hidden="true"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.08, 0.16, 0.08],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="pointer-events-none absolute h-64 w-64 rounded-full bg-violet-500/10 blur-[90px]"
          />

          {/* Main loader */}
          <div className="relative z-10 w-full max-w-md px-6 text-center">
            {/* Orbital loader */}
            <div className="relative mx-auto mb-10 h-20 w-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 rounded-full border border-sky-400/20"
              >
                <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-sky-300 shadow-[0_0_14px_4px_rgba(103,232,249,0.6)]" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-2 rounded-full border border-violet-400/15"
              >
                <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_12px_3px_rgba(167,139,250,0.6)]" />
              </motion.div>

              <div className="absolute inset-5 flex items-center justify-center rounded-full border border-white/[0.06] bg-slate-950/70 backdrop-blur-xl">
                <motion.div
                  animate={{
                    scale: [0.8, 1, 0.8],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_5px_rgba(103,232,249,0.35)]"
                />
              </div>
            </div>

            {/* Name */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                ease: 'easeOut',
              }}
              className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl"
            >
              Ali Rashid
            </motion.h1>

            {/* Animated line */}
            <motion.div
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              transition={{
                delay: 0.25,
                duration: 0.65,
                ease: 'easeInOut',
              }}
              className="mx-auto mt-4 h-px w-40 origin-center bg-gradient-to-r from-transparent via-sky-400 to-transparent"
            />

            {/* Specialization */}
            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 0.5,
              }}
              className="mt-4 font-mono text-[10px] uppercase tracking-[0.35em] text-slate-400"
            >
              AI · Full-Stack · 3D
            </motion.p>

            {/* Loading status */}
            <div className="mt-9">
              <div className="flex items-center justify-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
                </span>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={loadingSteps[step]}
                    initial={{
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -5,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-500"
                  >
                    {loadingSteps[step]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Progress */}
              <div className="mx-auto mt-5 h-px w-48 overflow-hidden bg-slate-800">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{
                    duration: 1.75,
                    ease: 'easeInOut',
                  }}
                  className="h-full bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-400"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}