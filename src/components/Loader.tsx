import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-[#050816]"
        >
          <motion.div
            initial={{ letterSpacing: '0.1em', opacity: 0.4 }}
            animate={{ letterSpacing: '0.35em', opacity: 1 }}
            transition={{ duration: 1.4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            className="font-display text-sm uppercase text-sky-300"
          >
            Ali Rashid
          </motion.div>
          <div className="mt-6 h-[2px] w-40 overflow-hidden rounded-full bg-slate-800">
            <motion.div
              className="h-full w-1/3 bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-400"
              animate={{ x: ['-100%', '220%'] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
