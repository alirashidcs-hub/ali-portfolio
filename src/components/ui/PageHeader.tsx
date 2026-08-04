import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function PageHeader({
  eyebrow,
  title,
  highlight,
  description,
  action,
}: {
  eyebrow: string
  title: string
  highlight: string
  description?: string
  action?: ReactNode
}) {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-4 pt-32">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-xs uppercase tracking-[0.35em] text-sky-300/80"
      >
        {eyebrow}
      </motion.p>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="font-display text-3xl font-semibold text-slate-50 sm:text-4xl md:text-5xl"
        >
          {title} <span className="text-gradient">{highlight}</span>
        </motion.h1>
        {action}
      </div>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
          className="mt-4 max-w-xl text-sm text-slate-400"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
