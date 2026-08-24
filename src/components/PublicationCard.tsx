import { motion } from 'framer-motion'
import {
  ExternalLink,
  BookOpen,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'
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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        delay,
        duration: 0.55,
        ease: 'easeOut',
      }}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.25,
        },
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/50 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-sky-400/30"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl transition-all duration-500 group-hover:bg-sky-400/20" />

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-400/20" />

      {/* Top row */}
      <div className="relative flex items-start justify-between gap-4">
        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 4,
          }}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 shadow-lg shadow-violet-950/20"
        >
          <BookOpen size={19} className="text-violet-300" />
        </motion.div>

        <div className="flex items-center gap-2">
          {publication.featured && (
            <span className="flex items-center gap-1 rounded-full border border-sky-400/30 bg-sky-400/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-sky-300">
              <Sparkles size={9} />
              Featured
            </span>
          )}

          <motion.div
            whileHover={{
              scale: 1.15,
              rotate: 8,
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-900/70"
          >
            <ExternalLink
              size={14}
              className="text-slate-500 transition-colors duration-300 group-hover:text-sky-300"
            />
          </motion.div>
        </div>
      </div>

      {/* Publication metadata */}
      <div className="relative mt-6">
        <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em]">
          <span className="text-sky-300/80">
            {publication.platform}
          </span>

          <span className="text-slate-700">•</span>

          <span className="text-slate-500">
            {new Date(publication.date).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
            })}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-3 font-display text-lg font-medium leading-snug text-slate-100 transition-colors duration-300 group-hover:text-white sm:text-xl">
          {publication.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-slate-400">
          {publication.description}
        </p>
      </div>

      {/* Category */}
      <div className="relative mt-5">
        <span className="rounded-full border border-violet-400/20 bg-violet-400/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-violet-300/80">
          {publication.category}
        </span>
      </div>

      {/* Tags */}
      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {publication.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-800 bg-slate-900/60 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wide text-slate-500 transition-colors duration-300 group-hover:border-slate-700 group-hover:text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="relative mt-auto pt-6">
        <div className="h-px w-full bg-gradient-to-r from-slate-800 via-slate-700/60 to-transparent" />

        <div className="mt-4 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-sky-300/70 transition-colors duration-300 group-hover:text-sky-300">
            Read Article
          </span>

          <motion.span
            initial={{ x: 0, y: 0 }}
            whileHover={{ x: 3, y: -3 }}
            className="text-sky-300"
          >
            <ArrowUpRight size={16} />
          </motion.span>
        </div>
      </div>

      {/* Bottom hover line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
    </motion.a>
  )
}