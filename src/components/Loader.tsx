import { motion, AnimatePresence } from 'framer-motion'

interface LoaderProps {
  show: boolean
}

export default function Loader({ show }: LoaderProps) {
  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] flex min-h-dvh flex-col items-center justify-center bg-[#050816] px-6"
        >
          {/* Brand */}
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
              letterSpacing: '0.15em',
            }}
            animate={{
              opacity: 1,
              y: 0,
              letterSpacing: '0.3em',
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            className="font-display text-center text-xs font-medium uppercase text-sky-300 sm:text-sm"
          >
            Ali Rashid
          </motion.div>

          {/* Loading Bar */}
          <div
            aria-hidden="true"
            className="mt-6 h-[2px] w-full max-w-[160px] overflow-hidden rounded-full bg-slate-800/80 sm:max-w-40"
          >
            <motion.div
              className="h-full w-1/3 rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-400"
              animate={{
                x: ['-120%', '320%'],
              }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.5,
              ease: 'easeOut',
            }}
            className="mt-4 text-center font-mono text-[8px] uppercase tracking-[0.25em] text-slate-600 sm:text-[9px] sm:tracking-[0.3em]"
          >
            Initializing experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}