import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-xs uppercase tracking-[0.35em] text-sky-300/80"
      >
        Error 404
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="mt-4 font-display text-6xl font-semibold text-gradient sm:text-8xl"
      >
        Page not found
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16 }}
        className="mt-4 max-w-md text-sm text-slate-400"
      >
        The page you're looking for doesn't exist or has moved.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.24 }}
      >
        <Link
          data-cursor-hover
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-medium text-slate-950"
        >
          <Home size={15} /> Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
