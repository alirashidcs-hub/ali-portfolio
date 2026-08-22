import { motion } from 'framer-motion'
import { ExternalLink, BookOpen } from 'lucide-react'
import type { Publication } from '../data/types'

export default function PublicationCard({
  publication,
  delay = 0,
}: {
  publication: Publication
  delay?: number
}) {
  return (
    <motion.a
      href={publication.url}
      target="_blank"
      rel="noreferrer"
      data-cursor-hover
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -4 }}
      className="glass glow-border group relative flex h-full flex-col rounded-2xl p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10">
          <BookOpen size={18} className="text-violet-300" />
        </div>

        <ExternalLink
          size={14}
          className="text-slate-600 transition-colors group-hover:text-sky-300"
        />
      </div>

      <div className="mt-5 flex-1">
        <p className="font-mono text-[10px] uppercase tracking-widest text-sky-300/70">
          {publication.platform} ·{' '}
          {new Date(publication.date).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric',
          })}
        </p>

        <h3 className="mt-2 font-display text-base text-slate-100">
          {publication.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          {publication.description}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {publication.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-700/70 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-sky-300/70">
        Read Article ↗
      </div>
    </motion.a>
  )
}