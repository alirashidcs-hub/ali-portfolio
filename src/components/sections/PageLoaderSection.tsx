import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoaderSection() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowLoader(false)
    }, 1800)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#020617]"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
              }}
              className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl"
            >
              Ali Rashid
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                ease: 'easeInOut',
              }}
              className="mx-auto mt-4 h-px w-40 origin-center bg-sky-400"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.5,
              }}
              className="mt-4 font-mono text-[10px] uppercase tracking-[0.35em] text-slate-400"
            >
              AI · Full-Stack · 3D
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="mt-8 font-mono text-[9px] uppercase tracking-[0.25em] text-slate-600"
            >
              Initializing portfolio
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}