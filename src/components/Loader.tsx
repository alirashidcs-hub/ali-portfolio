import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="status"
          aria-label="Loading portfolio"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050816]"
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
              letterSpacing: '0.35em',
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            className="font-display text-sm uppercase text-sky-300"
          >
            Ali Rashid
          </motion.div>

          {/* Loading Bar */}
          <div
            aria-hidden="true"
            className="mt-6 h-[2px] w-40 overflow-hidden rounded-full bg-slate-800"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-4 font-mono text-[9px] uppercase tracking-[0.3em] text-slate-600"
          >
            Initializing experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}