import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Award, ExternalLink } from 'lucide-react'
import type { Certificate } from '../../data/types'

export default function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: Certificate[]
  index: number | null
  onClose: () => void
  onNavigate: (i: number) => void
}) {
  const open = index !== null
  const current = open ? items[index!] : null

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate(((index as number) + 1) % items.length)
      if (e.key === 'ArrowLeft') onNavigate(((index as number) - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, index, items.length, onClose, onNavigate])

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[95] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-10"
        >
          <button
            onClick={onClose}
            aria-label="Close viewer"
            className="absolute right-5 top-5 z-10 text-slate-400 hover:text-white"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              onNavigate((((index as number) - 1) % items.length + items.length) % items.length)
            }}
            aria-label="Previous certificate"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/5 p-2 text-slate-300 hover:bg-white/10 hover:text-white sm:left-8"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onNavigate(((index as number) + 1) % items.length)
            }}
            aria-label="Next certificate"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/5 p-2 text-slate-300 hover:bg-white/10 hover:text-white sm:right-8"
          >
            <ChevronRight size={22} />
          </button>

          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            onClick={(e) => e.stopPropagation()}
            className="glass glow-border flex w-full max-w-lg flex-col items-center rounded-3xl p-10 text-center"
          >
            <div className="flex h-40 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/15 via-violet-500/15 to-cyan-500/15">
              <Award size={56} className="text-violet-300" />
            </div>
            <h3 className="mt-6 font-display text-2xl text-slate-100">{current.title}</h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-sky-300/80">
              {current.issuer}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {current.category} · {new Date(current.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </p>
            {current.description && (
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">{current.description}</p>
            )}
            {current.skillsLearned && current.skillsLearned.length > 0 && (
              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                {current.skillsLearned.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-slate-700/70 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-slate-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
            {current.credentialUrl && (
              <a
                href={current.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex items-center gap-1.5 text-sm text-sky-300 hover:text-sky-200"
              >
                <ExternalLink size={14} /> View credential
              </a>
            )}
            <p className="mt-6 font-mono text-[10px] text-slate-600">
              {(index as number) + 1} / {items.length}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
