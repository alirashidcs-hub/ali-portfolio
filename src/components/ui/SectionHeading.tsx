import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  action,
  align = 'left',
}: {
  eyebrow: string
  title: string
  highlight: string
  description?: string
  action?: ReactNode
  align?: 'left' | 'center'
}) {
  const isCenter = align === 'center'
  return (
    <div className={isCenter ? 'text-center' : ''}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.35em] text-sky-300/80"
      >
        {eyebrow}
      </motion.p>
      <div className={`mt-3 flex flex-wrap items-end gap-6 ${isCenter ? 'justify-center' : 'justify-between'}`}>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="font-display text-3xl font-semibold text-slate-50 sm:text-4xl"
        >
          {title} <span className="text-gradient">{highlight}</span>
        </motion.h2>
        {action}
      </div>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className={`mt-4 max-w-xl text-sm text-slate-400 ${isCenter ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
